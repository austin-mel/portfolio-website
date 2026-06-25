<script setup lang="ts">
import { useRouter } from 'vue-router';
import { GeoLayer, ProjectCanvas } from '@/components/ui';
import { useScrollObserver } from '@/composables/useScrollObserver';
import SVGIcons from '@/assets/SVGIcons.vue';
import { ProjectTags } from '@/components/projects/ProjectTags';
import { projects as projectRegistryProjects } from '@/components/projects/projectRegistry';
import type { DrawFnName } from '@/types/types';

const router = useRouter();

const featuredProjectSlugs = [
  'baseline-noise',
  'pharmatrial',
  'science-communication-empathy',
] as const;

type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];

const featuredProjectVisuals: Record<
  FeaturedProjectSlug,
  { color: string; drawFn: DrawFnName }
> = {
  'baseline-noise': {
    color: '#7c3aed',
    drawFn: 'drawDistribution',
  },
  pharmatrial: {
    color: '#1d4ed8',
    drawFn: 'drawClinicalTrial',
  },
  'science-communication-empathy': {
    color: '#0284c7',
    drawFn: 'drawSurveyAnalysis',
  },
};

const featuredShapes = [
  { type: 'ring' as const, style: { width: '400px', height: '400px', bottom: '-150px', right: '-100px', borderColor: 'rgba(29,78,216,0.07)' } },
  { type: 'square' as const, style: { width: '70px', height: '70px', top: '15%', left: '3%', opacity: '.5' } },
  { type: 'dotGrid' as const, style: { width: '140px', height: '100px', top: '80px', left: '60px', opacity: '.35' } },
];

const getFeaturedProject = (slug: FeaturedProjectSlug) => {
  const project = projectRegistryProjects.find((entry) => entry.slug === slug);

  if (!project) {
    throw new Error(`Missing featured project: ${slug}`);
  }

  return {
    ...project,
    ...featuredProjectVisuals[slug],
  };
};

const featuredHero = getFeaturedProject('baseline-noise');
const featuredProduct = getFeaturedProject('pharmatrial');
const featuredAnalysis = getFeaturedProject('science-communication-empathy');

const openProject = (slug: string) => {
  router.push(`/projects/${slug}`);
};

useScrollObserver('.anim-up,.feat-card');
</script>

<template>
  <section class="relative overflow-hidden bg-cream px-4 py-20 xs:px-6 xs:py-24 md:px-12 md:py-32">
    <GeoLayer :shapes="featuredShapes" />

    <div class="relative mx-auto max-w-[1100px]">
      <div class="mb-8 flex flex-col gap-3 xs:mb-10 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="anim-up translate-y-[18px] font-display text-[34px] font-bold leading-tight text-ink opacity-0 transition-all duration-[600ms] ease-out xs:text-[40px] sm:text-[44px] [&.vis]:translate-y-0 [&.vis]:opacity-100">Featured work</h2>
        <button
          class="anim-up flex w-fit translate-y-[18px] items-center gap-1.5 border-none bg-transparent text-[13px] font-medium text-accent opacity-0 transition-all duration-[600ms] ease-out hover:gap-2.5 [&.vis]:translate-y-0 [&.vis]:opacity-100"
          type="button"
          @click="router.push('/projects')"
        >
          See all projects
          <SVGIcons name="arrowForward" class="h-3.5 w-3.5" />
        </button>
      </div>

      <div class="grid gap-4 xs:gap-5 lg:grid-cols-[1.3fr_1fr] lg:gap-6">
        <button
          class="feat-card w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white text-left opacity-0 translate-y-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent2 hover:shadow-[0_16px_48px_rgba(13,17,23,0.15)] focus:outline-none focus:ring-2 focus:ring-accent2/40 sm:rounded-2xl [&.vis]:translate-y-0 [&.vis]:opacity-100"
          type="button"
          @click="openProject(featuredHero.slug)"
        >
          <div class="flex h-[160px] items-center justify-center overflow-hidden bg-cream2 p-3 xs:h-[180px] sm:h-[200px] sm:p-4">
            <ProjectCanvas :draw-fn="featuredHero.drawFn" :color="featuredHero.color" :height="200" />
          </div>
          <div class="p-4 xs:p-5 sm:p-6">
            <ProjectTags :tags="featuredHero.tags" size="sm" class="mb-2.5" />
            <div class="mb-1.5 font-display text-[17px] font-bold leading-snug text-ink xs:text-lg">{{ featuredHero.title }}</div>
            <div class="text-[13px] font-light leading-relaxed text-ink3">{{ featuredHero.short }}</div>
            <div class="mt-3 flex max-w-full flex-nowrap gap-1.5 overflow-x-auto pb-1">
              <span v-for="t in featuredHero.stack.slice(0, 4)" :key="t" class="shrink-0 rounded border border-border bg-cream2 px-2 py-[2px] text-[10px] text-ink3">{{ t }}</span>
            </div>
          </div>
        </button>

        <div class="flex flex-col gap-4 xs:gap-5 lg:gap-6">
          <button
            class="feat-card w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white text-left opacity-0 translate-y-4 delay-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent2 hover:shadow-[0_16px_48px_rgba(13,17,23,0.15)] focus:outline-none focus:ring-2 focus:ring-accent2/40 sm:rounded-2xl [&.vis]:translate-y-0 [&.vis]:opacity-100"
            type="button"
            @click="openProject(featuredProduct.slug)"
          >
            <div class="flex h-[110px] items-center justify-center overflow-hidden bg-cream2 p-3 xs:h-[120px]">
              <ProjectCanvas :draw-fn="featuredProduct.drawFn" :color="featuredProduct.color" :height="120" />
            </div>
            <div class="p-4 xs:p-5 sm:p-6">
              <ProjectTags :tags="featuredProduct.tags" size="sm" class="mb-2.5" />
              <div class="mb-1.5 font-display text-[17px] font-bold leading-snug text-ink xs:text-lg">{{ featuredProduct.title }}</div>
              <div class="text-[13px] font-light leading-relaxed text-ink3">{{ featuredProduct.short }}</div>
            </div>
          </button>

          <button
            class="feat-card w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white text-left opacity-0 translate-y-4 delay-200 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent2 hover:shadow-[0_16px_48px_rgba(13,17,23,0.15)] focus:outline-none focus:ring-2 focus:ring-accent2/40 sm:rounded-2xl [&.vis]:translate-y-0 [&.vis]:opacity-100"
            type="button"
            @click="openProject(featuredAnalysis.slug)"
          >
            <div class="flex h-[110px] items-center justify-center overflow-hidden bg-cream2 p-3 xs:h-[120px]">
              <ProjectCanvas :draw-fn="featuredAnalysis.drawFn" :color="featuredAnalysis.color" :height="120" />
            </div>
            <div class="p-4 xs:p-5 sm:p-6">
              <ProjectTags :tags="featuredAnalysis.tags" size="sm" class="mb-2.5" />
              <div class="mb-1.5 font-display text-[17px] font-bold leading-snug text-ink xs:text-lg">{{ featuredAnalysis.title }}</div>
              <div class="text-[13px] font-light leading-relaxed text-ink3">{{ featuredAnalysis.short }}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
