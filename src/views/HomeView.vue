<script setup lang="ts">
import { AboutSection, CtaSection, HeroSection, MarqueeStrip, NumbersSection, SkillsSection, TimelineSection } from '@/components';
import { useScrollObserver } from '@/composables/useScrollObserver';
 
useScrollObserver();
</script>
 
<template>
  <div class="page">
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <NumbersSection />
    <SkillsSection />
    <TimelineSection />
    <CtaSection />
  </div>
</template>