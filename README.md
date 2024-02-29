# Vue Form Latte

<div id="header" align="center">
<img src='public/logo-v2.png' width='200' />

<hr />

[![npm](https://img.shields.io/npm/v/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/dt/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/npm/l/vue-form-latte)](https://www.npmjs.com/package/vue-form-latte)

[![npm](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)](https://www.npmjs.com/package/vue-form-latte)
[![npm](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.npmjs.com/package/vue-form-latte)

</div>

Vue Form Latte is a form generator library for Vue 3. It is designed to be a flexible and powerful tool for building forms with Vue 3, TypeScript and Tailwind CSS.

## Installation

```bash
npm install vue-form-latte
```

## Features

- **TypeScript Support**: Vue Form Latte is written in TypeScript and provides full support for TypeScript.
- **Tailwind CSS**: Vue Form Latte is designed to work with Tailwind CSS out of the box.
- **Flexible**: Vue Form Latte is designed to be flexible and powerful. It provides a wide range of options for customizing the form and its fields.
- **Validation**: Vue Form Latte provides built-in support for form validation.
- **Custom Fields**: Vue Form Latte allows you to create custom form fields and use them in your forms.

## Usage (v0.1.2)

```vue
<template>
	<VueFormLatte
		ref="formRef"
		format="grid"
		:components="components"
		:schema="schema"
		validate-on-submit
		@submit="onSubmit" />
</template>

<script setup lang="ts">
import { VueFormLatte } from 'vue-form-latte';
import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
});

const components: VueFormLatteItem[] = [
    {
		componentType: 'input',
		colspan: 4,
		props: {
			name: 'name',
			initialValue: '',
			placeholder: 'Write your name',
			label: 'User name',
		},
    },
    {
        componentType: 'input',
        colspan: 4,
        props: {
            name: 'email',
            initialValue: '',
            placeholder: 'Write your email',
            label: 'Email',
        },
    },
];
```
