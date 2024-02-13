import type { InputHTMLAttributes } from 'vue'

export interface CustomInputProps extends /* @vue-ignore */ InputHTMLAttributes {
    label?: string;
}