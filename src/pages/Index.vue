<template>
  <div class="relative py-3 px-2 sm:max-w-xl sm:mx-auto animate__animated animate__flipInY">
    <div class="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl gradient hidden sm:block"></div>
    <div class="relative px-4 py-8 bg-gray-50 sm:shadow-lg sm:border border-gray-300 dark:border-gray-750 sm:rounded-2xl sm:p-10 select-none dark:bg-gray-850 text-gray-900 dark:text-gray-100">
      <div class="max-w-xl mx-auto">
        <div>
          <h1 class="text-4xl font-semibold">Ciao! 👋</h1>
          <p class="text-2xl font-medium">
            Mi chiamo <span id="nameTyper" class="font-mono font-normal italic"></span>
          </p>
          <p class="text-xl mt-2 dark:text-gray-300 text-gray-725">
            Adoro l'informatica e la musica elettronica.
          </p>
        </div>
        <div class="mt-9">
          <p class="dark:text-gray-525 text-gray-500 uppercase text-xs font-medium">
            Mi trovi anche su
          </p>
          <ul class="mt-2 flex justify-between items-center">
            <div class="flex space-x-3 items-center">
              <Social name="GitHub" link="https://github.com/alex3025"><b-icon-github /></Social>
              <Social name="Instagram" link="https://instagram.com/mttdbl"><b-icon-instagram /></Social>
              <Social name="Twitch" link="https://twitch.tv/itzalex3025"><b-icon-twitch /></Social>
            </div>

            <Social name="E-Mail" link="mailto:alex3025game@gmail.com"><b-icon-envelope-fill /></Social>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";
import Social from "../components/Social.vue"

export default {
  components: { Social },
  mounted () {
    new TypeIt("#nameTyper", {
      speed: 120,
      lifeLike: true,
      startDelay: 300
    })
    .pause(550)
    .type('alex3025', {delay: 100})
    .pause(300)
    .delete(8, {speed: 125, delay: 100})
    .type('Matteo Diblas.')
    .go();
  }
}
</script>

<style>
@import "../../node_modules/animate.css/animate.min.css";
</style>