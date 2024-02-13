# Vue Form Latte (WIP)

<div id="header" align="center">
<img src='public/logo.png' width='200' />

<hr />

[![npm](https://img.shields.io/npm/v/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/dt/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/l/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)

[![npm](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.npmjs.com/package/vue-form-latte)

</div>

Vue Form Latte is a form generator framework for Vue 3. It is designed to be a flexible and powerful tool for building forms with Vue 3, TypeScript and Tailwind CSS.

## Features

TODO

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
