<script setup lang="ts">
import { AboutSection, CtaSection, FeaturedProjects, HeroSection, MarqueeStrip, SignatureMark, SkillsSection, TimelineSection } from '@/components';
import { useScrollObserver } from '@/composables/useScrollObserver';
 
useScrollObserver();
</script>
 
<template>
  <div class="page">
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <SignatureMark />
    <SkillsSection />
    <FeaturedProjects />
    <TimelineSection />
    <CtaSection />
  </div>
</template>
