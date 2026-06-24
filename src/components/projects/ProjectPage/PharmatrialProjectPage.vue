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

const projectNumbers = [
  {
    value: '4',
    label: 'role-selected demo portals for doctor, hospital admin, FDA, and Bavaria users',
  },
  {
    value: '8',
    label: 'seeded trials spanning pending, active, rejected, completed, and batch-ready states',
  },
  {
    value: '68',
    label: 'Vue components across dashboards, trial tabs, modals, patient tables, and navigation',
  },
  {
    value: '26',
    label: 'synthetic patient records supporting CSV import, eligibility, dosing, and reports',
  },
];

const partnerRoles = [
  {
    name: 'Jane Hopkins',
    logo: jhLogo,
    alt: 'Jane Hopkins logo',
    body: 'Doctor and admin portals coordinate patient intake, hospital-side review, appointments, dosing, and clinical operations.',
  },
  {
    name: 'FDA Administration',
    logo: fdaLogo,
    alt: 'FDA Administration logo',
    body: 'Regulatory portal approves trials, controls assignments, reviews batches, and publishes final disclosure.',
  },
  {
    name: 'Bavaria Pharma',
    logo: bavariaLogo,
    alt: 'Bavaria Pharma logo',
    body: 'Sponsor portal creates trial drafts, submits batch metadata, monitors status without PII, and reviews disclosed reports.',
  },
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
    body: 'Tracks draft creation, FDA review, JH review, batch submission, assignment locking, dosing, notification, disclosure, and archive state.',
  },
  {
    icon: '03',
    title: 'Patient privacy boundary',
    body: 'Jane Hopkins roles see clinical PII; FDA and Bavaria views use masked patient display helpers before disclosure.',
  },
  {
    icon: '04',
    title: 'Eligibility logic',
    body: 'Uses ICD codes, age limits, incompatible medications, and trial enrollment state to surface treatment populations.',
  },
  {
    icon: '05',
    title: 'Operational modals',
    body: 'Includes focused flows for trial creation, approvals, FDA assignment, patient intake, CSV upload, and appointment logging.',
  },
  {
    icon: '06',
    title: 'Post-disclosure reports',
    body: 'Derives outcome, comparison, and adverse-event tables only after FDA publishes final disclosure.',
  },
];

const programScreenshots = [
  {
    image: loginFormScreenshot,
    title: 'Role-based login form',
    type: 'Portal entry',
    body: 'Demo users enter the proof of concept through role-specific access points for hospital, FDA, and sponsor workflows.',
    alt: 'Pharmatrial role-based login form screenshot',
  },
  {
    image: jhApprovalScreenshot,
    title: 'Jane Hopkins approval workspace',
    type: 'Clinical workflow',
    body: 'Hospital administrators review trial details, patient context, and approval state from the clinical operations portal.',
    alt: 'Jane Hopkins approval workspace screenshot',
  },
  {
    image: fdaAssignmentsScreenshot,
    title: 'FDA assignment controls',
    type: 'Regulatory workflow',
    body: 'The FDA view controls blinded treatment assignment and keeps regulatory actions separated from hospital and sponsor visibility.',
    alt: 'FDA assignment controls screenshot',
  },
  {
    image: bavariaBatchScreenshot,
    title: 'Bavaria batch submission',
    type: 'Sponsor workflow',
    body: 'Sponsor users submit and monitor batch metadata without accessing hospital-side patient PII.',
    alt: 'Bavaria Pharma batch submission screenshot',
  },
  {
    image: bavariaReportScreenshot,
    title: 'Bavaria disclosed report',
    type: 'Post-disclosure output',
    body: 'Final reports become visible only after the FDA publishes disclosure and the blinded workflow is complete.',
    alt: 'Bavaria Pharma disclosed report screenshot',
  },
];

const roleFacts = [
  ['Framework', 'Vue 3 + TypeScript'],
  ['State', '5 Pinia stores'],
  ['Logic', '13 composable modules'],
  ['Models', '9 TypeScript type files'],
];

