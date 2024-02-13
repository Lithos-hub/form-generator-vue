<template>
    <div>
        <label v-if="label" class="block text-sm font-light mb-1 font-medium">{{ label }}</label>
        <input v-model="model" class="input" v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { BaseInputProps } from './BaseInput.interfaces';
const { modelValue } = defineProps<BaseInputProps>()

const model = defineModel<string | number>()

onMounted(() => {
    model.value = modelValue
})
</script>

<style scoped>
.input {
	@apply w-full p-2 transition-all duration-75 border rounded outline-none font-light focus:ring-2;

}
</style>