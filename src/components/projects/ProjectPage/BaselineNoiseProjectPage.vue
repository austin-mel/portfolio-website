<script setup lang="ts">
import ProjectPdfReportModal from '@/components/projects/ProjectPage/ProjectPdfReportModal.vue';
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import baselineReportPdf from '@/assets/projects/baseline/Baseline Noise Report.pdf';
import histogramFigure from '@/assets/projects/baseline/eda-log10-histograms.png';
import qqFigure from '@/assets/projects/baseline/eda-qq-plots.png';
import powerLawFigure from '@/assets/projects/baseline/eda-power-law-diagnostics.png';
import spearmanFigure from '@/assets/projects/baseline/eda-spearman-heatmap.png';
import labCurvesFigure from '@/assets/projects/baseline/eda-lab-level-curves.png';
import modelDensityFigure from '@/assets/projects/baseline/model-kde-log-skew-t.png';
import modelCdfFigure from '@/assets/projects/baseline/model-cdf-comparison.png';

const githubRepoUrl = 'https://github.com/austin-mel-edu/sacramento-state-university/tree/master/STAT192%20-%20Senior%20Capstone%20Project/Adam%20G%20-%20Thermochron%20Systems%20LLC';

const techStack = ['Python', 'Statistical Modeling', 'EDA', 'Scientific Reporting'];

const overviewStats = [
  ['492k', 'cleaned BCA observations in the long-format dataset'],
  ['82k', 'observations at each Prisma Pro dwell time'],
  ['71', 'valid BCA runs retained for distributional analysis'],
  ['491,997', 'positive observations used in log-scale modeling'],
];

const projectNumbers = [
  ['492', 'k', 'cleaned baseline-noise observations from Prisma Pro BCA files'],
  ['82', 'k', 'observations per dwell time for 0.128s through 4.096s'],
  ['6', '', 'parallel dwell-time channels modeled on the Prisma Pro grid'],
  ['3', '', 'nonpositive values dropped before fitting the log model'],
];

const analystSummary = [
  ['Question', 'Can Thermochron use a channel-specific baseline-noise estimate instead of one pooled or live baseline value for every Prisma Pro measurement channel?'],
  ['My role', 'Parsed and cleaned semi-structured BCA files, audited correction outputs, built diagnostics, compared model options, and translated the result into a correction recommendation.'],
  ['Data', '492,000 cleaned BCA observations from 71 valid Prisma Pro runs, balanced across six dwell-time channels and multiple lab/source batches.'],
  ['Method', 'Used log-scale EDA, dwell-time summaries, cross-channel dependence checks, KDE diagnostics, and maximum-likelihood log-skew-t modeling.'],
  ['Result', 'Baseline current decreases with dwell time, while spread and tail behavior also change; a single correction value would mismatch several channels.'],
  ['Limit', 'The model is suitable for correction planning and risk communication, but production correction still needs validation on held-out experimental samples.'],
];

const workflowSteps = [
  ['01', 'Parse BCA Files', 'Classify He text files as BCA, PBCA, or Experimental; PBCA files are excluded from distributional modeling.'],
  ['02', 'Reverse Correction', 'Add back auto-subtracted baseline columns in flagged runs and recheck negatives.'],
  ['03', 'Repair Timestamps', 'Handle timestamp resets by retaining the final monotonic segment of affected BCA files.'],
  ['04', 'Export Outputs', 'Write bca_long.csv, bca_wide.csv, and dataframes.pkl for pooled modeling and file-level checks.'],
  ['05', 'Select Correction Basis', 'Compare simple summaries, diagnostic benchmarks, and parametric fits before recommending dwell-time-specific correction support.'],
];

const modelSelectionRows = [
  ['Pooled summary', 'One median or mean across all BCA observations.', 'Ignores the dwell-time pattern and risks systematic overcorrection.'],
  ['Log-normal reference', 'Normality checks on log10-positive BCA current.', 'Useful baseline assumption; Q-Q tail departures made it too rigid as the final model.'],
  ['KDE diagnostic', 'Nonparametric density and CDF benchmark by dwell time.', 'Good for checking shape and tail fit, but not stable enough alone for correction rules.'],
  ['Selected log-skew-t', 'Dwell-time functions for location, scale, and tail heaviness.', 'Selected because the fitted parameters vary by channel dwell time and the remaining validation limits are explicit.'],
];

