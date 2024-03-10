import type { SelectHTMLAttributes } from 'vue';

export interface BaseSelectItem {
	value: string | number;
	label: string;
}

export interface BaseSelectProps extends /* @vue-ignore */ SelectHTMLAttributes {
	selectData: BaseSelectItem[] | [];
	name: string;
	value: string | number;
	placeholder?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
}