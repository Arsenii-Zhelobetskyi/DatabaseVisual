<script>
import { ref } from "vue";
import { Handle } from "@vue-flow/core";
import { Position } from "@vue-flow/core";

export default {
    components: { Handle },
    props: ["data"],
    setup(props) {
        const entety = ref(props.data);

        console.log(props.data);

        return {
            entety,
            Position,
        };
    },
};
</script>

<template>
    <div
        class="bg-white border-2 border-border custom-node p-1 min-w-40 min-h-40 rounded"
    >
        <div class="bg-red-500 p-2 rounded-t">{{ entety.label }}</div>

        <div
            class="relative"
            v-for="handle in entety.data.labelHandles"
            :key="handle.handleId"
        >
            <Handle
                :id="handle.handleId"
                :position="Position.Right"
                :connectableStart="true"
                :connectableEnd="true"
            />

            <div class="px-2 py-1">{{ handle.label }}</div>
        </div>
    </div>
</template>
