<script setup lang="ts">
import { useRouter } from 'vue-router';
import { GeoLayer } from '@/components';

const router = useRouter();

const heroShapes = [
  { type: 'ring' as const, style: { width: '600px', height: '600px', top: '-200px', right: '-150px' } },
  { type: 'ring' as const, style: { width: '400px', height: '400px', top: '-80px', right: '50px' } },
  { type: 'circle' as const, style: { width: '180px', height: '180px', bottom: '120px', left: '-60px' } },
  { type: 'square' as const, style: { width: '80px', height: '80px', top: '20%', right: '22%' } },
  { type: 'square' as const, style: { width: '40px', height: '40px', bottom: '25%', right: '38%', opacity: '.5' } },
  { type: 'square' as const, style: { width: '120px', height: '120px', bottom: '10%', left: '15%', opacity: '.4' } },
  { type: 'dotGrid' as const, style: { width: '220px', height: '160px', top: '60px', right: '280px', borderRadius: '8px', opacity: '.6' } },
  { type: 'dotGrid' as const, style: { width: '120px', height: '100px', bottom: '80px', left: '80px', borderRadius: '8px', opacity: '.4' } },
  { type: 'blob' as const, style: { width: '400px', height: '300px', top: '-80px', right: '-80px', background: 'rgba(29,78,216,0.06)' } },
  { type: 'blob' as const, style: { width: '300px', height: '250px', bottom: '-60px', left: '10%', background: 'rgba(200,150,12,0.05)' } },
  { type: 'line' as const, style: { width: '300px', top: '35%', left: '55%', transform: 'rotate(-25deg)' } },
  { type: 'line' as const, style: { width: '200px', bottom: '30%', left: '30%', transform: 'rotate(15deg)' } },
];
</script>

<template>
  <section
    class="relative min-h-[calc(100vh-62px)] flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-12 py-16 sm:py-20 bg-cream overflow-hidden"
  >
    <GeoLayer :shapes="heroShapes" />

    <!-- Main content column -->
    <div class="relative py-8 z-10 max-w-[1000px] w-full flex flex-col lg:items-start items-center">

      <!-- Job Search Tag -->
      <div
        class="inline-flex items-center gap-[10px] px-4 py-[5px] mb-8 rounded-full bg-accent-pale border border-[rgba(29,78,216,0.2)] text-[11px] font-medium text-accent tracking-[1.5px] uppercase animate-fade-up"
      >
        <span class="w-[6px] h-[6px] rounded-full bg-accent2 animate-pulse"></span>
        Available for new opportunities
      </div>

      <!-- Heading -->
      <h1
        class="font-display font-black leading-[0.95] tracking-[-2px] sm:tracking-[-3px] text-ink max-w-[860px] text-[clamp(42px,10vw,96px)]"
      >
        Data-driven<br />
        <span class="italic text-accent">storytelling</span><br />
        <span class="sm:ml-[clamp(40px,8vw,120px)] ml-0">at any scale.</span>
      </h1>

      <!-- Subtext -->
      <p
        class="mt-6 sm:mt-8 max-w-[520px] w-full text-[16px] sm:text-[18px] leading-[1.7] text-ink3"
      >
        Recent graduate that double majored in Computer Science and Statistics with emphasis in Applied Statistics and intrest in applications of Machine Learning.
        <br /><br />
        Comfortable transforming complex datasets into strategies that drive real business decisions, eager to gain hands-on experience through internships and other work opportunities.
      </p>

      <!-- Action Buttons -->
      <div class="py-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
        <button
          class="bg-ink text-white px-[30px] py-[13px] rounded-[10px] text-[14px] font-medium transition-all hover:bg-accent hover:-translate-y-[2px]"
          @click="router.push('/projects')"
        >
          View my work →
        </button>

        <button
          class="bg-transparent border border-border2 text-ink px-[30px] py-[13px] rounded-[10px] text-[14px] font-normal transition-all hover:bg-cream2 hover:-translate-y-[2px]"
          @click="router.push('/resume')"
        >
          Download resume
        </button>
      </div>
    </div>

    <!-- Floating "At a glance" card -->
    <div
      class="
        w-auto
        bg-white border border-border rounded-[14px]
        px-5 sm:px-6 py-4 sm:py-5
        shadow-[0_8px_40px_rgba(13,17,23,0.08)]
        z-10
        lg:absolute lg:right-12 lg:bottom-16
      "
    >
      <div class="text-[10px] text-ink4 uppercase tracking-[1px] mb-2">
        At a glance
      </div>

      <div class="flex flex-row gap-6 text-center items-center sm:items-start">
        <div>
          <div class="font-display text-[26px] font-bold text-ink tracking-[-1px]">2026</div>
          <div class="text-[10px] text-ink4">College Graduate</div>
        </div>
        <div>
          <div class="font-display text-[26px] font-bold text-ink tracking-[-1px]">10+</div>
          <div class="text-[10px] text-ink4">Years Coding</div>
        </div>
        <div>
          <div class="font-display text-[26px] font-bold text-ink tracking-[-1px]">6</div>
          <div class="text-[10px] text-ink4">Projects</div>
        </div>
      </div>
    </div>
  </section>
</template>