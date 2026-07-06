<script setup lang="ts">
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import finalMatrixFigure from '@/assets/projects/survival/final_matrix.png';
import deathFigure from '@/assets/projects/survival/km_death.png';
import deathDistanceFigure from '@/assets/projects/survival/km_death_distance_group.png';
import infectionFigure from '@/assets/projects/survival/km_infection.png';
import infectionStatusFigure from '@/assets/projects/survival/km_infection_initial_status.png';
import recoveryFigure from '@/assets/projects/survival/km_recovery.png';
import historyFigure from '@/assets/projects/survival/simulation_history.png';

const techStack = ['R', 'Survival', 'Kaplan-Meier', 'Simulation'];

const githubRepoUrl = 'https://github.com/austin-mel/sirsurvivalanalysis';

const overviewStats = [
  ['100', 'matrix cells treated as survival-analysis subjects'],
  ['1,000', 'cell-step records preserved in the full simulation log'],
  ['20', 'cells with observed first-infection events'],
  ['4', 'cells with observed death events before censoring'],
];

const projectNumbers = [
  ['10', 'x10', 'grid size used for the baseline SIRS simulation'],
  ['9', '', 'final observed simulation step, with step 0 retained in the log'],
  ['13', '', 'cells recovered by the end of the run'],
  ['83', '', 'cells remained susceptible in the final matrix'],
];

const contextCards = [
  {
    type: 'Object of study',
    title: 'Cell-level SIRS transition history',
    body:
      'The matrix begins with one center-seeded infected cell and tracks susceptible, infected, recovered, and deceased states across the run.',
  },
  {
    type: 'Project scope',
    title: 'One audited baseline scenario',
    body:
      'The run fixes model parameters and seed 94128 so every raw file, figure, report, and interpretation refers to the same simulation.',
  },
  {
    type: 'Meaning',
    title: 'Censoring is part of the result',
    body:
      'Cells that do not become infected, recover, or die remain in the endpoint data as censored observations.',
  },
];

const workflowSteps = [
  ['01', 'Define Scenario', 'Use a 10 x 10 center-seeded SIRS model with mortality enabled and fixed run parameters.'],
  ['02', 'Run Simulation', 'Generate the full per-cell log, history table, and final matrix from the baseline run.'],
  ['03', 'Derive Endpoints', 'Calculate infection, recovery, death, event flags, censoring times, and spatial covariates.'],
  ['04', 'Plot Evidence', 'Write simulation history, final matrix, Kaplan-Meier, and stratified Kaplan-Meier figures.'],
  ['05', 'Render Reports', 'Create reports connecting the raw run, endpoint table, survival curves, and interpretation.'],
];

const setupCards = [
  {
    type: 'State model',
    title: 'Each cell occupies one model state at each step.',
    body: '0 = susceptible, 1 = infected, 2 = recovered, and 3 = deceased. The full log preserves state for every cell at every observed time point.',
  },
  {
    type: 'Survival convention',
    title: 'Endpoint indicators follow R survival syntax.',
    body: 'Surv(time_to_endpoint, event_endpoint) uses TRUE for observed events and FALSE for cells censored at the final observed step.',
  },
];

const endpointRows = [
  ['First infection', '20', '80', '20%', 'Most cells never become infected.'],
  ['Recovery', '13', '87', '13%', 'Recovery follows infection and immunity transition.'],
  ['Death', '4', '96', '4%', 'Mortality is rare in this single baseline run.'],
];

const endpointChecks = [
  ['100', 'survival endpoint rows, exactly one per cell'],
  ['TRUE', 'logical event indicators for survival status columns'],
  ['52', 'cells grouped as near center by distance threshold'],
  ['48', 'cells grouped as far from center by distance threshold'],
  ['99', 'cells begin susceptible at step 0'],
  ['1', 'center cell begins infected at step 0'],
];

