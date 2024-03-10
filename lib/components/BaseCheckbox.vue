<template>
	<label class="flex items-center mb-4 cursor-pointer">
		<input
			:id="name"
			v-model="model"
			type="checkbox"
			class="checkbox__input"
			:class="{
				'hidden sr-only peer': isToggle,
			}" />
		<div
			v-if="isToggle"
			class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>

		<span v-if="label" :for="name" class="checkbox__label">{{ label }}</span>
	</label>
</template>

<script setup lang="ts">
import { BaseCheckboxProps } from './BaseCheckbox.interfaces';

withDefaults(defineProps<BaseCheckboxProps>(), {
	format: 'row',
});

const model = defineModel<string>();
</script>
