<template>
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">Item</span>
    </label>
    <select
      :value="props.item"
      class="select-bordered select"
      @input="
        $emit('update:item', ($event?.target as HTMLSelectElement)?.value || '')
      "
    >
      <option v-for="inventory of mockInventories" :key="inventory.name">
        {{ inventory.name }}
      </option>
    </select>
  </div>
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">Quantity</span>
    </label>
    <input
      :value="props.quantity"
      type="number"
      placeholder="Input number of items"
      class="input-bordered input w-full"
      min="1"
      @input="
        $emit(
          'update:quantity',
          parseInt(($event?.target as HTMLInputElement)?.value || '1')
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  item?: string
  quantity?: number
}

const props = defineProps<Props>()

defineEmits(['update:item', 'update:quantity'])
</script>
