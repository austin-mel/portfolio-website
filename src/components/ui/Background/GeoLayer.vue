<script setup lang="ts">
interface Shape {
  type: 'ring' | 'circle' | 'square' | 'dotGrid' | 'blob' | 'line';
  style: Record<string, string>;
}

defineProps<{
  shapes?: Shape[];
}>();
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <template v-if="shapes">
      <div
        v-for="(s, i) in shapes"
        :key="i"
        class="absolute"
        :class="{
          'rounded-[50%] border-[1.5px] border-accent2/[0.12]': s.type === 'circle',
          'rounded-[50%] border border-accent2/[0.07]': s.type === 'ring',
          'rotate-45 border-[1.5px] border-ink/[0.05]': s.type === 'square',
          'h-px bg-[linear-gradient(90deg,transparent,rgba(29,78,216,0.15),transparent)]': s.type === 'line',
          'bg-[radial-gradient(circle,rgba(29,78,216,0.18)_1px,transparent_1px)] [background-size:22px_22px]': s.type === 'dotGrid',
          'pointer-events-none rounded-[50%] blur-[60px]': s.type === 'blob',
        }"
        :style="s.style"
      ></div>
    </template>
    <slot />
  </div>
</template>
