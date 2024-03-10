import BaseInput from './components/BaseInput.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseTextarea from './components/BaseTextarea.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import BaseRadio from './components/BaseRadio.vue';
import BaseMultiselect from './components/BaseMultiselect.vue';
import BaseSlider from './components/BaseSlider.vue';
// import BaseFile from "./components/BaseFile.vue";

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
