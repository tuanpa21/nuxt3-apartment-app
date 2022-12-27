<template>
  <div class="text-md breadcrumbs mb-3">
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
import { BreadcrumbItem } from '~~/types/breadcrumb-item'

interface Props {
  items: BreadcrumbItem[]
}

const props = defineProps<Props>()
</script>
