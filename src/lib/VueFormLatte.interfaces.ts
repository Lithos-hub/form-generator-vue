// import { FormType } from "./VueFormLatte.const";
import { BaseSelectItem } from "./components/BaseSelect.interfaces";

interface FormProps {
    value: unknown;
    placeholder?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    options?: BaseSelectItem[];
}
export interface VueFormLatteItem {
    componentType: string;
    name: string;
    customComponent?: unknown;
    colspan?: number | string;
    props: FormProps;
}

export interface VueFormLatteProps {
    dark?: boolean;
    format?: 'grid' | 'column'
	components: VueFormLatteItem[];
}

export interface VueFormLatte {
    [key: string]: FormProps['value'];
}