<template>
  <div>
    <div class="mb-6 rounded-lg bg-indigo-300">
      <img
        class="h-72 w-full rounded-lg object-cover"
        :src="props.apartment.imageUrl"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p><strong>ID:</strong> {{ props.apartment.id }}</p>
      <p><strong>Address:</strong> {{ props.apartment.address }}</p>
      <p><strong>Floor</strong>: {{ props.apartment.floor }}</p>
      <p><strong>Door:</strong> {{ props.apartment.door }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Apartment } from '~/types/apartment'

interface Props {
  apartment: Apartment
}

const props = defineProps<Props>()
</script>
