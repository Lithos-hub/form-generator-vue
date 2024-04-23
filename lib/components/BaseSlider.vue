<template>
	<div data-testid="slider">
		<label v-if="label" :for="name" class="default__label">{{ label }}</label>
		<input
			:id="name"
			v-model="model"
			data-testid="slider__input"
			type="range"
			:class="customStyles || 'slider__input'" />
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
