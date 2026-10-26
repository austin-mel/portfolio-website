import { createRouter, createWebHistory } from 'vue-router';
import {
  HomeView,
  ProjectDetailView,
  ProjectsView,
  ResumeView,
  ContactView,
} from '@/views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:slug',
      name: 'ProjectDetail',
      component: ProjectDetailView,
      props: true,
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

  scrollBehavior(to) {
    // Native section links already scroll to their targets and honor scroll margins.
    // Resetting them to the top here overrides that behavior in Firefox and WebKit.
    if (to.hash) return false;

    return { top: 0 };
  },
});

export default router;
