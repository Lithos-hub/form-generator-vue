import type { InputHTMLAttributes } from 'vue';

export interface BaseSliderProps extends /* @vue-ignore */ InputHTMLAttributes {
	initialValue: string | number;
	name: string;
	customStyles?: string;
	label?: string;
	modelValue?: string | number;
}
