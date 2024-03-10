import type { SelectHTMLAttributes } from 'vue';

export interface BaseMultiselectItem {
	value: string | number | boolean;
	label: string;
}

export interface BaseMultiselectProps extends /* @vue-ignore */ SelectHTMLAttributes {
	modelValue: string | number;
	initialValue: string[] | number[];
	multiselectData: BaseMultiselectItem[] | [];
	name: string;
	value: string | number;
	placeholder?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
}