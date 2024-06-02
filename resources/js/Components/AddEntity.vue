<template>
  <Teleport to="body">
    <div v-if="props.showAddEntity" class="modal">
      <p>Hello from the modal!</p>
      <button @click="props.toggleAddEntity">Close</button>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps(['toggleAddEntity', 'showAddEntity'])
</script>
