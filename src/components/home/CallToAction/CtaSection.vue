<script setup lang="ts">
import { useRouter } from 'vue-router';
import { GeoLayer } from '@/components';
import { useScrollObserver } from '@/composables/useScrollObserver';
import SVGIcons from '@/assets/SVGIcons.vue';

const router = useRouter();

const ctaShapes = [
  { type: 'ring' as const,    style: { width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderColor: 'rgba(29,78,216,0.08)' } },
  { type: 'ring' as const,    style: { width: '700px', height: '700px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderColor: 'rgba(29,78,216,0.04)' } },
  { type: 'square' as const,  style: { width: '55px',  height: '55px',  top: '15%',    left: '12%' } },
  { type: 'square' as const,  style: { width: '30px',  height: '30px',  bottom: '20%', right: '12%', opacity: '.5' } },
];

useScrollObserver('.anim-up');
</script>

<template>
  <section class="relative overflow-hidden bg-cream px-12 py-32 text-center">
    <GeoLayer :shapes="ctaShapes" />

    <div class="relative z-[1] mx-auto max-w-[640px]">
      <h2 class="anim-up mb-5 translate-y-[18px] font-display text-[52px] font-black leading-[1.05] tracking-[-2px] text-ink opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">
        Ready to work<br>on something <em class="italic text-accent">great?</em>
      </h2>

      <p class="anim-up mb-8 translate-y-[18px] text-base font-light leading-[1.7] text-ink3 opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">
        I'm actively looking for data analytics, engineering, or consulting roles where I can make a meaningful impact. Let's talk.
      </p>

      <div class="anim-up flex translate-y-[18px] flex-wrap justify-center gap-3.5 opacity-0 transition-all duration-[600ms] ease-out [&.vis]:translate-y-0 [&.vis]:opacity-100">
        <button
          class="inline-flex cursor-pointer items-center gap-2 rounded-[10px] bg-ink px-[30px] py-[13px] text-sm font-medium tracking-[0.2px] text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-soft"
          @click="router.push('/contact')"
        >
          Get in touch
          <SVGIcons name="arrowForward" class="h-4 w-4" />
        </button>
        <button
          class="cursor-pointer rounded-[10px] border-[1.5px] border-border2 bg-transparent px-[30px] py-[13px] text-sm text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-cream2"
          @click="router.push('/projects')"
        >See my work!</button>
      </div>
    </div>
  </section>
</template>
