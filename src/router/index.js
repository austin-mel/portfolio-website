import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, ProjectsView, ResumeView, ContactView } from '@/views';

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
      component: ProjectsView,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView,
    },
        {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
 
export default router;
