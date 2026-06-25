<script setup lang="ts">
interface ResumeRole {
  organization: string;
  title: string;
  date: string;
  bullets: string[];
}

interface LeadershipRole {
  title: string;
  date: string;
  bullets: string[];
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
  { label: 'GitHub', value: 'austin-mel' },
];

const education = {
  school: 'California State University, Sacramento',
  date: 'Aug 2021 - May 2026',
  degree: 'B.S. Computer Science and Statistics',
  courses: [
    'Intelligent Systems',
    'Database Management Systems',
    'Analyzing and Processing Big Data',
    'Data Visualization',
    'Statistical Computing in R',
    'Data Mining for Business Analytics',
    'Parallel Programming with GPUs',
    'Linear Models and Statistical Learning',
  ],
};

const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    skills: ['R', 'Python', 'SQL', 'Java', 'C'],
    highlightCount: 3,
  },
  {
    name: 'Data Analysis',
    skills: ['Tableau', 'Jupyter Notebook', 'Pandas', 'Matplotlib', 'ggplot'],
    highlightCount: 3,
  },
  {
    name: 'Other Libraries',
    skills: ['TensorFlow', 'scikit-learn', 'NLTK', 'NumPy', 'Keras', 'Vue.js', 'React.js'],
    highlightCount: 2,
  },
  {
    name: 'Tools',
    skills: ['Git', 'Figma', 'Canva', 'Jira', 'MS Office'],
    highlightCount: 2,
  },
];

const experience: ResumeRole[] = [
  {
    organization: 'Flawless Boxing and Fitness',
    title: 'Youth Afterschool Program Coordinator',
    date: 'Oct 2024 - Current',
    bullets: [
      'Lead youth boxing and fitness programming focused on structure, safety, mentorship, and personal development.',
      'Coordinate multi-site afterschool programs supporting youth ages 8-16.',
      'Design and lead structured boxing and fitness sessions focused on skill-building, discipline, and confidence.',
      'Manage group instruction, behavioral expectations, and daily program flow in high-energy youth environments.',
      'Promote teamwork, emotional regulation, accountability, and goal-setting through coaching and mentorship.',
      'Maintain safety standards, program compliance, and positive communication with youth, families, and staff.',
    ],
  },
  {
    organization: 'Thermochron Systems LLC',
    title: 'Statistical Consultant',
    date: 'Feb 2026 - May 2026',
    bullets: [
      'Modeled baseline noise in mass spectrometer measurements to support more accurate experimental signal correction.',
      'Modeled 492,000+ instrument measurements across 6 dwell-time settings and 3 independent lab locations.',
      'Built cleaned long-format datasets from raw instrument files using Python.',
      'Quantified dwell-time effects using summary statistics, log-scale diagnostics, and visual analysis.',
      'Evaluated noise distribution fit using KDE, Q-Q plots, and log-scale statistical modeling.',
      'Delivered client-facing findings and conclusions to support baseline correction strategy.',
    ],
  },
  {
    organization: 'CSUS Department of Biological Sciences',
    title: 'Statistical Consultant',
    date: 'Feb 2026 - May 2026',
    bullets: [
      'Analyzed whether scientific communication training improved empathy scores in a pre/post survey study.',
      'Analyzed matched pre/post survey data from 222 participants using R.',
      'Tested intervention effects using paired t-tests, Welch\'s t-tests, change-score models, mixed ANOVA, and ANCOVA.',
      'Interpreted pre/post improvement results and identified no significant Intervention vs. Control effect.',
      'Created histograms, Likert plots, alluvial plots, and summary tables for client-facing written reports.',
      'Communicated statistical methods, assumptions, limitations, and findings to a biology research client.',
    ],
  },
];

const leadership: LeadershipRole[] = [
  {
    title: 'Sacramento State Boxing President',
    date: 'Aug 2025 - May 2026',
    bullets: [
      'Led club operations, team coordination, and initial program development for Sacramento State Boxing.',
      'Coordinated events, competition travel, fundraising efforts, merchandise sales, and administrative requirements.',
      'Represented the club in communication with university staff, team members, and external partners.',
    ],
  },
  {
    title: 'Sacramento State Boxing Vice President and Treasurer',
    date: 'Jan 2025 - Aug 2025',
    bullets: [
      'Supported club operations, organization, and member engagement during the program\'s establishment.',
      'Managed club budget tracking, funding needs, and financial planning for team operations.',
    ],
  },
];
</script>

<template>
  <main class="min-h-screen bg-cream pt-[75px]">
    <section class="px-4 py-12 xs:px-6 md:px-12 md:py-16">
      <div class="mx-auto max-w-[860px]">
        <header class="mb-12 flex flex-col gap-5 border-b-2 border-ink pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div class="font-display text-[42px] font-black leading-none tracking-normal text-ink">
              Austin Meléndez
            </div>
            <p class="mt-2 text-[15px] font-light text-ink3">
              Computer Science & Statistics Graduate
            </p>
          </div>

          <button
            type="button"
            class="inline-flex w-fit items-center rounded-[8px] bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent"
          >
            Download PDF
          </button>
        </header>

        <div class="grid gap-12 lg:grid-cols-[1fr_260px]">
          <div>
            <section class="mb-10">
              <h2 class="mb-5 border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[2px] text-accent">
                Experience
              </h2>

              <article
                v-for="role in experience"
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
                class="mb-7 last:mb-0"
              >
                <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 class="font-display text-[16px] font-bold leading-snug tracking-normal text-ink">
                    {{ role.title }}
                  </h3>
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
                Key Skills
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
