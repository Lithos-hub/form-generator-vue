import type { InputHTMLAttributes } from 'vue';

export interface BaseRadioItem {
	value: string;
	label: string;
	name: string;
}

export interface BaseRadioProps extends /* @vue-ignore */ InputHTMLAttributes {
	initialValue: string | number;
	name: string;
	radioData: BaseRadioItem[];
	label?: string;
	format?: 'row' | 'column';
	modelValue?: string | number;
	customStyles?: string;
}
