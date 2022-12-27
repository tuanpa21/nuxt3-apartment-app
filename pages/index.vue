<template>
  <div class="w-full">
    <SharedBreadcrumb :items="breadcrumbItems" />
    <h1 class="prose mb-10 text-2xl font-bold">APARTMENTS LIST</h1>
    <div class="grid grid-cols-3 space-y-8 md:gap-12 md:space-y-0">
      <template v-for="apartment in apartments" :key="apartment.id">
        <HomeApartmentItem :item="apartment" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BreadcrumbItem } from '~~/types/breadcrumb-item'

const { data } = await useAsyncData('apartments', () =>
  useBaseFetch('/apartments')
)

const apartments = computed(() => data.value)

const breadcrumbItems: BreadcrumbItem[] = [
  {
    id: 1,
    title: 'Home',
  },
]
</script>
