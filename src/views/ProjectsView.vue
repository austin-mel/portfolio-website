<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import SVGIcons from '@/assets/SVGIcons.vue';

const router = useRouter();

const activeFilter = ref('all');

const filters = [
  { id: 'all', label: 'All' },
  { id: 'modeling', label: 'Modeling' },
  { id: 'product', label: 'Product' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'analysis', label: 'Analysis' },
];

const projectPrompts = [
  {
    slug: 'pharmatrial',
    num: '02',
    title: 'Pharmatrial Clinical Trial Portal',
    short: 'Role-aware Vue prototype for blinded clinical trial collaboration.',
    category: 'Front-End Systems Prototype',
    filter: 'product',
    badge: 'Product',
    stack: ['Vue', 'TypeScript', 'Pinia', 'Tailwind'],
    sourceMockup: 'src/reference/pharmatrial-project-mockup.html',
    summary:
      'Show a role-aware clinical trial operations prototype with lifecycle guardrails, privacy boundaries, and blinded assignment.',
  },
];

const visibleProjects = computed(() =>
  activeFilter.value === 'all'
    ? projectPrompts
    : projectPrompts.filter((project) => project.filter === activeFilter.value)
);

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
        @click="activeFilter = filter.id"
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
          @click="openProject(project.slug)"
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

          <div class="hidden flex-col items-end gap-1.5 md:flex">
            <span class="rounded-full border border-accent2/20 bg-accent-pale px-2.5 py-[3px] text-[10px] font-medium text-accent">
              {{ project.badge }}
            </span>

            <span class="rounded-full border border-border bg-white px-2.5 py-[3px] text-[10px] font-medium text-ink3">
              Case study
            </span>
          </div>

          <div class="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-border bg-cream2 text-[15px] text-ink3 transition-all group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <SVGIcons name="arrowForward" class="h-4 w-4" />
          </div>
        </button>
      </div>
    </section>
  </main>
</template>