const techStack = [
  'Vue 3',
  'TypeScript',
  'Pinia',
  'Vue Router',
  'Tailwind CSS',
  'Flowbite Vue',
  'Zod',
  'Vite',
];

const apiCards: {
  icon: AppIconName;
  type: string;
  title: string;
  body: string;
}[] = [
  {
    icon: 'check',
    type: 'Functional requirements',
    title: '8 functional requirements',
    body: 'Portal login, patient management, review, sponsor workflow, FDA approval, assignment, disclosure, and reports.',
  },
  {
    icon: 'shield',
    type: 'Security requirements',
    title: '4 security requirements',
    body: 'PII confidentiality, blinded assignment, role-based access, and workflow-state guardrails.',
  },
  {
    icon: 'database',
    type: 'Data dictionary',
    title: 'Data dictionary coverage',
    body: 'Patient, trial, eligibility, enrollment, appointment, assignment, report, auth, and audit event models are defined.',
  },
  {
    icon: 'communication',
    type: 'PII',
    title: 'Privacy boundary is product logic.',
    body: 'Jane Hopkins can see clinical PII; FDA and Bavaria see anonymized patient displays before disclosure.',
  },
  {
    icon: 'visibilityOff',
    type: 'Blinding',
    title: 'Blinding is preserved until disclosure.',
    body: 'Hospital and sponsor users cannot inspect Bavaria/placebo assignment before final FDA publication.',
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
    type: 'Workflow state',
    title: 'src/stores/trials.store.ts',
    body: 'Transition methods cover approval, rejection, batch submission, assignment, notification, final disclosure, archive, and deletion.',
  },
  {
    type: 'Reusable logic',
    title: 'src/composables',
    body: 'Composable modules separate filtering, workflow actions, route state, and derived trial behavior from the component tree.',
  },
  {
    type: 'Privacy helpers',
    title: 'src/utils/privacy.ts',
    body: 'Display rules mask names and dates for FDA and Bavaria while preserving full hospital clinical views.',
  },
];

const validationCards = [
  {
    type: 'Documentation',
    title: 'README.md and docs/*.md',
    body: 'Role guides explain Jane Hopkins Doctor, Jane Hopkins Admin, FDA Admin, and Bavaria Admin responsibilities.',
  },
  {
    type: 'Source data',
    title: 'src/data seed modules',
    body: 'Seed portals, trials, patients, ICD codes, and assignments exercise pending, active, rejected, and completed workflows.',
  },
  {
    type: 'Application code',
    title: 'Vue, Pinia, Router, Tailwind',
    body: 'The Vite app uses typed domain models and reusable front-end workflow components.',
  },
];
</script>

