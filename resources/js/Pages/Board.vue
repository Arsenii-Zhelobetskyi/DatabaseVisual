<script setup>
import { VueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";

import MyEntity from "../Components/MyEntity.vue";
import MyField from "../Components/MyField.vue";

import { useEntitiesStore } from "@/stores/entities";

const store = useEntitiesStore();
</script>

<template>
    <div class="w-screen h-screen">
        <VueFlow v-model="store.entities">
            <Background size="2" />

            <template #node-entity="data">
                <MyEntity :data="data" />
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
