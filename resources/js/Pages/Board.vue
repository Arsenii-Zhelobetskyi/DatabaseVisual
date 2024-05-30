<script setup>
import { VueFlow } from "@vue-flow/core";
import { ref } from "vue";

import MyEntity from "../Components/MyEntity.vue";
import { Background } from "@vue-flow/background";
const props = defineProps([
    "id",
    "data",
    "position",
    "selected",
    "dragging",
    "resizing",
    "computedPosition",
    "parentNode",
    "isParent",
]);
console.log(props);
const elements = ref([
    // nodes

    // an input node, specified by using `type: 'input'`
    {
        id: "1",
        type: "entity",

        label: "Node 12",
        position: { x: 250, y: 5 },
    },
]);
</script>

<template>
    <div class="w-screen h-screen">
        <VueFlow v-model="elements">
            <Background size="2" />

            <!-- bind your custom node type to a component by using slots, slot names are always `node-<type>` -->
            <template #node-entity="specialNodeProps">
                <MyEntity v-bind="specialNodeProps" />
            </template>
        </VueFlow>
    </div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import "@vue-flow/core/dist/style.css";

/* import the default theme, this is optional but generally recommended */
@import "@vue-flow/core/dist/theme-default.css";
</style>
