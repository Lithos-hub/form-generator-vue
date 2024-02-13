<template>
	<div>
		<label v-if="label" class="block text-sm font-light mb-1 font-medium">{{ label }}</label>
		<textarea class="textarea" v-bind="$attrs" />
	</div>
</template>

<script setup lang="ts">
import { BaseTextareaProps } from './BaseTextarea.interfaces';

defineProps<BaseTextareaProps>();
</script>

<style scoped>
.textarea {
	@apply w-full p-2 transition-all duration-75 border rounded outline-none font-light focus:ring-2;
}
</style>
