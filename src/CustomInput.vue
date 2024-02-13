<template>
	<div>
		<label v-if="label" class="block text-sm font-light mb-1 font-medium">{{ label }}</label>
		<input class="input" v-bind="$attrs" />
	</div>
</template>

<script setup lang="ts">
import { CustomInputProps } from './CustomInput.interfaces';

defineProps<CustomInputProps>();
</script>

<style scoped>
.input {
	@apply w-full p-3 transition-all duration-75 border-2 rounded-full outline-none focus:ring-2;
}
</style>
