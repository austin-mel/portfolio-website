<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { useScrollObserver } from '@/composables/useScrollObserver';
import SVGIcons from '@/assets/SVGIcons.vue';
import { ProjectTags } from '@/components/projects/ProjectTags';
import { projects as projectRegistryProjects } from '@/components/projects/projectRegistry';
import baselinePreview from '@/assets/projects/baseline/model-fit-kde-log-skew-t.png';
import pharmaPreview from '@/assets/projects/pharmatrial/bavaria-dash.png';
import empathyPreview from '@/assets/projects/scicomm/model-jefferson-ceiling-effect.png';
import dataguardPreview from '@/assets/projects/dataguard/workspace-overview.png';

const router = useRouter();

const featuredProjectSlugs = [
  'baseline-noise',
  'pharmatrial',
  'dataguard',
  'science-communication-empathy',
] as const;

type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];

const getFeaturedProject = (slug: FeaturedProjectSlug) => {
  const project = projectRegistryProjects.find((entry) => entry.slug === slug);

  if (!project) {
    throw new Error(`Missing featured project: ${slug}`);
  }

  return {
    ...project,
  };
};

const featuredProjects = [
  {
    ...getFeaturedProject('baseline-noise'),
    image: baselinePreview,
    imageAlt: 'Baseline noise distributions with fitted curves across six dwell times.',
    previewLabel: 'From measured noise to a statistical model',
    theme: 'noise',
  },
  {
    ...getFeaturedProject('dataguard'),
    image: dataguardPreview,
    imageAlt: 'Dataset quality portal showing a custom created ruleset to identify data issues.',
    previewLabel: 'Inside the dataguard workspace',
    theme: 'portal',
  },
  {
    ...getFeaturedProject('science-communication-empathy'),
    image: empathyPreview,
    imageAlt: 'Paired pre- and post-intervention Toronto empathy scores by study group.',
    previewLabel: 'A closer look at surveyed empathy',
    theme: 'empathy',
  },
];

useScrollObserver('.anim-up,.feat-card');
</script>

<template>
  <section class="relative overflow-hidden bg-cream px-4 py-20 xs:px-6 xs:py-24 md:px-12 md:py-32">

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
      <div class="grid gap-5 lg:grid-cols-3 lg:gap-6">
        <RouterLink
          v-for="(project, index) in featuredProjects"
          :key="project.slug"
          :to="'/projects/' + project.slug"
          class="feat-card group grid min-w-0 overflow-hidden rounded-2xl border border-border bg-white text-left text-ink opacity-0 translate-y-4 transition-all duration-500 ease-out hover:border-accent2/40 hover:shadow-[0_16px_40px_rgba(13,17,23,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2 focus-visible:ring-offset-4 sm:grid-cols-2 lg:flex lg:flex-col [&.vis]:translate-y-0 [&.vis]:opacity-100"
          :aria-labelledby="'featured-' + project.slug"
        >
          <div class="project-preview" :class="'project-preview--' + project.theme">
            <div class="mb-4 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[1.4px]">
              <span>{{ project.category }}</span>
              <span class="opacity-60">0{{ index + 1 }}</span>
            </div>
            <div class="preview-frame">
              <img
                :src="project.image"
                :alt="project.imageAlt"
                class="preview-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p class="mt-3 text-[11px] font-medium tracking-wide">{{ project.previewLabel }}</p>
          </div>
          <div class="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
            <ProjectTags :tags="project.tags" size="sm" class="mb-3" />
            <h3 :id="'featured-' + project.slug" class="font-display text-xl font-bold leading-snug transition-colors group-hover:text-accent2">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-[13px] font-light leading-relaxed text-ink3">{{ project.short }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span v-for="item in project.stack.slice(0, 3)" :key="item" class="rounded border border-border bg-cream px-2 py-1 text-[10px] text-ink3">{{ item }}</span>
            </div>
            <div class="mt-auto pt-5">
              <div class="flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-accent">
                <span>View project</span>
                <SVGIcons name="arrowForward" class="h-4 w-4 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.project-preview {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: #e7edf7;
  color: #102c57;
}

.project-preview--portal {
  background: #ede8df;
  color: #594635;
}

.project-preview--empathy {
  background: #eee8f2;
  color: #61456d;
}

.preview-frame {
  height: 180px;
  overflow: hidden;
  border: 1px solid rgb(13 17 23 / 8%);
  border-radius: 6px;
  background: white;
  box-shadow: 0 8px 18px rgb(13 17 23 / 8%);
  transition: transform 350ms ease;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-preview--portal .preview-image {
  object-fit: cover;
  object-position: left top;
}

.feat-card:hover .preview-frame,
.feat-card:focus-visible .preview-frame {
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .feat-card,
  .preview-frame,
  .feat-card :deep(svg) {
    transition: none;
    transform: none;
  }
}
</style>
