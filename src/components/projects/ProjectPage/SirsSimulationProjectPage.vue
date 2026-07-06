<script setup lang="ts">
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import infectionHeatmapFigure from '@/assets/projects/sirs/infection-heatmap.png';
import initialMatrixFigure from '@/assets/projects/sirs/initial-matrix.png';
import probabilitySweepFigure from '@/assets/projects/sirs/probability-sweep.png';
import finalMatrixFigure from '@/assets/projects/sirs/sir-final-matrix.png';
import historyFigure from '@/assets/projects/sirs/sir-history.png';

const githubRepoUrl = 'https://github.com/austin-mel/sirmodelsimulation';

const techStack = ['R', 'Package', 'Simulation', 'Visualization'];

const overviewStats = [
  ['3', 'supported model modes: SIR, SIS, and SIRS'],
  ['4', 'cell states encoded directly in each simulation matrix'],
  ['8', 'public functions for setup, simulation, sweeps, and heatmaps'],
  ['step 0', 'full-log output includes the initial state before transitions'],
];

const projectNumbers = [
  ['8', '', 'infected starting cells in the generated 10 x 10 example run'],
  ['9', '', 'SIR transition steps before no infected cells remained'],
  ['58', '', 'cells recovered by the end of the generated SIR simulation'],
  ['1,000', '', 'cell-step rows preserved in the full-log output'],
];

const engineeringSummary = [
  ['Problem', 'Build a small R package that exposes SIR, SIS, and SIRS grid simulations through documented functions rather than one-off scripts.'],
  ['My role', 'Implemented matrix constructors, neighbor exposure logic, transition rules, repeated-run summaries, probability sweeps, heatmaps, full-log output, tests, README examples, and package metadata.'],
  ['Implementation', 'Simulation state is stored in numeric matrices; public functions create initial conditions, run synchronous transitions, summarize repeated stochastic runs, and optionally return one row per cell per step.'],
  ['Validation', 'The testthat suite checks exact infected counts, reproducible seeds, invalid inputs, model transitions, mortality edge cases, summary outputs, and full-log schema.'],
  ['Result', 'The package exposes eight public functions with MIT package metadata, README usage examples, vignette coverage, manual pages, and survival-ready full logs.'],
  ['Limitation', 'This is a stochastic transition simulator, not a calibrated epidemiological forecasting model; conclusions depend on seed, grid size, transition assumptions, and synchronous neighborhood rules.'],
];

const contextCards = [
  {
    type: 'Object of study',
    title: 'Disease spread on a two-dimensional matrix',
    body:
      'Cells are treated as population units. A susceptible cell can become infected when nearby cells are infected, using a probability formula driven by infected-neighbor count.',
  },
  {
    type: 'Scope',
    title: 'Simulation mechanics, not real-world prediction',
    body:
      'The project focuses on controllable SIR-family transition rules, reproducible random seeds, and interpretable outputs rather than fitting a disease to observed population data.',
  },
  {
    type: 'Meaning',
    title: 'Model choices become visible as matrix outcomes',
    body:
      'SIR, SIS, SIRS, immunity probability, and optional mortality each change what happens after infection, making assumptions visible at the cell level.',
  },
];

const workflowSteps = [
  ['01', 'Create Population', 'Use random, exact-count, corner-seeded, center-seeded, or custom matrices as the initial state.'],
  ['02', 'Choose Model', 'Select SIR, SIS, or SIRS and set infection, immunity, and mortality probabilities.'],
  ['03', 'Run Steps', 'Iterate until no infected cells remain, optionally plotting each matrix state.'],
  ['04', 'Capture Outputs', 'Return steps, infection proportion, final matrix, history, and optional full cell log.'],
  ['05', 'Summarize Patterns', 'Average repeated runs, sweep infection probabilities, or count cells infected at least once in heatmaps.'],
];

const stateCards = [
  {
    type: 'State encoding',
    title: 'Numeric cell values carry the whole model state.',
    body:
      '0 = susceptible, 1 = infected, 2 = recovered, and 3 = deceased. Initial matrices usually start with susceptible and infected cells; recovered and deceased states emerge through simulation transitions.',
  },
  {
    type: 'Infection probability',
    title: 'More infected neighbors increase exposure probability.',
    body:
      'infection_probability = 1 - (1 - prob_infect)^infected_neighbors. A susceptible cell checks its eight-cell neighborhood before each transition.',
  },
];

