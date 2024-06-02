<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import MyInput from './MyInput.vue'
import FormRow from './FormRow.vue'

const PADDING = 20 // padding for entity position on screen, so it doesn't go off screen
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
} // random number generator

// data of all FormRow components
const fields = ref([
  {
    id: uuidv4()
  }
])
// Entity data
const entity = ref({
  id: uuidv4(),
  type: 'entity',
  label: '',
  position: {
    x: randomNumber(0, window.innerWidth - PADDING),
    y: randomNumber(0, window.innerHeight - PADDING)
  },
  data: fields.value
})

// Functions to harvest\communicate data from formRow
const updateField = (index, newData) => {
  fields.value[index] = { ...fields.value[index], ...newData }
}
const deleteField = (index) => {
  fields.value.splice(index, 1)
}
const addField = () => {
  fields.value.push({
    id: uuidv4()
  })
}

// Form for entity label
const schema = yup.object({
  label: yup.string().required().max(255)
})
const { errors, meta, values, defineField, handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

// everything about submit
import { useEntitiesStore } from '@/stores/entities'

const entities = useEntitiesStore()

const onSuccess = () => {
  entity.value.label = values.label
  entities.addEntity(entity.value)
}
const onInvalidSubmit = () => {
  console.log('invalid submit')
}
const onSubmit = handleSubmit(onSuccess, onInvalidSubmit)
</script>
<template>
  <div>
    <div>{{ entity }}</div>
    <div class="flex items-center justify-center gap-5">
      <span class="text-2xl font-light">Enter the entity name</span>
      <MyInput value="label" placeholder="entity name" width="36" type="text" />
    </div>
    <form @submit="onSubmit" class="mt-5">
      <table class=" ">
        <tr class="[&>th]:text-text [&>th]:px-2 [&>th]:py-4">
          <th v-if="fields.length > 1"></th>
          <th>Label</th>
          <th>Type</th>
          <th>Size</th>
          <th>Primary Key</th>
          <th>Allow Nulls</th>
          <th>Auto Increment</th>
          <th>Foreign Key</th>
          <th>Reference Entity</th>
          <th>Reference Field</th>
          <th>Relationship Type</th>
        </tr>

        <FormRow
          v-for="(field, index) in fields"
          :field="field"
          :key="field.id"
          @update:fields="updateField(index, $event)"
          @delete:fields="deleteField(index)"
          :fieldsQuantity="fields.length"
        />

        <tr>
          <td
            colspan="100%"
            class="text-text border-4 border-dashed border-gray-300 bg-gray-100 py-4 text-center font-bold hover:cursor-pointer"
            @click="addField"
          >
            Click here to add another field
          </td>
        </tr>

        <button>Submit</button>
      </table>
    </form>
  </div>
</template>
