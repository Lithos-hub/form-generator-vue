<template>
	<form
		class="gap-5"
		:class="{
			'grid grid-cols-12': format === 'grid',
			'flex flex-col': format === 'column',
		}"
		@blur.prevent="validateOnBlur && onValidate"
		@submit.prevent="onSubmit">
		<div
			v-for="({ componentType, customComponent, colspan, props }, i) of components"
			:key="i"
			:style="{
				'grid-column': format === 'grid' ? `span ${colspan || 12}` : 'none',
				'align-self': format === 'grid' ? 'start' : 'none',
			}">
			<component
				:is="customComponent || componentOptions[componentType as keyof typeof componentOptions]"
				v-model="model[props.name]"
				v-bind="props" />
			<small v-if="validationError[props.name]" class="text-red-500">
				{{ validationError[props.name] }}
			</small>
		</div>
	</form>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { VueFormLatteProps, VueFormLatteModel } from '../types';
import { componentOptions } from './VueFormLatte.const';
import { initFlowbite } from 'flowbite';
import { ValidationError } from 'yup';

const { components, schema, validateOnSubmit, validateOnBlur } = withDefaults(
	defineProps<VueFormLatteProps>(),
	{
		format: 'column',
	},
);

const emit = defineEmits(['submit']);

const model = ref<VueFormLatteModel>({});

const validationError = ref<Record<string, string>>({});

const onSubmit = async () => {
	if (validateOnSubmit) {
		try {
			await onValidate();
		} catch (error) {
			throw new Error('FORM_SUBMIT_ERROR');
		} finally {
			emit('submit', {
				values: model.value,
				errors: validationError.value,
			});
		}
	}
};

onMounted(() => {
	components.forEach(({ props }) => (model.value[props.name] = props.initialValue));
	initFlowbite();
});

const onValidate = async () => {
	try {
		await schema.validate(model.value);
	} catch (error) {
		if (error instanceof ValidationError) {
			const fieldName = error.path as string;
			const message = error.message as string;
			validationError.value = {
				[fieldName]: message,
			};
			throw new Error('FORM_VALIDATION_ERROR');
		}
	}
};

watch(
	model,
	() => {
		if (validateOnSubmit) return;
		onValidate();
	},
	{ deep: true },
);

defineExpose({ model, onSubmit });
</script>
