<template>
  <div
    class="flex-y flex-col justify-between min-h-screen h-full w-full dark:(bg-black selection:bg-white/10 text-white) text-black selection:bg-black/10 z-1 font-sans sm:px-15"
  >
    <div class="z-2 w-full">
      <div class="relative w-full flex-y">
        <TopGradient />

        <div class="absolute flex-y justify-center top-3 right-0 left-0 z-10">
          <ThemeSwitcher class="animate-fade-in-down animate-ease animate-duration-700" />
        </div>
      </div>
    </div>

    <NuxtPage />

    <footer class="my-10 text-center text-gray-500 dark:text-gray-500 w-full max-w-sm px-6 sm:px-6">
      <LangSwitcher class="mx-a animate-fade-in animate-ease animate-duration-1000" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import '@unocss/reset/tailwind.css'; // Import the style reset

useHead({
  titleTemplate: title => `${title} • mttdbl.me`,
  link: [
    { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', href: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
});

useSeoMeta({
  title: 'Matteo Diblas',
  ogTitle: 'Matteo Diblas',
  description: 'My personal corner on the internet.',
  ogDescription: 'My personal corner on the internet.',
  ogImage: '/favicon-32x32.png',
  ogUrl: 'https://mttdbl.me',
  twitterTitle: 'Matteo Diblas',
  twitterDescription: 'My personal corner on the internet.',
  twitterImage: '/favicon-32x32.png'
});
</script>

<style>
:root.dark {
  color-scheme: dark;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.fade-in-bottom > * {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}
</style>
