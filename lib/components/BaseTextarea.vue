<template>
	<div>
		<label v-if="label" :for="name" class="default__label">
			{{ label }}
		</label>
		<textarea v-model="model" v-bind="$attrs" :class="customStyles || 'default__textarea'" />
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
