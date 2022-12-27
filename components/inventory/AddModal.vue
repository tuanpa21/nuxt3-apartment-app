<template>
  <input
    id="add-inventory-modal"
    type="checkbox"
    class="modal-toggle"
    :checked="props.isOpen"
  />
  <div class="modal cursor-pointer">
    <label class="modal-box relative">
      <label
        class="btn-sm btn-circle btn absolute right-2 top-2"
        @click="props.closeModal"
        >✕</label
      >
      <h3 class="mb-8 text-lg font-bold">Add new inventory</h3>
      <InventoryForm
        key="add-form"
        v-model:item="item"
        v-model:quantity="quantity"
      />
      <div class="modal-action">
        <button class="btn-sm btn sm:btn-md" @click="props.closeModal">
          Close
        </button>
        <button class="btn-primary btn-sm btn sm:btn-md" @click="addNewItem">
          Add
        </button>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

import { InventoryItem } from '~/types/inventory-item'

interface Props {
  isOpen: boolean
  closeModal: () => void
  onSubmit: (item: InventoryItem) => void
}

const props = defineProps<Props>()

const item = ref(mockInventories[0].name)
const quantity = ref(1)

const addNewItem = () => {
  if (!item.value || !quantity.value) return

  const newItem = {
    id: 0,
    name: item.value,
    quantity: quantity.value,
    isNew: true,
  }

  props.onSubmit(newItem)
}
</script>
