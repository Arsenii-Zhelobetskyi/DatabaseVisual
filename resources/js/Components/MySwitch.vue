<script setup>
import { defineProps } from 'vue'
import { useField } from 'vee-validate'
const props = defineProps(['value'])
const { value, errors } = useField(() => props.value, undefined)
</script>

<template>
  <label class="inline-flex cursor-pointer items-center">
    <input type="checkbox" v-model="value" class="peer sr-only" />
    <div
      class="peer-checked:bg-Focus dark:bg-DisabledBackground peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"
    ></div>
  </label>
</template>
