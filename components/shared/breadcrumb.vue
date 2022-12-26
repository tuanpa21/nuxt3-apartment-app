<template>
  <div class="breadcrumbs mb-3 text-sm">
    <ul>
      <li v-for="item in props.items" :key="item.id">
        <nuxt-link v-if="item.link" :to="item.link">
          {{ item.title }}
        </nuxt-link>
        <span v-else>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: {
    id: number
    title: string
    link: string
  }[]
}

const props = defineProps<Props>()
</script>
