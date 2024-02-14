// import { FormType } from "./VueFormLatte.const";
import { BaseRadioItem } from './components/BaseRadio.interfaces';
import { BaseSelectItem } from './components/BaseSelect.interfaces';

interface FormComponentProps {
	customStyles?: string;
	name: string;
	initialValue: unknown;
	placeholder?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	selectData?: BaseSelectItem[];
	radioData?: BaseRadioItem[];
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
