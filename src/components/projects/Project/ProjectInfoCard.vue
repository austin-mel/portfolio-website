<script setup lang="ts">
import type { ProjectCard } from '@/data/projectPages';

interface Props {
  card: ProjectCard;
}

defineProps<Props>();
</script>

<template>
  <article class="rounded-xl border border-border bg-white p-[22px]">
    <div class="mb-5 font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
    <h3 class="mb-2 text-[15px] font-bold leading-snug tracking-normal text-ink">{{ card.title }}</h3>
    <p class="m-0 text-[13px] leading-[1.6] text-ink3">{{ card.body }}</p>
  </article>
</template>
