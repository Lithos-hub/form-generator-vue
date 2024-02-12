import type { InputHTMLAttributes } from 'vue'

export interface BaseInputProps extends /* @vue-ignore */ InputHTMLAttributes {
    label?: string;
}