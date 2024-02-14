<template>
	<div>
		<label v-if="label" :for="name">
			{{ label }}
		</label>
		<textarea v-model="model" v-bind="$attrs" />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { BaseTextareaProps } from './BaseTextarea.interfaces';

const { modelValue } = defineProps<BaseTextareaProps>();

const model = defineModel<string | number>();

onMounted(() => {
	model.value = modelValue;
});
</script>
