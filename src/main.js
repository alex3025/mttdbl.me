import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Index from './pages/Index.vue'
import CurriculumVitae from './pages/CurriculumVitae.vue'

import './index.css'


const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/cv',
    component: CurriculumVitae
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);

app.use(router)
app.use(BootstrapIconsPlugin);

app.mount('#app');
