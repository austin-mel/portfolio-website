<script setup lang="ts">
import { GeoLayer } from '@/components';
import { useScrollObserver } from '@/composables/useScrollObserver';
import type { TimelineItem } from '@/types/types';

const timelineShapes = [
  { type: 'circle' as const,  style: { width: '260px', height: '260px', top: '-80px',   right: '5%',   borderColor: 'rgba(29,78,216,0.07)' } },
  { type: 'dotGrid' as const, style: { width: '160px', height: '120px', bottom: '40px', right: '120px', opacity: '.3' } },
];

const industryProjects: TimelineItem[] = [
  {
    date: 'Aug 2024 - May 2025',
    title: 'Client Relationship Management Platform',
    subtitle: 'Industry Project Experience',
    company: 'WCP Solutions',
    description: 'Developed an internal web application for sales teams with searchable client tables, geographic mapping, route directions, contact integration, and customer note tracking. Collaborated on an eight-person team using Agile practices, biweekly sprints, Git, and Jira. Tested and refined functionality through regular meetings with company stakeholders and faculty advisors.',
    delay: .12,
  },
  {
    date: 'Feb 2026 - May 2026',
    title: 'Mass Spectrometer Baseline Noise Analysis',
    subtitle: 'Industry Project Experience',
    company: 'Thermochron Systems LLC',
    description: 'Modeled 492,000+ instrument measurements across 6 dwell-time settings and 3 independent lab locations. Built cleaned long-format datasets in Python, quantified dwell-time effects, and evaluated noise distributions using KDE, Q-Q plots, and log-scale statistical modeling. Delivered client-facing findings to support baseline correction strategy.',
    delay: .24,
  },
  {
    date: 'Feb 2026 - May 2026',
    title: 'SciComm Empathy Survey Analysis',
    subtitle: 'Industry Project Experience',
    company: 'CSUS Department of Biological Sciences',
    description: 'Analyzed matched pre/post survey data from 222 participants in R to assess whether scientific communication training improved empathy scores. Applied Welch’s and paired t-tests, mixed ANOVA, and ANCOVA. Interpreted pre/post improvements and found no significant Intervention vs. Control effect, communicating methods, assumptions, limitations, and findings in client-facing written reports.',
    delay: .36,
  },
];

const professionalExperience: TimelineItem[] = [
  {
    date: 'Oct 2024 - Current',
    title: 'Youth Afterschool Program Coordinator',
    subtitle: 'Professional Experience',
    company: 'Flawless Boxing and Fitness',
    description: 'Manage group instruction, behavioral expectations, program procedures, safety requirements, and daily operations in youth environments. Lead structured programming that builds skill, discipline, and confidence while maintaining organization, accountability, and effective communication with multiple sites across 3 districts.',
    delay: .12,
  },
];

const experienceSections = [
  { title: 'Industry Project Experience', items: industryProjects },
  { title: 'Professional Experience', items: professionalExperience },
];

useScrollObserver('.anim-up,.tl-item');
</script>

<template>
  <section
    v-for="section in experienceSections"
    :key="section.title"
    class="relative overflow-hidden bg-cream3 px-12 py-32"
  >
    <GeoLayer :shapes="timelineShapes" />

    <div class="relative mx-auto max-w-[1100px]">
      <!-- HEADER -->
      <div class="mb-16">
        <div class="anim-up mb-5 flex translate-y-[18px] items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-accent opacity-0 transition-all duration-[600ms] ease-out before:block before:h-0.5 before:w-6 before:bg-accent [&.vis]:translate-y-0 [&.vis]:opacity-100">Relevant Work</div>
        <h2 class="anim-up translate-y-[18px] font-display text-[44px] font-bold tracking-[-1.5px] text-ink opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">{{ section.title }}</h2>
      </div>

      <!-- TIMELINE -->
      <div class="relative pl-0.5 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:bg-gradient-to-b before:from-accent before:to-border">
        <div
          v-for="item in section.items"
          :key="item.title"
          class="tl-item relative -translate-x-4 pb-12 pl-12 opacity-0 transition-all duration-[600ms] ease-out before:absolute before:-left-[5px] before:top-1 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-accent before:bg-white [&.vis]:translate-x-0 [&.vis]:opacity-100"
          :style="item.delay ? { transitionDelay: item.delay + 's' } : {}"
        >
          <div class="mb-1.5 font-mono text-[10px] tracking-[1px] text-accent">{{ item.date }}</div>
          <div class="font-display text-xl font-bold text-ink3">{{ item.company }}</div>
          <div class="font-display text-lg font-bold tracking-[-0.3px] text-ink">{{ item.title }}</div>
          <div class="max-w-[560px] text-[13px] font-light leading-[1.7] text-ink3">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
