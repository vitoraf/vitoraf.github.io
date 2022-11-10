import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/css/main.css"
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(far)
createApp(App)
    .use(store)
    .component("fa", FontAwesomeIcon)
    .mount('#app')

// 