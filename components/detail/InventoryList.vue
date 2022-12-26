<template>
  <div>
    <h2 class="text-xl font-bold">Inventory list</h2>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listItems" :key="item.id">
            <td>
              <span class="text-gray-600">{{ item.id }}</span>
            </td>
            <td>
              <span class="text-gray-600">{{ item.name }}</span>
            </td>
            <td>
              <span class="text-gray-600">{{ item.quantity }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { InventoryItem } from '~/types/inventory-item'
import { Apartment } from '~/types/apartment'

interface Props {
  apartment: Apartment
}

const props = defineProps<Props>()

const items = computed(() => {
  const inventories = props.apartment.inventory || []
  const sortedInventories = inventories.sort((a, b) => b.id - a.id)

  return sortedInventories
})

const listItems = ref<InventoryItem[]>(items.value)
</script>
