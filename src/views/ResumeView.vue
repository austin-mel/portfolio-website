<script setup lang="ts">
import resumePdf from '@/assets/austin-melendez-resume.pdf';
import cvPdf from '@/assets/austin-melendez-cv.pdf';

interface ResumeRole {
  organization: string;
  title: string;
  date: string;
  bullets: string[];
}

interface LeadershipRole {
  title: string;
  date: string;
}

interface SkillGroup {
  name: string;
  skills: string[];
  highlightCount?: number;
}

const contacts = [
  { label: 'Email', value: 'austin.mel@mail.com' },
  { label: 'Website', value: 'www.austinmelendez.com' },
  { label: 'LinkedIn', value: 'austin-melendez' },
  { label: 'Personal GitHub', value: 'austin-mel' },
  { label: 'Educational GitHub', value: 'austin-mel-edu' },
];

const education = {
  school: 'California State University, Sacramento',
  date: 'Aug 2021 - May 2026',
  degree: 'B.S. Computer Science and Statistics',
  courses: [
    'Database Management Systems',
    'Software Engineering',
    'Intelligent Systems',
    'Analyzing and Processing Big Data',
    'Parallel Programming with GPUs',
    'Data Visualization',
    'Data Mining for Business Analytics',
  ],
};

const skillGroups: SkillGroup[] = [
  {
    name: 'Programming',
    skills: ['Python', 'R', 'C'],
    highlightCount: 3,
  },
  {
    name: 'Data',
    skills: ['Tableau', 'SQL'],
    highlightCount: 2,
  },
  {
    name: 'Tools',
    skills: ['Git', 'Jira'],
    highlightCount: 2,
  },
  {
    name: 'Software Development',
    skills: ['Agile/Scrum', 'Debugging', 'Testing', 'Technical Documentation'],
    highlightCount: 2,
  },
];

const industryProjects: ResumeRole[] = [
  {
    organization: 'WCP Solutions',
    title: 'Client Relationship Management Platform',
    date: 'Aug 2024 - May 2025',
    bullets: [
      'Developed an internal web application for WCP Solutions\' sales teams to manage client relationships and streamline daily workflows.',
      'Built searchable client tables, geographic mapping, route directions, contact integration, and customer note-tracking functionality.',
      'Collaborated on an eight-person development team using Agile practices, biweekly sprints, Git, and Jira.',
      'Tested and refined application functionality based on stakeholder requirements and user workflows by maintaining regular meetings with company stakeholders and faculty advisors.',
    ],
  },
  {
    organization: 'Thermochron Systems LLC',
    title: 'Mass Spectrometer Baseline Noise Analysis',
    date: 'Feb 2026 - May 2026',
    bullets: [
      'Modeled 492,000+ instrument measurements across 6 dwell-time settings and 3 independent lab locations.',
      'Built cleaned long-format datasets from raw instrument files using Python.',
      'Quantified dwell-time effects using summary statistics, log-scale diagnostics, and visual analysis.',
      'Evaluated noise distribution fit using KDE, Q-Q plots, and log-scale statistical modeling.',
      'Delivered client-facing findings and conclusions to support baseline correction strategy.',
    ],
  },
  {
    organization: 'CSUS Department of Biological Sciences',
    title: 'SciComm Empathy Survey Analysis',
    date: 'Feb 2026 - May 2026',
    bullets: [
      'Analyzed whether scientific communication training improved empathy scores in a pre/post survey study.',
      'Analyzed matched pre/post survey data from 222 participants using R.',
      'Tested intervention effects using Welch\'s and paired t-tests, mixed ANOVA, and ANCOVA.',
      'Interpreted pre/post improvement results and identified no significant Intervention vs. Control effect.',
      'Communicated statistical methods, assumptions, limitations, and findings using client-facing written reports.',
    ],
  },
];

const professionalExperience: ResumeRole[] = [
  {
    organization: 'Flawless Boxing and Fitness',
    title: 'Youth Afterschool Program Coordinator',
    date: 'Oct 2024 - Current',
    bullets: [
      'Manage group instruction, behavioral expectations, and daily program flow in high-energy youth environments.',
      'Manage program procedures, safety requirements, and day-to-day operational issues.',
      'Lead structured programming focused on skill-building, discipline, and confidence while maintaining organization, accountability, and effective communication with multiple sites across 3 districts.',
    ],
  },
];

const experienceSections = [
  { title: 'Industry Project Experience', roles: industryProjects },
  { title: 'Professional Experience', roles: professionalExperience },
];

const leadership: LeadershipRole[] = [
  {
    title: 'Sacramento State Boxing President',
    date: 'Aug 2025 - May 2026',
  },
  {
    title: 'Sacramento State Boxing Vice President & Treasurer',
    date: 'Jan 2025 - Aug 2025',
  },
];

const leadershipBullets = [
  'Led club operations, team coordination, organizational planning, and member communication.',
  'Managed budget tracking, funding requirements, and financial planning for team operations.',
  '2026 National Collegiate Boxing Association Western Regional Champion Men’s 195lbs',
  '2026 National Collegiate Boxing Association National Championship Bronze 195lbs',
  '2026 National Collegiate Boxing Association All-American Boxer',
  '2025 National Collegiate Boxing Association Western Regional Champion Men’s 195lbs',
];
</script>

