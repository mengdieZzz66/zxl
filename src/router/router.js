import { createWebHistory, createRouter } from "vue-router"

import one from '../components/one.vue'
import two from '../components/two.vue'

const routes = [
    { path: '/one', name: '/one', component: one },
    { path: '/two', name: '/two', component: two }
]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})