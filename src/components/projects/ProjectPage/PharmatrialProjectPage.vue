<script setup lang="ts">
import SVGIcons from '@/assets/SVGIcons.vue';
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';
import type { AppIconName } from '@/types/types';

import jhLogo from '@/assets/projects/pharmatrial/mini_jh_logo.svg';
import bavariaLogo from '@/assets/projects/pharmatrial/mini_bavaria_logo.svg';
import fdaLogo from '@/assets/projects/pharmatrial/fda_logo.svg';

import bavariaDashboardScreenshot from '@/assets/projects/pharmatrial/bavaria-dash.png';
import loginFormScreenshot from '@/assets/projects/pharmatrial/login-form.png';
import jhApprovalScreenshot from '@/assets/projects/pharmatrial/jh-approval.png';
import fdaAssignmentsScreenshot from '@/assets/projects/pharmatrial/fda-assignments.png';
import bavariaBatchScreenshot from '@/assets/projects/pharmatrial/bavaria-batch.png';
import bavariaReportScreenshot from '@/assets/projects/pharmatrial/bavaria-report.png';

const githubRepoUrl = 'https://github.com/austin-mel/csc131-mock-pharmatrial-portal';
const liveDemoUrl = 'https://austin-mel.github.io/csc131-mock-pharmatrial-portal/';

const projectNumbers = [
  {
    value: '4',
    label: 'fictional demo roles for hospital, sponsor, and regulator workflows',
  },
  {
    value: '14',
    label: 'API-backed workflow actions for approvals, enrollment, batches, disclosure, and archive state',
  },
  {
    value: '9',
    label: 'Prisma models for users, trials, patients, enrollments, appointments, batches, assignments, reports, and audit events',
  },
  {
    value: '2',
    label: 'operating modes: live API persistence and seeded frontend fallback',
  },
];

const partnerRoles = [
  {
    name: 'Demo Hospital',
    logo: jhLogo,
    alt: 'Demo hospital logo',
    body: 'Doctor and admin roles coordinate patient intake, hospital-side review, appointments, dosing, and clinical operations.',
  },
  {
    name: 'Demo Regulator',
    logo: fdaLogo,
    alt: 'Demo regulator logo',
    body: 'Regulator role approves trials, controls assignment locking, reviews batches, and publishes final disclosure in the demo workflow.',
  },
  {
    name: 'Demo Sponsor',
    logo: bavariaLogo,
    alt: 'Demo sponsor logo',
    body: 'Sponsor role creates trial drafts, submits batch metadata, monitors status without PII, and reviews disclosed reports.',
  },
];

const engineeringSummary = [
  ['Problem', 'Show how a trial workflow can expose different actions and patient visibility to hospital, sponsor, and regulator roles without presenting the demo as a production clinical system.'],
  ['My role', 'Built the Vue/TypeScript interface, Pinia state flow, API client integration, Express workflow service, Prisma data model, seeded fallback mode, and role-filtered snapshots.'],
  ['Implementation', 'The frontend hydrates a workflow snapshot, maps API DTOs into stores, and applies returned snapshots after mutations; the backend validates role-specific actions before Prisma writes.'],
  ['Validation', 'The page now treats the app as a proof of concept and calls out the evidence a reviewer can inspect: workflow actions, persisted models, docs, role guides, seed data, and audit events.'],
  ['Result', 'The workflow includes trial creation, review, enrollment, batch submission, assignment locking, dosing, disclosure, and archival states.'],
  ['Limitation', 'Demo bearer-token auth and synthetic clinical data are not production controls; real deployment would need identity, encryption, retention, audit, and compliance review.'],
];

const featureCards = [
  {
    icon: '01',
    title: 'Role-selected portals',
    body: 'Demo users enter as Dr. Sarah Chen, Emily Rodriguez, Michael Torres, or Anna Keller, with portal-specific tabs and actions.',
  },
  {
    icon: '02',
    title: 'Trial lifecycle control',
    body: 'Tracks draft creation, regulator review, hospital review, batch submission, assignment locking, dosing, notification, disclosure, and archive state.',
  },
  {
    icon: '03',
    title: 'Patient privacy boundary',
    body: 'Hospital roles see synthetic clinical PII; sponsor and regulator views use masked patient display helpers before disclosure.',
  },
  {
    icon: '04',
    title: 'Eligibility logic',
    body: 'Uses ICD codes, age limits, incompatible medications, and trial enrollment state to surface treatment populations.',
  },
  {
    icon: '05',
    title: 'Operational modals',
    body: 'Includes focused flows for trial creation, approvals, assignment locking, patient intake, CSV upload, and appointment logging.',
  },
  {
    icon: '06',
    title: 'Post-disclosure reports',
    body: 'Derives outcome, comparison, and adverse-event tables only after the regulator publishes final disclosure.',
  },
];

