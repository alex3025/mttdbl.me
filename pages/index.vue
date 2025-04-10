<template>
  <main class="max-w-5xl w-full space-y-5 z-10 mt-30 sm:mt-0 fade-in-bottom">
    <div class="flex-y flex-col space-y-10 sm:space-y-0 sm:flex-row justify-between">
      <div class="space-y-2.5 sm:space-y-1.5 text-center sm:text-left">
        <div>
          <h1 class="text-4xl sm:text-5xl font-black inline mr-2">Matteo Diblas</h1>
          <p
            class="font-mono text-gray-700 text-xs sm:(text-sm mr-5) inline-block dark:text-gray-500 select-none"
          >
            (he/him)
          </p>
        </div>

        <div>
          <div class="font-mono dark:text-gray-250 text-gray-600">
            <i>a.k.a.</i>
            <TextScrambler class="ml-2.3 inline" :delay="625">
              <span class="font-medium dark:text-gray-75 text-gray-850">alex3025</span>
            </TextScrambler>
            /
            <TextScrambler class="inline" :delay="625" :speed="200">
              <span class="font-medium dark:text-gray-75 text-gray-850">MTTDBL</span>
            </TextScrambler>
          </div>
        </div>
      </div>

      <ul
        class="flex-y sm:(grid gap-5 grid-cols-3 space-x-0) md:flex dark:text-gray-350 text-gray-800 space-x-4.5"
      >
        <li v-for="social in socials" :key="social.url">
          <NuxtLink
            :to="social.url"
            target="_blank"
            :title="social.name"
            @click="() => useTrackEvent(`Social Click: ${social.name}`)"
            class="kb-focus dark:(hover:text-white focus-visible:text-white) hover:text-black"
          >
            <Icon
              :name="social.icon"
              class="sm:(h-8 w-8) h-10 w-10 transition-colors motion-reduce:transition-none duration-250"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="mx-6 sm:mx-a border-b dark:b-white/10 b-gray-100" />

    <DelayedAnimation
      animation="fadeInUp"
      class="text-gray-800 text-xl dark:text-gray-200 space-y-4.5 px-6 sm:px-0 opacity-0"
    >
      <template v-if="$i18n.locale === 'it'">
        <p>
          Sono un giovane <b>appassionato di tecnologia</b>, nato e cresciuto in Italia.<br />
          La passione per tutto ciò che riguarda il mondo della tecnologia mi accompagna fin da
          quando ero piccolo.
        </p>

        <p>
          Attualmente, mi occupo di <b>configurazione</b> e <b>manutenzione</b> di
          <b>sistemi informatici</b>. <br />
          Nel frattempo, mi dedico anche allo sviluppo di <b>strumenti</b> e <b>applicazioni</b> che
          permettono di <b>automatizzare</b> processi ripetitivi, con l'obiettivo di
          <b>semplificare</b> e <b>velocizzare</b> il mio lavoro e quello degli altri.
        </p>

        <p>
          Quando ho del tempo libero, mi piace <b>suonare</b> la <b>batteria</b> e
          <b>comporre musica elettronica</b>.
        </p>

        <p class="text-base">
          P.S. se vuoi <b>contattarmi</b>, puoi farlo scrivendo un e-mail a <FakeEmail /> oppure
          tramite i miei socials :)
        </p>
      </template>

      <template v-else-if="$i18n.locale === 'en'">
        <p>
          I am a young <b>technology enthusiast</b>, born and raised in Italy.<br />
          My passion for everything related to the tech world has been with me since I was a child.
        </p>

        <p>
          Currently, I am involved in the <b>configuration</b> and <b>maintenance</b> of
          <b>IT infrastructures</b>. <br />
          In the meantime, I also dedicate myself to the development of <b>tools</b> and
          <b>applications</b> that allow me to <b>automate</b> repetitive processes, with the aim of
          <b>simplifying</b> and <b>speeding up</b> my work and that of others.
        </p>

        <p>
          When I have some free time, I like to <b>play</b> the <b>drums</b> and
          <b>compose electronic music</b>.
        </p>

        <p class="text-base">
          P.S. if you want to <b>contact me</b>, you can do so by sending an email to
          <FakeEmail /> or through my social medias :)
        </p>
      </template>
    </DelayedAnimation>
  </main>
</template>

<script setup lang="ts">
const socials = [
  {
    name: 'LinkedIn',
    url: '/linkedin',
    icon: 'uil:linkedin'
  },
  {
    name: 'GitHub',
    url: '/github',
    icon: 'uil:github'
  },
  {
    name: 'Reddit',
    url: '/reddit',
    icon: 'ion:social-reddit'
  },
  {
    name: 'SoundCloud',
    url: '/soundcloud',
    icon: 'ph:soundcloud-logo-fill'
  },
  {
    name: 'Spotify',
    url: '/spotify',
    icon: 'ri:spotify-fill'
  },
  {
    name: 'Instagram',
    url: '/instagram',
    icon: 'uil:instagram'
  },
  {
    name: 'PayPal',
    url: '/paypal',
    icon: 'ri:paypal-fill'
  }
];

useHead({
  title: 'Matteo Diblas'
});
</script>

<style scoped>
/* Highlighted words */
b {
  @apply font-semibold dark:text-white text-black;
}
</style>
