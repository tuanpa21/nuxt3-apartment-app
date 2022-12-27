<template>
  <div class="max-h-full">
    <SharedBreadcrumb :items="breadcrumbItems" />
    <div class="">
      <h1 class="prose mb-6 text-2xl font-bold">
        {{ `APARTMENT DETAIL | ${apartmentInfo.address}` }}
      </h1>
    </div>
    <div class="flex w-full flex-row space-x-10">
      <div class="w-1/2"><ApartmentDetail :apartment="apartmentInfo" /></div>
      <div class="w-1/2"><InventoryList :apartment="apartmentInfo" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Apartment } from '~/types/apartment'

const route = useRoute()
const { id } = route.params

const { data } = await useAsyncData(`apartments/${id}`, () =>
  useBaseFetch(`/apartments/${id}`)
)

const apartmentInfo = computed(() => data.value as Apartment)

useHead({
  title: `Apartment detail | ${apartmentInfo.value.address}`,
})

const breadcrumbItems = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: `Apartment detail`,
  },
]
</script>
