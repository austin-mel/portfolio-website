<script setup lang="ts">
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import overviewFigure from '@/assets/projects/dataguard/workspace-overview.png';
import rulesFigure from '@/assets/projects/dataguard/quality-rules.jpg';
import cellReviewFigure from '@/assets/projects/dataguard/cell-review.jpg';

const repositoryUrl = 'https://github.com/austin-mel/dataguard';
const demoUrl = 'https://austin-mel.github.io/dataguard/';

const productPriorities = [
  {
    title: 'Scores are supported by detailed findings.',
    description: 'Completeness, validity, and uniqueness scores appear alongside column profiles and grouped findings. These views provide the affected values and rule context for each issue.',
  },
  {
    title: 'Review decisions remain explicit.',
    description: 'Flagged values can be corrected or their findings ignored. A correction changes the data in a new version. An ignore records a review decision without changing the source values.',
  },
  {
    title: 'Validation retains its supporting evidence.',
    description: 'The backend retains uploaded files, later versions, and validation runs. Each run preserves its rule configuration and findings as a record of the assessment.',
  },
];

const workflow = [
  {
    num: '01',
    title: 'Uploaded files become dataset records.',
    description: 'The connected backend accepts CSV, TSV, Excel (.xlsx), and Parquet uploads. The dataset overview presents column profiles, quality scores, and validation findings.',
  },
  {
    num: '02',
    title: 'Rules define the validation checks.',
    description: 'Each dataset can have a custom ruleset covering required values, uniqueness, numeric values, ranges, regular expressions, allowed values, and dates. Saved rules take effect in the results after validation runs.',
  },
  {
    num: '03',
    title: 'Findings support targeted corrections.',
    description: 'Grouped findings identify affected cells. Review actions include replacing a flagged value, setting it to NULL, removing a row, or ignoring a finding. A preview shows the affected scope before a correction is saved.',
  },
  {
    num: '04',
    title: 'Validation refreshes the results.',
    description: 'A separate validation run refreshes results after changes. The interface presents dataset activity and a download of the current version. Older files remain accessible through backend version routes.',
  },
];

const detailScreens = [
  {
    src: rulesFigure,
    title: 'Rules apply to individual columns.',
    alt: 'The Dataguard quality rules dialog shows column selection, required and unique checks, numeric bounds, and a date constraint.',
    caption: 'The rules editor assigns checks to individual dataset columns. Saving a ruleset marks results as pending until validation applies the checks and refreshes the findings.',
  },
  {
    src: cellReviewFigure,
    title: 'Corrections include a preview.',
    alt: 'The Dataguard correction dialog shows a flagged county value, replacement choices, an option to remove the row, a preview, and save actions.',
    caption: 'The correction dialog supports value replacement, NULL values, and row removal. Where allowed, a correction can apply to one cell or all matching cells.',
  },
];

