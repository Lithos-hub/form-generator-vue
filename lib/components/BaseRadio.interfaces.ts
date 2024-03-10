import type { InputHTMLAttributes } from 'vue';

export interface BaseRadioItem {
	value: string;
	label: string;
	name: string;
}

export interface BaseRadioProps extends /* @vue-ignore */ InputHTMLAttributes {
	modelValue: string | number;
	label?: string;
	name: string;
	format?: 'row' | 'column';
	radioData: BaseRadioItem[];
}
