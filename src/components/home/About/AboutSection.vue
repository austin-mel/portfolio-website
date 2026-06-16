<script setup lang="ts">
import { GeoLayer } from '@/components';
import type { FactRow, Pillar } from '@/types/types';
import SVGIcons from '@/assets/SVGIcons.vue';

import { AMInitials } from "@/assets/index"

const aboutShapes = [
  { type: 'circle' as const,  style: { width: '320px', height: '320px', top: '-80px',  right: '-100px', borderColor: 'rgba(29,78,216,0.08)' } },
  { type: 'square' as const,  style: { width: '60px',  height: '60px',  bottom: '10%', left: '48%',     borderColor: 'rgba(29,78,216,0.10)' } },
  { type: 'dotGrid' as const, style: { width: '150px', height: '120px', bottom: '60px', right: '60px', opacity: '.4' } },
];

const facts: FactRow[] = [
  { key: 'location',     value: 'Sacramento, CA' },
  { key: 'availability', value: 'Open to opportunities', highlight: true },
  { key: 'experience',   value: '10+ years coding' },
  { key: 'remote',       value: 'Yes — fully comfortable' },
  { key: 'education',    value: 'B.S. Computer Science and Statistics, CSUS' },
  { key: 'timezone',     value: 'Pacific (PT)' },
];

const pillars: Pillar[] = [
  { icon: 'chart',  title: 'Analytical rigor',        desc: 'Every insight is verified, reproducible, and backed by clean data.' },
  { icon: 'database', title: 'Infrastructure thinking', desc: 'I build systems that scale, not one-off queries that break in a month.' },
  { icon: 'communication',  title: 'Clear communication',     desc: 'I translate data into decisions for technical and non-technical audiences alike.' },
  { icon: 'lightning',  title: 'Speed to impact',         desc: 'Fast iteration, tight feedback loops, and a bias toward shipping value.' },
];
</script>

<template>
  <section class="relative overflow-hidden bg-cream px-12 py-12">
    <GeoLayer :shapes="aboutShapes" />

    <div class="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-24 lg:grid-cols-2">
      <!-- LEFT COLUMN -->
      <div>
        <div class="mb-5 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-accent before:block before:h-0.5 before:w-6 before:bg-accent">About me</div>

        <h2 class="mb-8 font-display text-[44px] font-bold leading-[1.1] tracking-[-1.5px] text-ink">
          Analyst, builder,<br><em class="italic text-accent">storyteller.</em>
        </h2>



        <!-- COVER LETTER -->
        <div class="relative rounded-2xl border border-border bg-white p-10 shadow-[0_4px_24px_rgba(13,17,23,0.08)]">
          <div class="mb-6 font-mono text-[11px] text-ink4">June 2026 · Sacramento, CA</div>

          <div class="mb-6 text-[13px] leading-normal text-ink3">
            To <strong class="text-ink">hiring managers, collaborators, and future teammates</strong>,
          </div>

          <div class="space-y-5 text-sm font-light leading-[1.85] text-ink2">
I am a recent double major graduate from California State University, Sacramento with a Bachelor of Science in Computer Science and Statistics, and I am excited to begin my career in data analysis, business intelligence, or applied analytics. My academic background gave me a strong foundation in statistical reasoning, programming, databases, data visualization, and machine learning, while my project experience taught me how to apply those skills to real problems with real stakeholders.
<br><br>
I am especially interested in roles where I can turn complex data into clear, useful insights that help teams make better decisions. My background combines statistical training, programming experience, and hands-on project work. I have worked with R, Python, SQL, Tableau, Pandas, Matplotlib, ggplot, and Jupyter Notebook, and I am comfortable cleaning data, exploring patterns, building visualizations, and explaining results clearly. I enjoy taking complex information and turning it into something useful for both technical and non-technical audiences.
<br><br>
Through my consulting projects, I gained experience working with real data, real clients, and open-ended research questions. Those experiences helped me become more careful in how I approach data, choose methods, interpret results, and communicate findings. As a student-athlete, I developed strong time management, discipline, and organization while balancing academics, training, work, and competition. Through my leadership roles, I also learned how to coordinate teams, manage responsibilities, communicate with large and small groups, and explain my ideas clearly to others. 
<br><br>
I am looking for an entry-level role where I can continue growing as an analyst while contributing to a team that values clear thinking, problem-solving, and data-driven decision-making. I would welcome the opportunity to discuss how my background in computer science, statistics, and applied analysis can support your organization’s goals.
          </div>

          <div class="mt-6 border-t border-border pt-6">
            <div class="font-display text-xl italic text-ink">Austin Meléndez</div>
            <div class="mt-0.5 text-[11px] text-ink4">Data Analyst · austinmelendez.com</div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div>
        <!-- FACTS TABLE -->
        <div class="mb-8 flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
          <div
            v-for="f in facts"
            :key="f.key"
            class="flex items-center justify-between bg-cream px-6 py-5 transition-colors hover:bg-white"
          >
            <span class="font-mono text-[11px] tracking-[0.5px] text-ink4">{{ f.key }}</span>
            <span
              class="text-[13px] font-medium"
              :class="f.highlight ? 'font-semibold text-green-600' : 'text-ink'"
            >{{ f.value }}</span>
          </div>
        </div>

        <!-- PILLARS -->
        <div class="mt-8 grid grid-cols-2 gap-3">
          <div
            v-for="p in pillars"
            :key="p.title"
            class="rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent2 hover:shadow-[0_6px_20px_rgba(13,17,23,0.08)]"
          >
            <div class="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-pale text-accent">
              <SVGIcons :name="p.icon" class="h-5 w-5" />
            </div>
            <div class="mb-1 text-xs font-semibold text-ink">{{ p.title }}</div>
            <div class="text-[11px] leading-normal text-ink4">{{ p.desc }}</div>
          </div>
        </div>

                <div class="flex h-auto w-full items-center justify-center rounded-full font-display text-white shadow-[0_0_0_1px_var(--border),0_8px_24px_rgba(13,17,23,0.08)]">
            <img
      :src="AMInitials"
      alt="AM Initials"
      class="h-auto"
    />
        </div>
      </div>
    </div>
  </section>
</template>
