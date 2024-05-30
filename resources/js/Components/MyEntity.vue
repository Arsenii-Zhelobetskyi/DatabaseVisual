<script setup>
import { Handle, Position } from "@vue-flow/core";
import { ref } from "vue";
import { useVueFlow } from "@vue-flow/core";
const { findNode } = useVueFlow({});
// const node = findNode("1");

// console.log(node.label); // This will log the entire Proxy object
const counter = ref(0);
</script>

<template>
    <div class="custom-node">
        <Handle type="target" :position="Position.Top" />
        <slot name="label" />
    </div>
</template>

<style scoped>
.custom-node {
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: white;
    border: 1px solid black;
    border-radius: 4px;
}
</style>
