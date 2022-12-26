<template>
  <div class="card mb-6 w-full border bg-base-100 shadow-sm md:mb-0">
    <figure><img :src="props.item.imageUrl" alt="" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.item.address }}</h2>
      <p><strong>Floor</strong>: {{ props.item.floor }}</p>
      <p><strong>Door:</strong> {{ props.item.door }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Apartment } from '~/types/apartment'

interface Props {
  item: Apartment
}

const props = defineProps<Props>()
</script>
