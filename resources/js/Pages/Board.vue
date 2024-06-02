<script setup>
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import Header from '@/Components/Header.vue'
import MyEntity from '../Components/MyEntity.vue'
import MyField from '../Components/MyField.vue'

import { useEntitiesStore } from '@/stores/entities'

const store = useEntitiesStore()

import { useVueFlow } from '@vue-flow/core'

const { nodesConnectable } = useVueFlow()
</script>

<template>
  <div class="h-screen w-screen">
    <Header />`
    <VueFlow v-model="store.entities">
      <Background size="2" />

      <template #node-entity="data">
        <MyEntity :entityData="data" />
      </template>
    </VueFlow>
  </div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>