const programScreenshots = [
  {
    image: loginFormScreenshot,
    title: 'Role-based login form',
    type: 'Portal entry',
    body: 'Demo users enter the proof of concept through role-specific access points for hospital, regulator, and sponsor workflows.',
    alt: 'Pharmatrial role-based login form screenshot',
  },
  {
    image: jhApprovalScreenshot,
    title: 'Hospital approval workspace',
    type: 'Hospital workflow',
    body: 'Hospital administrators review trial details, patient context, and approval state from the operations portal.',
    alt: 'Hospital approval workspace screenshot',
  },
  {
    image: fdaAssignmentsScreenshot,
    title: 'Regulator assignment controls',
    type: 'Regulator workflow',
    body: 'The regulator view controls blinded treatment assignment and keeps assignment actions separated from hospital and sponsor visibility.',
    alt: 'Regulator assignment controls screenshot',
  },
  {
    image: bavariaBatchScreenshot,
    title: 'Sponsor batch submission',
    type: 'Sponsor workflow',
    body: 'Sponsor users submit and monitor batch metadata without accessing hospital-side patient PII.',
    alt: 'Sponsor batch submission screenshot',
  },
  {
    image: bavariaReportScreenshot,
    title: 'Sponsor disclosed report',
    type: 'Post-disclosure output',
    body: 'Final reports become visible only after the regulator publishes disclosure and the blinded workflow is complete.',
    alt: 'Sponsor disclosed report screenshot',
  },
];

const roleFacts = [
  ['Frontend', 'Vue 3 + TypeScript'],
  ['State', '4 Pinia stores + API hydration'],
  ['Logic', '13 composable modules'],
  ['Persistence', '9 Prisma database models'],
];

const techStack = [
  'Vue 3',
  'TypeScript',
  'Pinia',
  'Tailwind CSS',
  'Express',
  'PostgreSQL',
];

const architectureRows = [
  ['Vue views and tabs', 'Render role-specific dashboards, trial tabs, patient tables, modals, and report screens.'],
  ['Pinia stores', 'Hold current portal, trial state, patient data, assignments, and returned workflow snapshots.'],
  ['API client', 'Logs in, stores a demo bearer token in memory, maps DTOs, and submits workflow mutations.'],
  ['Express service layer', 'Checks role and workflow state before approving, enrolling, assigning, disclosing, archiving, or deleting records.'],
  ['Prisma and PostgreSQL', 'Persist users, trials, patients, enrollments, appointments, batches, assignments, reports, and audit events.'],
  ['Seeded fallback', 'Keeps the demo usable when live API mode is disabled or unavailable.'],
];

const permissionRows = [
  ['Create trial', 'Sponsor', 'Sponsor creates draft trial metadata before review.'],
  ['Approve or reject trial', 'Regulator, Hospital admin', 'Regulator review precedes hospital-side operational approval.'],
  ['View patient PII', 'Hospital roles', 'Sponsor and regulator views use masked patient displays before disclosure.'],
  ['Enroll patients', 'Doctor', 'Doctor role evaluates synthetic eligibility and enrolls patients.'],
  ['Submit batch', 'Sponsor', 'Sponsor submits treatment batch metadata without hospital PII.'],
  ['Lock assignments', 'Regulator', 'Regulator controls blinded assignment locking.'],
  ['Publish disclosure', 'Regulator', 'Reports become visible only after final disclosure.'],
  ['Archive or delete', 'Regulator, allowed workflow states', 'Archive and delete actions are constrained by status.'],
];

