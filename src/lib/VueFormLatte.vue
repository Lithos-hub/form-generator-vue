<template>
	<form
		class="w-full bg-white p-5 rounded shadow-xl gap-5"
		:class="{
			'grid grid-cols-12': format === 'grid',
			'flex flex-col': format === 'column',
		}"
		@submit.prevent="$emit('submit')">
		<div
			v-for="({ componentType, customComponent, name, colspan, props }, i) of components"
			:key="i"
			:class="`col-span-${colspan || 12}`">
			<component
				:is="customComponent || componentOptions[componentType as keyof typeof componentOptions]"
				v-model="model[name]"
				:name="name"
				v-bind="props"/>
		</div>
	</form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { VueFormLatteProps, VueFormLatte } from './VueFormLatte.interfaces';
import BaseInput from "./components/BaseInput.vue"
import BaseSelect from "./components/BaseSelect.vue"
import BaseTextarea from "./components/BaseTextarea.vue";
// import BaseCheckbox from "./components/BaseCheckbox.vue";
// import BaseRadio from "./components/BaseRadio.vue";
// import BaseFile from "./components/BaseFile.vue";
// import BaseButton from "./components/BaseButton.vue";

const { components } = defineProps<VueFormLatteProps>();
defineEmits(['submit']);

const model = ref<VueFormLatte>({});

const componentOptions = {
    input: BaseInput,
    select: BaseSelect,
    textarea: BaseTextarea,
    // checkbox: BaseCheckbox,
    // radio: BaseRadio,
    // file: BaseFile,
    // button: BaseButton
}

onMounted(() => {
	components.forEach(({ name, props }) => (model.value[name] = props.value));
});
</script>
