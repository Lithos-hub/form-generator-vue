<template>
    <div>
        <label v-if="label" class="block text-sm font-light mb-1 font-medium">{{ label }}</label>
        <input v-model="model" class="input" v-bind="$attrs" @focus="isSelecting = true" />

        <div v-if="isSelecting" class="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg">
            <div v-for="option in options" :key="option.value" class="p-2 hover:bg-gray-100 cursor-pointer" @click="isSelecting = false; $emit('update:modelValue', option.value)">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BaseSelectProps } from './BaseSelect.interfaces';

defineProps<BaseSelectProps>()

const isSelecting = ref(false)

const model = defineModel<string>('')
</script>

<style scoped>

</style>