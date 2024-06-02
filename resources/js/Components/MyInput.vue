<script setup>
const props = defineProps(['placeholder', 'width', 'disabled', 'value', 'type', 'error'])
import { useField } from 'vee-validate'
const { value, errors } = useField(() => props.value, undefined)
</script>

<template>
  <div :class="`relative`">
    <input
      :class="`invalid:border-error border-inputBorder bg-inputBackground focus:border-Focus disabled:border-inputDisabledFocus disabled:bg-DisabledBackground w-${props.width} rounded-lg border-4 focus:outline-none focus:ring-0`"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      v-model="value"
      :type="props.type"
      :invalid="errors[0] !== undefined"
    />
    <div class="text-error absolute">
      {{ errors[0] }}
    </div>
  </div>
</template>
