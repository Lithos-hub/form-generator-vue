<template>
	<div
		:class="{
			'flex flex-row gap-2.5': format === 'row',
			'flex flex-col gap-2.5': format === 'column',
		}">
		<div v-for="{ label, value, name } of radioData" :key="label" class="flex items-center">
			<input
				:id="value"
				v-model="model"
				:name="name"
				type="radio"
				:value="value"
				class="radio__input" />
			<label :for="value" class="radio__label">{{ label }}</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BaseRadioProps } from './BaseRadio.interfaces';

withDefaults(defineProps<BaseRadioProps>(), {
	format: 'row',
});

const model = defineModel<string>();
</script>
