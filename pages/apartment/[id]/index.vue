<template>
  <div class="max-h-full">
    <SharedBreadcrumb :items="breadcrumbItems" />
    <div class="">
      <h1 class="prose mb-6 text-2xl font-bold">
        {{ `Apartment ${id} detail` }}
      </h1>
    </div>
    <ApartmentDetail :apartment="apartmentInfo" />
    <InventoryList :apartment="apartmentInfo" />
  </div>
</template>

<script setup lang="ts">
import { Apartment } from '~/types/apartment'

const route = useRoute()
const { id } = route.params

useHead({
  title: `Apartment ${id} detail`,
})

const breadcrumbItems = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: `Apartment ${id} detail`,
  },
]

const { data } = await useAsyncData(`apartments/${id}`, () =>
  useBaseFetch(`/apartments/${id}`)
)

const apartmentInfo = computed(() => data.value as Apartment)
</script>
