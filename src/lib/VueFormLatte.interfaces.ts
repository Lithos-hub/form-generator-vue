import { FormType } from "./VueFormLatte.const";

export interface VueFormLatteItem {
    componentType: FormType;
    name: string;
    value: unknown;
    colspan?: number | string;
}

export interface VueFormLatteProps {
	components: VueFormLatteItem[];
}

export interface VueFormLatte {
    [key: string]: VueFormLatteItem['value'];
}