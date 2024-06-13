<template>
  <!-- prettier-ignore -->
  <span class="font-(mono !medium) dark:text-white text-black whitespace-nowrap">
    <ClientOnly fallbackTag="span">
      <NuxtLink to="mailto:hello@mttdbl.me">hello@mttdbl.me</NuxtLink>

      <template #fallback>
        hello<Icon name="ion:ios-at" class="w-4.5 h-4.5" />mttdbl.me
      </template>
    </ClientOnly>
  </span>
</template>
