import { Schema } from 'yup';

import { BaseCheckboxProps } from '../components/BaseCheckbox.interfaces';
import { BaseMultiselectProps } from '../components/BaseMultiselect.interfaces';
import { BaseRadioProps } from '../components/BaseRadio.interfaces';
import { BaseSelectProps } from '../components/BaseSelect.interfaces';
import { BaseTextareaProps } from '../components/BaseTextarea.interfaces';
import { BaseInputProps } from '../components/BaseInput.interfaces';
import { BaseSliderProps } from '../components/BaseSlider.interfaces';

type ComponentType =
	| 'input'
	| 'textarea'
	| 'select'
	| 'multiselect'
	| 'radio'
	| 'checkbox'
	| 'slider';

export interface FormComponentProps {
	input: BaseInputProps;
	textarea: BaseTextareaProps;
	select: BaseSelectProps;
	multiselect: BaseMultiselectProps;
	radio: BaseRadioProps;
	checkbox: BaseCheckboxProps;
	slider: BaseSliderProps;
}

export interface VueFormLatteItem {
	props: FormComponentProps[ComponentType];
	componentType?: ComponentType;
	customComponent?: unknown;
	colspan?: number | string;
}

export interface VueFormLatteProps {
	components: VueFormLatteItem[];
	dark?: boolean;
	format?: 'grid' | 'column';
	schema?: Schema;
	validateOnSubmit?: boolean;
	validateOnBlur?: boolean;
}

export interface VueFormLatteModel {
	[key: string]: unknown;
}
