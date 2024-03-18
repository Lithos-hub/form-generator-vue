import type { TextareaHTMLAttributes } from 'vue';

export interface BaseTextareaProps extends /* @vue-ignore */ TextareaHTMLAttributes {
	initialValue: string;
	name: string;
	label?: string;
	modelValue?: string;
}
