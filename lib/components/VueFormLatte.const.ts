import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseCheckbox from './BaseCheckbox.vue';
import BaseRadio from './BaseRadio.vue';
import BaseMultiselect from './BaseMultiselect.vue';
import BaseSlider from './BaseSlider.vue';
// import BaseFile from "./BaseFile.vue";

export const componentOptions = {
	input: BaseInput,
	select: BaseSelect,
	multiselect: BaseMultiselect,
	textarea: BaseTextarea,
	checkbox: BaseCheckbox,
	groupCheckbox: BaseCheckbox,
	radio: BaseRadio,
	slider: BaseSlider,
	// file: BaseFile,
};
