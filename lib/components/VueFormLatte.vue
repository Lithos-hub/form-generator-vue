<template>
	<form
		ref="formRef"
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
		validateOnSubmit: true,
	},
);

const emit = defineEmits(['submit']);

const model = ref<VueFormLatteModel>({});
const formRef = ref<HTMLFormElement | null>(null);
const validationError = ref<Record<string, string>>({});

const onSubmit = async () => {
	try {
		await onValidate();
	} catch (error) {
		throw new Error('FORM_SUBMIT_ERROR', error as ErrorOptions);
	} finally {
		emit('submit', {
			values: { ...model.value },
			errors: { ...validationError.value },
		});
	}
};

const onValidate = async () => {
	try {
		await schema.validate(model.value, { abortEarly: false });
		validationError.value = {};
	} catch (error) {
		if (error instanceof ValidationError) {
			validationError.value = error.inner.reduce(
				(acc, { path, message }) => ({ ...acc, [path as string]: message }),
				{},
			);
		}
	}
};

onMounted(() => {
	components.forEach(({ props }) => (model.value[props.name] = props.initialValue));
	initFlowbite();
});

watch(
	model,
	() => {
		if (validateOnSubmit) return;
		onValidate();
	},
	{ deep: true },
);

defineExpose({ formRef, model, onSubmit });
</script>
