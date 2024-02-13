<template>
    <div class="relative">
        <Teleport to="body">
                <div v-if="isSelecting" class="fixed inset-0 z-0" @click="isSelecting = false"></div>
        </Teleport>

        <label v-if="label" class="block text-sm font-light mb-1 font-medium">{{ label }}</label>

        <div class="relative">

            <span class="absolute top-1/2 left-2 -translate-y-1/2">
                {{ options.find((option) => option.value === value)?.label || 'Select an option' }}
            </span>
            <BaseInput @focus="isSelecting = true" />
        </div>

        <div v-if="isSelecting" class="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-50">
            <div v-for="({ label, value }) in options" :key="value" class="p-2 hover:bg-gray-100 cursor-pointer" @click="onSelectItem(value)">
                {{ label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BaseSelectProps } from './BaseSelect.interfaces';
import BaseInput from './BaseInput.vue';

defineProps<BaseSelectProps>()
const emit = defineEmits(['on-select'])

const isSelecting = ref(false)

const onSelectItem = (value: string | number) => {
    isSelecting.value = false
    emit('on-select', value)
}
</script>

<style scoped>

</style>