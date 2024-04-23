<template>
	<div class="relative">
		<!-- Overlay to handle open/close actions -->
		<Teleport to="body">
			<div v-if="isSelecting" class="fixed inset-0 z-0" @click="isSelecting = false"></div>
		</Teleport>

		<label v-if="label" :for="name" class="default__label">{{ label }}</label>

		<div class="relative overflow-auto">
			<input
				:id="name"
				readonly
				data-testid="base-select__input"
				:placeholder="selectedItems.length ? '' : placeholder"
				:class="customStyles || 'default__input'"
				@focus="isSelecting = true" />
			<ChevronDownIcon
				class="h-5 w-auto absolute right-2.5 top-1/2 -translate-y-1/2 text-black/50 duration-200"
				:class="{
					'rotate-180': isSelecting,
				}" />
			<!-- Chips -->
			<ul
				v-if="selectedItems.length < 5"
				class="absolute top-1/2 left-2.5 -translate-y-1/2 flex flex-wrap w-auto gap-1 text-center">
				<li
					v-for="({ label, value }, i) of selectedItems"
					:key="i"
					data-testid="base-dropdown__chip"
					class="multiselect__chip"
					@close="addOrRemoveItem(String(value))">
					<small>{{ label }}</small>
				</li>
			</ul>
			<small v-else class="absolute top-1/2 left-2.5 -translate-y-1/2 text-indigo-500">
				{{ selectedItems.length }} items selected
			</small>
		</div>

		<!-- Options list -->
		<ul
			v-if="isSelecting"
			class="absolute max-h-[250px] overflow-auto bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-50">
			<li
				v-for="({ label, value }, i) of multiselectData"
				:key="i"
				data-testid="base-dropdown__list-item"
				class="p-2 hover:bg-indigo-100 cursor-pointer first:rounded-t-md last:rounded-b-md flex gap-2.5"
				@click="addOrRemoveItem(value)">
				<input
					v-model="model"
					type="checkbox"
					:value="value"
					class="w-4 h-4 text-indigo-600 bg-dark border-dark rounded hover:bg-indigo-100" />

				<small>{{ label }}</small>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, Ref } from 'vue';
import { BaseMultiselectProps } from './BaseMultiselect.interfaces';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

const { multiselectData, initialValue } = defineProps<BaseMultiselectProps>();

const model = defineModel<unknown[]>();

const isSelecting: Ref<boolean> = ref(false);

const selectedItems = computed(() =>
	multiselectData.filter(({ value }) => model.value?.includes(value)),
);

const addOrRemoveItem = (itemValue: unknown) => {
	model.value = model.value?.includes(itemValue)
		? model.value?.filter((value) => value !== itemValue)
		: [...(model.value as string[]), itemValue];
};

onMounted(() => (model.value = initialValue));
</script>

<style scoped>
.multiselect__chip {
	@apply rounded bg-indigo-500 text-white px-2 py-1;
}
</style>