const exploratoryFigures = [
  {
    image: histogramFigure,
    title: 'Positive BCA log10 histograms by dwell time',
    body: 'On the log scale, centers move left and the distributions narrow as dwell time increases.',
    alt: 'Positive BCA intensity log10 histograms by dwell time',
  },
  {
    image: qqFigure,
    title: 'Q-Q plots against a normal reference',
    body: 'Systematic tail departures show that the log-normal assumption served as a reference model but was too rigid as the final model.',
    alt: 'Q-Q plots of positive log10 BCA intensity by dwell time',
  },
  {
    image: powerLawFigure,
    title: 'Power-law dwell-time diagnostics',
    body: 'Median, IQR, and upper-tail summaries decline smoothly with dwell time, supporting dwell-time-aware modeling.',
    alt: 'Power-law fit diagnostic plots for positive BCA intensity summaries',
  },
  {
    image: spearmanFigure,
    title: 'Spearman correlation across dwell channels',
    body: 'Cross-dwell dependence is weak and uneven, so one live baseline channel is diagnostic information rather than a direct correction for every channel.',
    alt: 'Spearman rank correlation heatmap across dwell-time channels',
  },
  {
    image: labCurvesFigure,
    title: 'Lab-level center, spread, and tail curves',
    body: 'The lab audit shows source-level differences, but the shared dwell-time pattern remains clear across Glasgow, Salzburg, Wuhan, and Nineamu.',
    alt: 'Lab-level median, IQR, P95, and P99 curves across dwell time',
  },
];

