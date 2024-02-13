<template>
	<form
		class="w-full bg-white p-5 rounded shadow-xl gap-5"
		:class="{
			'grid grid-cols-12': format === 'grid',
			'flex flex-col': format === 'column',
		}"
		@submit.prevent="$emit('submit')">
		<div
			v-for="({ componentType, customComponent, name, colspan, props }, i) of components"
			:key="i"
			:class="`col-span-${colspan || 12}`">
			<component
				:is="customComponent || componentOptions['input']"
				v-if="componentType === 'input'"
				:key="renderKey"
				v-model="model[name]"
				:name="name"
				v-bind="props" />
			<component
				:is="customComponent || componentOptions['select']"
				v-if="componentType === 'select'"
				:key="renderKey"
				:value="model[name]"
				:name="name"
				v-bind="props"
				@on-select="onSelect(name, $event)" />
			<component
				:is="customComponent || componentOptions['textarea']"
				v-if="componentType === 'textarea'"
				:key="renderKey"
				v-model="model[name]"
				:name="name"
				v-bind="props" />
		</div>
	</form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { VueFormLatteProps, VueFormLatte } from './VueFormLatte.interfaces';
import { componentOptions } from './VueFormLatte.const';

const { components } = defineProps<VueFormLatteProps>();
defineEmits(['submit']);

const model = ref<VueFormLatte>({});

const renderKey = ref(0);

const onSelect = (name: string, value: string | number) => {
	model.value[name] = value;
};

onMounted(() => {
	components.forEach(({ name, props }) => (model.value[name] = props.initialValue));
});
</script>
