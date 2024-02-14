import BaseInput from './components/BaseInput.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseTextarea from './components/BaseTextarea.vue';
// import BaseCheckbox from "./components/BaseCheckbox.vue";
import BaseRadio from './components/BaseRadio.vue';
// import BaseFile from "./components/BaseFile.vue";
// import BaseButton from "./components/BaseButton.vue";

export type FormType = 'input' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'file' | 'button';

export const componentOptions = {
	input: BaseInput,
	select: BaseSelect,
	textarea: BaseTextarea,
	// checkbox: BaseCheckbox,
	radio: BaseRadio,
	// file: BaseFile,
	// button: BaseButton
};
