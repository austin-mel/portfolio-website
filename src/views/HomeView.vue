<script setup lang="ts">

import HeroSection from '@/components/HeroSection/HeroSection.vue';
import { useScrollObserver } from '@/composables/useScrollObserver';
 
useScrollObserver();
</script>
 
<template>
  <div class="page">
    <HeroSection />
  </div>
</template>