import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home_comp from './components/Home_comp.vue'
import Projects from './components/Projects.vue'

const routes = [
    { path: '/', component: Home_comp },
    { path: '/projects', component: Projects }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
