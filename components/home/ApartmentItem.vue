<template>
  <NuxtLink :to="`/apartment/${props.item.id}`">
    <div class="card mb-6 h-80 w-full border bg-base-100 shadow-sm md:mb-0">
      <figure class="h-1/2 object-cover">
        <img :src="props.item.imageUrl" alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ props.item.address }}</h2>
        <p><strong>Floor</strong>: {{ props.item.floor }}</p>
        <p><strong>Door:</strong> {{ props.item.door }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Apartment } from '~/types/apartment'

interface Props {
  item: Apartment
}

const props = defineProps<Props>()
</script>
