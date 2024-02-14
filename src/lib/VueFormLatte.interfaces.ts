// import { FormType } from "./VueFormLatte.const";
import { BaseSelectItem } from './components/BaseSelect.interfaces';

interface FormComponentProps {
	name: string;
	initialValue: unknown;
	placeholder?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	data?: BaseSelectItem[];
}
export interface VueFormLatteItem {
	componentType: string;
	customComponent?: unknown;
	colspan?: number | string;
	props: FormComponentProps;
}

export interface VueFormLatteProps {
	dark?: boolean;
	format?: 'grid' | 'column';
	components: VueFormLatteItem[];
}

export interface VueFormLatte {
	[key: string]: FormComponentProps['initialValue'];
}
