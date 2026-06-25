<script setup lang="ts">
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import jeffersonLinesFigure from '@/assets/projects/scicomm/eda-jefferson-paired-lines.png';
import torontoLinesFigure from '@/assets/projects/scicomm/eda-toronto-paired-lines.png';
import jeffersonChangeFigure from '@/assets/projects/scicomm/eda-jefferson-change-histograms.png';
import torontoChangeFigure from '@/assets/projects/scicomm/eda-toronto-change-histograms.png';
import jeffersonResidualsFigure from '@/assets/projects/scicomm/model-jefferson-change-residuals.png';
import torontoQqFigure from '@/assets/projects/scicomm/model-toronto-change-qq.png';
import jeffersonCeilingFigure from '@/assets/projects/scicomm/model-jefferson-ceiling-effect.png';
import torontoCeilingFigure from '@/assets/projects/scicomm/model-toronto-ceiling-effect.png';

const techStack = ['R', 'Regression', 'EDA', 'Survey Data', 'Model Diagnostics'];

const overviewStats = [
  ['222', 'matched students with exactly one Pre and one Post record'],
  ['2', 'empathy scales modeled separately: Jefferson and modified Toronto'],
  ['4', 'Condition x STEM cells used for interaction testing'],
];

const projectNumbers = [
  ['462', 'raw survey records loaded before client-defined exclusions'],
  ['444', 'retained long-format rows after removing flagged response patterns'],
  ['126 / 96', 'Control and Intervention participants in the matched dataset'],
  ['100 / 122', 'STEM and Non-STEM participants under the preserved classification rule'],
];

const workflowSteps = [
  [
    '01',
    'Clean Responses',
    'Load survey data, remove irrelevant columns, exclude flagged IDs, and standardize participant fields.',
  ],
  [
    '02',
    'Score Scales',
    'Convert Likert responses to numeric scores, reverse-code negatively worded items, and compute separate Jefferson and Toronto totals.',
  ],
  [
    '03',
    'Build Matched Data',
    'Align Pre and Post rows by participant, derive scale-specific change scores, and check stable condition and STEM labels.',
  ],
  [
    '04',
    'Model Change',
    'Fit paired tests, Welch tests, factorial change-score models, mixed ANOVA, ANCOVA, and ceiling-effect diagnostics.',
  ],
];

const exploratoryFigures = [
  {
    image: jeffersonLinesFigure,
    title: 'Jefferson Pre/Post paired change',
    body: 'The red mean lines rise in every panel, while individual gray lines show meaningful participant-to-participant variation.',
    alt: 'Jefferson Pre/Post paired change plot by condition and STEM',
  },
  {
    image: torontoLinesFigure,
    title: 'Toronto Pre/Post paired change',
    body: 'Toronto changes are smaller than Jefferson changes and should be interpreted on the Toronto scale only.',
    alt: 'Toronto Pre/Post paired change plot by condition and STEM',
  },
  {
    image: jeffersonChangeFigure,
    title: 'Jefferson change-score distributions',
    body: 'Most Jefferson changes are positive, but negative and large positive shifts remain visible.',
    alt: 'Jefferson change-score histograms by condition and STEM',
  },
  {
    image: torontoChangeFigure,
    title: 'Toronto change-score distributions',
    body: 'The smaller Toronto mean shift makes individual outliers more prominent in diagnostics.',
    alt: 'Toronto change-score histograms by condition and STEM',
  },
];