const outputCards = [
  {
    type: 'Primary result',
    title: 'Endpoint-specific survival curves',
    body:
      'The project uses separate Kaplan-Meier fits because infection, recovery, and death have different event and censoring patterns.',
  },
  {
    type: 'Descriptive modeling',
    title: 'Log-rank tests and Cox models',
    body:
      'Models use row, column, distance from center, and initial infection status as descriptive covariates for one fixed baseline run.',
  },
  {
    type: 'Interpretation',
    title: 'Non-events remain part of the evidence.',
    body:
      'Eighty cells are censored for infection, 87 for recovery, and 96 for death, making censoring central to the result.',
  },
];

const figures = [
  {
    image: historyFigure,
    type: 'Simulation visual',
    title: 'Simulation history',
    body: 'Infections peak at 4 cells, recovered cells rise to 13, and active infection falls to 0 by step 9.',
    alt: 'Line chart of susceptible infected recovered and deceased cells over simulation steps',
  },
  {
    image: finalMatrixFigure,
    type: 'Simulation visual',
    title: 'Final matrix',
    body: 'The final grid contains 83 susceptible cells, 13 recovered cells, 4 deceased cells, and 0 infected cells.',
    alt: 'Final 10 by 10 matrix showing susceptible recovered and deceased cells',
  },
  {
    image: infectionFigure,
    type: 'Survival visual',
    title: 'Kaplan-Meier curve for first infection',
    body: 'The infection survival curve remains high because 80 cells are censored without becoming infected.',
    alt: 'Kaplan-Meier curve for time to first infection',
  },
  {
    image: recoveryFigure,
    type: 'Survival visual',
    title: 'Kaplan-Meier curve for recovery',
    body: 'Recovery is observed in 13 cells by the final simulation step.',
    alt: 'Kaplan-Meier curve for time to recovery',
  },
  {
    image: deathFigure,
    type: 'Survival visual',
    title: 'Kaplan-Meier curve for death',
    body: 'Death is rare in this run: 4 observed events and 96 censored cells.',
    alt: 'Kaplan-Meier curve for time to death',
  },
  {
    image: deathDistanceFigure,
    type: 'Survival visual',
    title: 'Death curve by distance group',
    body: 'Near-center and far-from-center groups connect spatial position back to survival outcomes.',
    alt: 'Kaplan-Meier death curve stratified by distance from center',
  },
  {
    image: infectionStatusFigure,
    type: 'Survival visual',
    title: 'Infection by initial infection status',
    body: 'The initially infected center cell has infection time zero; all other cells start susceptible.',
    alt: 'Kaplan-Meier infection curve stratified by initial infection status',
  },
];

const deliverables = [
  {
    type: 'Raw outputs',
    title: 'full_log.csv, history.csv, final_matrix.csv',
    body: 'The raw files preserve the per-cell log, aggregate simulation history, and final grid state.',
  },
  {
    type: 'Derived data',
    title: 'survival_endpoints.csv',
    body: 'One row per cell with endpoint times, observed-event flags, censoring times, final state, and covariates.',
  },
  {
    type: 'Rendered reports',
    title: '01_simulation_run.html, 02_survival_analysis.html',
    body:
      'Reports document the baseline run, validation checks, survival curves, log-rank tests, Cox models, and interpretation.',
  },
];

const scopeCards = [
  {
    type: 'What is strong',
    title: 'The chain of evidence is complete.',
    body: 'The runner writes data, figures, reports, commands, and session information from the same baseline scenario.',
  },
  {
    type: 'What is limited',
    title: 'One seed is not a simulation study.',
    body: 'The Cox estimates are descriptive because the project analyzes one run with one fixed parameter set.',
  },
  {
    type: 'What it teaches',
    title: 'Censored cells should remain visible.',
    body: 'The project shows how survival methods can represent transitions that happen and endpoints that remain unobserved.',
  },
];
</script>

