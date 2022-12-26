<template>
  <div class="w-full">
    <div class="prose mb-10">
      <h1>My Apartments</h1>
    </div>
    <div
      class="space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0 lg:grid-cols-4"
    >
      <template v-for="apartment in apartments" :key="apartment.id">
        <HomeApartmentItem :item="apartment" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('apartments', () =>
  useBaseFetch('/apartments')
)

const apartments = computed(() => data.value)
</script>
