<template>
  <div class="relative py-3 px-2 sm:max-w-xl sm:mx-auto animate__animated animate__flipInY">
    <div class="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl gradient hidden sm:block"></div>
    <div class="relative px-4 py-8 sm:bg-gray-50 sm:shadow-lg sm:border border-gray-300 dark:border-gray-750 sm:rounded-2xl sm:p-10 select-none sm:dark:bg-gray-850 bg-transparent text-gray-800 dark:text-gray-75">
      <div class="sm:max-w-xl max-w-md mx-auto">
        <div class="text-center sm:text-left dark:drop-shadow sm:drop-shadow-none">
          <h1 class="sm:text-4xl text-5xl font-bold flex items-center justify-center sm:justify-start dark:drop-shadow-lg">
            <span class="gradient text gradient-none">{{ randomGreeting }}!</span>
            <span v-html="emoji"></span>
          </h1>
          <p class="flex flex-wrap justify-center items-center sm:justify-start text-2xl mt-3.5 sm:mt-1">
            <span class="mr-1.5">
              Mi chiamo
            </span>
            <span id="nameTyper" class="font-mono font-medium"></span>
          </p>
          <p class="text-xl mt-3.5 dark:text-gray-325 text-gray-625">
            Adoro l'informatica e la musica elettronica.
          </p>
        </div>
        <div class="mt-9">
          <p class="dark:text-gray-525 text-gray-500 uppercase text-sm sm:text-xs font-medium">
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

<script setup>
import { onMounted, computed } from 'vue'
import TypeIt from "typeit"
import twemoji from "twemoji"

import Social from "../components/Social.vue"

onMounted(() => {
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
})

const randomGreeting = computed(() => {
  const greetings = ['Ciao', 'We-we', 'Salve', 'Sciao', 'Ehilà']
  return greetings[Math.floor(Math.random() * greetings.length)]
})

const emoji = computed(() => {
  return twemoji.parse('🎄', { size: 'svg', ext: '.svg' })
})
</script>