const transitionCards = [
  ['SIR', 'Infected cells become recovered unless optional mortality occurs first.'],
  ['SIS', 'Infected cells return to susceptible, allowing future reinfection.'],
  ['SIRS', 'imm_prob decides whether infected cells recover; otherwise they return to susceptible.'],
  ['Mortality', 'allow_death lets infected cells become deceased with probability fat_prob before the normal model transition.'],
];

const simulationExamples = [
  {
    title: 'SIR run',
    body: 'Use SIR when infected cells should move into recovered state after exposure resolves.',
    code: `simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = "SIR",
  seed = 94128
)`,
  },
  {
    title: 'SIS run',
    body: 'Use SIS when infected cells should return to susceptible state and remain eligible for reinfection.',
    code: `simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = "SIS",
  seed = 94128
)`,
  },
  {
    title: 'SIRS run',
    body: 'Use SIRS when infected cells may recover with immunity or return to susceptible based on imm_prob.',
    code: `simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = "SIRS",
  imm_prob = 0.70,
  seed = 94128
)`,
  },
  {
    title: 'SIR with mortality',
    body: 'Mortality is checked before the normal SIR recovery transition.',
    code: `simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = "SIR",
  allow_death = TRUE,
  fat_prob = 0.15,
  seed = 94128
)`,
  },
  {
    title: 'SIS with mortality',
    body: 'Mortality can be enabled even when surviving infected cells return to susceptible state.',
    code: `simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = "SIS",
  allow_death = TRUE,
  fat_prob = 0.15,
  seed = 94128
)`,
  },
  {
    title: 'SIRS with mortality',
    body: 'SIRS can combine mortality with immunity probability for surviving infected cells.',
    code: `simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = "SIRS",
  imm_prob = 0.70,
  allow_death = TRUE,
  fat_prob = 0.15,
  seed = 94128
)`,
  },
];

const apiCards = [
  ['Matrix setup', 'create_random_matrix()', 'Create random matrices with an exact infected-cell count and optional seed.'],
  ['Compatibility', 'create_matrix()', 'Backward-compatible wrapper around the newer random matrix generator.'],
  ['Seed patterns', 'create_corner_matrix(), create_center_matrix()', 'Start infection in the four corners or in the center cell.'],
  ['Single run', 'simulate_sir()', 'Run SIR, SIS, or SIRS until there are no infected cells left.'],
  ['Repeated trials', 'simulate_many_runs()', 'Average total steps and infected proportion across repeated stochastic runs.'],
  ['Sweeps and heatmaps', 'simulate_inf_seq(), multiple_run_heatmap()', 'Vary infection probability or count cells infected at least once across repeated runs.'],
];

const apiContractRows = [
  ['Matrix constructors', 'create_random_matrix(), create_matrix(), create_corner_matrix(), create_center_matrix()', 'Create reproducible starting grids with exact infected counts or fixed corner/center patterns.'],
  ['Single simulation', 'simulate_sir()', 'Run SIR, SIS, or SIRS transitions until no infected cells remain; return steps, infection proportion, final matrix, and history.'],
  ['Full log', 'simulate_sir(full_log = TRUE)', 'Return one row per cell per step, including step 0, state indicators, model settings, and cell coordinates.'],
  ['Repeated runs', 'simulate_many_runs()', 'Average total steps and infected proportion across stochastic reruns from the same starting matrix.'],
  ['Probability sweep', 'simulate_inf_seq()', 'Run the same matrix across a sequence of infection probabilities and return comparable summary rows.'],
  ['Heatmap summary', 'multiple_run_heatmap()', 'Count how often each cell is infected at least once across repeated simulations.'],
];

const outputCards = [
  {
    type: 'Generated SIR run',
    title: 'One seeded 10 x 10 SIR simulation',
    body:
      'Using start_infected = 8, seed = 94128, prob_infect = 0.25, model = SIR, and full_log = TRUE, the run ended after 9 steps with infected proportion 0.58.',
  },
  {
    type: 'Recorded output',
    title: 'History and full-log scale',
    body:
      'With 100 cells and 10 recorded time points, the generated run produced 1,000 full-log rows and 10 per-step history rows.',
  },
  {
    type: 'Repeated runs',
    title: 'Ten SIR runs averaged 9.10 steps.',
    body:
      'simulate_many_runs() on the same starting matrix returned average infected proportion 0.71, showing how repeated stochastic runs differ from a single displayed run.',
  },
];