<template>
  <main class="min-h-screen bg-cream pt-[75px]">
    <section class="px-4 py-12 xs:px-6 md:px-12 md:py-16">
      <div class="mx-auto max-w-[860px]">
        <header class="mb-12 flex flex-col gap-5 border-b-2 border-ink pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 class="font-display text-[42px] font-black leading-none tracking-normal text-ink">
              Austin Meléndez
            </h1>
            <p class="mt-2 text-[15px] font-light text-ink3">
              Computer Science & Statistics Graduate
            </p>
          </div>

          <div class="flex shrink-0 flex-wrap gap-3">
            <a
              :href="resumePdf"
              download="austin-melendez-resume.pdf"
              class="inline-flex w-fit items-center rounded-[8px] bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent"
            >
              Download Resume
            </a>
            <a
              :href="cvPdf"
              download="austin-melendez-cv.pdf"
              class="inline-flex w-fit items-center rounded-[8px] bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent"
            >
              Download CV
            </a>
          </div>
        </header>

        <div class="grid gap-12 lg:grid-cols-[1fr_260px]">
          <div>
            <section
              v-for="section in experienceSections"
              :key="section.title"
              class="mb-10"
            >
              <h2 class="mb-5 border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[2px] text-accent">
                {{ section.title }}
              </h2>

              <article
                v-for="role in section.roles"
                :key="`${role.organization}-${role.title}`"
                class="mb-7 last:mb-0"
              >
                <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 class="font-display text-[16px] font-bold leading-snug tracking-normal text-ink">
                      {{ role.title }}
                    </h3>
                    <p class="mt-0.5 text-[12px] text-accent">
                      {{ role.organization }}
                    </p>
                  </div>
                  <span class="w-fit shrink-0 rounded-full border border-border bg-cream2 px-2.5 py-[3px] font-mono text-[11px] text-ink4">
                    {{ role.date }}
                  </span>
                </div>

                <ul class="mt-2 space-y-1.5">
                  <li
                    v-for="bullet in role.bullets"
                    :key="bullet"
                    class="relative pl-3.5 text-[12px] font-light leading-[1.75] text-ink3 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </article>
            </section>

            <section>
              <h2 class="mb-5 border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[2px] text-accent">
                Leadership
              </h2>

              <article
                v-for="role in leadership"
                :key="role.title"
                class="mb-4"
              >
                <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="font-display text-[16px] font-bold leading-snug tracking-normal text-ink">
                    {{ role.title }}
                  </h3>
                  <span class="w-fit shrink-0 rounded-full border border-border bg-cream2 px-2.5 py-[3px] font-mono text-[11px] text-ink4">
                    {{ role.date }}
                  </span>
                </div>
              </article>

              <ul class="mt-2 space-y-1.5">
                <li
                  v-for="bullet in leadershipBullets"
                  :key="bullet"
                  class="relative pl-3.5 text-[12px] font-light leading-[1.75] text-ink3 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
                >
                  {{ bullet }}
                </li>
              </ul>
            </section>
          </div>

          <aside>
            <section class="mb-10">
              <h2 class="mb-5 border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[2px] text-accent">
                Contact
              </h2>

              <dl class="space-y-3">
                <div
                  v-for="contact in contacts"
                  :key="contact.label"
                >
                  <dt class="font-mono text-[10px] uppercase tracking-[1px] text-ink4">
                    {{ contact.label }}
                  </dt>
                  <dd class="break-words text-[12px] leading-6 text-ink3">
                    {{ contact.value }}
                  </dd>
                </div>
              </dl>
            </section>

            <section class="mb-10">
              <h2 class="mb-5 border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[2px] text-accent">
                Education
              </h2>

              <div class="rounded-[8px] border border-border bg-cream2 p-5">
                <div class="font-display text-[15px] font-bold leading-snug tracking-normal text-ink">
                  {{ education.degree }}
                </div>
                <div class="mt-2 text-[12px] leading-5 text-ink3">
                  {{ education.school }}
                </div>
                <div class="mt-1 font-mono text-[11px] text-ink4">
                  {{ education.date }}
                </div>
              </div>

              <div class="mt-5">
                <h3 class="mb-2 font-mono text-[10px] font-bold uppercase tracking-[1px] text-ink4">
                  Relevant Courses
                </h3>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="course in education.courses"
                    :key="course"
                    class="rounded-[5px] border border-border bg-cream2 px-2.5 py-[3px] text-[11px] leading-5 text-ink3"
                  >
                    {{ course }}
                  </span>
                </div>
              </div>
            </section>

            <section>
              <h2 class="mb-5 border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[2px] text-accent">
                Technical Skills
              </h2>

              <div
                v-for="group in skillGroups"
                :key="group.name"
                class="mb-5 last:mb-0"
              >
                <h3 class="mb-2 font-mono text-[10px] font-bold uppercase tracking-[1px] text-ink4">
                  {{ group.name }}
                </h3>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="(skill, index) in group.skills"
                    :key="skill"
                    class="rounded-[5px] border px-2.5 py-[3px] text-[11px] leading-5"
                    :class="index < (group.highlightCount ?? 0)
                      ? 'border-accent2/20 bg-accent-pale text-accent'
                      : 'border-border bg-cream2 text-ink3'"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
