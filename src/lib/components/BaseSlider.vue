<template>
	<div>
		<input type="range" min="0" max="100" step="1" />
	</div>
</template>

<script setup lang="ts">
import { SliderProps } from './BaseSlider.interfaces';

defineProps<SliderProps>();
</script>