const architecture = [
  { layer: 'Vue 3, TypeScript and Pinia', purpose: 'Vue views and Pinia stores coordinate dataset selection, rules, validation state, and cell review dialogs.' },
  { layer: 'Repository adapters', purpose: 'Workspace actions pass through a shared interface for API data and browser samples. The HTTP adapter validates response shapes before the workspace stores them, and successful writes replace the affected dataset with the returned state.' },
  { layer: 'Python and FastAPI', purpose: 'Requests enter the /api/v1 workspace routes. The catalog service coordinates dataset versions, rule assignments, validation runs, cell reviews, and audit records behind the browser views.' },
  { layer: 'Profiles, rules and statistics', purpose: 'Backend services parse tabular files, profile columns, evaluate rules, calculate quality metrics, and produce statistical warnings for review.' },
  { layer: 'SQLite and version files', purpose: 'SQLAlchemy and Alembic manage dataset metadata. Immutable files retain source versions, and each check run preserves the rule configuration and findings used to assess the data.' },
];
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section id="executive-summary" aria-labelledby="project-title" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] relative pb-14 pt-6 md:pb-20 md:pt-10 scroll-mt-[100px]">
      <header class="mb-8">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Executive Summary</div>
        <h1 id="project-title" class="max-w-[850px] font-display text-[34px] font-bold leading-[1.08] tracking-normal text-ink xs:text-[42px] md:text-[56px]">Dataguard connects <em class="text-accent">flagged values</em> to versioned corrections.</h1>
        <p class="mb-0 mt-4 text-[15px] leading-[1.7] text-ink3">Dataguard connects a data quality workflow across a Vue interface, a Python API, and versioned file storage.</p>
      </header>
      <dl class="m-0 overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_8px_24px_rgb(13_17_23_/_4%)]">
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Problem</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">Real world datasets are often messy, with errors and missing values. Duplicate identifiers, values outside expected ranges, and inconsistent formats can complicate analysis and further processing. Data review requires defined expectations, a way to locate records that need attention, and a correction process that preserves the original files.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Product &amp; Tools</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3"><strong class="font-semibold text-ink">Dataguard combines a Vue 3, TypeScript, and Pinia frontend with a Python and FastAPI backend and SQLite metadata storage.</strong> Included synthetic datasets support a complete demonstration, with live API persistence and seeded fallback data.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Approach</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">Dataguard supports a ruleset for each dataset and reports completeness, validity, and uniqueness scores. Assigned rules determine which values produce rule findings and which columns are checked for uniqueness. Flagged cells can be reviewed, values within their columns can be edited, and affected rows can be removed. With the backend connected, corrections create new source versions while previous versions remain immutable. A separate validation step refreshes the scores and findings.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">Key Capabilities</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            <ol class="m-0 list-decimal space-y-3 pl-5 marker:font-semibold marker:text-accent">
              <li class="pl-1"><strong class="font-semibold text-ink">Quality results include supporting details.</strong> The workspace presents column profiles, completeness, validity, uniqueness, and validation issues.</li>
              <li class="pl-1"><strong class="font-semibold text-ink">Rules and findings support targeted review.</strong> Dataset rules are configurable, and flagged cells support value replacement, row removal, and ignored findings.</li>
              <li class="pl-1"><strong class="font-semibold text-ink">Backend storage retains a versioned record.</strong> Source files, validation runs, review decisions, and audit events remain available in backend storage.</li>
            </ol>
          </dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 bg-accent text-white">
          <dt class="text-[15px] font-bold text-white">Product Value</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-white/80">Dataguard <strong class="font-semibold text-white">connects findings, review decisions, saved changes, and validation results in one workspace.</strong> These interactions are represented by explicit application state and retained source versions. Temporary browser samples demonstrate the interface, while file uploads and persistent storage require a backend connection.</dd>
        </div>
      </dl>
      <div role="group" aria-label="Project resources" class="mt-8 grid gap-3 md:grid-cols-3">
        <a :href="repositoryUrl" target="_blank" rel="noreferrer" class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-ink px-8 py-4 text-center text-base font-semibold text-white no-underline transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">View project repository</a>
        <a :href="demoUrl" target="_blank" rel="noreferrer" class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-center text-base font-semibold text-accent no-underline transition-colors hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Open live demo</a>
        <a href="#showcase" class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-center text-base font-semibold text-accent no-underline transition-colors hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Browse product screens</a>
      </div>
      <nav aria-label="Project sections" class="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
        <a href="#workflow" class="inline-flex min-h-[88px] w-full items-center justify-center rounded-[10px] bg-ink px-10 py-6 text-center text-lg font-semibold text-white no-underline transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore the product</a>
        <a href="#technical-details" class="inline-flex min-h-[88px] w-full items-center justify-center rounded-[10px] border border-border2 px-10 py-6 text-center text-lg font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Jump to technical details</a>
      </nav>
    </section>

    <section id="context" aria-labelledby="context-title" class="scroll-mt-[100px] bg-cream2 py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Why the Product Matters</div>
            <h2 id="context-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Review decisions remain connected to the data.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">Data review includes the evidence behind a finding, the decision to change or retain a value, and the resulting validation state. Dataguard connects these stages through grouped findings, review actions, and dataset history.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="priority in productPriorities" :key="priority.title" class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">{{ priority.title }}</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">{{ priority.description }}</p>
          </article>
        </div>
        <p class="mb-0 mt-6 text-[14px] leading-[1.75] text-ink3">Statistical warnings identify values or changes for review and appear separately from rule errors. A warning indicates a pattern that warrants inspection, but does not establish that the source value is incorrect.</p>
      </div>
    </section>

    <section id="workflow" aria-labelledby="workflow-title" class="scroll-mt-[100px] py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">How the Product Works</div>
            <h2 id="workflow-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">The workflow connects uploads, rules, corrections, and validation.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">The workflow has four connected stages. Saving rules or review decisions marks results as pending, distinguishing a successful save from a completed validation run.</p>
        </header>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="step in workflow" :key="step.num" class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">{{ step.num }}</div>
            <h3 class="text-[15px] font-bold text-ink">{{ step.title }}</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="showcase" aria-labelledby="showcase-title" class="scroll-mt-[100px] bg-cream2 py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Product Showcase</div>
            <h2 id="showcase-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">The workspace presents findings and review actions.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">These screenshots show the published demo with its synthetic County facilities dataset. The session was captured in sample mode while the backend was unavailable.</p>
        </header>
        <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
          <h3 class="text-[17px] font-bold text-ink">The overview presents dataset quality scores.</h3>
          <ProjectScreenshotLightbox
            :src="overviewFigure"
            alt="The published Dataguard overview shows the sample data banner, the County facilities dataset, and its overall, completeness, validity, and uniqueness scores."
            title="The Dataguard overview summarizes dataset quality."
            trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
            image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
          />
          <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">The active dataset version appears alongside completeness, validity, and uniqueness scores. Each score describes rows, and the overall score averages the available dimensions. These values describe the synthetic sample. Each screenshot opens at full size when selected.</figcaption>
        </figure>
        <div class="mt-6 grid gap-4 lg:grid-cols-2">
          <figure v-for="screen in detailScreens" :key="screen.title" class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">{{ screen.title }}</h3>
            <ProjectScreenshotLightbox
              :src="screen.src"
              :alt="screen.alt"
              :title="screen.title"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">{{ screen.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="technical-details" aria-labelledby="technical-details-title" class="scroll-mt-[100px] py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Technical Details &amp; Limitations</div>
            <h2 id="technical-details-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Workspace actions connect the interface, API, and storage.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">Review actions pass from Vue and Pinia through the repository contract to FastAPI and storage. In live mode, the interface displays results calculated by the backend.</p>
        </header>
        <div class="overflow-hidden rounded-[12px] border border-border bg-white p-4 md:p-6">
          <table class="w-full table-fixed border-collapse text-left text-[14px] leading-[1.65]">
            <caption class="sr-only">Each implementation layer has a defined responsibility.</caption>
            <thead>
              <tr>
                <th scope="col" class="w-[38%] p-3 font-bold text-ink md:w-[30%]">Layer</th>
                <th scope="col" class="p-3 font-bold text-ink">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in architecture" :key="item.layer">
                <th scope="row" class="border-t border-border p-3 align-top font-semibold text-ink">{{ item.layer }}</th>
                <td class="border-t border-border p-3 align-top text-ink3">{{ item.purpose }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Source history remains intact.</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The original upload remains in backend storage when a correction creates a new CSV snapshot. SQLite records version relationships and check history, while file storage verifies content hashes on reads. The current version is downloadable from the interface, and older versions remain accessible through the API.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Cell reviews are checked against the current version.</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The backend checks each submitted cell review against the current dataset version and finding. Stale selections return an error and require a refresh before saving. Columns with uniqueness rules require individual value replacements because a shared replacement could introduce duplicates.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Saved changes remain pending until validation.</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Saving rules, editing cells, or ignoring findings marks workspace results as pending. A validation run applies the current configuration and records its findings. The backend stores execution and validation status separately, distinguishing a completed check with invalid data from a check that failed to execute.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Test suites cover the workflow and its contracts.</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Vitest tests cover rule evaluation, response contracts, source selection, stores, and components. Playwright tests exercise uploads, rules, validation, and review flows. A separate live API suite compares seeded backend results with browser samples. Backend pytest tests cover ingestion, persistence, validation, and cell reviews.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Live data and samples remain separate.</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The workspace selects one complete data source on initial load. Backend unavailability can trigger a fallback to temporary seeded data samples. Once live mode is selected, failed saves remain errors and are never replayed against samples. The source banner identifies the active mode. Sample edits disappear on reload, and file uploads require the backend.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">The interface supports a defined set of review actions.</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The interface supports flagged cell review but does not include a general spreadsheet editor, undo, or a historical version picker. Additional audit history and approval based remediation are available through the backend API. The local source is undergoing refactoring. The published demo and master branch provide additional references for the implementation.</p>
          </article>
        </div>
        <article aria-labelledby="conclusions-title" class="mt-8 rounded-[12px] border border-accent bg-accent p-6 text-white md:p-9">
          <h3 id="conclusions-title" class="font-display text-[26px] font-bold leading-tight text-white md:text-[32px]">Final Conclusions</h3>
          <p class="mb-0 mt-4 text-[15px] leading-[1.75] text-white/80">Dataguard connects a data review workflow to interface state, API contracts, validation rules, and persistent history. Users can define specifc rulesets for each dataset, apply corrections that create new versions, and run validations to check the quality of the dataset based on completeness, validity, and uniqueness. Completeness score measures total rows with missing data, validity score measures total rows that break any defined rule in the ruleset, and the uniqueness score measures how many total rows break a unique rule. Synthetic datasets and seeded fallback mode make the workflow available for review. The result remains a proof of concept rather than a completed production system.</p>
        </article>
      </div>
    </section>

    <section id="resources" aria-labelledby="resources-title" class="scroll-mt-[100px] bg-cream2 py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px]">
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Project Resources</div>
          <h2 id="resources-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">The demo and source document the project.</h2>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="flex min-w-0 flex-col rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="mt-3 text-[20px] font-bold text-ink">The live demo presents the review workflow.</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">The published demo presents the workspace, sample rules, and flagged cell review actions.</p>
            <a :href="demoUrl" target="_blank" rel="noreferrer" class="mt-auto inline-flex min-h-[60px] w-full items-center justify-center self-start rounded-[10px] bg-ink px-8 py-4 text-center text-base font-semibold text-white no-underline transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto">Open live demo</a>
          </article>
          <article class="flex min-w-0 flex-col rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="mt-3 text-[20px] font-bold text-ink">The source documents the implementation.</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">The master branch includes the application source and guides for the workspace, datasets, quality rules, architecture, and testing. Components, repository adapters, and tests provide implementation details for the documented behavior.</p>
            <a :href="repositoryUrl + '/tree/master'" target="_blank" rel="noreferrer" class="mt-auto inline-flex min-h-[60px] w-full items-center justify-center self-start rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-center text-base font-semibold text-accent no-underline transition-colors hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto">View project repository</a>
          </article>
        </div>
        <footer class="mt-8 flex flex-col items-start justify-between gap-6 border-t border-border pt-7 text-[14px] leading-[1.8] md:flex-row">
          <p class="m-0 text-ink3"><strong class="font-semibold text-ink">Austin Melendez</strong><br />Dataguard · Full-stack workflow demo</p>
        </footer>
      </div>
    </section>
  </main>
</template>
