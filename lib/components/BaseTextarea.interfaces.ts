import type { TextareaHTMLAttributes } from 'vue';

export interface BaseTextareaProps extends /* @vue-ignore */ TextareaHTMLAttributes {
	modelValue: string;
	label?: string;
	name: string;
}
