<template>
	<form
		class="gap-5"
		:class="{
			'grid grid-cols-12': format === 'grid',
			'flex flex-col': format === 'column',
		}"
		@submit.prevent="$emit('submit')">
		<div
			v-for="({ componentType, customComponent, colspan, props }, i) of components"
			:key="i"
			:class="`col-span-${colspan || 12} self-center`">
			<component
				:is="customComponent || componentOptions['input']"
				v-if="componentType === 'input'"
				:key="renderKey"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions['select']"
				v-if="componentType === 'select'"
				:key="renderKey"
				:value="model[props.name]"
				v-bind="props"
				@on-select="onSelect(props.name, $event)" />
			<component
				:is="customComponent || componentOptions['textarea']"
				v-if="componentType === 'textarea'"
				:key="renderKey"
				v-model="model[props.name]"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions['radio']"
				v-if="componentType === 'radio'"
				:key="renderKey"
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

defineEmits(['submit']);

const model = ref<VueFormLatte>({});

const renderKey = ref(0);

const onSelect = (name: string, value: string | number) => {
	model.value[name] = value;
};

onMounted(() => {
	components.forEach(({ props }) => (model.value[props.name] = props.initialValue));
	initFlowbite();
});

defineExpose({ model });
</script>
