
<template>
  <div class="bg-stone-100 h-screen flex flex-col justify-center items-center">
    <div class="w-[1000px]">
      <VueFormLatte :components="components" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFormLatte from './lib/VueFormLatte.vue'


const components = [
  {
    componentType: 'input',
    name: 'userName',
    value: 'Hello',
    colspan: 6,
    label: 'Input label',
    placeholder: 'Input placeholder'
  }
]

</script>