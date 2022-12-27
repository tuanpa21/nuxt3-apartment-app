<template>
  <div>
    <div class="mb-6 rounded-lg bg-indigo-300">
      <img
        class="h-72 w-full rounded-lg object-cover"
        :src="props.apartment.imageUrl"
      />
    </div>
    <div class="flex w-full flex-row">
      <div class="flex w-7/12 flex-col">
        <div class="flex flex-row">
          <dt class="w-1/3"><strong>ID:</strong></dt>
          <dd class="w-2/3">{{ props.apartment.id }}</dd>
        </div>
        <div class="flex flex-row">
          <dt class="w-1/3"><strong>Address:</strong></dt>
          <dd class="w-2/3">{{ props.apartment.address }}</dd>
        </div>
      </div>
      <div class="flex w-5/12 flex-col">
        <div class="flex flex-row">
          <dt class="w-1/3"><strong>Floor:</strong></dt>
          <dd class="w-2/3">{{ props.apartment.floor }}</dd>
        </div>
        <div class="flex flex-row">
          <dt class="w-1/3"><strong>Door:</strong></dt>
          <dd class="w-2/3">{{ props.apartment.door }}</dd>
        </div>
      </div>
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
