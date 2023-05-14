import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Homecomp from './components/Home-comp.vue';
import Projects_Page from './components/Projects_Page.vue';
import Contact_Page from './components/Contact_Page.vue';
import PageNoteFound from './components/PageNotFound.vue';

const routes = [
    { path: '/', component: Homecomp },
    { path: '/projects', component: Projects_Page },
    { path: '/contact', component: Contact_Page },
    { path: '/404', component: PageNoteFound },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
