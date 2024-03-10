import type { InputHTMLAttributes } from 'vue';

export interface BaseCheckboxItem {
	value: boolean;
	label: string;
	name: string;
}

export interface BaseCheckboxProps extends /* @vue-ignore */ InputHTMLAttributes {
	modelValue: string | number;
	label?: string;
	name: string;
	format?: 'row' | 'column';
	isToggle?: boolean;
	checkboxData?: BaseCheckboxItem[];
}
