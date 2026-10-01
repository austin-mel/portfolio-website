<script setup lang="ts">
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import miniJhLogo from '@/assets/projects/pharmatrial/mini_jh_logo.svg';
import fdaLogo from '@/assets/projects/pharmatrial/fda_logo.svg';
import miniBavariaLogo from '@/assets/projects/pharmatrial/mini_bavaria_logo.svg';
import bavariaDashFigure from '@/assets/projects/pharmatrial/bavaria-dash.png';
import jhApprovalFigure from '@/assets/projects/pharmatrial/jh-approval.png';
import fdaAssignmentsFigure from '@/assets/projects/pharmatrial/fda-assignments.png';
import bavariaBatchFigure from '@/assets/projects/pharmatrial/bavaria-batch.png';
import bavariaReportFigure from '@/assets/projects/pharmatrial/bavaria-report.png';
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section id="executive-summary" aria-labelledby="project-title" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] relative pb-14 pt-6 md:pb-20 md:pt-10 scroll-mt-[100px]">
      <header class="mb-8">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Executive Summary</div>
        <h1 id="project-title" class="max-w-[850px] font-display text-[34px] font-bold leading-[1.08] tracking-normal text-ink xs:text-[42px] md:text-[56px]">Coordinating a <em class="text-accent">clinical trial</em> from one shared portal.</h1>
        <p class="mb-0 mt-4 text-[15px] leading-[1.7] text-ink3">A full-stack workflow demo for fictional hospital, sponsor, and regulator teams.</p>
      </header>
      <dl class="m-0 overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_8px_24px_rgb(13_17_23_/_4%)]">
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Problem</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">A trial moves through many hands. Each team needs a clear view of its responsibilities, available actions, and the information it can access as the workflow progresses.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Product &amp; Tools</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3"><strong class="font-semibold text-ink">A role-aware web application built with Vue 3, TypeScript, Pinia, Express, Prisma, and PostgreSQL.</strong> Synthetic records support a complete demonstration, with live API persistence and seeded fallback data.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">The Approach</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">Built role-specific workspaces around a shared trial lifecycle. The interface submits workflow actions to the API, the service checks role and state, and returned snapshots update the application.</dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 border-b border-border">
          <dt class="text-[15px] font-bold text-ink">Key Capabilities</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            <ol class="m-0 list-decimal space-y-3 pl-5 text-[15px] leading-[1.75] text-ink3 marker:font-semibold marker:text-accent">
              <li class="pl-1"><strong class="font-semibold text-ink">Different workspaces for different responsibilities.</strong> Hospital, sponsor, and regulator roles have their own views and actions.</li>
              <li class="pl-1"><strong class="font-semibold text-ink">A connected trial workflow.</strong> Creation, review, enrollment, batch submission, assignments, disclosure, and archival are represented.</li>
              <li class="pl-1"><strong class="font-semibold text-ink">Controlled visibility.</strong> Patient masking and blinded assignments demonstrate information boundaries across roles.</li>
            </ol>
          </dd>
        </div>
        <div class="grid gap-3 p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7 bg-accent text-white">
          <dt class="text-[15px] font-bold text-white">Product Value</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-white/80">The prototype makes a multi-role process tangible: reviewers can <strong class="font-semibold text-white">follow a trial through its lifecycle and inspect how actions change shared state.</strong> It uses synthetic data and demo authentication; it is a proof of concept, not a production clinical system.</dd>
        </div>
      </dl>
      <div role="group" aria-label="Project resources" class="mt-8 grid gap-3 md:grid-cols-3">
        <a href="https://github.com/austin-mel/csc131-mock-pharmatrial-portal" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base bg-ink text-white hover:bg-accent">View project repository</a>
        <a href="https://austin-mel.github.io/csc131-mock-pharmatrial-portal/" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base border border-accent2 bg-accent-pale text-accent hover:bg-accent hover:text-white">Open live demo</a>
        <a href="#showcase" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base border border-accent2 bg-accent-pale text-accent hover:bg-accent hover:text-white">Browse product screens</a>
      </div>
      <nav aria-label="Explore this project" class="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
        <a href="#showcase" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[88px] w-full px-10 py-6 text-lg bg-ink text-white hover:bg-accent">Explore the product</a>
        <a href="#technical-details" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[88px] w-full px-10 py-6 text-lg border border-border2 text-ink hover:border-accent2 hover:text-accent2">Jump to technical details</a>
      </nav>
    </section>

    <section id="context" aria-labelledby="context-title" class="scroll-mt-[100px] py-14 md:py-[82px] bg-cream2">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Why the Product Matters</div>
            <h2 id="context-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">One workflow. Different responsibilities.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">The portal gives each fictional organization a focused workspace while preserving a shared view of trial progress.</p>
        </header>
        <div aria-label="Project partner roles" class="grid gap-4 md:grid-cols-3">
          <article class="min-w-0 rounded-[12px] border border-border bg-white grid min-h-[106px] grid-cols-[64px_minmax(0,1fr)] items-center gap-4 p-[18px]">
            <img :src="miniJhLogo" alt="Jane Hopkins demo hospital logo" width="56" height="56" class="block h-14 w-14 object-contain" />
            <div>
              <h3 class="text-sm font-bold leading-tight text-ink">Jane Hopkins Hospital</h3>
              <p class="mb-0 mt-1 text-[12px] leading-[1.35] text-ink3">Doctor and admin roles coordinate patient intake, hospital-side review, appointments, dosing, and clinical operations.</p>
            </div>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white grid min-h-[106px] grid-cols-[64px_minmax(0,1fr)] items-center gap-4 p-[18px]">
            <img :src="fdaLogo" alt="FDA demo regulator logo" width="56" height="56" class="block h-14 w-14 object-contain" />
            <div>
              <h3 class="text-sm font-bold leading-tight text-ink">Federal Drug Administration</h3>
              <p class="mb-0 mt-1 text-[12px] leading-[1.35] text-ink3">Regulator role approves trials, controls assignment locking, reviews batches, and publishes final disclosure in the demo workflow.</p>
            </div>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white grid min-h-[106px] grid-cols-[64px_minmax(0,1fr)] items-center gap-4 p-[18px]">
            <img :src="miniBavariaLogo" alt="Bavaria demo sponsor logo" width="56" height="56" class="block h-14 w-14 object-contain" />
            <div>
              <h3 class="text-sm font-bold leading-tight text-ink">Bavaria Pharmaceuticals</h3>
              <p class="mb-0 mt-1 text-[12px] leading-[1.35] text-ink3">Sponsor role creates trial drafts, submits batch metadata, monitors status without PII, and reviews disclosed reports.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="workflow" aria-labelledby="workflow-title" class="scroll-mt-[100px] py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">How the Product Works</div>
            <h2 id="workflow-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">From a trial draft to a disclosed report.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">The same lifecycle connects the interface, API, and database. Each stage makes the next available action visible to the appropriate role.</p>
        </header>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">01</div>
            <h3 class="text-[15px] font-bold text-ink">Create &amp; review</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">A sponsor drafts a trial. Regulator and hospital reviews move it toward operational approval.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">02</div>
            <h3 class="text-[15px] font-bold text-ink">Enroll &amp; prepare</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Hospital users review eligibility and enroll patients while sponsors submit batch metadata.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">03</div>
            <h3 class="text-[15px] font-bold text-ink">Assign &amp; operate</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Regulators lock blinded assignments. Hospital teams manage appointments and dosing.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">04</div>
            <h3 class="text-[15px] font-bold text-ink">Disclose &amp; archive</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">Final disclosure makes reports available, followed by archive actions in allowed states.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="showcase" aria-labelledby="showcase-title" class="scroll-mt-[100px] py-14 md:py-[82px] bg-cream2">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Product Showcase</div>
            <h2 id="showcase-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">See the workflow through each role.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">Existing application screenshots provide a starting point for telling the product story. Each screen illustrates a concrete task within the demo.</p>
        </header>
        <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
          <h3 class="text-[17px] font-bold text-ink">A sponsor workspace for trial progress</h3>
          <ProjectScreenshotLightbox
            :src="bavariaDashFigure"
            alt="Pharmatrial sponsor dashboard showing trial workflow information."
            title="A sponsor workspace for trial progress"
            trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
            image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
          />
          <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">The sponsor dashboard brings trial status and sponsor responsibilities into one workspace. Select the image to view it at full size.</figcaption>
        </figure>
        <div class="grid gap-4 lg:grid-cols-2 mt-6">
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Hospital review &amp; approval</h3>
            <ProjectScreenshotLightbox
              :src="jhApprovalFigure"
              alt="Hospital approval workspace in the Pharmatrial demo."
              title="Hospital review &amp; approval"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">Hospital administrators review trial details and operational approval state. Select the image to view it at full size.</figcaption>
          </figure>
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Regulator assignment controls</h3>
            <ProjectScreenshotLightbox
              :src="fdaAssignmentsFigure"
              alt="Regulator view for blinded treatment assignment."
              title="Regulator assignment controls"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">Assignment controls live in the regulator workspace, separate from hospital and sponsor views. Select the image to view it at full size.</figcaption>
          </figure>
        </div>
        <div class="grid gap-4 lg:grid-cols-2 mt-6">
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Treatment batch submission</h3>
            <ProjectScreenshotLightbox
              :src="bavariaBatchFigure"
              alt="Sponsor form and workspace for treatment batch metadata."
              title="Treatment batch submission"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">Sponsors submit and monitor treatment batch metadata. Select the image to view it at full size.</figcaption>
          </figure>
          <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">Reports after disclosure</h3>
            <ProjectScreenshotLightbox
              :src="bavariaReportFigure"
              alt="Sponsor report available after regulator disclosure."
              title="Reports after disclosure"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">Outcome and comparison tables become available after final disclosure. Select the image to view it at full size.</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="technical-details" aria-labelledby="technical-details-title" class="scroll-mt-[100px] py-14 md:py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Technical Details &amp; Limitations</div>
            <h2 id="technical-details-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Shared state from interface to database.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">The implementation connects focused Vue views to a workflow service that checks actions and persists the resulting state.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Frontend &amp; state</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Vue and TypeScript provide the interface. Pinia stores hold role, trial, patient, and assignment state; the API client maps returned snapshots into those stores.</p>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Backend &amp; persistence</h3>
            <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Express handles workflow requests. Service checks precede Prisma writes to PostgreSQL, with audit events recording workflow changes.</p>
          </article>
        </div>
        <div tabindex="0" role="region" aria-label="Application layers" class="mt-6 overflow-x-auto rounded-[12px] border border-border bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <table class="w-full border-collapse text-left text-[13px]">
            <caption class="p-5 text-left text-[17px] font-bold text-ink">Application layers</caption>
            <thead>
              <tr>
                <th scope="col" class="border-t border-border p-3 align-top text-ink">Layer</th>
                <th scope="col" class="border-t border-border p-3 align-top text-ink">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Vue views &amp; Pinia</th>
                <td class="border-t border-border p-3 align-top text-ink3">Render role-specific tabs, tables, and modals from the current workflow snapshot.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">API client</th>
                <td class="border-t border-border p-3 align-top text-ink3">Submit actions and hydrate the application with returned data.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Express workflow service</th>
                <td class="border-t border-border p-3 align-top text-ink3">Check the active role and trial state before applying a mutation.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Prisma &amp; PostgreSQL</th>
                <td class="border-t border-border p-3 align-top text-ink3">Persist users, trials, patients, enrollments, appointments, batches, assignments, reports, and audit events.</td>
              </tr>
              <tr>
                <th scope="row" class="border-t border-border p-3 align-top text-ink font-semibold">Seeded fallback</th>
                <td class="border-t border-border p-3 align-top text-ink3">Keep the demonstration available when live API mode is disabled or unavailable.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grid gap-4 md:grid-cols-2 mt-6">
          <div class="grid gap-4">
            <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
              <h3 class="text-[17px] font-bold text-ink">Workflow checks</h3>
              <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Role guides and seeded data document expected actions, patient visibility, and the sequence of workflow changes.</p>
            </article>
          </div>
          <div class="grid gap-4">
            <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px]">
              <h3 class="text-[17px] font-bold text-ink">Demo boundaries</h3>
              <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">Current authentication and synthetic patient records support demonstration. Production identity, data handling, and compliance controls would require further work.</p>
            </article>
          </div>
        </div>
        <article aria-labelledby="conclusions-title" class="bg-accent text-white mt-8 p-6 md:p-9 rounded-[12px] border border-accent">
          <h3 id="conclusions-title" class="font-display text-[26px] font-bold leading-tight md:text-[32px] text-white">Final Conclusions</h3>
          <p class="mb-0 mt-4 text-[15px] leading-[1.75] text-white/80">Pharmatrial connects role-specific workspaces to a shared trial lifecycle, from creation and review through enrollment, assignments, disclosure, and archival. The interface, workflow service, and database demonstrate how user actions update shared state while preserving role-specific visibility. Synthetic data, demo authentication, and seeded fallback mode make the workflow available for review. The result remains a proof of concept rather than a production clinical system.</p>
        </article>
      </div>
    </section>

    <section id="resources" aria-labelledby="resources-title" class="scroll-mt-[100px] py-14 md:py-[82px] bg-cream2">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px]">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Project Resources</div>
            <h2 id="resources-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Explore the application and its implementation.</h2>
          </div>
          <p class="mt-4 text-[15px] leading-[1.76] text-ink3">Use the working demo and source repository to follow the interface, workflow logic, and supporting documentation.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px] flex flex-col">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Live application</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">Explore the fictional trial workflow through the available demo roles.</p>
            <a href="https://austin-mel.github.io/csc131-mock-pharmatrial-portal/" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base bg-ink text-white hover:bg-accent mt-auto w-full self-start sm:w-auto">Open live demo</a>
          </article>
          <article class="min-w-0 rounded-[12px] border border-border bg-white p-[22px] flex flex-col">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Source &amp; documentation</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">Review the application code, architecture notes, role guides, and data model.</p>
            <a href="https://github.com/austin-mel/csc131-mock-pharmatrial-portal" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-[10px] text-center font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent min-h-[60px] px-8 py-4 text-base border border-accent2 bg-accent-pale text-accent hover:bg-accent hover:text-white mt-auto w-full self-start sm:w-auto">View project repository</a>
          </article>
        </div>
        <footer class="mt-8 flex flex-col items-start justify-between gap-6 border-t border-border pt-7 text-[14px] leading-[1.8] md:flex-row">
          <p class="m-0 text-ink3"><strong class="font-semibold text-ink">Austin Melendez</strong><br />Pharmatrial · Full-stack workflow demo</p>
        </footer>
      </div>
    </section>
  </main>
</template>