<template>
  <main class="relative overflow-hidden bg-cream text-ink">
    <div
      class="pointer-events-none absolute right-[-180px] top-[-245px] h-[620px] w-[620px] rounded-full border border-accent2/[0.07]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute right-[270px] top-[124px] hidden h-[154px] w-[220px] opacity-50 lg:block"
      style="background-image: radial-gradient(circle, rgb(29 78 216 / 18%) 1px, transparent 1px); background-size: 22px 22px;"
      aria-hidden="true"
    ></div>

    <section class="relative z-[1] mx-auto grid min-h-[690px] w-[min(1120px,calc(100%_-_48px))] grid-cols-1 items-center gap-12 py-[58px] pt-[76px] text-center lg:w-[min(1400px,calc(100%_-_48px))] lg:grid-cols-[0.65fr_1.35fr] lg:text-left">
      <div>
        <div class="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent2/20 bg-accent-pale px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-accent before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold before:content-['']">
          Vue 3 Clinical Workflow Case Study
        </div>

        <h1 class="max-w-[760px] font-display text-[46px] font-black leading-[0.96] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:text-[86px]">
          Pharmatrial clinical trial <em class="text-accent">portal.</em>
        </h1>

        <p class="mt-7 max-w-[600px] text-[18px] font-light leading-[1.72] text-ink3">
          A privacy-aware Vue and TypeScript proof of concept modeling blinded collaboration between Jane Hopkins Hospital, Bavaria Pharma, and FDA Administration across approvals, enrollment, dose tracking, treatment assignment, disclosure, and reporting.
        </p>

        <div class="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a
            class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-[22px] text-sm font-semibold text-white no-underline transition-colors hover:bg-accent"
            href="#product"
          >
            View demo
          </a>

          <a
            class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-[22px] text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2"
            href="#narrative"
          >
            See project narrative
          </a>
        </div>
      </div>

      <aside class="relative lg:-mr-12">
        <div class="mb-4 flex flex-wrap justify-center gap-2" aria-label="Technology stack used">
          <span
            v-for="item in techStack"
            :key="item"
            class="rounded-full border border-accent2/15 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-ink3 shadow-[0_3px_12px_rgb(13_17_23_/_5%)]"
          >
            {{ item }}
          </span>
        </div>

        <ProjectScreenshotLightbox
          :src="bavariaDashboardScreenshot"
          alt="Bavaria Admin dashboard screenshot from the Pharmatrial clinical trial portal"
          title="Bavaria Admin Dashboard"
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

      <div class="relative mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">
          By the numbers
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4">
          <div
            v-for="stat in projectNumbers"
            :key="stat.value"
            class="min-h-40 border-white/[0.08] py-8 md:border-r md:px-8 last:border-r-0"
          >
            <strong class="block font-display text-[54px] font-black leading-none tracking-normal text-white">
              {{ stat.value }}
            </strong>

            <p class="mt-2.5 max-w-[190px] text-[13px] font-light leading-[1.45] text-white/45">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="product" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div id="narrative" class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
              Project Narrative
            </div>

            <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[48px]">
              A front-end simulation of a blinded clinical trial lifecycle.
            </h2>
          </div>

          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            Pharmatrial is a single-page proof of concept for controlled data exchange among a hospital, a pharmaceutical sponsor, and a regulator. The product question is not just how to display trial data, but how to keep each user inside the right workflow and privacy boundary.
          </p>
        </header>

        <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3" aria-label="Project partner roles">
          <article
            v-for="role in partnerRoles"
            :key="role.name"
            class="grid min-h-[106px] grid-cols-[64px_1fr] items-center gap-4 rounded-[14px] border border-border bg-white p-[18px] shadow-[0_4px_24px_rgb(13_17_23_/_7%)]"
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
            class="rounded-[14px] border border-border bg-white p-6 shadow-[0_4px_24px_rgb(13_17_23_/_7%)]"
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

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
            Program Screens
          </div>

          <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[48px]">
            The prototype screens show each stakeholder workflow in context.
          </h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          These screenshots make the product artifact visible beyond the static hero mockup: login, hospital approval, FDA assignment, sponsor batch submission, and post-disclosure reporting.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article
          v-for="(screen, index) in programScreenshots"
          :key="screen.title"
          class="overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_4px_24px_rgb(13_17_23_/_7%)]"
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

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
            Implementation Story
          </div>

          <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[48px]">
            The source code models product rules as state, tabs, and guarded actions.
          </h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The app is intentionally front-end only: seeded TypeScript modules and Pinia stores simulate the trial database, while Vue components and composables translate role, trial status, and privacy state into visible workspace behavior.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-[0.92fr_1.08fr]">
        <article class="rounded-[14px] border border-border bg-white p-7 shadow-[0_4px_24px_rgb(13_17_23_/_7%)]">
          <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">
            What this demonstrates
          </h3>

          <p class="m-0 text-[13px] leading-[1.6] text-ink3">
            A mature front-end structure with typed stores, composables, reusable forms, modal orchestration, role-specific tabs, patient privacy helpers, and workflow-specific trial components.
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

        <article class="rounded-[14px] border border-border bg-white p-7 shadow-[0_4px_24px_rgb(13_17_23_/_7%)]">
          <h3 class="mb-2 text-[15px] font-bold tracking-normal text-ink">
            Implemented workflow actions
          </h3>

          <p class="m-0 text-[13px] leading-[1.6] text-ink3">
            `trials.store.ts` and the workflow composables control approval, rejection, batch submission, assignment locking, appointment logging, FDA notification, final disclosure, archive toggling, and rejected-trial deletion.
          </p>

          <div class="mt-[18px] flex flex-wrap gap-2">
            <span
              v-for="item in techStack"
              :key="item"
              class="rounded-md border border-border bg-cream2 px-[9px] py-[5px] text-[12px] text-ink3"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <section id="api" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
              Source Findings
            </div>

            <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[48px]">
              The strongest product signal is the role-and-state guardrail system.
            </h2>
          </div>

          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The docs define Pharmatrial as a front-end proof of concept, not a production clinical system. Its value is the way it demonstrates workflow sequencing, patient privacy boundaries, blinded assignment, and role-specific action availability with seeded data.
          </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article
            v-for="card in apiCards"
            :key="card.title"
            class="rounded-[14px] border border-border bg-white p-6 shadow-[0_4px_24px_rgb(13_17_23_/_7%)]"
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

    <section id="outputs" class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
            Implementation Output
          </div>

          <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[48px]">
            The codebase has enough structure to read as a real product system.
          </h2>
        </div>

        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
          The source tree separates views, router metadata, stores, composables, typed models, seed data, privacy utilities, and reusable components. That makes the project stronger as an engineering case study than as a pure visual mockup.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article
          v-for="card in outputCards"
          :key="card.title"
          class="rounded-[14px] border border-border bg-white p-6 shadow-[0_4px_24px_rgb(13_17_23_/_7%)]"
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
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
              Project Artifacts
            </div>

            <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[48px]">
              Reviewers can trace the product from docs to implementation.
            </h2>
          </div>

          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
            The project includes role guides, architecture notes, a data dictionary, seeded TypeScript data, reusable Vue components, and a static requirements document that explains the original course scope.
          </p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article
            v-for="card in validationCards"
            :key="card.title"
            class="rounded-[14px] border border-border bg-white p-6 shadow-[0_4px_24px_rgb(13_17_23_/_7%)]"
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
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <div class="relative overflow-hidden rounded-2xl bg-ink p-8 text-white md:p-11">
        <div
          class="pointer-events-none absolute right-[-170px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]"
          aria-hidden="true"
        ></div>

        <div class="relative z-[1] mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/65 before:h-0.5 before:w-[26px] before:bg-white/65 before:content-['']">
          Final Conclusions
        </div>

        <h2 class="relative z-[1] max-w-[760px] font-display text-[34px] font-bold leading-[1.06] tracking-normal text-white md:text-[48px]">
          Pharmatrial succeeds as a front-end systems prototype for regulated collaboration.
        </h2>
        
        <p class="relative mt-10 z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
          The project demonstrates how a front end can encode trial lifecycle state, partner-specific permissions, patient privacy, blinded assignment, dose completion, and disclosure timing in a workspace that different stakeholders can navigate without seeing the same data.
        </p>
        <p class="relative mt-10 z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">
          The current implementation is intentionally a browser-side proof of concept using seeded TypeScript data and Pinia state. Its next production step would be a backend API with server-side RBAC, encrypted PII storage, durable audit logs, database persistence, soft deletion, and compliance review. As a portfolio artifact, the recommendation is to lead with the source-backed workflow story: four portals, eight seeded trials, twenty-six synthetic patients, sixty-eight Vue components, and a clear privacy model that separates clinical care from regulatory and sponsor visibility.
        </p>
      </div>
    </section>

  </main>
</template>
