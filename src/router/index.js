import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/Main.vue'
import DashboardLayout from '../layouts/Dashboard.vue'
import NotFound from '../layouts/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      children:[
        {
          path:'/dashboard',
          name:'DashboardView',
          component: () => import('../views/DashboardView.vue')
        }
      ]
    },
    {
      path:'/:pathMatch(.*)*',
      name:'Error',
      component: NotFound
    }
  ]
})

export default router