<template>
  <main class="relative overflow-hidden bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute bottom-[360px] left-[-120px] h-[280px] w-[280px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section class="relative z-[1] mx-auto grid min-h-[680px] w-[min(1120px,calc(100%_-_48px))] grid-cols-1 items-center gap-10 py-14 pt-[76px] text-center lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.76fr)] lg:gap-14 lg:text-left">
      <div>
        <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent2/20 bg-accent-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-accent before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold before:content-['']">
          Reproducible Simulation Case Study
        </div>

        <h1 class="max-w-[760px] font-display text-[46px] font-black leading-[0.95] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:text-[88px]">
          Survival analysis for a <em class="text-accent">baseline SIRS</em> simulation.
        </h1>

        <p class="mt-7 max-w-[620px] text-[18px] font-light leading-[1.72] text-ink3">
          This project turns a mortality-enabled SIRS grid simulation into a cell-level survival analysis where each matrix cell is a subject and each transition can become an endpoint.
        </p>

        <div class="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-[22px] text-sm font-semibold text-white no-underline transition-colors hover:bg-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View Github repo</a>
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-[22px] text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2" href="#overview">See project description</a>
        </div>
      </div>

      <aside class="relative" aria-label="SIRS survival project overview">
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
            <div class="mb-2 text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">Core Finding</div>
            <strong class="block text-[22px] leading-tight tracking-normal">Survival analysis makes non-events part of the evidence.</strong>
            <p class="mt-2.5 text-[13px] leading-[1.6] text-white/75">
              The analysis separates infection, recovery, and death endpoints while preserving cells censored at the final observed step.
            </p>
          </div>
        </div>
      </aside>
    </section>

    <section class="relative overflow-hidden bg-ink py-24 text-white" aria-label="Baseline run by the numbers">
      <div class="pointer-events-none absolute right-[-40px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/[0.04]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute right-[-140px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/[0.03]" aria-hidden="true"></div>

      <div class="relative mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">Baseline run by the numbers</div>

        <div class="grid grid-cols-1 md:grid-cols-4">
          <div v-for="(stat, index) in projectNumbers" :key="stat[0]" class="min-h-40 border-white/[0.08] py-8 md:border-r md:px-8" :class="{ 'md:border-r-0': index === projectNumbers.length - 1, 'border-b md:border-b-0': index !== projectNumbers.length - 1 }">
            <strong class="block font-display text-[54px] font-black leading-none tracking-normal text-white">{{ stat[0] }}<span class="text-accent2">{{ stat[1] }}</span></strong>
            <p id="overview" class="mt-2.5 max-w-[190px] text-[13px] font-light leading-[1.45] text-white/45">{{ stat[2] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Project Narrative</div>
            <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">A small simulation becomes a complete survival-analysis object.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The project defines one reproducible baseline scenario, logs every cell at every step, derives endpoint times and censoring indicators, then renders simulation and survival-analysis reports.
          </p>
        </header>

        <div class="mb-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article v-for="card in contextCards" :key="card.title" class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
            <strong class="block text-[15px] text-ink">{{ card.title }}</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card.body }}</p>
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

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Simulation Setup</div>
          <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The baseline scenario is simple enough to audit cell by cell.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The run uses infection probability 0.25, immunity probability 0.70, mortality enabled, fatality probability 0.15, full logging, and seed 94128.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article v-for="card in setupCards" :key="card.title" class="rounded-[12px] border border-border bg-white p-6">
          <div class="font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
          <strong class="mt-4 block text-[15px] text-ink">{{ card.title }}</strong>
          <p class="mt-3 text-[13px] leading-[1.6] text-ink3">{{ card.body }}</p>
        </article>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <article v-for="figure in figures.slice(0, 2)" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ figure.type }}</div>
          <strong class="block text-[15px] text-ink">{{ figure.title }}</strong>
          <ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Generated simulation figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" />
          <p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p>
        </article>
      </div>
    </section>

    <section id="endpoints" class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Endpoint Dataset</div>
          <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The derived table connects the grid to survival methods.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          survival_endpoints.csv contains one row per cell with endpoint times, event flags, final state, initial state, distance from center, and near or far distance group.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-[1.06fr_0.94fr]">
        <article class="overflow-hidden rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4">
            <h3 class="text-[15px] font-bold text-ink">Endpoint event summary</h3>
            <span class="font-mono text-[11px] text-ink4">100 cells</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[620px] border-collapse text-left text-xs">
              <thead class="text-ink3">
                <tr class="border-b border-border">
                  <th class="p-2.5">Endpoint</th>
                  <th class="p-2.5">Observed events</th>
                  <th class="p-2.5">Censored cells</th>
                  <th class="p-2.5">Event share</th>
                  <th class="p-2.5">Meaning</th>
                </tr>
              </thead>
              <tbody class="text-ink3">
                <tr v-for="row in endpointRows" :key="row[0]" class="border-b border-cream3 last:border-b-0">
                  <td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4 text-[13px] leading-[1.6] text-ink3">
            Each endpoint is censored independently. A cell can be observed for infection and recovery while still censored for death.
          </p>
        </article>

        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4">
            <h3 class="text-[15px] font-bold text-ink">Endpoint construction checks</h3>
            <span class="font-mono text-[11px] text-ink4">run_all.R</span>
          </div>
          <div class="grid grid-cols-1 gap-3 xs:grid-cols-2">
            <div v-for="check in endpointChecks" :key="check[0]" class="rounded-[10px] bg-cream p-4">
              <strong class="block font-mono text-[17px] text-ink">{{ check[0] }}</strong>
              <span class="mt-1 block text-xs leading-[1.45] text-ink3">{{ check[1] }}</span>
            </div>
          </div>
          <p class="mt-4 text-[13px] leading-[1.6] text-ink3">
            Validation confirms row counts, unique cell IDs, logical event flags, and numeric endpoint times before reports are written.
          </p>
        </article>
      </div>
    </section>

    <section id="outputs" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Survival Output</div>
            <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The fitted curves describe this baseline run without overclaiming.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            Kaplan-Meier curves describe time to first infection, recovery, and death. Stratified curves compare infection by initial status and death by distance group.
          </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article v-for="card in outputCards" :key="card.title" class="rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
            <strong class="block text-[15px] text-ink">{{ card.title }}</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card.body }}</p>
          </article>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article v-for="figure in figures.slice(2)" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ figure.type }}</div>
            <strong class="block text-[15px] text-ink">{{ figure.title }}</strong>
            <ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Generated survival figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" />
            <p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Deliverables</div>
          <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The project includes raw data, derived data, figures, and reports.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The output structure lets a reader trace the work from simulation parameters to raw logs, endpoint construction, figures, rendered reports, command history, and session context.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article v-for="card in deliverables" :key="card.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
          <strong class="block text-[15px] text-ink">{{ card.title }}</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card.body }}</p>
        </article>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Interpretation Boundary</div>
            <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The analysis is reproducible, descriptive, and intentionally scoped.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The curves and models explain one simulated baseline run. They are useful for demonstrating survival-analysis structure, not for making population-level claims about all possible SIRS runs.
          </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article v-for="card in scopeCards" :key="card.title" class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
            <strong class="block text-[15px] text-ink">{{ card.title }}</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <div class="relative overflow-hidden rounded-[14px] bg-ink p-8 text-white md:p-11">
          <div class="pointer-events-none absolute right-[-170px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]" aria-hidden="true"></div>
          <div class="relative z-[1] mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/65 before:h-0.5 before:w-[26px] before:bg-white/65 before:content-['']">Final Conclusions</div>
          <h2 class="relative z-[1] max-w-[760px] font-display text-[34px] font-bold leading-[1.06] tracking-normal text-white md:text-[48px]">A compact SIRS run can be read as a survival-analysis dataset.</h2>
          <h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Project conclusion</h3>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
            The baseline run starts with one infected center cell and ends at step 9 with 83 susceptible, 13 recovered, 4 deceased, and 0 actively infected cells. The survival analysis turns those state histories into first-infection, recovery, and death endpoints for all 100 cells.
          </p>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
            The most important interpretive move is keeping non-events in the analysis. Eighty cells are censored for infection, 87 for recovery, and 96 for death, so the analysis describes both where the simulated process reached and where it did not.
          </p>
          <h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Recommendation</h3>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
            Treat the current outputs as a reproducible baseline demonstration. For stronger inference, repeat the simulation across multiple seeds and parameter settings before comparing endpoint distributions, stratified survival curves, and Cox summaries.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
