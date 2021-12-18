<template>
  <main class="min-h-screen bg-gray-50 sm:bg-gray-100 dark:bg-gray-850 py-6 flex flex-col justify-center sm:py-12 sm:dark:bg-gray-950 overflow-hidden">
    <canvas id="canvas" class="absolute animate__animated animate__fadeIn animate__slow h-full w-full object-cover" />
    <router-view />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const ctx = document.getElementById('canvas').getContext('2d')

  const W = window.innerWidth
  const H = window.innerHeight
  canvas.width = W
  canvas.height = H

  const particles = []

  for (let i = 0; i < 100; i++)
    particles.push(new create_particle())

  function create_particle() {
    this.x = Math.random() * W
    this.y = Math.random() * H

    this.vx = Math.random() * 4 - 1
    this.vy = Math.random() * 4 + 1

    this.color = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + Math.random() * 1 +')'

    this.radius = Math.random() * 1 + 2
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let t = 0; t < particles.length; t++) {

      const p = particles[t]

      ctx.beginPath()
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
      gradient.addColorStop(1, p.color)
      gradient.addColorStop(1, 'rgb(66, 66, 66)')

      ctx.fillStyle = gradient
      ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false)

      ctx.fill()

      p.x += p.vx
      p.y += p.vy

      if (p.x < -50) p.x = W + 50
      if (p.y < -50) p.y = H + 50
      if (p.x > W + 50) p.x = -50
      if (p.y > H + 50) p.y = -50
    }
  }
  setInterval(draw, 33)
})
</script>

<style>
@import "../node_modules/animate.css/animate.min.css";
</style>
