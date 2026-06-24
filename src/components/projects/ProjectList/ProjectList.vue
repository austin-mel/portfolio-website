<script setup lang="ts">
import { computed } from 'vue';
import SVGIcons from '@/assets/SVGIcons.vue';
import type { ProjectFilter, ProjectFilterId, ProjectRegistryEntry, ProjectTagType } from '@/components/projects/projectRegistry';

const props = defineProps<{
  projects: ProjectRegistryEntry[];
  filters: ProjectFilter[];
  activeFilter: ProjectFilterId;
}>();

const emit = defineEmits<{
  'update:activeFilter': [filter: ProjectFilterId];
  openProject: [slug: string];
}>();

const visibleProjects = computed(() =>
  props.activeFilter === 'all'
    ? props.projects
    : props.projects.filter((project) => project.filter === props.activeFilter)
);

const projectTagLabels: Record<ProjectTagType, string> = {
  report: 'Report',
  dashboard: 'Dashboard',
  liveDemo: 'Live Demo',
  modeling: 'Modeling',
  simulation: 'Simulation',
};

const projectTagClasses: Record<ProjectTagType, string> = {
  report: 'border-gold/30 bg-[#fff7dc] text-[#8a6500]',
  dashboard: 'border-accent2/20 bg-accent-pale text-accent',
  liveDemo: 'border-[#147a4d]/25 bg-[#e9f8ef] text-[#147a4d]',
  modeling: 'border-purple-200 bg-purple-50 text-purple-700',
  simulation: 'border-orange-200 bg-orange-50 text-orange-700',
};
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2 border-b border-border bg-cream px-4 py-6 xs:px-6 md:px-12">
      <button
        v-for="filter in filters"
        :key="filter.id"
        class="rounded-full border-[1.5px] px-[18px] py-[7px] text-xs font-medium transition-colors"
        :class="
          activeFilter === filter.id
            ? 'border-ink bg-ink text-white'
            : 'border-border2 bg-transparent text-ink3 hover:border-ink3 hover:bg-cream2 hover:text-ink'
        "
        type="button"
        @click="emit('update:activeFilter', filter.id)"
      >
        {{ filter.label }}
      </button>
    </div>

    <section class="bg-cream px-4 pb-16 xs:px-6 md:px-12">
      <div class="mx-auto w-[min(1100px,100%)]">
        <button
          v-for="project in visibleProjects"
          :key="project.slug"
          class="group grid w-full grid-cols-[44px_1fr_40px] items-center gap-4 border-b border-border py-7 text-left transition-colors hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-accent2/30 md:grid-cols-[52px_1fr_auto_40px] md:gap-6"
          type="button"
          @click="emit('openProject', project.slug)"
        >
          <div class="font-mono text-[11px] tracking-[1px] text-ink4 md:text-right">
            {{ project.num }}
          </div>

          <div class="min-w-0">
            <h2 class="font-display text-lg font-bold leading-tight tracking-normal text-ink transition-colors group-hover:text-accent">
              {{ project.title }}
            </h2>

            <p class="mt-1 text-[13px] font-light leading-[1.55] text-ink3">
              {{ project.short }}
            </p>

            <div class="mt-2 flex flex-wrap gap-1.5">
              <span
                v-for="item in project.stack"
                :key="item"
                class="rounded border border-border bg-cream2 px-2 py-[2px] text-[10px] text-ink4"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <div class="hidden flex-col items-end gap-2 md:flex">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border px-3 py-1 text-[11.5px] font-medium"
              :class="projectTagClasses[tag]"
            >
              {{ projectTagLabels[tag] }}
            </span>
          </div>

          <div class="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-border bg-cream2 text-[15px] text-ink3 transition-all group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <SVGIcons name="arrowForward" class="h-4 w-4" />
          </div>
        </button>
      </div>
    </section>
  </div>
</template>
