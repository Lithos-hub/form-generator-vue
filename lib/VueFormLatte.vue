<template>
	<form
		class="gap-5"
		:class="{
			'grid grid-cols-12': format === 'grid',
			'flex flex-col': format === 'column',
		}"
		@submit.prevent="onSubmit">
		<div
			v-for="({ componentType, customComponent, colspan, props }, i) of components"
			:key="i"
			:class="`col-span-${colspan || 12} self-start`">
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
import { VueFormLatteProps, IVueFormLatte } from './VueFormLatte.interfaces';
import { componentOptions } from './VueFormLatte.const';
import { initFlowbite } from 'flowbite';
import { ValidationError } from 'yup';

const { components, schema, validateOnSubmit } = withDefaults(defineProps<VueFormLatteProps>(), {
	format: 'column',
});

const emit = defineEmits(['submit']);

const model = ref<IVueFormLatte>({});

const validationError = ref<Record<string, string>>({});

const onSubmit = async () => {
	if (validateOnSubmit) {
		try {
			await onValidate(model.value);
			validationError.value = {};
			emit('submit', model.value);
		} catch (error) {
			console.log('Error on submit', error);
		}
	}
};

onMounted(() => {
	components.forEach(({ props }) => (model.value[props.name] = props.initialValue));
	initFlowbite();
});

const onValidate = async (values: IVueFormLatte) => {
	try {
		await schema.validate(values);
	} catch (error) {
		if (error instanceof ValidationError) {
			const fieldName = error.path as string;
			const message = error.message as string;
			validationError.value = {
				[fieldName]: message,
			};
			throw new Error('Validation error');
		}
	}
};

watch(
	model,
	(value) => {
		if (validateOnSubmit) return;
		onValidate(value);
	},
	{ deep: true },
);

defineExpose({ model, onSubmit });
</script>
