import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Homecomp from './components/Home-comp.vue'

const routes = [
    { path: '/', component: Homecomp },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
