<script setup lang="ts">
/**
 * GeoLayer renders scattered geometric background shapes.
 * Pass shape definitions through the `shapes` prop, or use named slots for
 * fully custom layouts.
 */

interface Shape {
  type: 'ring' | 'circle' | 'square' | 'dotGrid' | 'blob' | 'line';
  style: Record<string, string>;
}

defineProps<{
  shapes?: Shape[];
}>();
</script>

<template>
  <div class="geo-layer">
    <template v-if="shapes">
      <div
        v-for="(s, i) in shapes"
        :key="i"
        :class="`geo-${s.type === 'dotGrid' ? 'dot-grid' : s.type}`"
        :style="s.style"
      ></div>
    </template>
    <slot />
  </div>
</template>

<style scoped>
.geo-layer { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
.geo-circle { position: absolute; border-radius: 50%; border: 1.5px solid rgba(29, 78, 216, 0.12); }
.geo-ring   { position: absolute; border-radius: 50%; border: 1px solid rgba(29, 78, 216, 0.07); }
.geo-square { position: absolute; border: 1.5px solid rgba(13, 17, 23, 0.05); transform: rotate(45deg); }
.geo-line   { position: absolute; background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.15), transparent); height: 1px; }
.geo-dot-grid {
  position: absolute;
  background-image: radial-gradient(circle, rgba(29, 78, 216, 0.18) 1px, transparent 1px);
  background-size: 22px 22px;
}
.geo-blob { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; }
</style>