import { createRouter, createWebHistory } from 'vue-router'
import Projects from '@/views/Projects.vue'
import Resume from '@/views/Resume.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
})

export default router
