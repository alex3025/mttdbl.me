<template>
  <li class="flex flex-col items-center text-3xl dark:text-gray-100 dark:hover:text-gray-300 text-gray-850 duration-100 hover:text-gray-950">
    <a :href="link" target="_blank" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
      <slot />
    </a>
    <transition
      enter-active-class="transition ease-out duration-75"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="showTooltip" class="bg-gray-800 text-gray-200 dark:text-gray-300 origin-top shadow-md rounded-md text-sm absolute mt-9 p-0.5 px-1">
        {{ name }}
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    link: String
  },
  data () {
    return {
      showTooltip: false
    }
  }
}
</script>
