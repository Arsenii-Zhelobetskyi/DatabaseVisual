<script setup>
import { Handle, Position } from "@vue-flow/core";

const props = defineProps(["data"]);
console.log(props.data);
</script>

<template>
    <div
        class="bg-white border-2 border-border custom-node p-1 min-w-40 min-h-40 rounded"
    >
        <div class="bg-red-500 p-2 rounded-t">{{ props.data.label }}</div>

        <div class="relative">
            <Handle
                :id="props.data.data.handleId"
                type="source"
                :position="Position.Right"
                :connectableStart="true"
                :connectableEnd="true"
            />

            <div>{{ props.data.data.label }}</div>
        </div>
    </div>
</template>
