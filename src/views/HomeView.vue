<script setup lang="ts">
import { AboutSection, CtaSection, FeaturedProjects, HeroSection, MarqueeStrip, NumbersSection, SkillsSection, TimelineSection } from '@/components';
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
    <FeaturedProjects />
    <TimelineSection />
    <CtaSection />
  </div>
</template>
