<script setup lang="ts">
const eyebrow = 'Front-End Systems Prototype';

const title = 'Pharmatrial clinical trial portal.';

const lede =
  'Pharmatrial is a Vue and TypeScript simulation of a blinded clinical trial lifecycle for Jane Hopkins, FDA, and Bavaria Pharma stakeholders.';

const stack = ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'Tailwind CSS', 'Zod'];

const primaryAction = {
  label: 'View implementation output',
  href: '#outputs',
};

const secondaryAction = {
  label: 'Review product rules',
  href: '#api',
};

const stats = [
  {
    value: '4',
    label: 'role-selected portals for clinical, regulatory, and sponsor workflows',
  },
  {
    value: '8',
    label: 'seeded trials spanning pending, active, rejected, and completed states',
  },
  {
    value: '26',
    label: 'synthetic patients used to exercise eligibility and privacy rules',
  },
  {
    value: '68',
    label: 'Vue components across workspace, modals, and trial surfaces',
  },
];

const decisionLabel = 'Trial Overview';

const decisionTitle = 'Role and state guardrails drive the prototype.';

const decisionBody =
  'The project is strongest as a front-end system that makes privacy boundaries, workflow state, blinded assignment, and disclosure timing visible.';
</script>

<template>
  <section class="mx-auto grid min-h-[680px] w-[min(1120px,calc(100%_-_48px))] grid-cols-1 items-center gap-10 pt-[132px] pb-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.76fr)] lg:gap-14">
    <div>
      <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent2/20 bg-accent-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-accent before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold before:content-['']">
        {{ eyebrow }}
      </div>

      <h1 class="max-w-[760px] font-display text-[46px] font-black leading-[0.98] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:text-[86px]">
        {{ title }}
      </h1>

      <p class="mt-7 max-w-[620px] text-[18px] font-light leading-[1.72] text-ink3">
        {{ lede }}
      </p>

      <div class="mt-9 flex flex-wrap gap-3">
        <a
          class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent"
          :href="primaryAction.href"
        >
          {{ primaryAction.label }}
        </a>

        <a
          class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-5 text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2"
          :href="secondaryAction.href"
        >
          {{ secondaryAction.label }}
        </a>
      </div>
    </div>

    <div>
      <div class="mb-3 flex flex-wrap justify-center gap-1.5" aria-label="Technology stack">
        <span
          v-for="item in stack"
          :key="item"
          class="rounded border border-border bg-white/80 px-2.5 py-1 text-[11px] font-medium text-ink3"
        >
          {{ item }}
        </span>
      </div>

      <aside
        class="rounded-[14px] border border-border bg-white/85 p-[22px] shadow-[0_16px_48px_rgba(13,17,23,0.09)]"
        aria-label="Project overview"
      >
        <div class="mb-[18px] grid grid-cols-1 gap-3 xs:grid-cols-2">
          <div
            v-for="stat in stats"
            :key="`${stat.value}-${stat.label}`"
            class="min-h-[108px] rounded-[10px] border border-border bg-cream p-4"
          >
            <strong class="mb-2 block font-display text-[28px] leading-none text-ink">
              {{ stat.value }}
            </strong>
            <span class="text-[13px] leading-[1.55] text-ink3">
              {{ stat.label }}
            </span>
          </div>
        </div>

        <div class="rounded-[10px] bg-accent p-[18px] text-white">
          <div class="mb-2 text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">
            {{ decisionLabel }}
          </div>

          <strong class="block text-[22px] leading-tight tracking-normal">
            {{ decisionTitle }}
          </strong>

          <p class="mt-2.5 text-[13px] leading-[1.6] text-white/75">
            {{ decisionBody }}
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>