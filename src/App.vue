<template>
	<div class="bg-stone-100 h-screen flex flex-col justify-center items-center">
		<div class="bg-white p-5 rounded shadow-xl w-[75vw]">
			<VueFormLatte ref="formRef" format="grid" :components="components" @submit="onSubmit" />
			<button
				class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
				@click="submitForm">
				Submit form
			</button>
			<hr class="my-10" />
			<strong>Form values:</strong>
			<pre class="bg-[#34495E] text-[#41B883] rounded p-2 font-sans">{{ formValues }}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import VueFormLatte from './lib/VueFormLatte.vue';
import { VueFormLatteItem } from './lib/VueFormLatte.interfaces';
import CustomInput from './CustomInput.vue';
import { computed, ref } from 'vue';

const formRef = ref<InstanceType<typeof VueFormLatte>>();

const formValues = computed(() => formRef.value?.model);

const components: VueFormLatteItem[] = [
	{
		componentType: 'input',
		colspan: 4,
		props: {
			name: 'defaultInput',
			initialValue: 'Input value',
			placeholder: 'Input placeholder',
			label: 'Default input',
		},
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
		},
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
		},
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
		},
	},
	{
		componentType: 'textarea',
		colspan: 6,
		props: {
			name: 'defaultTextarea',
			initialValue: 'This is the textarea value',
			label: 'Textarea label',
			placeholder: 'Textarea placeholder',
		},
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
		},
	},
	{
		componentType: 'checkbox',
		colspan: 3,
		props: {
			name: 'defaultCheckbox',
			initialValue: true,
			label: 'Single checkbox label',
		},
	},
	{
		componentType: 'checkbox',
		colspan: 3,
		props: {
			isToggle: true,
			name: 'defaultCheckboxToggle',
			initialValue: true,
			label: 'Single toggle label',
		},
	},
];

const submitForm = () => formRef.value?.onSubmit();

const onSubmit = () => alert('Form submitted!');
</script>
