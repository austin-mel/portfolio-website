<script setup lang="ts">
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import sirHistoryFigure from '@/assets/projects/sirs/sir-history.png';
import initialMatrixFigure from '@/assets/projects/sirs/initial-matrix.png';
import sirFinalMatrixFigure from '@/assets/projects/sirs/sir-final-matrix.png';
import probabilitySweepFigure from '@/assets/projects/sirs/probability-sweep.png';
import infectionHeatmapFigure from '@/assets/projects/sirs/infection-heatmap.png';
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section id="executive-summary" aria-labelledby="project-title" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] relative pb-14 pt-6 md:pb-20 md:pt-10 scroll-mt-[100px]">
      <header class="mb-8">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Executive Summary</div>
        <h1 id="project-title" class="max-w-[850px] font-display text-[34px] font-bold leading-[1.08] tracking-normal text-ink xs:text-[42px] md:text-[56px]">Exploring epidemic models with a <em class="text-accent">reusable R package.</em></h1>
        <p class="mb-0 mt-4 text-[15px] leading-[1.7] text-ink3">SIRSsim: matrix-based SIR, SIS, and SIRS simulations with reproducible inputs and inspectable outputs.</p>
      </header>
      <dl class="m-0 overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_8px_24px_rgb(13_17_23_/_4%)]">
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Problem</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">Exploring simulation rules through one-off scripts makes setup, comparisons, and reuse harder. A small package can bring population creation, model transitions, and output capture into one documented interface.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Product &amp; Tools</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3"><strong class="font-semibold text-ink">An R package with eight public functions for matrix setup, simulation, repeated runs, probability sweeps, and heatmaps.</strong> Documentation, examples, and a testthat suite support reuse.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Approach</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">Represent populations as numeric matrices, apply synchronous neighborhood-based transitions, and return structured results. Seed control makes examples reproducible, while optional full logs preserve each cell at every step for full survival analysis.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">Key Capabilities</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            <ol class="m-0 list-decimal space-y-3 pl-5 text-[15px] leading-[1.75] text-ink3 marker:font-semibold marker:text-accent">
              <li class="pl-1"><strong class="font-semibold text-ink">Three model modes.</strong> Choose SIR, SIS, or SIRS and configure infection, immunity, and optional mortality settings.</li>
              <li class="pl-1"><strong class="font-semibold text-ink">Reusable experiment tools.</strong> Create starting grids, compare repeated runs, vary infection probability, and inspect heatmaps.</li>
              <li class="pl-1"><strong class="font-semibold text-ink">Transparent outputs.</strong> Read per-step history, final matrices, and optional cell-level logs that include the initial state.</li>
            </ol>
          </dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 bg-accent text-white">
          <dt class="text-[15px] font-bold text-white">Product Value</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-white/80">The package turns model mechanics into <strong class="font-semibold text-white">a repeatable workflow that users can configure, inspect, and extend.</strong> It is a stochastic grid simulator; it does not estimate disease parameters from observed data or forecast real populations.</dd>
        </div>
      </dl>
      <div role="group" aria-label="Project resources" class="mt-8 grid gap-3 md:grid-cols-3">
        <a href="https://github.com/austin-mel/sirmodelsimulation" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base bg-ink text-white hover:bg-accent">View package repository</a>
        <a href="https://github.com/austin-mel/sirmodelsimulation#readme" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base border border-accent2 bg-accent-pale text-accent hover:bg-accent hover:text-white">Read package guide</a>
        <a href="#showcase" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base border border-accent2 bg-accent-pale text-accent hover:bg-accent hover:text-white">Explore example outputs</a>
      </div>
      <nav aria-label="Explore this project" class="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
        <a href="#showcase" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[88px] w-full px-10 py-6 text-lg bg-ink text-white hover:bg-accent">Explore the package</a>
        <a href="#technical-details" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[88px] w-full px-10 py-6 text-lg border border-border2 text-ink hover:border-accent2 hover:text-accent2">Jump to technical details</a>
      </nav>
    </section>

    <section id="context" aria-labelledby="context-title" class="scroll-mt-[100px] py-14 md:py-[82px] bg-cream2">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Why the Package Matters</div>
            <h2 id="context-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Make simulation rules easy to explore.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">The package exposes model choices through a consistent interface, so attention can stay on the behavior of the simulated system.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">A configurable starting point</h3>
            <p class="mb-0 mt-3 text-[15px] leading-[1.7] text-ink3">Random, exact-count, corner-seeded, center-seeded, or custom matrices define the initial population. Numeric states keep each cell’s condition visible.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">An inspectable result</h3>
            <p class="mb-0 mt-3 text-[15px] leading-[1.7] text-ink3">History tables, final matrices, and full cell logs show how a run unfolded. Repeated-run summaries and heatmaps help compare stochastic behavior.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="workflow" aria-labelledby="workflow-title" class="scroll-mt-[100px] py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">How the Package Works</div>
            <h2 id="workflow-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">From a starting grid to reusable outputs.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">A small set of documented functions covers the main steps of building and exploring a simulation.</p>
        </header>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">01</div>
            <h3 class="text-[15px] font-bold text-ink">Create a population</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Construct a starting matrix with the desired grid dimensions and infection pattern.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">02</div>
            <h3 class="text-[15px] font-bold text-ink">Choose the rules</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Select SIR, SIS, or SIRS and set infection, immunity, and optional mortality probabilities.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">03</div>
            <h3 class="text-[15px] font-bold text-ink">Run &amp; inspect</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Use seed control for reproducibility. Inspect step history, the final matrix, and optional full logs.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">04</div>
            <h3 class="text-[15px] font-bold text-ink">Repeat &amp; compare</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Summarize repeated runs, sweep infection probabilities, and visualize infection frequency by cell.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="showcase" aria-labelledby="showcase-title" class="scroll-mt-[100px] py-14 md:py-[82px] bg-cream2">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Package Showcase</div>
            <h2 id="showcase-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">See what the package produces.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">These existing generated figures illustrate the package’s output types. They describe example simulations, with outcomes determined by the chosen model settings and seed.</p>
        </header>
        <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
          <h3 class="text-[17px] font-bold text-ink">A simulation history you can inspect</h3>
          <ProjectScreenshotLightbox
            :src="sirHistoryFigure"
            alt="Line chart showing susceptible, infected, and recovered cell counts over a generated SIR run."
            title="A simulation history you can inspect"
            trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
            image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
          />
          <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">Per-step history tracks the changing numbers of susceptible, infected, and recovered cells. Select the image to view it at full size.</figcaption>
        </figure>
        <div class="grid gap-4 lg:grid-cols-2 mt-6">
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Starting population</h3>
            <ProjectScreenshotLightbox
              :src="initialMatrixFigure"
              alt="Initial population matrix for a generated simulation."
              title="Starting population"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">The starting matrix makes the initial infection pattern visible. Select the image to view it at full size.</figcaption>
          </figure>
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Final population</h3>
            <ProjectScreenshotLightbox
              :src="sirFinalMatrixFigure"
              alt="Final cell-state matrix after a generated SIR run."
              title="Final population"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">The returned matrix preserves each cell’s state at the end of the run. Select the image to view it at full size.</figcaption>
          </figure>
        </div>
        <div class="grid gap-4 lg:grid-cols-2 mt-6">
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Compare infection probabilities</h3>
            <ProjectScreenshotLightbox
              :src="probabilitySweepFigure"
              alt="Probability sweep comparing infection probability with infected proportion and simulation duration."
              title="Compare infection probabilities"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">A probability sweep runs the same starting matrix across different infection settings. Select the image to view it at full size.</figcaption>
          </figure>
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Summarize repeated runs</h3>
            <ProjectScreenshotLightbox
              :src="infectionHeatmapFigure"
              alt="Heatmap of cells infected at least once across 100 SIR simulations."
              title="Summarize repeated runs"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">Cell counts show how often each location was infected at least once across 100 runs. Select the image to view it at full size.</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="technical-details" aria-labelledby="technical-details-title" class="scroll-mt-[100px] py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Technical Details &amp; Limitations</div>
            <h2 id="technical-details-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">A compact interface with explicit model rules.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">Numeric matrices carry the simulation state. Synchronous updates use local infected-neighbor exposure to determine the next step.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">State representation</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Cells use four values: <code class="font-mono text-[0.88em]">0</code> susceptible, <code class="font-mono text-[0.88em]">1</code> infected, <code class="font-mono text-[0.88em]">2</code> recovered, and <code class="font-mono text-[0.88em]">3</code> deceased. Optional full logs retain one row per cell per step, including step 0.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Neighborhood exposure</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">A susceptible cell checks its eight-cell neighborhood. Exposure follows <code class="font-mono text-[0.88em]">1 - (1 - prob_infect)^infected_neighbors</code>, with model-specific transitions for infected cells.</p>
          </article>
        </div>
        <div tabindex="0" role="region" aria-label="Public interface" class="mt-6 overflow-x-auto rounded-[12px] border border-border bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <table class="w-full border-collapse text-left text-[13px]">
            <caption class="p-5 text-left text-[17px] font-bold text-ink">Public interface</caption>
            <thead>
              <tr>
                <th scope="col" class="border-t border-border p-3 align-top text-ink">Task</th>
                <th scope="col" class="border-t border-border p-3 align-top text-ink">Functions &amp; outputs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Population setup</th>
                <td class="border-t border-border p-3 align-top text-ink3"><code class="font-mono text-[0.88em]">create_random_matrix()</code>, <code class="font-mono text-[0.88em]">create_matrix()</code>, <code class="font-mono text-[0.88em]">create_corner_matrix()</code>, and <code class="font-mono text-[0.88em]">create_center_matrix()</code> construct starting grids.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Single simulation</th>
                <td class="border-t border-border p-3 align-top text-ink3"><code class="font-mono text-[0.88em]">simulate_sir()</code> returns steps, infection proportion, final matrix, and history; <code class="font-mono text-[0.88em]">full_log = TRUE</code> also returns cell-level records.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Repeated runs</th>
                <td class="border-t border-border p-3 align-top text-ink3"><code class="font-mono text-[0.88em]">simulate_many_runs()</code> summarizes total steps and infected proportion across repeated simulations.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Probability sweep</th>
                <td class="border-t border-border p-3 align-top text-ink3"><code class="font-mono text-[0.88em]">simulate_inf_seq()</code> compares outcomes across infection probability settings.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Infection heatmap</th>
                <td class="border-t border-border p-3 align-top text-ink3"><code class="font-mono text-[0.88em]">multiple_run_heatmap()</code> counts how often each cell is infected at least once across runs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px] mt-6">
          <h3 class="text-[17px] font-bold text-ink">A single-run example</h3>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">With the package loaded and an initial population matrix assigned to <code class="font-mono text-[0.88em]">initial</code>, request a seeded run and its full cell log.</p>
          <pre class="mt-5 overflow-x-auto rounded-[10px] bg-ink p-6 text-[#e6edf3]"><code class="font-mono text-[13px] leading-[1.8]">result &lt;- simulate_sir(
  prob_infect = 0.25,
  input_matrix = initial,
  model = &quot;SIR&quot;,
  seed = 94128,
  full_log = TRUE
)</code></pre>
        </article>
        <div class="mt-6">
          <div class="grid gap-4 md:grid-cols-2">
            <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
              <h3 class="text-[17px] font-bold text-ink">Documented &amp; tested</h3>
              <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The existing testthat suite covers matrix construction, seed reproducibility, invalid inputs, transition rules, mortality edge cases, summary outputs, and full-log schema. README examples, a vignette, and manual pages explain usage.</p>
            </article>
            <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
              <h3 class="text-[17px] font-bold text-ink">Model assumptions</h3>
              <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Results depend on grid dimensions, local exposure, synchronous updates, transition settings, and random seeds. The figures demonstrate package behavior rather than calibrated predictions.</p>
            </article>
          </div>
        </div>
        <article aria-labelledby="conclusions-title" class="bg-accent text-white mt-8 p-6 md:p-9 rounded-[12px] border border-accent">
          <h3 id="conclusions-title" class="font-display text-[26px] font-bold leading-tight md:text-[32px] text-white">Final Conclusions</h3>
          <p class="mb-0 mt-4 text-[15px] leading-[1.75] text-white/80">SIRSsim packages population setup, SIR-family transitions, repeated experiments, and structured outputs into a reusable R interface. Seeded examples, documentation, and tests support inspection of the simulation mechanics, while history tables and optional full logs preserve how each run unfolds. Outcomes depend on the chosen grid, transition rules, settings, and seed. The package demonstrates stochastic simulation behavior rather than calibrated disease forecasts.</p>
        </article>
      </div>
    </section>

    <section id="resources" aria-labelledby="resources-title" class="scroll-mt-[100px] py-14 md:py-[82px] bg-cream2">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px]">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Package Resources</div>
            <h2 id="resources-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Explore the code and learn the interface.</h2>
          </div>
          <p class="mt-4 text-[15px] leading-[1.76] text-ink3">The repository brings the implementation, examples, documentation, and tests together.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px] flex flex-col">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Usage guide &amp; examples</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">Start with the README, then explore the vignette and function documentation in the repository.</p>
            <a href="https://github.com/austin-mel/sirmodelsimulation#readme" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base border border-accent2 bg-accent-pale text-accent hover:bg-accent hover:text-white mt-auto w-full self-start sm:w-auto">Read package guide</a>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px] flex flex-col">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Package repository</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">Review the R implementation, package metadata, and tests for the simulation interface.</p>
            <a href="https://github.com/austin-mel/sirmodelsimulation" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base bg-ink text-white hover:bg-accent mt-auto w-full self-start sm:w-auto">View package repository</a>
          </article>
        </div>
        <footer class="mt-8 flex flex-col items-start justify-between gap-6 border-t border-border pt-7 text-[14px] leading-[1.8] md:flex-row">
          <p class="m-0 text-ink3"><strong class="font-semibold text-ink">Austin Melendez</strong><br />SIRSsim · R simulation package</p>
        </footer>
      </div>
    </section>
  </main>
</template>