const modelFigures = [
  {
    image: modelDensityFigure,
    title: 'KDE and fitted log-skew-t on log10 scale',
    body: 'The fitted model follows the main dwell-time-specific distribution shape while pooling structure through smooth parameter functions.',
    alt: 'Raw data, KDE density, and fitted log-skew-t density by dwell time',
  },
  {
    image: modelCdfFigure,
    title: 'Empirical CDF versus fitted CDF',
    body: 'CDF diagnostics check the whole distribution, including tails; remaining tail mismatch is why validation is required before production correction.',
    alt: 'Empirical CDF and fitted log-skew-t CDF by dwell time',
  },
];
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute bottom-[360px] left-[-120px] h-[280px] w-[280px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section class="relative z-[1] mx-auto grid min-h-[680px] w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] grid-cols-1 items-center gap-10 py-14 pt-[76px] text-center lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.76fr)] lg:gap-14 lg:text-left">
      <div>
        <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent2/20 bg-accent-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-accent before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold before:content-['']">
          Measurement-Risk Analysis
        </div>
        <h1 class="max-w-[760px] font-display text-[40px] font-black xxs:text-[46px] leading-[0.95] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:text-[88px]">
          Identifying the <em class="text-accent">distribution</em> of baseline noise.
        </h1>
        <p class="mt-7 max-w-[620px] text-[18px] font-light leading-[1.72] text-ink3">
          Statistics capstone project for Thermochron Systems LLC evaluating whether Prisma Pro baseline correction should be matched to each dwell-time channel instead of using one pooled or live baseline value.
        </p>
        <div class="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-[22px] text-sm font-semibold text-white no-underline transition-colors hover:bg-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View Github repo</a>
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-[22px] text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2" href="#overview">See project description</a>
          <ProjectPdfReportModal
            :src="baselineReportPdf"
            title="Baseline Noise Report"
            button-label="View full PDF report"
            trigger-class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-[22px] text-sm font-semibold text-accent no-underline transition-colors hover:bg-accent hover:text-white"
          />
        </div>
      </div>

      <aside class="relative" aria-label="Baseline-noise project overview">
        <div class="mb-4 flex flex-nowrap gap-2 overflow-x-auto pb-1 md:justify-center" aria-label="Technology stack used">
          <span
            v-for="item in techStack"
            :key="item"
            class="shrink-0 rounded-full border border-accent2/15 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-ink3 shadow-[0_3px_12px_rgb(13_17_23_/_5%)]"
          >
            {{ item }}
          </span>
        </div>

        <div class="rounded-[14px] border border-border bg-white/85 p-[22px] text-left shadow-[0_16px_48px_rgb(13_17_23_/_9%)]">
          <div class="mb-[18px] grid grid-cols-1 gap-3 xs:grid-cols-2">
            <div v-for="stat in overviewStats" :key="stat[0]" class="min-h-[108px] rounded-[10px] border border-border bg-cream p-4">
              <strong class="mb-2 block font-display text-[28px] leading-none text-ink">{{ stat[0] }}</strong>
              <span class="text-[13px] leading-[1.55] text-ink3">{{ stat[1] }}</span>
            </div>
          </div>
          <div class="rounded-[10px] bg-accent p-[18px] text-white">
            <div class="mb-2 text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">Final Conclusion</div>
            <strong class="block text-[22px] leading-tight tracking-normal">Use a dwell-time-specific reparameterized log-skew-t framework.</strong>
            <p class="mt-2.5 text-[13px] leading-[1.6] text-white/75">Baseline noise cannot be treated as one constant background value; location, spread, and tail behavior all change with dwell time.</p>
          </div>
        </div>
      </aside>
    </section>

    <section class="relative overflow-hidden bg-ink py-24 text-white" aria-label="Project numbers">
      <div class="pointer-events-none absolute right-[-40px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/[0.04]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute right-[-140px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/[0.03]" aria-hidden="true"></div>
      <div class="relative mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">By the numbers</div>
        <div class="grid grid-cols-1 md:grid-cols-4">
          <div v-for="(stat, index) in projectNumbers" :key="stat[0]" class="min-h-40 border-white/[0.08] py-8 md:border-r md:px-8" :class="{ 'md:border-r-0': index === projectNumbers.length - 1, 'border-b md:border-b-0': index !== projectNumbers.length - 1 }">
            <strong class="block font-display text-[44px] font-black xs:text-[54px] leading-none tracking-normal text-white">{{ stat[0] }}<span class="text-accent2">{{ stat[1] }}</span></strong>
            <p id="overview" class="mt-2.5 max-w-[190px] text-[13px] font-light leading-[1.45] text-white/45">{{ stat[2] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Analyst Summary</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">Thermochron needed baseline correction to account for dwell-time risk.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The analysis translates noisy instrument files into a concrete recommendation: correct channels with dwell-time-matched baseline behavior and keep validation limits visible.</p>
      </header>

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <article v-for="item in analystSummary" :key="item[0]" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-3 font-mono text-[11px] uppercase text-ink4">{{ item[0] }}</div>
          <p class="m-0 text-[13px] leading-[1.6] text-ink3">{{ item[1] }}</p>
        </article>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Project Overview</div>
            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">A client measurement problem with statistical consequences.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The project moves from semi-structured mass spectrometer files to cleaned BCA observations, distribution checks, dwell-time diagnostics, and a correction recommendation that reduces the chance of physically impossible negative signals.</p>
        </header>

        <div class="mb-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Object of study</div>
            <strong class="block text-[15px] text-ink">Baseline noise in gas mass spectrometry</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">Even when no sample ions are present, the detector can record a small nonzero current. BCA files measure that background noise process directly.</p>
          </article>
          <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Project scope</div>
            <strong class="block text-[15px] text-ink">Prisma Pro BCA runs across labs and batches</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">The dataset represents Glasgow, Salzburg, Wuhan, and a distinct Nineamu experimental batch retained for source-level audit.</p>
          </article>
          <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Meaning</div>
            <strong class="block text-[15px] text-ink">Correction matched to the measurement channel</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">A mismatched baseline estimate can overcorrect the signal and create physically impossible negative ion currents.</p>
          </article>
        </div>

        <div class="grid grid-cols-1 gap-3 md:grid-cols-5">
          <article v-for="step in workflowSteps" :key="step[0]" class="min-h-[156px] rounded-[10px] border border-border bg-white p-[18px]">
            <div class="mb-[18px] grid h-[30px] w-[30px] place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">{{ step[0] }}</div>
            <h3 class="mb-2 text-sm font-bold text-ink">{{ step[1] }}</h3>
            <p class="m-0 text-xs leading-[1.55] text-ink3">{{ step[2] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Measurement Problem</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">Mass spectrometry turns tiny currents into scientific evidence.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">Gas mass spectrometry supports geochronology by measuring gaseous isotope abundances released from rock samples. Recorded currents are extremely small, so background noise can meaningfully affect recovered signal.</p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="font-mono text-[11px] uppercase text-ink4">Measurement model</div>
          <strong class="mt-4 block text-[15px] text-ink">Raw measurements combine signal and noise.</strong>
          <code class="my-3 block rounded-[10px] bg-cream px-4 py-4 font-mono text-[13px] leading-[1.6] text-accent">raw current = true ion signal + baseline noise</code>
          <p class="m-0 text-[13px] leading-[1.6] text-ink3">A standard experimental channel measures the isotope signal of interest plus the instrument background present during acquisition.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="font-mono text-[11px] uppercase text-ink4">BCA isolation logic</div>
          <strong class="mt-4 block text-[15px] text-ink">BCA runs measure noise directly.</strong>
          <code class="my-3 block rounded-[10px] bg-cream px-4 py-4 font-mono text-[13px] leading-[1.6] text-accent">BCA current = baseline noise</code>
          <p class="m-0 text-[13px] leading-[1.6] text-ink3">A Baseline Characterization Analysis targets a mass where no real gas species is expected, so observed current approximates the noise process.</p>
        </article>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.06fr_0.94fr]">
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">BCA run</h3><span class="font-mono text-[11px] text-ink4">noise-only data</span></div>
          <p class="text-[13px] leading-[1.6] text-ink3">All six dwell-time channels measure baseline mass settings, so BCA files support a direct test of whether the noise distribution changes with dwell time.</p>
          <div class="mt-[18px] grid gap-3"><div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Channels</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">0.128, 0.256, 0.512, 1.024, 2.048, and 4.096 seconds.</span></div><div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Object</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">Baseline-noise location, spread, skewness, and tail behavior.</span></div></div>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Standard experiment</h3><span class="font-mono text-[11px] text-ink4">signal + noise data</span></div>
          <p class="text-[13px] leading-[1.6] text-ink3">Experimental channels target real isotope species, while the live baseline channel is fixed at 5.5 amu and 0.512 seconds.</p>
          <div class="mt-[18px] grid gap-3"><div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Risk</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">A mismatched estimate can overcorrect the signal and create negative ion currents.</span></div><div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Goal</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">Use the BCA noise distribution that matches each channel's dwell time.</span></div></div>
        </article>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div><div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Exploratory Findings</div><h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The cleaned BCA data show strong dwell-time dependence.</h2></div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The analysis used 492,000 cleaned BCA observations, exactly 82,000 at each Prisma Pro dwell time. Three zero-valued observations were excluded from log-scale analysis.</p>
      </header>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-[1.06fr_0.94fr]">
        <article class="overflow-hidden rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Observed baseline-current summaries</h3><span class="font-mono text-[11px] text-ink4">amperes</span></div>
          <div class="overflow-x-auto"><table class="min-w-[560px] w-full border-collapse text-left text-xs"><thead class="text-ink3"><tr class="border-b border-border"><th class="p-2.5">Dwell time</th><th class="p-2.5">n</th><th class="p-2.5">Median A</th><th class="p-2.5">Mean A</th><th class="p-2.5">SD A</th></tr></thead><tbody class="text-ink3"><tr v-for="row in [['0.128','82,000','2.986e-14','3.928e-14','3.487e-14'],['0.256','82,000','1.956e-14','2.490e-14','2.139e-14'],['0.512','82,000','1.266e-14','1.565e-14','1.292e-14'],['1.024','82,000','8.607e-15','1.025e-14','7.973e-15'],['2.048','82,000','6.363e-15','7.162e-15','5.128e-15'],['4.096','82,000','5.256e-15','5.642e-15','3.703e-15']]" :key="row[0]" class="border-b border-cream3 last:border-b-0"><td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td></tr></tbody></table></div>
          <p class="mt-4 text-[13px] leading-[1.6] text-ink3">Longer dwell times reduce both the center and spread of measured baseline current, making dwell time a primary modeling feature.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Assumption checks from EDA</h3><span class="font-mono text-[11px] text-ink4">02-assumptions.ipynb</span></div>
          <div class="grid grid-cols-2 gap-2.5"><div v-for="item in [['Raw scale','Compressed near zero with long right tails.'],['Log10 scale','Histograms make dwell-time shifts easier to compare.'],['Q-Q plots','Tail departures mean log-normal is too rigid.'],['0.007','Mean off-diagonal Spearman correlation.'],['Lab/batch','Dwell time remains dominant.'],['5 amu vs 9 amu','Little evidence of AMU shifts.']]" :key="item[0]" class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[13px] text-ink">{{ item[0] }}</strong><span class="mt-1 block text-[11px] leading-[1.35] text-ink3">{{ item[1] }}</span></div></div>
          <p class="mt-4 text-[13px] leading-[1.6] text-ink3">Tail behavior matters for correction risk, and the EDA supports dwell-time-specific modeling rather than one pooled baseline correction.</p>
        </article>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <article v-for="figure in exploratoryFigures" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Notebook visual</div>
          <strong class="block text-[15px] text-ink">{{ figure.title }}</strong>
          <ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Exploratory notebook figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" />
          <p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p>
        </article>
      </div>
    </section>

    <section id="results" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14"><div><div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Modeling Output</div><h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The selected model supports dwell-time-specific correction.</h2></div><p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">Maximum likelihood fitting used 491,997 positive BCA observations. KDE remains a diagnostic benchmark; the structured log-skew-t model is the selected option after comparing simpler correction choices.</p></header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article class="rounded-[12px] border border-green-800/30 bg-[#f4fbf7] p-5"><span class="inline-block rounded-full bg-[#e9f8ef] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#147a4d]">Selected framework</span><h3 class="mt-4 text-[15px] font-bold text-ink">Reparameterized log-skew-t</h3><p class="text-[13px] leading-[1.6] text-ink3">Location, scale, and tail-heaviness vary smoothly with dwell time, while shared skewness pools information across the six dwell groups.</p><div class="mt-[18px] grid grid-cols-2 gap-2.5"><div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">1,351,186</strong><span class="text-[11px] text-ink3">AIC from fitted model</span></div><div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">1,351,264</strong><span class="text-[11px] text-ink3">BIC from fitted model</span></div></div></article>
          <article class="rounded-[12px] border border-border bg-white p-5"><span class="inline-block rounded-full bg-accent-pale px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1px] text-accent">Diagnostic benchmark</span><h3 class="mt-4 text-[15px] font-bold text-ink">KDE and cross-dwell checks</h3><p class="text-[13px] leading-[1.6] text-ink3">KDE is a nonparametric diagnostic benchmark rather than the selected correction model. Density overlays, CDF plots, and Spearman correlations check shape, tails, and cycle-level dependence.</p><div class="mt-[18px] grid grid-cols-2 gap-2.5"><div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">0.215</strong><span class="text-[11px] text-ink3">max density gap</span></div><div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">0.007</strong><span class="text-[11px] text-ink3">mean Spearman correlation</span></div></div></article>
        </div>

        <article class="mt-6 overflow-hidden rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Model-selection logic</h3><span class="font-mono text-[11px] text-ink4">correction options</span></div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[700px] border-collapse text-left text-xs">
              <thead class="text-ink3">
                <tr class="border-b border-border">
                  <th class="p-2.5">Option</th>
                  <th class="p-2.5">What it does</th>
                  <th class="p-2.5">Analyst decision</th>
                </tr>
              </thead>
              <tbody class="text-ink3">
                <tr v-for="row in modelSelectionRows" :key="row[0]" class="border-b border-cream3 last:border-b-0">
                  <td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Model parameters</div><strong class="block text-[15px] text-ink">What the log-skew-t controls</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">Location captures center, scale captures spread, skewness captures asymmetry, and degrees of freedom captures tail heaviness.</p></article><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Dwell-time structure</div><strong class="block text-[15px] text-ink">Most parameters vary with dwell time</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">Location, scale, and degrees of freedom are dwell-time functions; skewness is shared to reduce instability.</p></article><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Tail interpretation</div><strong class="block text-[15px] text-ink">Heavier fitted tails at longer dwell times</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">Degrees of freedom decrease from about 10.29 at 0.128 seconds to 4.53 at 4.096 seconds.</p></article></div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"><article v-for="figure in modelFigures" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Notebook visual</div><strong class="block text-[15px] text-ink">{{ figure.title }}</strong><ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Modeling notebook figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" /><p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p></article></div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14"><div><div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Deliverables</div><h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">Deliverables document the analysis at multiple levels of technical detail.</h2></div><p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The deliverables include notebooks, source materials, presentation files, and a final report for technical review.</p></header>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3"><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Notebook pipeline</div><strong class="block text-[15px] text-ink">01-preprocessing, 02-assumptions, 03-modeling</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">Three notebooks cover source parsing, assumption checks, EDA, and log-skew-t fitting.</p></article><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Statistical report</div><strong class="block text-[15px] text-ink">Baseline Noise Distribution Report.pdf</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">A 38-page capstone report with summary, methods, diagnostics, conclusions, and correction findings.</p></article><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Source archive + deck</div><strong class="block text-[15px] text-ink">data.zip, presentation.pptx, project-background.docx</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">Source and presentation materials connect the analysis to its scientific measurement context.</p></article></div>
      <a class="mt-6 inline-flex min-h-[58px] w-full items-center justify-center rounded-[12px] bg-ink px-6 text-base font-semibold text-white no-underline transition-colors hover:bg-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View Github repo</a>
    </section>

    <section class="bg-cream2 py-[82px]"><div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]"><header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14"><div><div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Correction Implication</div><h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The recommendation is a dwell-time-matched correction strategy.</h2></div><p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The report estimates the baseline-noise behavior that matches each measurement channel's dwell time before applying a correction.</p></header><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Initial correction summary</div><strong class="block text-[15px] text-ink">Median baseline noise by dwell time.</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">The median is less sensitive to heavy upper tails than the mean and provides a stable correction summary.</p></article><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Model-based correction</div><strong class="block text-[15px] text-ink">Correction source from the BCA model.</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">The dwell-time-specific BCA distribution provides a channel-matched correction source instead of one live baseline value for every channel.</p></article><article class="rounded-[12px] border border-border bg-white p-[22px]"><div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Correction effect</div><strong class="block text-[15px] text-ink">Reduced overcorrection risk.</strong><p class="mt-2 text-[13px] leading-[1.55] text-ink3">Matching correction to dwell time reduces negative signals and clarifies downstream uncertainty.</p></article></div></div></section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]"><div class="relative overflow-hidden rounded-[14px] bg-ink p-8 text-white md:p-11"><div class="pointer-events-none absolute right-[-170px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]" aria-hidden="true"></div><div class="relative z-[1] mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/65 before:h-0.5 before:w-[26px] before:bg-white/65 before:content-['']">Final Conclusions</div><h2 class="relative z-[1] max-w-[760px] font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-white md:text-[48px]">Baseline noise is modeled by dwell time before correction.</h2><h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Project conclusion</h3><p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">The cleaned Prisma Pro BCA data show that baseline noise is positive-valued, right-skewed, heavy-tailed, and strongly dependent on dwell time. A single pooled baseline value or one live baseline channel does not support every experimental signal channel.</p><h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Correction conclusion</h3><p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">Median baseline noise by dwell time is the initial correction summary. Model-based correction requires validation on unknown experimental samples and additional BCA measurements at more dwell settings before production use.</p></div></section>
  </main>
</template>
