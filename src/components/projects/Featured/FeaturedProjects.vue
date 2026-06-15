<script setup lang="ts">
import { useRouter } from 'vue-router';
import { GeoLayer, ProjectCanvas } from '@/components/ui';
import { useScrollObserver } from '@/composables/useScrollObserver';
import SVGIcons from '@/assets/SVGIcons.vue';
import type { Project } from '@/types/types';

const router = useRouter();

const projects: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'Executive KPI Dashboard',
    short: 'Real-time C-suite dashboard replacing 4 weekly reports.',
    desc: 'End-to-end Tableau dashboard consolidating revenue, churn, and funnel metrics. Replaced four separate weekly manual reports, saving ~8 analyst hours per week and enabling real-time decision-making for a $40M product line.',
    cat: 'dashboard',
    badge: { t: 'Dashboard', c: 'b-blue' },
    stack: ['Tableau', 'SQL', 'Snowflake', 'dbt'],
    type: 'Dashboard - Reporting',
    impact: [
      { n: '4', d: 'reports consolidated' },
      { n: '8h', d: 'saved weekly' },
      { n: '60+', d: 'daily users' },
    ],
    hasDemo: true,
    hasReport: true,
    color: '#1d4ed8',
    draw: 'drawDash',
  },
  {
    id: 2,
    num: '02',
    title: 'Customer Data Pipeline',
    short: 'ELT pipeline ingesting 50M+ daily events from 6 sources.',
    desc: 'Production-grade dbt + Airflow ELT pipeline ingesting 50M+ daily events from six data sources into BigQuery. Reduced reporting latency from 24h to under 1h and improved reliability with 200+ dbt tests.',
    cat: 'pipeline',
    badge: { t: 'Pipeline', c: 'b-green' },
    stack: ['dbt', 'Airflow', 'BigQuery', 'Python', 'SQL'],
    type: 'Data Engineering',
    impact: [
      { n: '50M+', d: 'events/day' },
      { n: '23x', d: 'faster refresh' },
      { n: '200+', d: 'dbt tests' },
    ],
    hasDemo: false,
    hasReport: true,
    color: '#16a34a',
    draw: 'drawPipe',
  },
  {
    id: 3,
    num: '03',
    title: 'Churn Prediction Model',
    short: 'XGBoost classifier predicting churn 30 days out - 87% AUC.',
    desc: 'XGBoost binary classifier predicting subscriber churn 30 days in advance. Feature engineering on behavioral, engagement, and billing signals. Served via MLflow; informed retention campaigns that reduced churn by 12%.',
    cat: 'ml',
    badge: { t: 'ML Model', c: 'b-purple' },
    stack: ['Python', 'XGBoost', 'MLflow', 'Pandas', 'SQL'],
    type: 'Machine Learning',
    impact: [
      { n: '87%', d: 'AUC score' },
      { n: '12%', d: 'churn reduction' },
      { n: '30d', d: 'prediction horizon' },
    ],
    hasDemo: false,
    hasReport: true,
    color: '#7c3aed',
    draw: 'drawML',
  },
];

const featuredShapes = [
  { type: 'ring' as const, style: { width: '400px', height: '400px', bottom: '-150px', right: '-100px', borderColor: 'rgba(29,78,216,0.07)' } },
  { type: 'square' as const, style: { width: '70px', height: '70px', top: '15%', left: '3%', opacity: '.5' } },
  { type: 'dotGrid' as const, style: { width: '140px', height: '100px', top: '80px', left: '60px', opacity: '.35' } },
];

const featuredHero = projects.find((p) => p.id === 1)!;
const featuredML = projects.find((p) => p.id === 3)!;
const featuredPipe = projects.find((p) => p.id === 2)!;

const openProject = (id: number) => {
  router.push({ path: '/projects', query: { project: id } });
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
          @click="openProject(featuredHero.id)"
        >
          <div class="flex h-[160px] items-center justify-center overflow-hidden bg-cream2 xs:h-[180px] sm:h-[200px]">
            <ProjectCanvas :draw-fn="featuredHero.draw" :color="featuredHero.color" :height="200" />
          </div>
          <div class="p-4 xs:p-5 sm:p-6">
            <span class="mb-2.5 inline-block rounded-full border border-accent2/20 bg-accent-pale px-2.5 py-[3px] text-[10px] font-medium text-accent">{{ featuredHero.badge.t }}</span>
            <div class="mb-1.5 font-display text-[17px] font-bold leading-snug text-ink xs:text-lg">{{ featuredHero.title }}</div>
            <div class="text-[13px] font-light leading-relaxed text-ink3">End-to-end Tableau dashboard tracking revenue, churn, and funnel metrics - replaced 4 weekly manual reports.</div>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <span v-for="t in ['Tableau', 'Snowflake', 'SQL']" :key="t" class="rounded border border-border bg-cream2 px-2 py-[2px] text-[10px] text-ink3">{{ t }}</span>
            </div>
          </div>
        </button>

        <div class="flex flex-col gap-4 xs:gap-5 lg:gap-6">
          <button
            class="feat-card w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white text-left opacity-0 translate-y-4 delay-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent2 hover:shadow-[0_16px_48px_rgba(13,17,23,0.15)] focus:outline-none focus:ring-2 focus:ring-accent2/40 sm:rounded-2xl [&.vis]:translate-y-0 [&.vis]:opacity-100"
            type="button"
            @click="openProject(featuredML.id)"
          >
            <div class="flex h-[110px] items-center justify-center overflow-hidden bg-cream2 xs:h-[120px]">
              <ProjectCanvas :draw-fn="featuredML.draw" :color="featuredML.color" :height="120" />
            </div>
            <div class="p-4 xs:p-5 sm:p-6">
              <span class="mb-2.5 inline-block rounded-full border border-purple-200 bg-purple-50 px-2.5 py-[3px] text-[10px] font-medium text-purple-600">{{ featuredML.badge.t }}</span>
              <div class="mb-1.5 font-display text-[17px] font-bold leading-snug text-ink xs:text-lg">{{ featuredML.title }}</div>
              <div class="text-[13px] font-light leading-relaxed text-ink3">XGBoost classifier with 87% AUC, 12% churn reduction in production.</div>
            </div>
          </button>

          <button
            class="feat-card w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white text-left opacity-0 translate-y-4 delay-200 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent2 hover:shadow-[0_16px_48px_rgba(13,17,23,0.15)] focus:outline-none focus:ring-2 focus:ring-accent2/40 sm:rounded-2xl [&.vis]:translate-y-0 [&.vis]:opacity-100"
            type="button"
            @click="openProject(featuredPipe.id)"
          >
            <div class="flex h-[110px] items-center justify-center overflow-hidden bg-cream2 xs:h-[120px]">
              <ProjectCanvas :draw-fn="featuredPipe.draw" :color="featuredPipe.color" :height="120" />
            </div>
            <div class="p-4 xs:p-5 sm:p-6">
              <span class="mb-2.5 inline-block rounded-full border border-green-200 bg-green-50 px-2.5 py-[3px] text-[10px] font-medium text-green-600">{{ featuredPipe.badge.t }}</span>
              <div class="mb-1.5 font-display text-[17px] font-bold leading-snug text-ink xs:text-lg">{{ featuredPipe.title }}</div>
              <div class="text-[13px] font-light leading-relaxed text-ink3">50M+ events/day. 24h -> 1h reporting latency.</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
