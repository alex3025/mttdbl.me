<template>
  <main>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-dark">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl gradient"></div>
        <div class="relative px-4 py-8 bg-white shadow-lg sm:rounded-2xl sm:p-11 dark:bg-dark-2 dark:text-gray-100">
          <div class="max-w-xl mx-auto">
            <div>
              <h1 class="text-4xl font-medium">Ciao! 👋</h1>
              <p class="text-2xl">
                Mi chiamo <span id="nameTyper" class="font-mono"></span>
              </p>
            </div>
            <p class="font-light text-xl mt-6">
              Adoro l'informatica e la musica elettronica.
            </p>
            <div class="mt-7">
              <p class="text-gray-500 dark:text-dark-light">
                Mi trovi anche su
              </p>
              <ul class="mt-2">
                <Social name="GitHub" link="https://github.com/alex3025"><b-icon-github /></Social>
                <Social name="Instagram" link="https://instagram.com/mttdbl"><b-icon-instagram /></Social>
                <Social name="Twitch" link="https://twitch.tv/itzalex3025"><b-icon-twitch /></Social>
                <Social name="E-Mail" link="mailto:alex3025game@gmail.com" class="float-right"><b-icon-envelope-fill /></Social>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TypeIt from "typeit";
import Social from "./components/Social.vue"

export default {
  components: { Social },
  mounted () {
    new TypeIt("#nameTyper", {
      speed: 120,
      lifeLike: true,
      startDelay: 300
    })
    .type('alex3025', {delay: 100})
    .pause(200)
    .delete(8, {speed: 125, delay: 100})
    .type('Matteo Diblas.')
    .go();
  }
}
</script>
