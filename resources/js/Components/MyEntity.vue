<script setup>
import { Handle, Position } from '@vue-flow/core'

const props = defineProps(['entityData'])
</script>

<template>
  <div class="custom-node min-h-40 min-w-40 rounded border-2 border-border bg-white p-1">
    <div class="rounded-t bg-red-500 p-2">{{ props.entityData.label }}</div>

    <div v-for="field in props.entityData.data">
      <div class="relative">
        <!-- <Handle
                :id="props.data.data.handleId"
                type="source"
                :position="Position.Right"
        :connectableStart="true"
        :connectableEnd="true"
      /> -->

        <div>{{ field.name }}</div>
      </div>
    </div>
  </div>
</template>