const modelingFigures = [
  {
    image: jeffersonResidualsFigure,
    title: 'Jefferson change residuals',
    body: 'Residual diagnostics show why the report pairs parametric tests with nonparametric sensitivity checks.',
    alt: 'Jefferson change model residuals versus fitted values',
  },
  {
    image: torontoQqFigure,
    title: 'Toronto change Q-Q plot',
    body: 'Tail departures are visible for Toronto change, reinforcing cautious interpretation of p-values.',
    alt: 'Toronto change model Q-Q plot',
  },
  {
    image: jeffersonCeilingFigure,
    title: 'Jefferson ceiling-effect model',
    body: 'Participants with higher baseline Jefferson scores tended to show smaller gains.',
    alt: 'Jefferson baseline score versus Jefferson change score',
  },
  {
    image: torontoCeilingFigure,
    title: 'Toronto ceiling-effect model',
    body: 'The negative slope is stronger for Toronto, where baseline and change correlate r=-0.302.',
    alt: 'Toronto baseline score versus Toronto change score',
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
          Science Communication Case Study
        </div>
        <h1 class="mx-auto max-w-[760px] font-display text-[46px] font-black leading-[0.95] tracking-normal text-ink xs:text-[56px] md:text-[72px] lg:mx-0 lg:text-[88px]">
          Testing whether empathy training changes <em class="text-accent">self-reported empathy.</em>
        </h1>
        <p class="mx-auto mt-7 max-w-[620px] text-[18px] font-light leading-[1.72] text-ink3 lg:mx-0">
          Statistics capstone project for CSUS Biological Sciences evaluating an empathy-focused science communication intervention using matched Pre/Post survey data, Control and Intervention arms, and separate Jefferson and Toronto empathy outcomes.
        </p>
        <div class="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] bg-ink px-[22px] text-sm font-semibold text-white no-underline transition-colors hover:bg-accent" href="#results">View model evidence</a>
          <a class="inline-flex min-h-[46px] items-center justify-center rounded-[10px] border border-border2 px-[22px] text-sm font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2" href="#workflow">Review design</a>
        </div>
      </div>

      <aside class="relative" aria-label="Science communication empathy project overview">
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
          <div class="mb-[18px] grid grid-cols-1 gap-3">
            <div v-for="stat in overviewStats" :key="stat[0]" class="rounded-[10px] border border-border bg-cream p-4">
              <strong class="mb-2 block font-display text-[28px] leading-none text-ink">{{ stat[0] }}</strong>
              <span class="text-[13px] leading-[1.55] text-ink3">{{ stat[1] }}</span>
            </div>
          </div>
          <div class="rounded-[10px] bg-accent p-[18px] text-white">
            <div class="mb-2 text-[10px] font-bold uppercase tracking-[1.4px] text-white/70">Final Takeaway</div>
            <strong class="block text-[22px] leading-tight tracking-normal">Empathy scores increased overall, but not specifically because of Intervention.</strong>
            <p class="mt-2.5 text-[13px] leading-[1.6] text-white/75">The strongest finding is Pre-to-Post improvement on both scales. Intervention, STEM status, and the Condition x STEM interaction were not statistically significant in the primary models.</p>
          </div>
        </div>
      </aside>
    </section>

    <section class="relative overflow-hidden bg-ink py-24 text-white" aria-label="Cleaned analysis dataset">
      <div class="pointer-events-none absolute right-[-40px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-white/[0.04]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute right-[-140px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/[0.03]" aria-hidden="true"></div>
      <div class="relative mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <div class="mb-11 text-[10px] font-bold uppercase tracking-[2px] text-white/35">Cleaned Analysis Dataset</div>
        <div class="grid grid-cols-1 md:grid-cols-4">
          <div v-for="(stat, index) in projectNumbers" :key="stat[0]" class="min-h-40 border-white/[0.08] py-8 md:border-r md:px-8" :class="{ 'md:border-r-0': index === projectNumbers.length - 1, 'border-b md:border-b-0': index !== projectNumbers.length - 1 }">
            <strong class="block font-display text-[54px] font-black leading-none tracking-normal text-white">{{ stat[0] }}</strong>
            <p class="mt-2.5 max-w-[210px] text-[13px] font-light leading-[1.45] text-white/45">{{ stat[1] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="workflow" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Project Narrative</div>
            <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The project turns raw survey answers into a controlled test of empathy change.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The analysis moves from paired pre/post responses into exploratory plots, change-score summaries, regression models, and diagnostic checks while keeping Jefferson and Toronto as separate outcomes.</p>
        </header>

        <div class="mb-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Object of study</div>
            <strong class="block text-[15px] text-ink">Self-reported empathy before and after training</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">Each respondent contributes matched Pre/Post evidence used to test whether empathy changed over time.</p>
          </article>
          <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Measurement boundary</div>
            <strong class="block text-[15px] text-ink">Jefferson and Toronto scales are not interchangeable.</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">The instruments capture related but distinct empathy constructs and are modeled separately.</p>
          </article>
          <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Interpretation</div>
            <strong class="block text-[15px] text-ink">Change over time differs from intervention advantage.</strong>
            <p class="mt-2 text-[13px] leading-[1.55] text-ink3">A broad pre/post increase does not by itself prove the intervention outperformed the comparison group.</p>
          </article>
        </div>

        <div class="grid grid-cols-1 gap-3 md:grid-cols-4">
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
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Measurement Problem</div>
          <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">Empathy is measured twice, but the scales are not interchangeable.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The report treats empathy as a scored survey construct rather than a directly observed behavior. Measurement discipline comes first: score each instrument correctly, preserve the matched design, and avoid comparing Jefferson and Toronto totals as if they shared one unit.</p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="font-mono text-[11px] uppercase text-ink4">Pre/Post logic</div>
          <strong class="mt-4 block text-[15px] text-ink">Participant change is the outcome.</strong>
          <code class="my-3 block rounded-[10px] bg-cream px-4 py-4 font-mono text-[13px] leading-[1.6] text-accent">change score = Post total - Pre total</code>
          <p class="m-0 text-[13px] leading-[1.6] text-ink3">Positive values mean a participant reported higher empathy after the course activity than before it.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="font-mono text-[11px] uppercase text-ink4">Training-effect logic</div>
          <strong class="mt-4 block text-[15px] text-ink">Intervention must beat the counterfactual.</strong>
          <code class="my-3 block rounded-[10px] bg-cream px-4 py-4 font-mono text-[13px] leading-[1.6] text-accent">training effect = Intervention change - Control change</code>
          <p class="m-0 text-[13px] leading-[1.6] text-ink3">Overall improvement is not enough. The Control arm separates intervention-specific change from general time, familiarity, or course effects.</p>
        </article>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article class="rounded-[12px] border border-border bg-white p-6">
          <h3 class="text-[15px] font-bold text-ink">Jefferson Scale of Empathy</h3>
          <div class="mt-[18px] grid gap-3">
            <div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Items</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">J1-J14</span></div>
            <div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Range</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">14-98 points</span></div>
            <div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Interpretation</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">Higher total means greater self-reported empathy.</span></div>
          </div>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-6">
          <h3 class="text-[15px] font-bold text-ink">Modified Toronto Empathy Questionnaire</h3>
          <div class="mt-[18px] grid gap-3">
            <div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Items</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">T1-T16</span></div>
            <div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Range</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">0-64 points</span></div>
            <div class="rounded-[10px] bg-cream p-4"><strong class="block text-sm text-ink">Interpretation</strong><span class="mt-1 block text-xs leading-[1.55] text-ink3">Study-specific adapted TEQ, analyzed separately from Jefferson.</span></div>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Exploratory Findings</div>
          <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The EDA shows broad improvement, high baseline scores, and modest group separation.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">Exploratory analysis used 444 cleaned survey rows and 222 matched change-score records. Average empathy scores increased from Pre to Post in all four Condition x STEM groups on both scales, but the visual summaries do not show a large or consistent Intervention advantage.</p>
      </header>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Group score summaries</h3><span class="font-mono text-[11px] text-ink4">Mean totals</span></div>
          <div class="grid gap-3">
            <div v-for="row in [['Pre Control/STEM','Jefferson 76.06, Toronto 47.66'],['Post Control/STEM','Jefferson 82.60, Toronto 49.47'],['Pre Control/Non-STEM','Jefferson 74.90, Toronto 47.24'],['Post Control/Non-STEM','Jefferson 79.84, Toronto 48.52'],['Pre Intervention/STEM','Jefferson 75.60, Toronto 48.17'],['Post Intervention/STEM','Jefferson 82.42, Toronto 49.26'],['Pre Intervention/Non-STEM','Jefferson 77.21, Toronto 48.93'],['Post Intervention/Non-STEM','Jefferson 83.37, Toronto 50.00']]" :key="row[0]" class="rounded-[10px] bg-cream p-4">
              <strong class="block text-sm text-ink">{{ row[0] }}</strong>
              <span class="mt-1 block text-xs leading-[1.55] text-ink3">{{ row[1] }}</span>
            </div>
          </div>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-6">
          <div class="mb-4 flex items-baseline justify-between gap-4"><h3 class="text-[15px] font-bold text-ink">Change-score summaries</h3><span class="font-mono text-[11px] text-ink4">Post minus Pre</span></div>
          <div class="grid gap-3">
            <div v-for="row in [['Control/STEM','J +6.53, T +1.81'],['Control/Non-STEM','J +4.94, T +1.28'],['Intervention/STEM','J +6.81, T +1.09'],['Intervention/Non-STEM','J +6.16, T +1.07'],['Overall','J +5.96, T +1.31']]" :key="row[0]" class="rounded-[10px] bg-cream p-4">
              <strong class="block text-sm text-ink">{{ row[0] }}</strong>
              <span class="mt-1 block text-xs leading-[1.55] text-ink3">{{ row[1] }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Notebook exploratory figures">
        <article v-for="figure in exploratoryFigures" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Notebook figure</div>
          <strong class="block text-[15px] text-ink">{{ figure.title }}</strong>
          <ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Exploratory notebook figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" />
          <p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p>
        </article>
      </div>

      <div class="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Baseline STEM comparison</div>
          <strong class="block text-[15px] text-ink">Baseline empathy was almost identical across STEM status.</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">At Pre, STEM averaged 75.82 on Jefferson and 47.93 on Toronto; Non-STEM averaged 75.71 and 47.84.</p>
        </article>
        <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Assumption checks</div>
          <strong class="block text-[15px] text-ink">Diagnostics support robust interpretation, not blind normal theory.</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">Residual normality checks were significant for change and baseline models, while Levene tests suggested approximately equal variances.</p>
        </article>
        <article class="min-h-[168px] rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Ceiling effects</div>
          <strong class="block text-[15px] text-ink">High baseline scores left less room to improve.</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">Baseline score was negatively related to change: r=-0.236 for Jefferson and r=-0.302 for Toronto.</p>
        </article>
      </div>
    </section>

    <section id="results" class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
          <div>
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Modeling Output</div>
            <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The formal models confirm improvement over time, but not a clear intervention-specific effect.</h2>
          </div>
          <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The modeling notebook and final report evaluate the research questions using paired tests, Welch tests, factorial change-score models, mixed ANOVA, ANCOVA, nonparametric checks, and ceiling-effect models.</p>
        </header>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article class="rounded-[12px] border border-border bg-white p-6">
            <h3 class="text-[15px] font-bold text-ink">Primary paired change tests</h3>
            <div class="mt-[18px] grid grid-cols-1 gap-2.5 xs:grid-cols-2">
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">+5.96</strong><span class="text-[11px] leading-[1.35] text-ink3">Jefferson mean change, t(221)=-12.17, p&lt;.001, Cohen's d=0.817</span></div>
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">+1.31</strong><span class="text-[11px] leading-[1.35] text-ink3">Toronto mean change, t(221)=-4.55, p&lt;.001, Cohen's d=0.306</span></div>
            </div>
          </article>
          <article class="rounded-[12px] border border-border bg-white p-6">
            <h3 class="text-[15px] font-bold text-ink">Intervention vs Control change</h3>
            <div class="mt-[18px] grid grid-cols-1 gap-2.5 xs:grid-cols-2">
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">p=0.308</strong><span class="text-[11px] leading-[1.35] text-ink3">Jefferson: Intervention +6.52 vs Control +5.53</span></div>
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">p=0.489</strong><span class="text-[11px] leading-[1.35] text-ink3">Toronto: Intervention +1.08 vs Control +1.48</span></div>
            </div>
          </article>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article class="rounded-[12px] border border-green-800/30 bg-[#f4fbf7] p-5">
            <span class="inline-block rounded-full bg-[#e9f8ef] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#147a4d]">Primary model</span>
            <h3 class="mt-4 text-[15px] font-bold text-ink">Change-score interaction</h3>
            <p class="text-[13px] leading-[1.6] text-ink3">Tests whether Intervention-Control improvement differs by STEM status.</p>
            <div class="mt-[18px] grid grid-cols-1 gap-2.5 xs:grid-cols-2">
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">J p=0.639</strong><span class="text-[11px] text-ink3">Condition x STEM interaction, R2=0.012</span></div>
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">T p=0.670</strong><span class="text-[11px] text-ink3">Condition x STEM interaction, R2=0.004</span></div>
            </div>
          </article>
          <article class="rounded-[12px] border border-border bg-white p-5">
            <span class="inline-block rounded-full bg-accent-pale px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1px] text-accent">Companion model</span>
            <h3 class="mt-4 text-[15px] font-bold text-ink">Baseline-adjusted ANCOVA</h3>
            <p class="text-[13px] leading-[1.6] text-ink3">Models Post score while adjusting for each participant's Pre score.</p>
            <div class="mt-[18px] grid grid-cols-1 gap-2.5 xs:grid-cols-2">
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">J R2=0.539</strong><span class="text-[11px] text-ink3">Baseline coefficient 0.808; Condition not significant</span></div>
              <div class="rounded-lg bg-cream p-3"><strong class="block font-mono text-[17px] text-ink">T R2=0.563</strong><span class="text-[11px] text-ink3">Baseline coefficient 0.781; Condition not significant</span></div>
            </div>
          </article>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Notebook modeling diagnostics">
          <article v-for="figure in modelingFigures" :key="figure.title" class="rounded-[12px] border border-border bg-white p-[22px]">
            <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">Notebook diagnostic</div>
            <strong class="block text-[15px] text-ink">{{ figure.title }}</strong>
            <ProjectScreenshotLightbox :src="figure.image" :alt="figure.alt" :title="figure.title" type="Modeling notebook figure" trigger-class="group mt-3 block w-full overflow-hidden rounded-[10px] border border-border bg-white max-md:pointer-events-none max-md:cursor-default" image-class="transition-transform duration-200 group-hover:scale-[1.01]" />
            <p class="mb-0 mt-3 text-[13px] leading-[1.55] text-ink3">{{ figure.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto w-[min(1120px,calc(100%_-_48px))] py-[82px]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Deliverables</div>
          <h2 class="font-display text-[34px] font-bold leading-[1.06] text-ink md:text-[48px]">The project leaves a reproducible analysis path for future reviewers.</h2>
        </div>
        <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">The artifact set supports tracing the work from raw survey cleaning to figures, models, diagnostics, and a final written conclusion.</p>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article v-for="card in [['Notebook','01-preprocessing.ipynb','Scores Likert items, reverse-codes survey questions, standardizes majors, derives STEM and condition, and writes cleaned datasets.'],['Notebook','02-assumptions.ipynb','Produces numerical summaries, EDA figures, pairing checks, diagnostic plots, variance checks, and ceiling-effect plots.'],['Notebook','03-modeling.ipynb','Runs Welch tests, paired tests, change-score models, mixed ANOVA, ANCOVA, demographic checks, and model exports.'],['Cleaned data','survey_clean.csv','Long-format cleaned dataset with one row per participant per survey time, 444 rows total.'],['Cleaned data','matched_change.csv','One row per matched participant, including Pre totals, Post totals, and scale-specific change scores.'],['Report','SciComm Empathy Intervention Report.pdf','Full report documenting background, preprocessing, EDA, assumptions, modeling, conclusions, and recommendations.']]" :key="card[1]" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-[22px] font-mono text-[11px] uppercase text-ink4">{{ card[0] }}</div>
          <strong class="block text-[15px] text-ink">{{ card[1] }}</strong>
          <p class="mt-2 text-[13px] leading-[1.55] text-ink3">{{ card[2] }}</p>
        </article>
      </div>
    </section>

    <section class="bg-cream2 py-[82px]">
      <div class="mx-auto w-[min(1120px,calc(100%_-_48px))]">
        <div class="relative overflow-hidden rounded-[14px] bg-ink p-8 text-white md:p-11">
          <div class="pointer-events-none absolute right-[-170px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]" aria-hidden="true"></div>
          <div class="relative z-[1] mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-white/65 before:h-0.5 before:w-[26px] before:bg-white/65 before:content-['']">Final Conclusions</div>
          <h2 class="relative z-[1] max-w-[760px] font-display text-[34px] font-bold leading-[1.06] text-white md:text-[48px]">The evidence supports empathy growth over time, not a confirmed intervention advantage.</h2>
          <h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Final Project Conclusion</h3>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">In the matched sample of 222 students, self-reported empathy increased significantly from Pre to Post on both the Jefferson Scale of Empathy and the modified Toronto Empathy Questionnaire. Jefferson showed the larger within-person effect, but the two scales have different ranges and constructs, so their magnitudes should not be directly compared.</p>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">The Intervention group did not improve significantly more than the Control group, and STEM status did not explain baseline empathy, improvement, or the Intervention-Control difference in improvement. Baseline empathy was the strongest predictor of Post empathy in ANCOVA models, and ceiling-effect diagnostics suggest students who began with higher empathy had less room to improve.</p>
          <h3 class="relative z-[1] mt-[26px] text-[15px] font-bold text-white">Recommendations</h3>
          <p class="relative z-[1] max-w-[740px] text-base leading-[1.72] text-white/70">Report the study as evidence of overall Pre-to-Post empathy growth, not as causal proof that the empathy module outperformed the Control condition. Keep Jefferson and Toronto analyses separate, preserve the matched-participant design, and use Control comparisons as the standard for any training-effect claim.</p>
        </div>
      </div>
    </section>
  </main>
</template>
