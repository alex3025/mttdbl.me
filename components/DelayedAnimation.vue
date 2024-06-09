<template>
  <div :id :class="{ '!opacity-0': !isReady }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  animation: string;
}>();

const id = useId();

const isReady = ref(false);

function animate() {
  isReady.value = true;

  const children = (document.getElementById(id)?.children as HTMLCollectionOf<HTMLElement>) ?? [];

  const delayIncrement = 0.15;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.style.animationDelay = `${i * delayIncrement}s`;
    child.getAnimations().forEach(animation => animation.play());
  }
}

// Triggers
onMounted(() => animate());
onUpdated(() => animate());
</script>

<style scoped>
div > * {
  opacity: 0;
  animation: v-bind('animation') 0.5s ease forwards;
}
</style>
