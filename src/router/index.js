import { createRouter, createWebHistory } from 'vue-router'
import Projects from '@/views/Projects.vue'
import Resume from '@/views/Resume.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
 
export default router;
