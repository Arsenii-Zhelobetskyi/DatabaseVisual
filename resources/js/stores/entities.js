import { defineStore } from 'pinia'

export const useEntitiesStore = defineStore('entitiesStore', {
  state: () => ({
    entities: [
      {
        id: '1',
        type: 'entity',
        label: "I'm 1",
        position: { x: 1920, y: 1080 },
        data: [
          {
            name: 'testField',
            handleId: 'a'
          },
          {
            name: 'testField1',
            handleId: 'a'
          }
        ]
      }
    ]
  }),
  getters: {
    getEntitiesInOptionFormat() {
      return this.entities.map((entity) => {
        return {
          value: entity.id,
          label: entity.label
        }
      })
    },
    getEntityFields: (state) => (id) => {
      const entity = state.entities.find((entity) => entity.id == id)

      if (!entity) {
        // Return an empty array if the entity is not found
        return []
      }

      return entity.data.map((field) => {
        return {
          value: field.handleId,
          label: field.name
        }
      })
    }
  },
  actions: {
    addEntity(item) {
      this.entities.push(item)
    }
  }
})
