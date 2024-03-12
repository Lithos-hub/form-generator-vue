<template>
	<div class="bg-stone-100 h-screen flex flex-col justify-center items-center">
		<div class="bg-white p-5 rounded shadow-xl w-[75vw] max-h-[90vh] overflow-auto">
			<VueFormLatte
				ref="formRef"
				format="grid"
				:components="components"
				:schema="schema"
				validate-on-submit
				@submit="onSubmit" />
			<button
				class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
				@click="submitForm">
				Submit form
			</button>
			<hr class="my-10" />
			<strong>Form values:</strong>
			<pre class="bg-[#34495E] text-[#41B883] rounded p-2 font-sans max-h-[300px] overflow-auto">{{
				formRef?.model
			}}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import VueFormLatte from '../lib/VueFormLatte.vue';
import { FormComponentProps, VueFormLatteItem } from '../lib/types';
import CustomInput from './CustomInput.vue';
import { ref } from 'vue';
import * as Yup from 'yup';

const formRef = ref<InstanceType<typeof VueFormLatte>>();

const schema = Yup.object({
	defaultInput: Yup.string()
		.required('This field must be not empty')
		.min(8, 'You have to write at least 8 characters'),
	customInput: Yup.string().required().min(8),
	defaultStyledInput: Yup.string().required().min(8),
	defaultSelect: Yup.string().required(),
	defaultMultiselect: Yup.array().min(1),
	defaultTextarea: Yup.string().required().min(16),
	defaultRadio: Yup.string().required(),
	defaultCheckbox: Yup.boolean().required(),
	defaultCheckboxToggle: Yup.boolean().required(),
});

const components: VueFormLatteItem[] = [
	{
		componentType: 'input',
		colspan: 4,
		props: {
			name: 'defaultInput',
			initialValue: 'Input value',
			placeholder: 'Input placeholder',
			label: 'Default input',
		} as FormComponentProps['input'],
	},
	{
		componentType: 'input',
		customComponent: CustomInput,
		colspan: 4,
		props: {
			name: 'customInput',
			initialValue: 'Input value',
			placeholder: 'Custom input placeholder',
			label: 'Custom component input',
		} as FormComponentProps['input'],
	},
	{
		componentType: 'input',
		colspan: 4,
		props: {
			customStyles:
				'p-3 shadow-xl w-full bg-slate-100 border-b-2 outline-none border-cyan-900 caret-[#202020] text-[#101010]',
			name: 'defaultStyledInput',
			initialValue: 'Input value',
			placeholder: 'Custom input placeholder',
			label: 'Default input with custom styles',
		} as FormComponentProps['input'],
	},
	{
		componentType: 'select',
		colspan: 6,
		props: {
			name: 'defaultSelect',
			initialValue: 'us',
			label: 'Select label',
			selectData: [
				{ value: 'us', label: 'United States' },
				{ value: 'mx', label: 'Mexico' },
				{ value: 'ca', label: 'Canada' },
			],
		} as FormComponentProps['select'],
	},
	{
		componentType: 'multiselect',
		colspan: 6,
		props: {
			name: 'defaultMultiselect',
			initialValue: ['us', 'mx'],
			label: 'Multiselect label',
			placeholder: 'Multiselect placeholder',
			multiselectData: [
				{ value: 'us', label: '🇺🇸 United States' },
				{ value: 'mx', label: '🇲🇽 Mexico' },
				{ value: 'ca', label: '🇨🇦 Canada' },
				{ value: 'br', label: '🇧🇷 Brazil' },
				{ value: 'ar', label: '🇦🇷 Argentina' },
				{ value: 'co', label: '🇨🇴 Colombia' },
				{ value: 'pe', label: '🇵🇪 Peru' },
				{ value: 've', label: '🇻🇪 Venezuela' },
				{ value: 'cl', label: '🇨🇱 Chile' },
				{ value: 'ec', label: '🇪🇨 Ecuador' },
				{ value: 'gt', label: '🇬🇹 Guatemala' },
				{ value: 'cu', label: '🇨🇺 Cuba' },
				{ value: 'do', label: '🇩🇴 Dominican Republic' },
				{ value: 'hn', label: '🇭🇳 Honduras' },
				{ value: 'ni', label: '🇳🇮 Nicaragua' },
				{ value: 'cr', label: '🇨🇷 Costa Rica' },
				{ value: 'pa', label: '🇵🇦 Panama' },
				{ value: 'jm', label: '🇯🇲 Jamaica' },
				{ value: 'bs', label: '🇧🇸 Bahamas' },
				{ value: 'bb', label: '🇧🇧 Barbados' },
			],
		} as FormComponentProps['multiselect'],
	},
	{
		componentType: 'textarea',
		colspan: 6,
		props: {
			name: 'defaultTextarea',
			initialValue: 'Some text',
			label: 'Textarea label',
			placeholder: 'Textarea placeholder',
			minLength: 16,
		} as FormComponentProps['textarea'],
	},
	{
		componentType: 'radio',
		colspan: 3,
		props: {
			name: 'defaultRadio',
			initialValue: 'one',
			label: 'Radio label',
			radioData: [
				{ value: 'one', label: 'One', name: 'one' },
				{ value: 'two', label: 'Two', name: 'two' },
				{ value: 'three', label: 'Three', name: 'three' },
			],
		} as FormComponentProps['radio'],
	},
	{
		componentType: 'checkbox',
		colspan: 3,
		props: {
			name: 'defaultCheckbox',
			initialValue: true,
			label: 'Single checkbox label',
		} as FormComponentProps['checkbox'],
	},
	{
		componentType: 'checkbox',
		colspan: 3,
		props: {
			isToggle: true,
			name: 'defaultCheckboxToggle',
			initialValue: true,
			label: 'Single toggle label',
		} as FormComponentProps['checkbox'],
	},
	{
		componentType: 'slider',
		colspan: 3,
		props: {
			name: 'defaultSlider',
			initialValue: 50,
			label: 'Slider label',
			min: 0,
			max: 100,
			step: 1,
		} as FormComponentProps['slider'],
	},
];

const submitForm = () => formRef.value?.onSubmit();

const onSubmit = () => alert('Form submitted!');
</script>
