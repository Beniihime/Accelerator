import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'

import * as bootstrap from 'bootstrap';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
