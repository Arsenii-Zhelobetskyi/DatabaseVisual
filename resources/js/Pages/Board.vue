<script setup>
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import Header from '@/Components/Header.vue'
import MyEntity from '../Components/MyEntity.vue'
import MyField from '../Components/MyField.vue'

import { ControlButton } from '@vue-flow/controls'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import Icon from '../Components/Icon.vue'

import { useEntitiesStore } from '@/stores/entities'

const store = useEntitiesStore()

import { useVueFlow } from '@vue-flow/core'
const { nodesConnectable } = useVueFlow()

const { onPaneReady, onNodeDragStop, onConnect, addEdges, setViewport } = useVueFlow()

onNodeDragStop(({ event, nodes, node, intersections }) => {
  console.log('Node Drag Stop', { event, nodes, node, intersections })
})

onConnect((connection) => {
  addEdges(connection)
})
function updatePos() {
  store.entities = store.entities.map((node) => {
    return {
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400
      }
    }
  })
}

function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 })
}
</script>

<template>
  <div class="h-screen w-screen">
    <Header />
    <VueFlow v-model="store.entities" class="basicflow" :min-zoom="0.1" :max-zoom="4">
      <Background size="2" />

      <MiniMap />

      <template #node-entity="data">
        <MyEntity :data="data" />
      </template>

      <Controls position="bottom-left">
        <ControlButton title="Reset Transform" @click="resetTransform">
          <Icon name="reset" />
        </ControlButton>

        <ControlButton title="Shuffle Node Positions" @click="updatePos">
          <Icon name="update" />
        </ControlButton>
      </Controls>
    </VueFlow>
  </div>
</template>

<style>
@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/node-resizer/dist/style.css';
</style>
