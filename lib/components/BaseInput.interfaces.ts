import type { InputHTMLAttributes } from 'vue';

export interface BaseInputProps extends /* @vue-ignore */ InputHTMLAttributes {
	initialValue: string | number;
	name: string;
	customStyles?: string;
	label?: string;
	modelValue?: string | number;
}
