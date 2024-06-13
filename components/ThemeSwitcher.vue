<template>
  <button
    v-show="!$colorMode.unknown"
    @click="toggleDark"
    class="kb-focus max-w-max text-white/50 hover:text-white/80 focus-visible:text-white/80"
  >
    <Icon
      :name="$colorMode.value === 'light' ? 'heroicons:moon-solid' : 'heroicons:sun'"
      class="h-7 w-7 transition-all duration-250 motion-reduce:transition-none"
    />
  </button>
</template>

<style>
/* Dark Mode Transition */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
}

.dark::view-transition-old(root) {
  z-index: 9999;
}

.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
