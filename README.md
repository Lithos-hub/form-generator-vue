# Vue Form Latte (Under development)

[![npm](https://img.shields.io/npm/v/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/dt/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/l/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/types/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/bundlephobia/min/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/bundlephobia/minzip/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)

Vue Form Latte is a form generator framework for Vue 3. It is designed to be a flexible and powerful tool for building forms with Vue 3, TypeScript and Tailwind CSS.

## Features

- **Simple**: Vue Form Latte is designed to be simple and easy to use. It is built on top of Vue 3, TypeScript and Tailwind CSS.
- **Flexible**: Vue Form Latte is designed to be flexible and powerful. It provides a wide range of form elements and validation rules.
- **Customizable**: Vue Form Latte is designed to be customizable. It provides a wide range of form elements and validation rules.

## Installation

```bash
npm install vue-form-latte
```

## Usage

```vue
<template>
	<VueFormLatte format="grid" :components="components" @submit="onSubmit" />
</template>

<script setup lang="ts">
const components: VueFormLatteItem[] = [
	{
		componentType: 'input',
		name: 'userName',
		colspan: 6,
		props: {
			initialValue: 'Input value',
			placeholder: 'Input placeholder',
			label: 'Default input label',
		},
	},
	{
		componentType: 'input',
		customComponent: CustomInput,
		name: 'Lastname',
		colspan: 6,
		props: {
			initialValue: 'Input value',
			placeholder: 'Custom input placeholder',
			label: 'Custom input label',
		},
	},
	{
		componentType: 'select',
		name: 'userCountry',
		colspan: 4,
		props: {
			initialValue: 'us',
			label: 'Select label',
			options: [
				{ value: 'us', label: 'United States' },
				{ value: 'mx', label: 'Mexico' },
				{ value: 'ca', label: 'Canada' },
			],
		},
	},
	{
		componentType: 'textarea',
		name: 'userBio',
		colspan: 8,
		props: {
			initialValue: 'This is the textarea value',
			label: 'Textarea label',
			placeholder: 'Textarea placeholder',
		},
	},
];
</script>
```
