import type { InputHTMLAttributes } from 'vue';

export interface BaseSliderProps extends /* @vue-ignore */ InputHTMLAttributes {
	label?: string;
	modelValue: string | number;
}
