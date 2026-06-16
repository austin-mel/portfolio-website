<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ProjectList } from '@/components/projects';
import { projectFilters, projects } from '@/components/projects/projectRegistry';
import type { ProjectFilterId } from '@/components/projects/projectRegistry';

const router = useRouter();

const activeFilter = ref<ProjectFilterId>('all');

const openProject = (slug: string) => {
  router.push(`/projects/${slug}`);
};
</script>

<template>
  <main class="min-h-screen bg-cream pt-[75px]">
    <section class="relative overflow-hidden border-b border-border bg-cream2 px-4 py-16 xs:px-6 md:px-12 md:py-20">
      <div
        class="absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full border border-accent2/[0.08]"
        aria-hidden="true"
      ></div>

      <div
        class="absolute bottom-2 left-[60px] h-[130px] w-[180px] opacity-30 [background-image:radial-gradient(circle,rgba(29,78,216,0.18)_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      ></div>

      <div class="relative mx-auto w-[min(1100px,calc(100%_-_48px))]">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[22px] before:bg-accent before:content-['']">
          Selected Work
        </div>

        <h1 class="font-display text-[52px] font-black leading-none tracking-normal text-ink">
          Projects
        </h1>

        <p class="mt-2 text-[15px] font-light text-ink3">
          Click any project to open its full case study.
        </p>
      </div>
    </section>

    <ProjectList
      v-model:active-filter="activeFilter"
      :filters="projectFilters"
      :projects="projects"
      @open-project="openProject"
    />
  </main>
</template>
