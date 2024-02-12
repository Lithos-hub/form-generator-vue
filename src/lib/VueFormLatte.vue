<template>
	<form class="grid grid-cols-12 w-full bg-white p-5 rounded shadow-xl gap-5">
				<div
					v-for="({ componentType, name, colspan, ...rest}, i) of componentsToRender"
                    :key="i"
                    :class="`col-span-${colspan}`">
                    <component
                        :is="componentType"
                        v-model="model[name]"
                        :name="name"
                        v-bind="rest" />
				</div>
			</form>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { VueFormLatteProps, VueFormLatte } from './VueFormLatte.interfaces';
import { componentOptions } from './VueFormLatte.const';

const { components } = defineProps<VueFormLatteProps>();

const model = ref<VueFormLatte>({});

const componentsToRender = computed(() => {

    return components.map(({ componentType, ...rest }) => {
        return {
            componentType: componentOptions[componentType],
            ...rest
        }
    })
})

onMounted(async () => {
	await nextTick();
	components.forEach(({ name, value }) => model.value[name] = value);
});
</script>
