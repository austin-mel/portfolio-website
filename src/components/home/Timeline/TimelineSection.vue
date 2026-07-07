<script setup lang="ts">
import { GeoLayer } from '@/components';
import { useScrollObserver } from '@/composables/useScrollObserver';
import type { TimelineItem } from '@/types/types';

const timelineShapes = [
  { type: 'circle' as const,  style: { width: '260px', height: '260px', top: '-80px',   right: '5%',   borderColor: 'rgba(29,78,216,0.07)' } },
  { type: 'dotGrid' as const, style: { width: '160px', height: '120px', bottom: '40px', right: '120px', opacity: '.3' } },
];

const items: TimelineItem[] = [
{
  date: '2024 — 2025',
  title: 'Software Engineering Contractor',
  subtitle: 'Computer Science Senior Project',
  company: 'WCP Solutions · Sacramento, CA',
  description: 'Developed an internal dashboard for sales teams to manage client relationships. Built searchable client tables, geographic mapping, route directions, contact integration, and note tracking to streamline daily workflows. Worked on a team of eight using Agile practices, biweekly sprints, client and advisor meetings, and Jira for task tracking.',
  delay: .12,
},
{
  date: '2025 — 2026',
  title: 'Research Project Assistant',
  subtitle: 'Statistics Senior Project',
  company: 'CSUS College of Biological Sciences · Sacramento, CA',
  description: 'Provided statistical consulting for graduate-level research, including a master’s thesis on empathy in scientific communication. Designed and analyzed pre–post survey data and tested differences between control and intervention groups. Applied statistical tests and translated findings into clear research conclusions.',
  delay: .24,
},
{
  date: '2025 — 2026',
  title: 'Statistical Research Consultant',
  subtitle: 'Statistics Senior Project',
  company: 'Thermochron Systems LLC · Sacramento, CA',
  description: 'Developed a comprehensive report modeling baseline noise in mass spectrometer data to improve signal reliability and measurement accuracy. Applied statistical techniques to identify noise patterns, reduce variability, and support data-driven calibration decisions.',
  delay: .36,
},
{
  date: '2026',
  title: 'B.S. Computer Science and Statistics',
  subtitle: 'Emphasis in Applied Statistics',
  company: 'California State University - Sacramento',
  description: 'Graduated with a double major in Computer Science and Statistics, with an emphasis in applied statistics. Contributed to multiple senior group projects with external clients and working project deliverables.',
  delay: .48,
}
];

useScrollObserver('.anim-up,.tl-item');
</script>

<template>
  <section class="relative overflow-hidden bg-cream3 px-12 py-32">
    <GeoLayer :shapes="timelineShapes" />

    <div class="relative mx-auto max-w-[1100px]">
      <!-- HEADER -->
      <div class="mb-16">
        <div class="anim-up mb-5 flex translate-y-[18px] items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-accent opacity-0 transition-all duration-[600ms] ease-out before:block before:h-0.5 before:w-6 before:bg-accent [&.vis]:translate-y-0 [&.vis]:opacity-100">Relevant Work</div>
        <h2 class="anim-up translate-y-[18px] font-display text-[44px] font-bold tracking-[-1.5px] text-ink opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">What I've done...</h2>
      </div>

      <!-- TIMELINE -->
      <div class="relative pl-0.5 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:bg-gradient-to-b before:from-accent before:to-border">
        <div
          v-for="item in items"
          :key="item.title"
          class="tl-item relative -translate-x-4 pb-12 pl-12 opacity-0 transition-all duration-[600ms] ease-out before:absolute before:-left-[5px] before:top-1 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-accent before:bg-white [&.vis]:translate-x-0 [&.vis]:opacity-100"
          :style="item.delay ? { transitionDelay: item.delay + 's' } : {}"
        >
          <div class="mb-1.5 font-mono text-[10px] tracking-[1px] text-accent">{{ item.date }}</div>
          <div class="font-display text-xl font-bold text-ink3">{{ item.company }}</div>
          <div class="font-display text-lg font-bold tracking-[-0.3px] text-ink">{{ item.title }}</div>
          <div class="font-display text-[16px] font-bold tracking-[-0.3px] text-ink">{{ item.subtitle }}</div>
          <div class="max-w-[560px] text-[13px] font-light leading-[1.7] text-ink3">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