const apiCards: {
  icon: AppIconName;
  type: string;
  title: string;
  body: string;
}[] = [
  {
    icon: 'check',
    type: 'Live API',
    title: '14 API-backed workflow actions',
    body: 'Login, snapshot hydration, trial creation, approvals, enrollment, CSV import, appointments, batches, assignments, notification, disclosure, archive, and delete actions sync with the backend.',
  },
  {
    icon: 'shield',
    type: 'Server checks',
    title: 'Role-gated workflow mutations',
    body: 'Express middleware verifies demo bearer tokens, then the service layer checks hospital, sponsor, and regulator permissions before Prisma writes.',
  },
  {
    icon: 'database',
    type: 'Database',
    title: '9 persisted Prisma models',
    body: 'Portal users, trials, patients, enrollments, appointments, batches, assignments, trial reports, and audit events are modeled for PostgreSQL-compatible databases.',
  },
  {
    icon: 'communication',
    type: 'PII',
    title: 'Privacy masking is application logic.',
    body: 'Hospital roles can see synthetic clinical PII; sponsor and regulator views see anonymized patient displays before disclosure.',
  },
  {
    icon: 'visibilityOff',
    type: 'Blinding',
    title: 'Blinding is preserved until disclosure.',
    body: 'Hospital and sponsor users cannot inspect treatment assignment before final regulator publication.',
  },
  {
    icon: 'chart',
    type: 'Lifecycle',
    title: 'Lifecycle is sequenced.',
    body: 'Creation, approvals, enrollment, batch submission, assignment, dosing, notification, disclosure, reports, and archive actions are represented.',
  },
];

const outputCards = [
  {
    type: 'Core workspace',
    title: 'src/components/Trials',
    body: 'Trial header, lifecycle, tab bar, overview, patients, appointments, dose tracker, assignments, batch, disclosure, report, and modals.',
  },
  {
    type: 'Live data client',
    title: 'src/api + src/stores',
    body: 'The fetch client logs in, stores a bearer token, hydrates /workflow/snapshot, maps DTOs, and lets Pinia apply returned snapshots after workflow mutations.',
  },
  {
    type: 'Backend workflow',
    title: 'src/services/pharmatrial.service.ts',
    body: 'The Express service checks trial creation, approvals, enrollments, appointments, batch submission, assignment locking, regulator notification, disclosure, archive, and deletion before Prisma persistence.',
  },
  {
    type: 'Database schema',
    title: 'prisma/schema.prisma',
    body: 'PostgreSQL persistence covers users, trials, patients, enrollments, appointments, batches, assignments, reports, and audit events with relations and indexes.',
  },
];

const validationCards = [
  {
    type: 'Documentation',
    title: 'README.md and docs/*.md',
    body: 'Frontend and backend READMEs, architecture notes, role guides, and the data dictionary explain live mode, fallback mode, and stakeholder responsibilities.',
  },
  {
    type: 'Seeded fallback',
    title: 'frontend/src/data seed modules',
    body: 'Seed portals, trials, patients, ICD codes, and assignments keep demos usable when VITE_DEMO_MODE is true, VITE_API_URI is empty, or the live API is unavailable.',
  },
  {
    type: 'Application code',
    title: 'Vue, Pinia, Express, Prisma',
    body: 'The Vite app handles role-specific workspaces while the backend persists workflow records, shapes role-filtered snapshots, and records audit events.',
  },
];

