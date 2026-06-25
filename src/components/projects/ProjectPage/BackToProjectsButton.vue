<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SVGIcons from '@/assets/SVGIcons.vue';
</script>

<template>
  <div class="sticky top-[87px] z-[90] pointer-events-none">
    <RouterLink
      class="pointer-events-auto inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[10px] bg-ink px-5 text-sm font-semibold text-white no-underline shadow-[0_10px_28px_rgba(13,17,23,0.18)] transition-colors hover:bg-accent"
      to="/projects"
    >
      <SVGIcons name="arrowBack" class="h-4 w-4" />
      Back to projects
    </RouterLink>
  </div>
</template>
