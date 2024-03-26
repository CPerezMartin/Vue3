import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
// app.use(VueQueryPlugin) // Esto es para usarlo con las opciones por defecto
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 120,
        refetchOnReconnect: 'always'
      }
    }
  }
})
app.use(router)

app.mount('#app')
