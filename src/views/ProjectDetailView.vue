<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { getProjectComponent } from '@/components/projects/projectRegistry';

const route = useRoute();

const slug = computed(() => String(route.params.slug ?? ''));

const ProjectComponent = computed(() => {
  return getProjectComponent(slug.value);
});
</script>

<template>
  <component :is="ProjectComponent" v-if="ProjectComponent" />

  <main v-else class="min-h-screen bg-cream pt-[120px]">
    <section class="mx-auto w-[min(900px,calc(100%_-_48px))] py-20">
      <p class="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-accent">
        Project Not Found
      </p>

      <h1 class="font-display text-4xl font-bold text-ink">
        This project page does not exist yet.
      </h1>

      <p class="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-ink3">
        The route loaded correctly, but no project detail component has been registered for
        <strong>{{ slug }}</strong>.
      </p>

      <RouterLink
        class="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent"
        to="/projects"
      >
        Back to projects
      </RouterLink>
    </section>
  </main>
</template>
