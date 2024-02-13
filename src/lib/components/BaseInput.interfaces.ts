import type { InputHTMLAttributes } from 'vue'

export interface BaseInputProps extends /* @vue-ignore */ InputHTMLAttributes {
    modelValue: string | number;
    label?: string;
}