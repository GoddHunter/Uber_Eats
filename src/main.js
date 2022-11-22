import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory }from 'vue-router'
import homeScreen from './page/homeScreen.vue'
import RestaurantScreen from './page/RestaurantScreen.vue'

const routes = [
    { path: '/', component: homeScreen },
    { name: 'Restaurant', path: '/restaurant/:name', component: RestaurantScreen },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);

VueApp.use(router)

VueApp.mount('#app');


