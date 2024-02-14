<template>
	<div class="bg-stone-100 h-screen flex flex-col justify-center items-center">
		<div class="w-[1000px] bg-white p-5 rounded shadow-xl">
			<VueFormLatte format="grid" :components="components" @submit="onSubmit" />
		</div>
	</div>
</template>

<script setup lang="ts">
import VueFormLatte from './lib/VueFormLatte.vue';
import { VueFormLatteItem } from './lib/VueFormLatte.interfaces';
import CustomInput from './CustomInput.vue';

const components: VueFormLatteItem[] = [
	{
		componentType: 'input',
		colspan: 6,
		props: {
			name: 'userName',
			initialValue: 'Input value',
			placeholder: 'Input placeholder',
			label: 'Default input label',
		},
	},
	{
		componentType: 'input',
		customComponent: CustomInput,
		colspan: 6,
		props: {
			name: 'Lastname',
			initialValue: 'Input value',
			placeholder: 'Custom input placeholder',
			label: 'Custom input label',
		},
	},
	{
		componentType: 'select',
		colspan: 4,
		props: {
			name: 'userCountry',
			initialValue: 'us',
			label: 'Select label',
			data: [
				{ value: 'us', label: 'United States' },
				{ value: 'mx', label: 'Mexico' },
				{ value: 'ca', label: 'Canada' },
			],
		},
	},
	{
		componentType: 'textarea',
		colspan: 8,
		props: {
			name: 'userBio',
			initialValue: 'This is the textarea value',
			label: 'Textarea label',
			placeholder: 'Textarea placeholder',
		},
	},
];

const onSubmit = () => alert('Form submitted!');
</script>
