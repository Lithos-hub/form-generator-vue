import type { InputHTMLAttributes } from 'vue';

export interface BaseCheckboxItem {
	value: boolean;
	label: string;
	name: string;
}

export interface BaseCheckboxProps extends /* @vue-ignore */ InputHTMLAttributes {
	initialValue: boolean;
	name: string;
	label?: string;
	format?: 'row' | 'column';
	isToggle?: boolean;
	checkboxData?: BaseCheckboxItem[];
	modelValue?: boolean;
	customStyles?: string;
}
