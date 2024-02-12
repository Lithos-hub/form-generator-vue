import BaseInput from "./components/BaseInput.vue"

export type FormType = 'input' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'file' | 'button'
type ComponentType = typeof BaseInput

export const componentOptions = {
    input: BaseInput
} as Record<FormType, ComponentType>
