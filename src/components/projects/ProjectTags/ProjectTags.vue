<script setup lang="ts">
import { computed } from 'vue';
import type { ProjectTagType } from '@/components/projects/projectRegistry';

const props = withDefaults(defineProps<{
  tags: ProjectTagType[];
  direction?: 'row' | 'column';
  size?: 'sm' | 'md';
  limit?: number;
}>(), {
  direction: 'row',
  size: 'md',
});

const projectTagLabels: Record<ProjectTagType, string> = {
  report: 'Report',
  product: 'Product',
  'full-stack': 'Full-Stack',
  liveDemo: 'Live Demo',
  modeling: 'Modeling',
  simulation: 'Simulation',
  analysis: 'Analysis',
};

const projectTagClasses: Record<ProjectTagType, string> = {
  report: 'border-gold/30 bg-[#fff7dc] text-[#8a6500]',
  product: 'border-accent2/20 bg-accent-pale text-accent',
  'full-stack': 'border-indigo-200 bg-indigo-50 text-indigo-700',
  liveDemo: 'border-[#147a4d]/25 bg-[#e9f8ef] text-[#147a4d]',
  modeling: 'border-purple-200 bg-purple-50 text-purple-700',
  simulation: 'border-orange-200 bg-orange-50 text-orange-700',
  analysis: 'border-rose-200 bg-rose-50 text-rose-700',
};

const visibleTags = computed(() =>
  typeof props.limit === 'number' ? props.tags.slice(0, props.limit) : props.tags
);
</script>

<template>
  <div
    class="flex gap-2"
    :class="direction === 'column' ? 'flex-col' : 'flex-row flex-wrap'"
  >
    <span
      v-for="tag in visibleTags"
      :key="tag"
      class="rounded-full border font-medium"
      :class="[
        projectTagClasses[tag],
        size === 'sm'
          ? 'px-2.5 py-[3px] text-[10px]'
          : 'px-3 py-1 text-[11.5px]',
      ]"
    >
      {{ projectTagLabels[tag] }}
    </span>
  </div>
</template>
