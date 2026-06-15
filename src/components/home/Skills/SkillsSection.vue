<script setup lang="ts">
import { GeoLayer } from '@/components';
import { useScrollObserver } from '@/composables/useScrollObserver';
import SVGIcons from '@/assets/SVGIcons.vue';
import type { SkillCategory } from '@/types/types';

const skillsShapes = [
  { type: 'ring' as const,    style: { width: '500px', height: '500px', top: '-200px',  left: '-150px', borderColor: 'rgba(29,78,216,0.06)' } },
  { type: 'square' as const,  style: { width: '50px',  height: '50px',  bottom: '15%',  right: '10%',   borderColor: 'rgba(29,78,216,0.10)' } },
  { type: 'dotGrid' as const, style: { width: '180px', height: '140px', top: '60px',    right: '80px',  opacity: '.35' } },
];

const categories: SkillCategory[] = [
    {
    icon: 'code', title: 'Programming Langauges', delay: .08,
    pills: [
      { name: 'R', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'C', highlight: false },
      { name: 'Typescript', highlight: false },
      { name: 'Bash', highlight: false },
      { name: 'Java', highlight: false },
      { name: 'Javascript', highlight: false },
    ],
  },
  {
    icon: 'chart', title: 'Data Analysis & Visualization', delay: 0,
    pills: [
      { name: 'Airflow', highlight: true },
      { name: 'Tableau',  highlight: true },
      { name: 'ggplot2', highlight: true }, 
      { name: 'Matplotlib', highlight: false },
      { name: 'Pandas', highlight: false },
      { name: 'NumPy', highlight: false },
    ],
  },
  {
    icon: 'model', title: 'ML & Modeling', delay: .16,
    pills: [
      { name: 'TensorFlow', highlight: true },
      { name: 'scikit-learn', highlight: true }, 
      { name: 'statsmodels', highlight: true },
      { name: 'RStudio', highlight: false },
      { name: 'Jupyter', highlight: false },
      { name: 'PyTorch', highlight: false },
      { name: 'NLTK', highlight: false }, 
      { name: 'Keras', highlight: false }, 
    ],
  },
  {
    icon: 'cloud', title: 'Cloud & Infrastructure', delay: .24,
    pills: [ 
      { name: 'Git', highlight: true }, 
      { name: 'AWS', highlight: true },
      { name: 'Docker', highlight: false },
      { name: 'Render', highlight: false },
      { name: 'Vercel', highlight: false }, 
      { name: 'Vendia', highlight: false },
    ],
  },
    {
    icon: 'database', title: 'Other Technologies', delay: .16,
    pills: [
      { name: 'Vue.js', highlight: true },
      { name: 'Figma', highlight: true }, 
      { name: 'Canva', highlight: false }, 
      { name: 'Jira', highlight: false }, 
      { name: 'MS Office', highlight: false },
      { name: 'React.js', highlight: false },
    ],
  },
];

useScrollObserver('.anim-up,.skill-cat');
</script>

<template>
  <section class="relative overflow-hidden bg-cream2 px-12 py-32">
    <GeoLayer :shapes="skillsShapes" />

    <div class="relative mx-auto max-w-[1100px]">
      <!-- HEADER -->
      <div class="mb-16 grid items-end gap-16 lg:grid-cols-2">
        <div>
          <div class="anim-up mb-5 flex translate-y-[18px] items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-accent opacity-0 transition-all duration-[600ms] ease-out before:block before:h-0.5 before:w-6 before:bg-accent [&.vis]:translate-y-0 [&.vis]:opacity-100">Toolkit</div>
          <h2 class="anim-up translate-y-[18px] font-display text-[44px] font-bold leading-[1.1] tracking-[-1.5px] text-ink opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">
            Built using the right<br><em class="italic text-accent">tools for the job.</em>
          </h2>
        </div>
        <p class="anim-up translate-y-[18px] text-[15px] font-light leading-[1.75] text-ink3 opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">
          I choose technologies that fit the problem, not the other way around. These are the tools that I work with
          every day and constantly reach for when project complexity demands it.
        </p>
      </div>

      <!-- CATEGORIES GRID -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="skill-cat translate-y-4 rounded-[14px] border border-border bg-white p-7 opacity-0 transition-all duration-500 ease-out hover:-translate-y-[3px] hover:border-accent2 hover:shadow-[0_8px_32px_rgba(13,17,23,0.08)] [&.vis]:translate-y-0 [&.vis]:opacity-100"
          :style="cat.delay ? { transitionDelay: cat.delay + 's' } : {}"
        >
          <div class="mb-3.5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-pale text-accent">
            <SVGIcons :name="cat.icon" class="h-5 w-5" />
          </div>
          <div class="mb-3 text-[13px] font-semibold tracking-[-0.2px] text-ink">{{ cat.title }}</div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="pill in cat.pills"
              :key="pill.name"
              class="rounded-[5px] border px-2.5 py-[3px] text-[11px]"
              :class="pill.highlight
                ? 'border-accent2/20 bg-accent-pale text-accent'
                : 'border-border bg-cream2 text-ink3'"
            >{{ pill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
