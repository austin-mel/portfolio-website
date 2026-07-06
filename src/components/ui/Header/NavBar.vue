<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { NavItem } from '@/types/types';
import { HeaderLogo, HireMe } from '@/components';

const route = useRoute();
const router = useRouter();

const items: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

const isActive = (path: string) => {
  if (path === '/projects') {
    return route.path === path || route.path.startsWith('/projects/');
  }

  return route.path === path;
};
</script>

<template>
<header
  class="fixed top-0 left-0 right-0 z-[100] grid grid-cols-3 items-center h-[75px] px-4 sm:px-8 lg:px-12 bg-[rgba(250,248,244,0.88)] backdrop-blur-[20px] border-b border-border"
>
  <HeaderLogo class="hidden sm:flex justify-self-start" />

  <nav class="col-span-3 flex max-w-full justify-self-stretch justify-start gap-[2px] overflow-x-auto no-scrollbar sm:col-span-1 sm:justify-self-center sm:justify-center">
    <button
      v-for="item in items"
      :key="item.id"
      @click="router.push(item.path)"
      class="whitespace-nowrap rounded-[8px] px-2 py-[7px] font-sans text-[12px] font-normal transition-colors duration-150 xxs:px-3 xxs:text-[13px] sm:px-4"
      :class="[
        isActive(item.path)
          ? 'bg-accent-pale text-accent font-medium'
          : 'hover:bg-cream2 hover:text-ink text-ink3'
      ]"
    >
      {{ item.label }}
    </button>
  </nav>

  <HireMe class="hidden lg:flex justify-self-end" />
</header>
</template>
