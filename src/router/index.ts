import { createRouter, createWebHistory } from 'vue-router'
import Install from '../components/Install.vue'
import Redirect from "../components/Redirect.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Install
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: Redirect
    }
  ]
})

export default router
