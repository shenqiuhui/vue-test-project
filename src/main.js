import { createApp } from 'vue'
import Element3 from 'element3'
import App from './App.vue'
import store from './store'
import router from './router'

import 'element3/lib/theme-chalk/index.css'

window.onerror = function (err) {
  console.log(['https://stackoverflow.com/search?q=[js]+' + err])
}

createApp(App).use(store).use(router).use(Element3).mount('#app')
