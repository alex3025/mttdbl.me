// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxtjs/plausible'],

  css: ['@unocss/reset/tailwind.css'],

  // @nuxtjs/color-mode (UnoCSS compat)
  colorMode: {
    classSuffix: ''
  },

  // @nuxtjs/i18n
  i18n: {
    defaultLocale: 'it',
    strategy: 'no_prefix',
    locales: [
      { code: 'it', iso: 'it-IT', name: 'Italiano' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ]
  },

  routeRules: {
    // Socials redirects
    '/linkedin': { redirect: 'https://linkedin.com/in/mttdbl' },
    '/github': { redirect: 'https://github.com/alex3025' },
    '/reddit': { redirect: 'https://reddit.com/user/alex3025' },
    '/soundcloud': { redirect: 'https://soundcloud.com/alex3025' },
    '/spotify': { redirect: 'https://open.spotify.com/artist/4hlZWyCtkVh29vqbs34Naa' },
    '/instagram': { redirect: 'https://instagram.com/mttdbl' },
    '/paypal': { redirect: 'https://paypal.me/alex3025' }
  }
});