const figures = [
  {
    image: initialMatrixFigure,
    title: 'Initial 10 x 10 matrix',
    body: 'The seeded matrix starts with 8 infected cells and 92 susceptible cells.',
    alt: 'Generated initial 10 by 10 SIR simulation matrix with 8 infected cells',
  },
  {
    image: finalMatrixFigure,
    title: 'Final SIR matrix',
    body: 'The displayed SIR run ended after 9 steps with 58 recovered cells and 42 susceptible cells.',
    alt: 'Generated final SIR simulation matrix after 9 steps',
  },
  {
    image: historyFigure,
    title: 'Per-step SIR history',
    body: 'Susceptible cells decline, infected cells peak, and recovered cells accumulate until infection disappears.',
    alt: 'Generated SIR per-step history line chart for susceptible infected and recovered counts',
  },
  {
    image: probabilitySweepFigure,
    title: 'Probability sweep',
    body: 'The sweep uses the same starting matrix and shows how higher prob_infect changes final infected proportion and total steps.',
    alt: 'Generated probability sweep chart comparing infection probability with infected proportion and total steps',
  },
  {
    image: infectionHeatmapFigure,
    title: 'Infection heatmap across 100 SIR runs',
    body: 'Darker red cells were infected more often across repeated runs, with counts ranging from 0 to 100.',
    alt: 'Generated heatmap of cells infected at least once across 100 SIR runs',
  },
];

const validationCards = [
  {
    type: 'Package metadata',
    title: 'DESCRIPTION and NAMESPACE',
    body: 'Define SIRSsim as an MIT-licensed R package and export the public simulation functions.',
  },
  {
    type: 'Implementation',
    title: 'R/simulation.R, R/matrices.R, R/neighbors.R',
    body: 'Contain validation, matrix creation, neighbor counting, transition rules, summaries, and heatmap logic.',
  },
  {
    type: 'Tests',
    title: 'tests/testthat',
    body: 'Check matrix creation, neighbor exposure, SIR/SIS/SIRS transitions, mortality, validation, outputs, and full-log schema.',
  },
  {
    type: 'User guide',
    title: 'README.md',
    body: 'Explains public functions, state values, model behavior, full logs, repeated runs, probability sweeps, and heatmaps.',
  },
  {
    type: 'Vignette',
    title: 'vignettes/sirsimulation.Rmd',
    body: 'Shows example calls for matrix construction, simulations, model variants, mortality, history, full logs, and heatmaps.',
  },
  {
    type: 'Manual pages',
    title: 'man/*.Rd',
    body: 'Document function parameters and return values generated from the package Roxygen comments.',
  },
];

const testCoverageRows = [
  ['Matrix setup', 'Exact infected counts, zero infected cells, reproducible seeds, corner starts, center starts, and padding behavior.'],
  ['Input validation', 'Invalid probabilities, invalid matrix objects, invalid state values, invalid model names, and non-whole infected counts.'],
  ['Transition rules', 'SIR recovery, SIS return-to-susceptible behavior, SIRS immunity probability, and mortality edge cases.'],
  ['Outputs', 'Summary fields, per-step history, optional full_log omission by default, full_log schema when requested, and repeated-run summaries.'],
  ['Downstream use', 'Full logs contain enough cell-level information to derive infection, recovery, death, and censoring endpoints.'],
];

