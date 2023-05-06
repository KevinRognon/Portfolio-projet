import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Homecomp from './components/Home-comp.vue'
import Projectscomp from './components/Projects-comp.vue'

const routes = [
    { path: '/', component: Homecomp },
    { path: '/projects', component: Projectscomp }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
