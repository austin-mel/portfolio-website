<script setup lang="ts">
import type { ProjectStat } from '@/data/projectPages';

interface Props {
  label: string;
  stats: ProjectStat[];
}

defineProps<Props>();
</script>

<template>
  <section class="relative overflow-hidden bg-ink py-20 text-white xs:py-24">
    <div class="absolute right-[-80px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/[0.04]" aria-hidden="true"></div>
    <div class="absolute right-[-160px] top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-white/[0.03]" aria-hidden="true"></div>
    <div class="relative mx-auto w-[min(1120px,calc(100%_-_48px))]">
      <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">{{ label }}</div>
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div
          v-for="(stat, index) in stats"
          :key="`${stat.value}-${stat.label}`"
          class="min-h-40 border-white/[0.08] py-8 md:border-r md:px-8"
          :class="{ 'md:border-r-0': index === stats.length - 1, 'border-b md:border-b-0': index !== stats.length - 1 }"
        >
          <strong class="block font-display text-[52px] font-black leading-none tracking-normal text-white">{{ stat.value }}</strong>
          <p class="mt-2.5 max-w-[190px] text-[13px] font-light leading-[1.45] text-white/45">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
