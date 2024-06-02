<script setup>
const props = defineProps(['placeholder', 'width', 'disabled', 'value', 'options', 'default'])
import { useField } from 'vee-validate'
import { watchEffect } from 'vue'
const { value, errors } = useField(() => props.value, undefined)

watchEffect(() => {
  if (props.disabled) {
    value.value = undefined
  }
})
</script>

<template>
  <select
    v-model="value"
    :class="`focus:border-inputFocus border-inputBorder bg-inputBackground focus:border-Focus disabled:border-inputDisabledFocus disabled:bg-DisabledBackground w-${props.width} rounded-lg border-4 focus:outline-none focus:ring-0`"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
  >
    <option :value="option.value" v-for="option in props.options">{{ option.label }}</option>
  </select>
</template>
