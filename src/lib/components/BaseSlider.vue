<template>
	<div data-testid="slider">
		<label v-if="label" :for="name" class="default__label">{{ label }}</label>
		<input
			id="default-range"
			v-model="model"
			type="range"
			class="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer dark:bg-indigo-700" />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { BaseSliderProps } from './BaseSlider.interfaces';

const { modelValue } = defineProps<BaseSliderProps>();

const model = defineModel<string | number>();

onMounted(() => {
	model.value = modelValue;
});
</script>
