<template>
  <div ref="container">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore (missing types but it works)
import ScrambleText from 'scramble-text';

const props = defineProps({
  delay: { type: Number, default: 500 },
  speed: { type: Number, default: 150 }
});

const container = ref<HTMLDivElement>();

onMounted(() => {
  const scrambler = new ScrambleText(container.value?.children[0] as HTMLElement, { timeOffset: props.speed });
  setTimeout(() => {
    scrambler.start();
  }, props.delay);
});
</script>
