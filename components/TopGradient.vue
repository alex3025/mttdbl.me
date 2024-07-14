<template>
  <div
    ref="gradientDiv"
    class="h-40 sm:h-80 absolute right-0 left-0 -top-25 sm:-top-60 w-full max-w-3xl mx-a z-3 blur-2xl sm:blur-3xl rd-50% content-empty gradient"
  ></div>
</template>

<script setup lang="ts">
const gradientDiv = ref<HTMLDivElement | null>(null);

const { width } = useElementSize(gradientDiv);

onMounted(() => {
  watchEffect(() => {
    document.documentElement.style.setProperty(
      '--gradient-div-width',
      -(width.value * 2).toString() + 'px'
    );
  });
});
</script>

<style scoped>
@keyframes gradientAnimation {
  from {
    /* div-size * 2 */
    background-position: var(--gradient-div-width) 0;
  }
  to {
    background-position: 0 0;
  }
}

.gradient {
  @apply motion-reduce:animate-none;

  background: linear-gradient(to right, #00eeff, #008cff, #532cff, #008cff, #00eeff);
  background-size: auto 100%;
  animation: gradientAnimation 15s linear infinite;
}
</style>
