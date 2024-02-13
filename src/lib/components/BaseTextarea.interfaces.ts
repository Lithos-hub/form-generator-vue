import type { TextareaHTMLAttributes } from 'vue';

export interface BaseTextareaProps extends /* @vue-ignore */ TextareaHTMLAttributes {
	label?: string;
}
