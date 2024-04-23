import type { SelectHTMLAttributes } from 'vue';

export interface BaseMultiselectItem {
	value: string | number | boolean;
	label: string;
}

export interface BaseMultiselectProps extends /* @vue-ignore */ SelectHTMLAttributes {
	initialValue: string[] | number[];
	multiselectData: BaseMultiselectItem[] | [];
	name: string;
	placeholder?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	modelValue?: string | number;
	customStyles?: string;
}
