<script setup>
import { Handle, Position } from "@vue-flow/core";

const props = defineProps(["label"]);
</script>

<template>
    <div class="bg-blue-600 w--">
        <Handle type="target" :position="Position.Left"> </Handle>
        <div class="">{{ props.label }}</div>
    </div>
</template>