const productionLimitations = [
  ['Authentication', 'Current bearer-token login is for demo review only; production would need a real identity provider, session policy, token rotation, and server-side authorization review.'],
  ['Patient data', 'Current records are synthetic; production PII would require encryption, access logging, retention rules, and documented data-handling policy.'],
  ['Compliance', 'The project is not a compliant clinical-trial system; it is a workflow prototype showing engineering boundaries.'],
];
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div
      class="pointer-events-none absolute right-[-180px] top-[-245px] h-[620px] w-[620px] rounded-full border border-accent2/[0.07]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute right-[270px] top-[124px] hidden h-[154px] w-[220px] opacity-50 lg:block"
      style="background-image: radial-gradient(circle, rgb(29 78 216 / 18%) 1px, transparent 1px); background-size: 22px 22px;"
      aria-hidden="true"
    ></div>

    <section class="relative z-[1] mx-auto grid min-h-[680px] w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] grid-cols-1 items-center gap-10 py-14 pt-[76px] text-center lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.76fr)] lg:gap-14 lg:text-left">
      <div>
        <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent2/20 bg-accent-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-accent before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold before:content-['']">
          Full-Stack Workflow Demo
        </div>

        <h1 class="max-w-[760px] font-display text-[40px] font-black xxs:text-[46px] leading-[0.95] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:text-[88px]">
          Pharmatrial clinical trial <em class="text-accent">portal.</em>
        </h1>

        <p class="mt-7 max-w-[620px] text-[18px] font-light leading-[1.72] text-ink3">
          A fictional Vue, TypeScript, Express, and Prisma proof of concept that models role-specific trial workflow actions across hospital, sponsor, and regulator demo portals.
        </p>

        <div class="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a
            class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-[22px] text-sm font-semibold text-white no-underline transition-colors hover:bg-accent"
            :href="githubRepoUrl"
            target="_blank"
            rel="noreferrer"
          >
            View Github repo
          </a>

          <a
            class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-[22px] text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2"
            href="#overview"
          >
            See project description
          </a>

          <a
            class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-[22px] text-sm font-semibold text-accent no-underline transition-colors hover:bg-accent hover:text-white"
            :href="liveDemoUrl"
            target="_blank"
          >
            View live demo
          </a>
        </div>
      </div>

      <aside class="relative">
        <div class="mb-4 flex flex-nowrap gap-2 pb-1 md:justify-center" aria-label="Technology stack used">
          <span
            v-for="item in techStack"
            :key="item"
            class="shrink-0 rounded-full border border-accent2/15 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-ink3 shadow-[0_3px_12px_rgb(13_17_23_/_5%)]"
          >
            {{ item }}
          </span>
        </div>

        <ProjectScreenshotLightbox
          :src="bavariaDashboardScreenshot"
          alt="Sponsor dashboard screenshot from the Pharmatrial workflow demo"
          title="Sponsor Dashboard"
          type="Pharmatrial Dashboard"
          loading="eager"
          trigger-class="group block w-full overflow-hidden rounded-[14px] border border-border bg-white text-left shadow-[0_16px_48px_rgb(13_17_23_/_10%)] transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-offset-cream max-md:pointer-events-none max-md:cursor-default"
          image-class="bg-white"
        />
      </aside>
    </section>

    <section class="relative overflow-hidden bg-ink py-24 text-white" aria-label="Project numbers">
      <div
        class="pointer-events-none absolute right-[-80px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/[0.04]"
        aria-hidden="true"
      ></div>

      <div
        class="pointer-events-none absolute right-[-160px] top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-white/[0.03]"
        aria-hidden="true"
      ></div>

      <div class="relative mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">
          By the numbers
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4">
          <div
            v-for="stat in projectNumbers"
            :key="stat.value"
            class="min-h-40 border-white/[0.08] py-8 md:border-r md:px-8 last:border-r-0"
          >
            <strong class="block font-display text-[44px] font-black xs:text-[54px] leading-none tracking-normal text-white">
              {{ stat.value }}
            </strong>

            <p id="overview"  class="mt-2.5 max-w-[190px] text-[13px] font-light leading-[1.45] text-white/45">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Engineering Summary</div>
          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">The page documents workflow state, demo roles, and production limits.</h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The project is presented as a full-stack demo with synthetic data and fictional organizations. It shows role-aware state transitions, persistence, and visibility rules while naming the production security gap clearly.
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
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
              Project Overview
            </div>

            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">
              A full-stack demo of role-specific trial workflow state.
            </h2>
          </div>

          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            Pharmatrial is a single-page proof of concept for controlled data exchange among fictional hospital, sponsor, and regulator roles. The system persists live workflow state through an API while checking role-specific permissions, workflow state, and patient visibility rules.
          </p>
        </header>

        <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3" aria-label="Project partner roles">
          <article
            v-for="role in partnerRoles"
            :key="role.name"
            class="grid min-h-[106px] grid-cols-[64px_1fr] items-center gap-4 rounded-[12px] border border-border bg-white p-[18px]"
          >
            <img class="max-h-14 w-14 object-contain" :src="role.logo" :alt="role.alt" />

            <div>
              <strong class="block text-sm leading-tight text-ink">
                {{ role.name }}
              </strong>

              <span class="mt-1 block text-[12px] leading-[1.35] text-ink3">
                {{ role.body }}
              </span>
            </div>
          </article>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article
            v-for="card in featureCards"
            :key="card.title"
            class="rounded-[12px] border border-border bg-white p-6"
          >
            <div class="mb-[18px] grid h-10 w-10 place-items-center rounded-[10px] bg-accent-pale font-bold text-accent">
              {{ card.icon }}
            </div>

            <h3 class="mb-2 text-[15px] font-bold leading-snug tracking-normal text-ink">
              {{ card.title }}
            </h3>

            <p class="m-0 text-[13px] leading-[1.6] text-ink3">
              {{ card.body }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
            Program Screens
          </div>

          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">
            The prototype screens show each stakeholder workflow in context.
          </h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          These screenshots make the interface visible beyond the static hero mockup: login, hospital approval, regulator assignment, sponsor batch submission, and post-disclosure reporting.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article
          v-for="(screen, index) in programScreenshots"
          :key="screen.title"
          class="overflow-hidden rounded-[12px] border border-border bg-white"
          :class="{ 'md:col-span-2': index === 0 }"
        >
          <div class="border-b border-border bg-cream2 px-5 py-4">
            <div class="mb-1 font-mono text-[11px] uppercase text-ink4">
              {{ screen.type }}
            </div>

            <h3 class="text-[15px] font-bold leading-snug tracking-normal text-ink">
              {{ screen.title }}
            </h3>

            <p class="m-0 mt-1.5 max-w-[760px] text-[13px] leading-[1.6] text-ink3">
              {{ screen.body }}
            </p>
          </div>

          <ProjectScreenshotLightbox
            :src="screen.image"
            :alt="screen.alt"
            :title="screen.title"
            :type="screen.type"
            trigger-class="group block w-full bg-[#f5f2ec] p-3 text-left transition-colors hover:bg-[#ebe7df] focus-visible:ring-offset-white max-md:pointer-events-none max-md:cursor-default"
            :image-class="[
              'rounded-[10px] border border-[#dedad3] bg-white transition-transform duration-200 group-hover:scale-[1.01]',
              index === 0 ? 'max-h-[560px]' : 'max-h-[420px]',
            ]"
          />
        </article>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
            Implementation Story
          </div>

          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">
            The source code models product rules as state, tabs, guarded actions, and database-backed workflow records.
          </h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The app now runs against a live Express API when <code>VITE_API_URI</code> is configured: login returns an in-memory bearer token, the dashboard hydrates from <code>/workflow/snapshot</code>, and workflow mutations sync through Prisma-backed endpoints. When the API is unavailable or demo mode is enabled, Pinia falls back to seeded TypeScript data so the full workflow remains reviewable.
          </p>
      </header>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-[0.92fr_1.08fr]">
        <article class="rounded-[12px] border border-border bg-white p-7">
          <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">
            Implemented scope
          </h3>

          <p class="m-0 text-[13px] leading-[1.6] text-ink3">
            Typed stores, composables, reusable forms, modal orchestration, role-specific tabs, patient privacy helpers, workflow-specific trial components, API DTO mapping, and server-side workflow services.
          </p>

          <div class="mt-[18px] grid gap-[11px]">
            <div
              v-for="fact in roleFacts"
              :key="fact[0]"
              class="flex items-center justify-between gap-4 border-b border-border py-[13px] last:border-b-0"
            >
              <span class="font-mono text-[11px] uppercase tracking-[0.5px] text-ink4">
                {{ fact[0] }}
              </span>

              <strong class="text-right text-[13px] text-ink">
                {{ fact[1] }}
              </strong>
            </div>
          </div>
        </article>

        <article class="rounded-[12px] border border-border bg-white p-7">
          <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">
            Implemented workflow actions
          </h3>

          <p class="m-0 text-[13px] leading-[1.6] text-ink3">
            <code>trials.store.ts</code>, the API client, and the backend workflow service coordinate approval, rejection, batch submission, assignment locking, appointment logging, regulator notification, final disclosure, archive toggling, and rejected-trial deletion.
          </p>

          <div class="mt-[18px] flex flex-nowrap gap-2 overflow-x-auto pb-1">
            <span
              v-for="item in techStack"
              :key="item"
              class="shrink-0 rounded-md border border-border bg-cream2 px-[9px] py-[5px] text-[12px] text-ink3"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <section id="architecture" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
              Architecture And Permissions
            </div>

            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">
              Workflow data moves through Vue state, API mutations, Express checks, and Prisma persistence.
            </h2>
          </div>

          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The documentation defines Pharmatrial as a proof of concept rather than a production clinical system. It records workflow sequencing, patient masking, blinded assignment, role-specific action availability, live PostgreSQL persistence, and seeded fallback data for offline review.
          </p>
        </header>

        <article class="mb-6 overflow-hidden rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Data flow</h3><span class="font-mono text-[11px] text-ink4">frontend to persistence</span></div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[700px] border-collapse text-left text-xs">
              <thead class="text-ink3">
                <tr class="border-b border-border">
                  <th class="p-2.5">Layer</th>
                  <th class="p-2.5">Responsibility</th>
                </tr>
              </thead>
              <tbody class="text-ink3">
                <tr v-for="row in architectureRows" :key="row[0]" class="border-b border-cream3 last:border-b-0">
                  <td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="mb-6 overflow-hidden rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Role-permission matrix</h3><span class="font-mono text-[11px] text-ink4">demo scope</span></div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[760px] border-collapse text-left text-xs">
              <thead class="text-ink3">
                <tr class="border-b border-border">
                  <th class="p-2.5">Action</th>
                  <th class="p-2.5">Allowed role</th>
                  <th class="p-2.5">Rule shown in the demo</th>
                </tr>
              </thead>
              <tbody class="text-ink3">
                <tr v-for="row in permissionRows" :key="row[0]" class="border-b border-cream3 last:border-b-0">
                  <td v-for="cell in row" :key="cell" class="p-2.5">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article
            v-for="card in apiCards"
            :key="card.title"
            class="rounded-[12px] border border-border bg-white p-6"
          >
            <div class="mb-[18px] grid h-10 w-10 place-items-center rounded-[10px] bg-accent-pale text-accent">
              <SVGIcons :name="card.icon" class="h-5 w-5" />
            </div>

            <h3 class="mb-2 text-[15px] font-bold leading-snug tracking-normal text-ink">
              {{ card.title }}
            </h3>

            <p class="m-0 text-[13px] leading-[1.6] text-ink3">
              {{ card.body }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="outputs" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
            Implementation Output
          </div>

          <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">
            The codebase is organized around inspectable engineering surfaces.
          </h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The source tree separates views, router metadata, stores, composables, typed models, API integration, seed data, privacy utilities, backend routes, service logic, Prisma persistence, and reusable components.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article
          v-for="card in outputCards"
          :key="card.title"
          class="rounded-[12px] border border-border bg-white p-6"
        >
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">
            {{ card.type }}
          </div>

          <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">
            {{ card.title }}
          </h3>

          <p class="m-0 text-[13px] leading-[1.6] text-ink3">
            {{ card.body }}
          </p>
        </article>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
              Documentation And Demo Boundaries
            </div>

            <h2 class="font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-ink md:text-[48px]">
              Documentation connects the demo behavior to implementation files.
            </h2>
          </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The project includes role guides, frontend and backend architecture notes, a data dictionary, seeded TypeScript fallback data, reusable Vue components, an Express API, a Prisma schema, and a static requirements document that explains the original course scope.
        </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article
            v-for="card in validationCards"
            :key="card.title"
            class="rounded-[12px] border border-border bg-white p-6"
          >
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">
              {{ card.type }}
            </div>

            <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">
              {{ card.title }}
            </h3>

            <p class="m-0 text-[13px] leading-[1.6] text-ink3">
              {{ card.body }}
            </p>
          </article>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article v-for="item in productionLimitations" :key="item[0]" class="rounded-[12px] border border-border bg-white p-6">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Production limit</div>
            <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">{{ item[0] }}</h3>
            <p class="m-0 text-[13px] leading-[1.6] text-ink3">{{ item[1] }}</p>
          </article>
        </div>

        <a
          class="mt-6 inline-flex min-h-[58px] w-full items-center justify-center rounded-[12px] bg-ink px-6 text-base font-semibold text-white no-underline transition-colors hover:bg-accent"
          :href="githubRepoUrl"
          target="_blank"
          rel="noreferrer"
        >
          View Github repo
        </a>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <div class="relative overflow-hidden rounded-[14px] bg-ink p-8 text-white md:p-11">
        <div
          class="pointer-events-none absolute right-[-170px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]"
          aria-hidden="true"
        ></div>

        <div class="relative z-[1] mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/65 before:h-0.5 before:w-[26px] before:bg-white/65 before:content-['']">
          Final Conclusions
        </div>

        <h2 class="relative z-[1] max-w-[760px] font-display text-[28px] font-bold xs:text-[34px] leading-[1.06] tracking-normal text-white md:text-[48px]">
          Pharmatrial is a full-stack workflow prototype with explicit demo limits.
        </h2>
        
        <p class="relative mt-10 z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
          The project implements a Vue frontend and Express backend that coordinate trial lifecycle state, role-specific permissions, patient masking, blinded assignment, dose completion, and disclosure timing in a workspace with separated stakeholder visibility.
        </p>
        <p class="relative mt-10 z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
          The current implementation pairs live backend mode with a seeded frontend fallback: Express routes authenticate demo or persisted users, Prisma stores workflow records in PostgreSQL, and the Vue app keeps seeded portals, trials, patients, ICD codes, and assignments available when the API cannot be used. Production hardening would require identity-provider authentication, encrypted PII storage, formal migrations, retention policies, and compliance review.
        </p>
      </div>
    </section>

  </main>
</template>
