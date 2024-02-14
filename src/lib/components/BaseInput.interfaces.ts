import type { InputHTMLAttributes } from 'vue';

export interface BaseInputProps extends /* @vue-ignore */ InputHTMLAttributes {
	modelValue: string | number;
	customStyles?: string;
	label?: string;
	name: string;
}
