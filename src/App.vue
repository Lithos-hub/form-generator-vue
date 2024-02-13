
<template>
  <div class="bg-stone-100 h-screen flex flex-col justify-center items-center">
    <div class="w-[1000px]">
      <VueFormLatte format="grid" :components="components" @submit="onSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFormLatte from './lib/VueFormLatte.vue'
import { VueFormLatteItem } from './lib/VueFormLatte.interfaces'
import CustomInput from './CustomInput.vue';

const components: VueFormLatteItem[] = [
  {
    componentType: 'input',
    name: 'userName',
    colspan: 6,
    props: {
      value: 'Input value',
      placeholder: 'Input placeholder',
      label: 'Input lbel',
    }
  },
  {
    componentType: 'input',
    customComponent: CustomInput,
    name: 'Lastname',
    colspan: 6,
    props: {
      value: 'Input value',
      placeholder: 'Custom input placeholder',
      label: 'Custom input label',
    }
  },
  // {
  //   componentType: 'select',
  //   name: 'userCountry',
  //   colspan: 4,
  //   props: {
  //     value: 'United States',
  //     label: 'Select label',
  //     options: [
  //       { value: 'us', label: 'United States' },
  //       { value: 'mx', label: 'Mexico' },
  //       { value: 'ca', label: 'Canada' },
  //     ]
  //   }
  // },
  // {
  //   componentType: 'textarea',
  //   name: 'userBio',
  //   colspan: 8,
  //   props: {
  //     value: 'This is the textarea value',
  //     label: 'Textarea label',
  //   }
  // }
]

const onSubmit = () => alert('Form submitted!')

</script>