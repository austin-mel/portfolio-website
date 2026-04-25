<script setup lang="ts">
import HeroSection from '@/components/Home/HeroSection.vue';
import MarqueeStrip from '@/components/MarqueeStrip/MarqueeStrip.vue';
import AboutSection from '@/components/Home/AboutSection.vue';
import NumbersSection from '@/components/Home/NumbersSection.vue';
import SkillsSection from '@/components/Home/SkillsSection.vue';
import FeaturedWork from '@/components/Home/FeaturedWork.vue';
import TimelineSection from '@/components/Home/TimelineSection.vue';
import CtaSection from '@/components/Home/CtaSection.vue';
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
    <FeaturedWork />
    <TimelineSection />
    <CtaSection />
  </div>
</template>