const limitationCards = [
  ['Not calibrated', 'The package does not estimate parameters from observed disease data or forecast real populations.'],
  ['Stochastic runs', 'Repeated runs can differ even with the same probability settings; seed control is part of reproducibility.'],
  ['Grid assumptions', 'Results depend on synchronous updates, local neighborhood exposure, grid dimensions, and chosen transition probabilities.'],
];
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute bottom-[360px] left-[-120px] h-[280px] w-[280px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section class="relative z-[1] mx-auto grid min-h-[680px] w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] grid-cols-1 items-center gap-10 py-14 pt-[76px] text-center lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.76fr)] lg:gap-14 lg:text-left">
      <div>
        <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent2/20 bg-accent-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-accent before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold before:content-['']">
          R Simulation Package
        </div>

        <h1 class="max-w-[760px] font-display text-[40px] font-black xxs:text-[46px] leading-[0.95] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:text-[88px]">
          SIRS matrix-based epidemic <em class="text-accent">simulation.</em>
        </h1>

        <p class="mt-7 max-w-[620px] text-[18px] font-light leading-[1.72] text-ink3">
          SIRSsim is an R package for running reproducible SIR, SIS, and SIRS grid simulations with documented functions, tests, repeated-run summaries, and optional full cell logs.
        </p>

        <div class="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-[22px] text-sm font-semibold text-white no-underline transition-colors hover:bg-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View Github repo</a>
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-[22px] text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2" href="#overview">See project description</a>
        </div>
      </div>

      <aside class="relative" aria-label="SIRSsim project overview">
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
            <div class="mb-2 text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">Project Object</div>
            <strong class="block text-[22px] leading-tight tracking-normal">A reproducible grid simulator for epidemic-transition logic.</strong>
            <p class="mt-2.5 text-[13px] leading-[1.6] text-white/75">
              The package is not a forecasting model. It is a compact tool for studying how local spread rules and stochastic outcomes change population-state trajectories.
            </p>
          </div>
        </div>
      </aside>
    </section>

    <section class="relative overflow-hidden bg-ink py-24 text-white" aria-label="Core simulation surface">
      <div class="pointer-events-none absolute right-[-40px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/[0.04]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute right-[-140px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/[0.03]" aria-hidden="true"></div>

      <div class="relative mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">Core simulation surface</div>

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
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Engineering Summary</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The package exposes documented simulation functions and tested outputs.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The page now emphasizes package design, exported functions, validation, tests, and modeling boundaries instead of implying broad epidemiological forecasting.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <article v-for="item in engineeringSummary" :key="item[0]" class="rounded-[12px] border border-border bg-white p-[22px]">
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
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The package turns a population grid into a reproducible transition process.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The project workflow creates a matrix, applies transition assumptions, runs the model, records state history, and summarizes repeated stochastic behavior.
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

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">State System</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">Every simulation is built from four interpretable cell states.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The state encoding uses compact numeric values so the simulation can update, summarize, plot, and log population status without requiring a separate object model.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article v-for="card in stateCards" :key="card.title" class="rounded-[12px] border border-border bg-white p-6">
          <div class="font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
          <strong class="mt-4 block text-[15px] text-ink">{{ card.title }}</strong>
          <p class="mt-3 text-[13px] leading-[1.6] text-ink3">{{ card.body }}</p>
        </article>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.06fr_0.94fr]">
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4">
            <h3 class="text-[15px] font-bold text-ink">Neighborhood test case</h3>
            <span class="font-mono text-[11px] text-ink4">prob_infect = 1</span>
          </div>
          <p class="text-[13px] leading-[1.6] text-ink3">
            A single infected center can infect all eight neighboring susceptible cells, while the original infected cell becomes recovered under SIR.
          </p>
          <div class="mt-[18px] grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div class="grid grid-cols-3 gap-1.5 justify-self-center">
              <span v-for="index in 9" :key="index" class="grid h-9 w-9 place-items-center rounded-[8px] border border-border2 bg-white font-mono text-xs text-ink" :class="{ 'border-[#9d2727] bg-[#c73535] text-white': index === 5 }">{{ index === 5 ? 1 : 0 }}</span>
            </div>
            <div class="text-center font-mono text-[11px] font-medium uppercase tracking-[1px] text-accent">SIR step</div>
            <div class="grid grid-cols-3 gap-1.5 justify-self-center">
              <span v-for="index in 9" :key="index" class="grid h-9 w-9 place-items-center rounded-[8px] border font-mono text-xs text-white" :class="index === 5 ? 'border-[#6f7683] bg-ink4' : 'border-[#9d2727] bg-[#c73535]'">{{ index === 5 ? 2 : 1 }}</span>
            </div>
          </div>
        </article>

        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4">
            <h3 class="text-[15px] font-bold text-ink">Model transitions</h3>
            <span class="font-mono text-[11px] text-ink4">post-infection state</span>
          </div>
          <div class="grid gap-3">
            <div v-for="item in transitionCards" :key="item[0]" class="rounded-[10px] bg-cream p-4">
              <strong class="block text-sm text-ink">{{ item[0] }}</strong>
              <span class="mt-1 block text-xs leading-[1.55] text-ink3">{{ item[1] }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Simulation Examples</div>
            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The examples cover every model mode and mortality branch.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            These examples mirror the package API: the same <code>simulate_sir()</code> function runs SIR, SIS, SIRS, and mortality-enabled variants by changing explicit arguments.
          </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article v-for="example in simulationExamples" :key="example.title" class="rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[18px] font-mono text-[11px] uppercase text-ink4">Example</div>
            <strong class="block text-[15px] text-ink">{{ example.title }}</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ example.body }}</p>
            <pre class="mt-4 overflow-x-auto rounded-[10px] bg-cream px-4 py-4 text-left"><code class="whitespace-pre text-[12px] leading-[1.6] text-accent">{{ example.code }}</code></pre>
          </article>
        </div>
      </div>
    </section>

    <section id="api" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Public API</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The package separates setup, single runs, and simulation summaries.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The public API lets a user create starting matrices, run simulations, repeat stochastic trials, sweep infection probabilities, and summarize where infection reaches across repeated runs.
        </p>
      </header>

      <article class="mb-6 overflow-hidden rounded-[12px] border border-border bg-white p-6">
        <div class="mb-4 flex items-baseline justify-between gap-4">
          <h3 class="text-[15px] font-bold text-ink">Public API contract</h3>
          <span class="font-mono text-[11px] text-ink4">8 exported functions</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[760px] border-collapse text-left text-xs">
            <thead class="text-ink3">
              <tr class="border-b border-border">
                <th class="p-2.5">Group</th>
                <th class="p-2.5">Functions</th>
                <th class="p-2.5">Contract</th>
              </tr>
            </thead>
            <tbody class="text-ink3">
              <tr v-for="row in apiContractRows" :key="row[0]" class="border-b border-cream3 last:border-b-0">
                <td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article v-for="card in apiCards" :key="card[1]" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card[0] }}</div>
          <strong class="block text-[15px] text-ink">{{ card[1] }}</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card[2] }}</p>
        </article>
      </div>
    </section>

    <section id="outputs" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Outputs</div>
            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">Simulation outputs support summary statistics and event-level analysis.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The package returns compact result fields by default, then expands to a long-format per-cell log when survival-style analysis is needed.
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
          <article v-for="figure in figures" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Generated output</div>
            <strong class="block text-[15px] text-ink">{{ figure.title }}</strong>
            <ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Generated simulation figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" />
            <p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Validation and Documentation</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The project includes tests, documentation, examples, and package metadata.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The package structure includes documented functions, vignette examples, test cases, and a README that explains state encoding, model options, mortality, full logs, and summary tools.
        </p>
      </header>

      <article class="mb-6 overflow-hidden rounded-[12px] border border-border bg-white p-6">
        <div class="mb-4 flex items-baseline justify-between gap-4">
          <h3 class="text-[15px] font-bold text-ink">Test coverage evidence</h3>
          <span class="font-mono text-[11px] text-ink4">tests/testthat</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[700px] border-collapse text-left text-xs">
            <thead class="text-ink3">
              <tr class="border-b border-border">
                <th class="p-2.5">Area</th>
                <th class="p-2.5">Behaviors checked</th>
              </tr>
            </thead>
            <tbody class="text-ink3">
              <tr v-for="row in testCoverageRows" :key="row[0]" class="border-b border-cream3 last:border-b-0">
                <td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article v-for="card in validationCards" :key="card.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card.type }}</div>
          <strong class="block text-[15px] text-ink">{{ card.title }}</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card.body }}</p>
        </article>
      </div>

      <a class="mt-6 inline-flex min-h-[58px] w-full items-center justify-center rounded-[12px] bg-ink px-6 text-base font-semibold text-white no-underline transition-colors hover:bg-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View Github repo</a>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Modeling Boundaries</div>
            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] text-ink md:text-[48px]">The simulator stores model assumptions in function arguments and output logs.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The project is a package for controlled transition experiments. It is not calibrated to surveillance data and should not be presented as a real-world forecast.
          </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article v-for="item in limitationCards" :key="item[0]" class="rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Limit</div>
            <strong class="block text-[15px] text-ink">{{ item[0] }}</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ item[1] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <div class="relative overflow-hidden rounded-[14px] bg-ink p-8 text-white md:p-11">
          <div class="pointer-events-none absolute right-[-170px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]" aria-hidden="true"></div>
          <div class="relative z-[1] mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/65 before:h-0.5 before:w-[26px] before:bg-white/65 before:content-['']">Final Conclusions</div>
          <h2 class="relative z-[1] max-w-[760px] font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-white md:text-[48px]">SIRSsim stores grid-simulation assumptions in functions, tests, and logs.</h2>
          <h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Project conclusion</h3>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
            SIRSsim gives users a compact R package for exploring SIR-family transition rules on a grid. Its core contribution is making assumptions explicit: who is susceptible, who is infected, what happens after infection, whether mortality is possible, and how repeated stochastic runs change the observed outcome.
          </p>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
            The package supports single-run inspection, repeated-run summaries, infection-probability sweeps, recovered-cell heatmaps, and full per-cell logs for survival-style endpoints. The implementation is a package API for controlled model experiments, not a calibrated forecasting tool.
          </p>
          <h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Implementation conclusion</h3>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
            The package provides a reproducible simulation surface based on clear matrix states, explicit transition assumptions, single-run and repeated-run inspection, and full_log output for cell-level event timing.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
