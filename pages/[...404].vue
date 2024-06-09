<template>
  <DelayedAnimation animation="fadeInUp" class="flex-y flex-col space-y-10">
    <div class="text-center space-y-2">
      <h1 class="text-7xl font-black">404</h1>
      <p class="text-xl dark:text-gray-350 text-gray-600">{{ t('error') }}</p>
    </div>

    <NuxtLink
      to="/"
      class="flex-y justify-center space-x-2.5 group border rd-lg p-2 w-55 dark:(b-gray-850 hover:bg-gray-975) b-gray-150 hover:bg-gray-50 transition-colors duration-250"
    >
      <Icon name="heroicons:arrow-left-16-solid" class="h-6 w-6" />
      <span>{{ t('mainpage') }}</span>
    </NuxtLink>
  </DelayedAnimation>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
});

useHead({
  title: '404'
});
</script>

<i18n lang="json">
{
  "it": {
    "error": "Questa pagina non esiste.",
    "mainpage": "Pagina principale"
  },
  "en": {
    "error": "This page doesn't exist.",
    "mainpage": "Main page"
  }
}
</i18n>
