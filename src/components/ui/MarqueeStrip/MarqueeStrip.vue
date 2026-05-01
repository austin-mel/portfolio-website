<script setup lang="ts">
const items: { name: string; hi: boolean }[] = [
  { name: 'Python', hi: true },   
  { name: 'SQL', hi: false },
  { name: 'Tableau', hi: false },  
  { name: 'R', hi: true },
  { name: 'scikit-learn', hi: false },
  { name: 'ggplot2', hi: false },   
  { name: 'Git', hi: true },
  { name: 'Bash', hi: false },
  { name: 'Java', hi: false },   
  { name: 'C', hi: true },
  { name: 'TensorFlow', hi: false },
  { name: 'CUDA', hi: false },
];

const looped = [...items, ...items];
</script>

<template>
  <div class="relative z-[1] overflow-hidden whitespace-nowrap border-t border-b border-border bg-ink py-3.5">
    <div class="inline-flex animate-marquee">
      <span
        v-for="(item, i) in looped"
        :key="i"
        class="inline-flex items-center gap-3 px-10 text-xs font-medium uppercase tracking-[1.5px]"
        :class="item.hi ? 'text-white/85' : 'text-white/50'"
      >
        <span class="h-1 w-1 shrink-0 rounded-full bg-accent2"></span>{{ item.name }}
      </span>
    </div>
  </div>
</template>