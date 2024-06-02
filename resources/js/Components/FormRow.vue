<script setup>
import { defineEmits, defineProps, watchEffect, ref } from 'vue'

import { useForm, useValidateForm } from 'vee-validate'
import * as yup from 'yup'

import { useEntitiesStore } from '@/stores/entities'
import { storeToRefs } from 'pinia'

import _ from 'lodash'

import MyDeleteButton from './MyDeleteButton.vue'
import MyInput from './MyInput.vue'
import MySwitch from './MySwitch.vue'
import MySelect from './MySelect.vue'

const emits = defineEmits(['update:fields', 'delete:fields'])
const props = defineProps(['fieldsQuantity'])
const schema = yup.object({
  name: yup.string().required().max(255),
  type: yup.string().required(),
  size: yup.number().positive(),
  primaryKey: yup.boolean().required(),
  allowNulls: yup.boolean().required(),
  autoIncrement: yup.boolean().required(),
  foreignKey: yup.boolean().required(),
  refEntity: yup.string(),
  refField: yup.string(),
  relType: yup.string()
})

const { errors, meta, defineField, values, handleSubmit, resetForm } = useForm({
  validationSchema: schema
})
const validate = useValidateForm()
const doValid = async () => {
  await validate()
}

const [relType, relTypeAttrs] = defineField('relType')

const hasErrors = ref(false)
watchEffect(() => {
  hasErrors.value = _.isEmpty(errors.value)
})

watchEffect(() => {
  emits('update:fields', values)
})

const entities = useEntitiesStore()
const { getEntityFields } = storeToRefs(entities)
</script>
<template>
  <tr
    :class="`border-t-2 [&>td]:px-2 ${!hasErrors ? '[&>td]:pb-24 [&>td]:pt-4' : '[&>td]:py-4'} [&>td]:text-center [&>td]:align-middle`"
  >
    <td v-if="fieldsQuantity > 1">
      <button type="button" @click="() => emits('delete:fields')">
        <MyDeleteButton />
      </button>
      <button type="button" @click="doValid">Validate</button>
    </td>
    <td>
      <MyInput value="name" placeholder="name" width="36" type="text" />
    </td>
    <td>
      <MySelect
        value="type"
        width="36"
        :options="[
          { value: 'enum', label: 'enum' },
          { value: 'int', label: 'int' },
          { value: 'varchar', label: 'varchar' },
          { value: 'boolean', label: 'boolean' },
          { value: 'double', label: 'double' },
          { value: 'date', label: 'date' }
        ]"
      />
    </td>
    <td>
      <MyInput value="size" placeholder="size" width="36" type="number" />
    </td>
    <td>
      <MySwitch value="primaryKey" />
    </td>
    <td>
      <MySwitch value="allowNulls" />
    </td>
    <td>
      <MySwitch value="autoIncrement" />
    </td>
    <td>
      <MySwitch value="foreignKey" />
    </td>
    <td>
      <MySelect
        value="refEntity"
        width="36"
        :options="entities.getEntitiesInOptionFormat"
        :disabled="!values.foreignKey"
      />
    </td>
    <td>
      <MySelect
        value="refField"
        width="36"
        :options="getEntityFields(values.refEntity)"
        :disabled="!values.foreignKey || !values.refEntity"
      />
    </td>
    <td>
      <MySelect
        value="relType"
        width="36"
        :options="[
          { value: 'one-to-one', label: 'one-to-one' },
          { value: 'one-to-many', label: 'one-to-many' },
          { value: 'many-to-many', label: 'many-to-many' }
        ]"
        :disabled="!values.foreignKey || !values.refEntity || !values.refField"
      />
    </td>
  </tr>
</template>
