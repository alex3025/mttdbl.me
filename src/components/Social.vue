<template>
  <li class="inline-block mr-4">
    <a :href="link" class="text-3xl dark:hover:text-gray-300 duration-100 hover:text-gray-900" :title="name" target="_blank">
      <slot />
    </a>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  link: String
})
</script>
