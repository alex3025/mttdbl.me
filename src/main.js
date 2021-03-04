import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(BootstrapIconsPlugin)
app.mount('#app')
