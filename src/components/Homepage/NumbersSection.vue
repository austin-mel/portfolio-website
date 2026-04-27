<script setup lang="ts">
import { useScrollObserver } from '@/composables/useScrollObserver';

interface NumberStat {
  big: string;
  span?: string;
  desc: string;
}

const stats: NumberStat[] = [
  { big: '10',  span: '+',  desc: 'Years of experience in coding' },
  { big: '5', span: '+', desc: 'End-to-end projects shipped to production' },
];

useScrollObserver('.num-card');
</script>

<template>
  <section class="relative overflow-hidden bg-ink px-12 py-24">
    <svg class="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90%" cy="50%" r="200" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      <circle cx="90%" cy="50%" r="300" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
      <rect x="5%" y="20%" width="60" height="60" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" transform="rotate(45 60 60)" />
    </svg>

    <div class="relative mx-auto max-w-[1100px]">
      <div class="mb-12 text-[10px] font-semibold uppercase tracking-[2px] text-white/35">By the numbers</div>

      <div class="grid grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(s, i) in stats"
          :key="i"
          class="num-card translate-y-5 border-white/[0.08] px-8 py-10 opacity-0 transition-all duration-[600ms] ease-out last:border-r-0 lg:border-r [&.vis]:translate-y-0 [&.vis]:opacity-100"
        >
          <div class="font-display text-[54px] font-black leading-none tracking-[-2px] text-white">
            {{ s.big }}<span v-if="s.span" class="text-accent2">{{ s.span }}</span>
          </div>
          <div class="mt-2 text-[13px] font-light text-white/40">{{ s.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>