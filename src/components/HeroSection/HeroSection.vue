<script setup lang="ts">
import { useRouter } from 'vue-router';
import GeoLayer from '@/components/Background/GeoLayer.vue';

const router = useRouter();

const heroShapes = [
  { type: 'ring' as const,    style: { width: '600px', height: '600px', top: '-200px', right: '-150px' } },
  { type: 'ring' as const,    style: { width: '400px', height: '400px', top: '-80px',  right: '50px' } },
  { type: 'circle' as const,  style: { width: '180px', height: '180px', bottom: '120px', left: '-60px' } },
  { type: 'square' as const,  style: { width: '80px',  height: '80px',  top: '20%',    right: '22%' } },
  { type: 'square' as const,  style: { width: '40px',  height: '40px',  bottom: '25%', right: '38%', opacity: '.5' } },
  { type: 'square' as const,  style: { width: '120px', height: '120px', bottom: '10%', left: '15%',  opacity: '.4' } },
  { type: 'dotGrid' as const, style: { width: '220px', height: '160px', top: '60px',   right: '280px', borderRadius: '8px', opacity: '.6' } },
  { type: 'dotGrid' as const, style: { width: '120px', height: '100px', bottom: '80px', left: '80px',  borderRadius: '8px', opacity: '.4' } },
  { type: 'blob' as const,    style: { width: '400px', height: '300px', top: '-80px',  right: '-80px', background: 'rgba(29,78,216,0.06)' } },
  { type: 'blob' as const,    style: { width: '300px', height: '250px', bottom: '-60px', left: '10%', background: 'rgba(200,150,12,0.05)' } },
  { type: 'line' as const,    style: { width: '300px', top: '35%',    left: '55%',  transform: 'rotate(-25deg)' } },
  { type: 'line' as const,    style: { width: '200px', bottom: '30%', left: '30%', transform: 'rotate(15deg)' } },
];
</script>

<template>
  <section class="hero">
    <GeoLayer :shapes="heroShapes" />

    <div class="hero-inner">
      <div class="hero-kicker">
        <span class="kicker-pulse"></span>Available for new opportunities
      </div>
      <h1>
        Data-driven<br>
        <span class="italic">storytelling</span><br>
        <span class="line-indent">at any scale.</span>
      </h1>
      <p class="hero-sub">
        Student double majoring in Computer Science and Statistics with emphasis in Data Science and applications of Machine Learning. 
        <br><br>
        Comfortable transforming complex datasets into strategies that drive real business decisions, eager to gain hands-on experience through internships and other work opportunities.
      </p>
      <div class="hero-actions">
        <button class="btn-primary" @click="router.push('/projects')">View my work →</button>
        <button class="btn-ghost" @click="router.push('/resume')">Download resume</button>
      </div>
    </div>

    <div class="hero-float-card">
      <div class="hfc-label">At a glance</div>
      <div class="hfc-row">
        <div class="hfc-stat"><div class="num">2026</div><div class="lbl">College Graduate</div></div>
        <div class="hfc-stat"><div class="num">10+</div><div class="lbl">Years Coding</div></div>
        <div class="hfc-stat"><div class="num">6</div><div class="lbl">Projects</div></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative; min-height: calc(100vh - 62px);
  display: flex; align-items: center;
  padding: 5rem 3rem; overflow: hidden;
  background: var(--cream);
}
.hero-inner { position: relative; z-index: 1; max-width: 1000px; width: 100%; }
.hero-kicker {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--accent-pale); border: 1px solid rgba(29, 78, 216, 0.2);
  border-radius: 999px; padding: 5px 16px;
  font-size: 11px; font-weight: 500; color: var(--accent);
  letter-spacing: 1.5px; text-transform: uppercase;
  margin-bottom: 2rem;
  animation: fadeUp .6s ease both;
}
.kicker-pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--accent2); animation: blink 2s infinite; }
@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: .3 } }

.hero h1 {
  font-family: var(--font-d);
  font-size: clamp(54px, 7.5vw, 96px);
  font-weight: 900; line-height: 0.95;
  letter-spacing: -3px; color: var(--ink);
  max-width: 860px;
  animation: fadeUp .6s .1s ease both;
}
.hero h1 .italic { font-style: italic; color: var(--accent); }
.hero h1 .line-indent { margin-left: clamp(40px, 8vw, 120px); }
.hero-sub {
  font-size: 18px; color: var(--ink3); max-width: 520px; line-height: 1.75;
  margin-top: 2rem; font-weight: 300;
  animation: fadeUp .6s .2s ease both;
}
.hero-actions { animation: fadeUp .6s .3s ease both; }

.hero-float-card {
  position: absolute; right: 3rem; bottom: 4rem;
  background: #fff; border: 1px solid var(--border); border-radius: 14px;
  padding: 1.25rem 1.5rem; box-shadow: 0 8px 40px var(--shadow);
  animation: fadeUp .6s .5s ease both;
  z-index: 1;
}
.hfc-label { font-size: 10px; color: var(--ink4); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
.hfc-row { display: flex; gap: 1.5rem; }
.hfc-stat .num { font-family: var(--font-d); font-size: 26px; font-weight: 700; color: var(--ink); letter-spacing: -1px; }
.hfc-stat .lbl { font-size: 10px; color: var(--ink4); margin-top: 1px; }
</style>