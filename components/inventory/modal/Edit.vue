<template>
  <input
    id="add-inventory-modal"
    type="checkbox"
    class="modal-toggle"
    :checked="props.isOpen"
  />
  <div class="modal cursor-pointer">
    <div class="modal-box relative">
      <button
        class="btn-outline btn-sm btn-circle btn absolute right-4 top-4"
        @click="props.closeModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h3 class="mb-8 text-lg font-bold">Edit inventories</h3>
      <InventoryForm
        key="edit-form"
        v-model:item="item"
        v-model:quantity="quantity"
      />
      <div class="modal-action">
        <button class="btn-sm btn sm:btn-md" @click="props.closeModal">
          Close
        </button>
        <button class="btn-primary btn-sm btn sm:btn-md" @click="updateItem">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InventoryItem } from '~/types/inventory-item'

interface Props {
  isOpen: boolean
  closeModal: () => void
  onSubmit: (item: InventoryItem) => void
  inventory?: InventoryItem
}

const props = defineProps<Props>()

const item = ref(props.inventory?.name ?? mockInventories[0].name)
const quantity = ref(props.inventory?.quantity ?? 1)

watch(
  () => props.inventory,
  () => {
    item.value = props.inventory?.name ?? ''
    quantity.value = props.inventory?.quantity ?? 1
  }
)

const updateItem = () => {
  if (!props.inventory) return
  if (!item.value || !quantity.value) return

  const updatedData = {
    id: props.inventory.id,
    name: item.value,
    quantity: quantity.value,
  }

  props.onSubmit(updatedData)
}
</script>
