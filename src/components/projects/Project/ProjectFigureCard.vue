<script setup lang="ts">
import type { ProjectFigure } from '@/data/projectPages';

interface Props {
  figure: ProjectFigure;
}

defineProps<Props>();
</script>

<template>
  <article class="rounded-xl border border-border bg-white p-[22px]">
    <div class="mb-5 font-mono text-[11px] uppercase text-ink4">{{ figure.type }}</div>
    <h3 class="mb-3 text-[15px] font-bold leading-snug tracking-normal text-ink">{{ figure.title }}</h3>
    <img class="mb-3 block h-auto w-full rounded-[10px] border border-border bg-white" :src="figure.image" :alt="figure.alt" loading="lazy" />
    <p class="m-0 text-[13px] leading-[1.6] text-ink3">{{ figure.body }}</p>
  </article>
</template>
