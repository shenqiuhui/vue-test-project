import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

window.onerror = function (err) {
  console.log(['https://stackoverflow.com/search?q=[js]+' + err])
}

createApp(App).use(store).use(router).mount('#app')
