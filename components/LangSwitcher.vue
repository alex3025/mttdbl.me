<template>
  <div class="flex-y relative border rd-full px-4 py-2 dark:b-white/10 b-black/10 max-w-max">
    <span
      class="absolute dark:bg-white/13 bg-black/10 h-7 w-11 rd-full z-5 left-1 transition-transform motion-reduce:transition-none duration-200"
      :class="`translate-x-${langs.map(lang => lang.code).indexOf($i18n.locale) * 10}`"
    />

    <div class="space-x-5 z-10 leading-0">
      <button
        v-for="lang in langs"
        :key="lang.code"
        @click="$i18n.setLocale(lang.code)"
        class="kb-focus group"
      >
        <Icon
          :name="lang.icon"
          class="h-5 w-5 dark:drop-shadow-lg group-focus-visible:scale-110 group-hover:scale-110 group-active:scale-95 transition-transform motion-reduce:transition-none duration-200"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const langs = [
  {
    code: 'it',
    icon: 'twemoji:flag-italy'
  },
  {
    code: 'en',
    icon: 'twemoji:flag-united-kingdom'
  }
];
</script>
