<template>
	<div class="relative">
		<Teleport to="body">
			<div v-if="isSelecting" class="fixed inset-0 z-0" @click="isSelecting = false"></div>
		</Teleport>

		<label v-if="label" :for="name">{{ label }}</label>

		<div class="relative">
			<input
				:value="data?.find((option) => option.value === value)?.label || 'Select an option'"
				readonly
				data-testid="base-select__input"
				@focus="isSelecting = true" />
		</div>
		<ul
			v-if="isSelecting"
			class="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-50">
			<li
				v-for="{ label, value } in data"
				:key="value"
				class="p-2 hover:bg-indigo-100 cursor-pointer first:rounded-t-md last:rounded-b-md"
				@click="onSelectItem(value)">
				<small>{{ label }}</small>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BaseSelectProps } from './BaseSelect.interfaces';

defineProps<BaseSelectProps>();

const emit = defineEmits(['on-select']);

const isSelecting = ref(false);

const onSelectItem = (value: string | number) => {
	isSelecting.value = false;
	emit('on-select', value);
};
</script>
