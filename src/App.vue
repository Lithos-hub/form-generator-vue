<template>
	<div class="bg-stone-100 h-screen flex flex-col justify-center items-center">
		<div class="bg-white p-5 rounded shadow-xl w-[75vw]">
			<VueFormLatte ref="formRef" format="grid" :components="components" @submit="onSubmit" />
			<hr class="my-10" />
			<strong>Form values:</strong>
			<pre class="bg-[#101010] text-green-500 rounded p-2">{{ formValues }}</pre>
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
			name: 'userName',
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
			name: 'Lastname',
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
			name: 'Lastname',
			initialValue: 'Input value',
			placeholder: 'Custom input placeholder',
			label: 'Default input with custom styles',
		},
	},
	{
		componentType: 'select',
		colspan: 6,
		props: {
			name: 'userCountry',
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
			name: 'userBio',
			initialValue: 'This is the textarea value',
			label: 'Textarea label',
			placeholder: 'Textarea placeholder',
		},
	},
	{
		componentType: 'radio',
		colspan: 4,
		props: {
			name: 'userRadio',
			initialValue: 'one',
			label: 'Radio label',
			radioData: [
				{ value: 'one', label: 'One', name: 'one' },
				{ value: 'two', label: 'Two', name: 'two' },
				{ value: 'three', label: 'Three', name: 'three' },
			],
		},
	},
];

const onSubmit = () => alert('Form submitted!');
</script>
