<template>
	<div class="relative">
		<Teleport to="body">
			<div v-if="isSelecting" class="fixed inset-0 z-0" @click="isSelecting = false"></div>
		</Teleport>

		<label v-if="label" :for="name" class="default__label">{{ label }}</label>

		<div class="relative">
			<input
				:value="selectData?.find((option) => option.value === model)?.label || 'Select an option'"
				readonly
				data-testid="base-select__input"
				class="default__input"
				@focus="isSelecting = true" />
			<ChevronDownIcon
				class="h-5 w-auto absolute right-2.5 top-1/2 -translate-y-1/2 text-black/50 duration-200"
				:class="{
					'rotate-180': isSelecting,
				}" />
		</div>
		<ul
			v-if="isSelecting"
			class="absolute max-h-[250px] overflow-auto bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-50">
			<li
				v-for="{ label, value } in selectData"
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
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

defineProps<BaseSelectProps>();

const model = defineModel<string | number>();

const isSelecting = ref(false);

const onSelectItem = (value: string | number) => {
	isSelecting.value = false;
	model.value = value;
};
</script>
