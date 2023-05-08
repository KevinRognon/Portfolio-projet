import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Homecomp from './components/Home-comp.vue';
import Projects_Page from './components/Projects_Page.vue';
import Contact_Page from './components/Contact_Page.vue';

const routes = [
    { path: '/', component: Homecomp },
    { path: '/projects', component: Projects_Page },
    { path: '/contact', component: Contact_Page },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
