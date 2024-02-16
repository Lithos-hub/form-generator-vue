// import { FormType } from "./VueFormLatte.const";
import { Schema } from 'yup';
import { BaseCheckboxItem } from './components/BaseCheckbox.interfaces';
import { BaseMultiselectItem } from './components/BaseMultiselect.interfaces';
import { BaseRadioItem } from './components/BaseRadio.interfaces';
import { BaseSelectItem } from './components/BaseSelect.interfaces';

type InputType =
	| 'text'
	| 'password'
	| 'email'
	| 'number'
	| 'tel'
	| 'url'
	| 'date'
	| 'time'
	| 'datetime-local'
	| 'month'
	| 'week'
	| 'color'
	| 'file'
	| 'hidden';

interface FormComponentProps {
	customStyles?: string;
	name: string;
	type?: InputType;
	initialValue?: unknown;
	placeholder?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	isToggle?: boolean;
	minLength?: number;
	selectData?: BaseSelectItem[];
	multiselectData?: BaseMultiselectItem[];
	radioData?: BaseRadioItem[];
	checkboxData?: BaseCheckboxItem[];
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
	schema?: Schema;
	validateOnSubmit?: boolean;
	components: VueFormLatteItem[];
}

export interface VueFormLatte {
	[key: string]: FormComponentProps['initialValue'];
}
