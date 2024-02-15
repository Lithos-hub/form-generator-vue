<template>
	<form
		class="gap-5"
		:class="{
			'grid grid-cols-12': format === 'grid',
			'flex flex-col': format === 'column',
		}"
		@submit.prevent="onSubmit">
		<div
			v-for="({ componentType, customComponent, colspan, props }, i) of components"
			:key="i"
			:class="`col-span-${colspan || 12} self-start`">
			<component
				:is="customComponent || componentOptions.input"
				v-if="componentType === 'input'"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions.select"
				v-if="componentType === 'select'"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions.multiselect"
				v-if="componentType === 'multiselect'"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions.textarea"
				v-if="componentType === 'textarea'"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions.radio"
				v-if="componentType === 'radio'"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions.checkbox"
				v-if="componentType === 'checkbox'"
				v-model="model[props.name]"
				v-bind="props" />
		</div>
	</form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { VueFormLatteProps, VueFormLatte } from './VueFormLatte.interfaces';
import { componentOptions } from './VueFormLatte.const';
import { initFlowbite } from 'flowbite';

const { components } = withDefaults(defineProps<VueFormLatteProps>(), {
	format: 'column',
});

const emit = defineEmits(['submit']);

const model = ref<VueFormLatte>({});

const onSubmit = () => emit('submit', model.value);

onMounted(() => {
	components.forEach(({ props }) => (model.value[props.name] = props.initialValue));
	initFlowbite();
});

defineExpose({ model, onSubmit });
</script>
