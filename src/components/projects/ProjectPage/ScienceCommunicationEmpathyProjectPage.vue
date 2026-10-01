<script setup lang="ts">
import ProjectPdfReportModal from '@/components/projects/ProjectPage/ProjectPdfReportModal.vue';
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import clientReportPdf from '@/assets/projects/scicomm/Science Communication Empathy Client Report.pdf';
import technicalReportPdf from '@/assets/projects/scicomm/SciComm Empathy Technical Project Report.pdf';
import jeffersonChangesFigure from '@/assets/projects/scicomm/eda-jefferson-change-boxplots.png';
import torontoChangesFigure from '@/assets/projects/scicomm/eda-toronto-change-boxplots.png';
import jeffersonHistogramFigure from '@/assets/projects/scicomm/eda-jefferson-change-histograms.png';
import torontoHistogramFigure from '@/assets/projects/scicomm/eda-toronto-change-histograms.png';
import jeffersonStartingScoreFigure from '@/assets/projects/scicomm/model-jefferson-ceiling-effect.png';
import torontoStartingScoreFigure from '@/assets/projects/scicomm/model-toronto-ceiling-effect.png';
import jeffersonQqFigure from '@/assets/projects/scicomm/model-jefferson-change-qq.png';
import torontoQqFigure from '@/assets/projects/scicomm/model-toronto-change-qq.png';

const githubRepoUrl = 'https://github.com/austin-mel-edu/sacramento-state-university/tree/master/STAT192%20-%20Senior%20Capstone%20Project/Shelby%20C%20-%20CSUS%20Biological%20Sciences%20Dept';
const technicalReportTitle = 'SciComm Empathy Technical Project Report — May 19, 2026';

const keyFindings = [
  {
    title: 'Average scores rose on both surveys.',
    body: 'Across all students, the Jefferson score increased by 5.96 points and the modified Toronto score by 1.31 points. These are different scales, and the averages do not mean that every student improved.',
  },
  {
    title: 'The added benefit of training remains uncertain.',
    body: 'Both groups improved. The differences between their average gains did not establish an added training benefit. This does not prove that the training has no effect.',
  },
  {
    title: 'Students started in different places.',
    body: 'Students with higher starting scores tended to show smaller gains. Accounting for those starting scores still did not establish an added training benefit.',
  },
];

// Client report p. 6, technical report §2.6, and the three R notebooks.
const workflowSteps = [
  {
    number: '01',
    title: 'Prepare the survey responses',
    body: 'Remove irrelevant fields and exclude nine participants flagged by the client for uniform response patterns suspected to reflect low engagement.',
  },
  {
    number: '02',
    title: 'Score each questionnaire',
    body: 'Convert answers to points and reverse the scoring of negatively worded items. Add the items into a separate total for each questionnaire.',
  },
  {
    number: '03',
    title: 'Match before and after',
    body: 'Use anonymous identifiers to pair each student’s responses. Check that every retained student has one before and one after record, with consistent group labels.',
  },
  {
    number: '04',
    title: 'Compare the changes',
    body: 'Compare each student’s change over time, then compare average changes between groups. Check whether starting scores or academic-major categories change the interpretation.',
  },
];

// Client report p. 5. Values are rounded; differences were calculated before rounding.
const scoreSummaries = [
  { measure: 'Average before the study', jefferson: '75.76', toronto: '47.88', highlight: false },
  { measure: 'Average after the study', jefferson: '81.72', toronto: '49.18', highlight: false },
  { measure: 'Overall average change', jefferson: '+5.96', toronto: '+1.31', highlight: true },
  { measure: 'Average change in training', jefferson: '+6.52', toronto: '+1.08', highlight: false },
  { measure: 'Average change in the control group', jefferson: '+5.53', toronto: '+1.48', highlight: false },
  { measure: 'Difference in change: training minus control', jefferson: '+0.99', toronto: '−0.39', highlight: true },
  { measure: '95% confidence interval for that difference', jefferson: '−0.92 to +2.90', toronto: '−1.51 to +0.72', highlight: false },
];

// Unmodified change-score boxplots from 02-assumptions.ipynb, cell 12 (1-based).
const changeFigures = [
  {
    image: jeffersonChangesFigure,
    title: 'Jefferson scores rose and fell within both study groups and major categories.',
    alt: 'The Jefferson box plots show gains and declines in the control and training groups, with separate boxes for Biology or Biological Sciences and other majors.',
    body: 'Positive values mean a higher Jefferson score after the study, while negative values mean a lower score. Individual changes varied within each group, and a few students reported particularly large gains or declines.',
  },
  {
    image: torontoChangesFigure,
    title: 'Modified Toronto score changes overlapped across the training and control groups.',
    alt: 'The modified Toronto box plots show overlapping score changes in the control and training groups, with gains and declines in both major categories.',
    body: 'Both groups included students whose modified Toronto scores increased and students whose scores declined. These changes use the questionnaire’s own point scale and should be interpreted separately from Jefferson changes.',
  },
];

// Unmodified 02-assumptions.ipynb outputs: cells 9, 18, and 14 (1-based).
const diagnosticGroups = [
  {
    id: 'change-distributions-title',
    title: 'Average gains do not describe every student’s change.',
    introduction: 'Each bar counts students whose scores changed by a similar amount. Positive values show gains, while negative values show declines. Panels separate the control and training groups (labeled “Intervention”) and the project’s two major categories. Bar heights show counts of students, so differences in group size matter when comparing panels.',
    figures: [
      {
        image: jeffersonHistogramFigure,
        title: 'The Jefferson histograms show varied gains and declines within each subgroup.',
        alt: 'The Jefferson histograms show gains and declines across study groups and major categories, including an unusually large decline in the control group.',
        body: 'Jefferson changes vary within each subgroup. The spread and isolated large changes show why an average gain does not describe every student’s experience.',
      },
      {
        image: torontoHistogramFigure,
        title: 'The modified Toronto histograms show gains and declines across study and major groups.',
        alt: 'The modified Toronto histograms show observations on both sides of zero across study groups and major categories, with a few unusually large declines.',
        body: 'Modified Toronto changes also include both gains and declines. These use a different point scale from Jefferson and should be interpreted separately.',
      },
    ],
  },
  {
    id: 'starting-scores-title',
    title: 'Students with higher starting scores tended to show smaller gains.',
    introduction: 'Each point represents a student. The horizontal axis shows their starting score and the vertical axis shows their change. Colors distinguish study groups, shapes distinguish major categories, and the sloping lines summarize trends within those subgroups. The dashed line marks no change.',
    figures: [
      {
        image: jeffersonStartingScoreFigure,
        title: 'Higher Jefferson starting scores were associated with smaller gains.',
        alt: 'The Jefferson scatter plot shows downward trends between starting scores and changes across study and major groups, with substantial variation among students.',
        body: 'Students with higher Jefferson starting scores tended to have smaller gains. That pattern motivated a comparison that accounted for starting scores. It does not establish that the questionnaire’s upper limit caused the pattern.',
      },
      {
        image: torontoStartingScoreFigure,
        title: 'Higher modified Toronto starting scores were also associated with smaller gains.',
        alt: 'The modified Toronto scatter plot shows downward trends between starting scores and changes, with students reporting both gains and declines.',
        body: 'The same negative relationship appears for modified Toronto scores. Accounting for starting scores still did not establish an added training benefit, and this relationship alone does not prove a ceiling effect.',
      },
    ],
  },
  {
    id: 'model-checks-title',
    title: 'Q-Q plots reveal departures from the models’ normality assumption.',
    introduction: 'A residual is the difference between a student’s observed change and the change predicted by the model. These Q-Q plots compare ordered residuals with a bell-shaped normal reference. Points close to the diagonal support that assumption. Departures at the ends highlight unusually large differences.',
    figures: [
      {
        image: jeffersonQqFigure,
        title: 'The Jefferson Q-Q plot shows small departures from the normal reference at the extremes.',
        alt: 'The Jefferson Q-Q plot shows central model residuals following the normal reference line, with small departures in the tails and one particularly large negative residual.',
        body: 'The central values roughly follow the line, but the tails slightly depart, especially the largest negative residual. This supports checking how sensitive the results are to unusual changes. We found the departures are small enough that we can keep our normality assumption.',
      },
      {
        image: torontoQqFigure,
        title: 'The modified Toronto Q-Q plot shows small departures from the normal reference in both tails.',
        alt: 'The modified Toronto Q-Q plot shows model residuals slightly departing from the normal reference line in both tails.',
        body: 'Departures at both ends of the distribution could also indicate limits to the modified Toronto model’s normality assumption. This supports checking how sensitive the results are to unusual changes. We found the departures are small enough that we can keep our normality assumption.',
      },
    ],
  },
];

const analysisMethods = [
  { title: 'Within-student change', method: 'Paired t-tests', body: 'Compare each student’s before and after score to assess overall change. An overall increase alone does not establish a training effect.' },
  { title: 'Training versus control', method: 'Welch t-tests', body: 'Compare average change between the two groups without assuming equal variation. This addresses the added-training-benefit question directly.' },
  { title: 'Differences by major', method: 'Change-score regression', body: 'Check whether the training-versus-control difference varies between the project’s two major categories.' },
  { title: 'Account for starting scores', method: 'Baseline-adjusted models (ANCOVA)', body: 'Compare after scores while accounting for before scores and group membership. These checks still did not establish an added training benefit.' },
];

// Client report pp. 5–6; retain the meaning of nonsignificant results as uncertainty, not equivalence.
const statisticalChecks = [
  { comparison: 'Overall before-and-after change', jefferson: '< 0.001', toronto: '< 0.001' },
  { comparison: 'Training versus control: average change', jefferson: '0.308', toronto: '0.489' },
  { comparison: 'Major groups: starting scores', jefferson: '0.933', toronto: '0.907' },
  { comparison: 'Major groups: average change', jefferson: '0.176', toronto: '0.697' },
  { comparison: 'Training difference varies by major', jefferson: '0.639', toronto: '0.670' },
  { comparison: 'Training difference varies by major, adjusted for starting scores', jefferson: '0.452', toronto: '0.501' },
];

const limitations = [
  {
    title: 'Participation differed across classes',
    body: 'Some instructors required the program; others offered extra credit. Motivation, teaching, and course context could contribute to the changes, so the study does not establish that training alone caused them.',
  },
  {
    title: 'Survey scores do not directly measure communication',
    body: 'The outcomes describe self-reported empathy. They do not demonstrate better communication with an audience or lasting change. The adapted Toronto questionnaire also needs checks that it consistently measures the intended qualities.',
  },
  {
    title: 'The comparison has a specific scope',
    body: 'Students came from undergraduate Biological Sciences course sections. The major categories were Biology or Biological Sciences versus all other majors. Analyses treated students as independent and did not directly model shared classroom experiences.',
  },
  {
    title: 'Uncertainty remains',
    body: 'Unequal group sizes, unusually large individual changes, and departures from model assumptions affect interpretation. Higher starting scores were linked to smaller gains, but that pattern alone does not prove a ceiling effect.',
  },
];

// Client report p. 4.
const nextSteps = [
  'Use comparable course sections, consistent participation expectations, and the same survey timing. Randomly assign students or sections where feasible.',
  'Record attendance, completion, and course-section membership so the next evaluation can distinguish assignment from participation and account for classroom context.',
  'Add a communication task assessed with a clear rubric, ideally by reviewers who do not know each student’s group. Include a later follow-up to check whether changes persist.',
  'Agree on a practically meaningful improvement before planning the sample size. Aim for balanced groups, reliable identifiers, and clear scoring and incomplete-response rules.',
];
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section id="executive-summary" class="relative mx-auto w-[min(1120px,calc(100%_-_32px))] pb-14 pt-6 xs:w-[min(1120px,calc(100%_-_48px))] md:pb-20 md:pt-10" aria-labelledby="project-title">
      <header class="mb-8">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Executive Summary</div>
        <h1 id="project-title" class="max-w-[850px] font-display text-[34px] font-bold leading-[1.08] tracking-normal text-ink xs:text-[42px] md:text-[56px]">
          Evaluating <em class="text-accent">measured empathy</em> in science communication after training intervention.
        </h1>
        <p class="mt-4 text-[15px] leading-[1.7] text-ink3">A statistics capstone project for a graduate student from the CSUS Biological Sciences department.</p>
      </header>

      <dl class="overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_8px_24px_rgb(13_17_23_/_4%)]">
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">The Problem</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            A graduate student from the CSUS Biological Sciences department wanted to know whether empathy-focused science communication training helped students report greater empathy, beyond any change in a control group. The project also asked whether the results differed by academic major.
          </dd>
        </div>
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">The Data &amp; Tools</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            <strong class="font-semibold text-ink">Before-and-after surveys from 222 matched students: 96 in training and 126 in the control group.</strong> The dataset includes the Jefferson Scale of Empathy and a modified Toronto Empathy Questionnaire. R, tidyverse, and ggplot2 were used to prepare the data, analyze the two surveys separately, and visualize the results.
          </dd>
        </div>
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">The Methodology</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            Nine client-flagged participants were excluded, survey answers were scored, and each student's before and after responses were matched. The analysis compared <strong class="font-semibold text-ink">changes in the training and control groups</strong>, then checked whether starting scores or major categories affected the findings.
          </dd>
        </div>
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">Key Findings</dt>
          <dd class="m-0">
            <ol class="m-0 list-decimal space-y-3 pl-5 text-[15px] leading-[1.75] text-ink3 marker:font-semibold marker:text-accent">
              <li v-for="finding in keyFindings" :key="finding.title" class="pl-1">
                <strong class="font-semibold text-ink">{{ finding.title }}</strong> {{ finding.body }}
              </li>
            </ol>
          </dd>
        </div>
        <div class="grid gap-3 bg-accent p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-white">Business Impact</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-white/80">
            The findings give the program team a basis for <strong class="font-semibold text-white">planning a more consistent evaluation before using this study to support wider adoption</strong>. Standardize participation and survey timing, compare similar classes, and measure communication skills alongside survey responses. The current study does not establish an added training benefit.
          </dd>
        </div>
      </dl>

      <div class="mt-8 grid gap-3 md:grid-cols-3" role="group" aria-label="Project repository and reports">
        <a :href="githubRepoUrl" target="_blank" rel="noreferrer" class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-ink px-8 py-4 text-center text-base font-semibold text-white no-underline transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">View project repository</a>
        <ProjectPdfReportModal
          :src="clientReportPdf"
          title="Science Communication Empathy Client Report — September 24, 2026"
          button-label="Read client report"
          trigger-class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        />
        <ProjectPdfReportModal
          :src="technicalReportPdf"
          :title="technicalReportTitle"
          button-label="Read technical report"
          trigger-class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        />
      </div>
      <nav class="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 md:mt-16 md:grid-cols-2" aria-label="Explore this project">
        <a href="#findings" class="inline-flex min-h-[88px] w-full items-center justify-center rounded-[10px] bg-ink px-10 py-6 text-center text-lg font-semibold text-white no-underline transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore the findings</a>
        <a href="#technical-details" class="inline-flex min-h-[88px] w-full items-center justify-center rounded-[10px] border border-border2 px-10 py-6 text-center text-lg font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Jump to technical details</a>
      </nav>
    </section>

    <section id="context" class="scroll-mt-[100px] bg-cream2 py-14 md:py-[82px]" aria-labelledby="context-title">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Why the Comparison Matters</div>
          <h2 id="context-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Improvement is only part of the question.</h2>
        </div>
        <p class="m-0 text-[15px] leading-[1.76] text-ink3">The study followed students in undergraduate Biological Sciences course sections. To understand the training’s added value, the analysis needed to compare changes in both the training and control groups.</p>
      </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">What the surveys measure</h3>
            <p class="mb-0 mt-3 text-[15px] leading-[1.7] text-ink3">The Jefferson and modified Toronto questionnaires summarize students’ self-reported empathy. Higher scores indicate greater reported empathy, but the surveys do not directly measure how well a student communicates with an audience.</p>
          </article>
          <article class="rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">What the comparison adds</h3>
            <p class="mb-0 mt-3 text-[15px] leading-[1.7] text-ink3">Students in the control group also reported gains. Looking only at the training group’s before-and-after scores would miss that wider pattern and would not establish an added training benefit.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="methodology" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] scroll-mt-[100px] py-14 md:py-[82px]" aria-labelledby="methodology-title">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">How the Analysis Worked</div>
          <h2 id="methodology-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">From survey answers to a fair comparison.</h2>
        </div>
        <p class="m-0 text-[15px] leading-[1.76] text-ink3">Three R notebooks document preparation, exploration, and modeling. The analysis keeps each student’s before-and-after responses together and treats the two questionnaires as separate outcomes.</p>
      </header>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="step in workflowSteps" :key="step.number" class="rounded-[12px] border border-border bg-white p-[22px]">
          <div class="mb-5 grid h-8 w-8 place-items-center rounded-full bg-accent-pale font-mono text-xs font-medium text-accent">{{ step.number }}</div>
          <h3 class="text-[15px] font-bold text-ink">{{ step.title }}</h3>
          <p class="mb-0 mt-3 text-[14px] leading-[1.7] text-ink3">{{ step.body }}</p>
        </article>
      </div>
    </section>

    <section id="findings" class="scroll-mt-[100px] bg-cream2 py-14 md:py-[82px]" aria-labelledby="findings-title">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Supporting Findings</div>
          <h2 id="findings-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Scores rose in both groups.</h2>
        </div>
        <p class="m-0 text-[15px] leading-[1.76] text-ink3">Jefferson scores rose slightly more in the training group; modified Toronto scores rose slightly more in the control group. Neither difference was clear enough to establish an added training benefit.</p>
      </header>
        <article class="rounded-[12px] border border-border bg-white p-5 md:p-7" aria-labelledby="statistics-title">
          <h3 id="statistics-title" class="text-[17px] font-bold text-ink">The numbers behind the finding</h3>
          <p class="mt-2 text-[14px] leading-[1.7] text-ink3">Change means the after score minus the before score. Each questionnaire uses its own point scale, so compare groups within a questionnaire.</p>
          <div class="mt-4 overflow-x-auto rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" tabindex="0" role="region" aria-label="Empathy score control table; scroll horizontally on small screens">
            <table class="w-full min-w-[620px] border-collapse text-left text-[13px] tabular-nums">
              <caption class="sr-only">Average survey scores and changes for 222 matched students, including 96 in training and 126 in the control group.</caption>
              <thead class="text-ink">
                <tr class="border-b border-border">
                  <th scope="col" class="p-3">Measure</th>
                  <th scope="col" class="p-3">Jefferson points</th>
                  <th scope="col" class="p-3">Modified Toronto points</th>
                </tr>
              </thead>
              <tbody class="text-ink3">
                <tr v-for="row in scoreSummaries" :key="row.measure" class="border-b border-cream3 last:border-b-0" :class="{ 'bg-accent-pale': row.highlight }">
                  <th scope="row" class="p-3 font-semibold text-ink">{{ row.measure }}</th>
                  <td class="whitespace-nowrap p-3">{{ row.jefferson }}</td>
                  <td class="whitespace-nowrap p-3">{{ row.toronto }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-5 rounded-[10px] bg-cream p-5">
            <h4 class="text-[15px] font-semibold text-ink">How to read the uncertainty</h4>
            <p class="mb-0 mt-2 text-[14px] leading-[1.75] text-ink3">A confidence interval shows the uncertainty around an estimate under the statistical model. Both intervals for the training-versus-control difference include zero. The data remain compatible with no added benefit, as well as some benefit or disadvantage within those ranges. They do not prove equal effects.</p>
          </div>
          <p class="mb-0 mt-4 text-xs leading-[1.6] text-ink3">Values are rounded. Changes and group differences were calculated before rounding, so subtracting the displayed values can give a slightly different result.</p>
        </article>

        <div class="mt-6 grid gap-6 lg:grid-cols-2">
          <figure v-for="figure in changeFigures" :key="figure.title" class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h3 class="text-[17px] font-bold text-ink">{{ figure.title }}</h3>
            <ProjectScreenshotLightbox
              :src="figure.image"
              :alt="figure.alt"
              :title="figure.title"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">
              <p class="m-0">{{ figure.body }}</p>
              <p class="mb-0 mt-2">Each box contains the middle half of students’ changes, with the median marked by the line inside. Dots mark unusually large changes, and the dashed line marks no change. “Intervention” means the training group. “STEM” means Biology or Biological Sciences, while “Non-STEM” means other majors. Select the chart to enlarge it.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="technical-details" class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))] scroll-mt-[100px] py-14 md:py-[82px]" aria-labelledby="technical-title">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Technical Details &amp; Limitations</div>
          <h2 id="technical-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">What was tested, and what remains uncertain.</h2>
        </div>
        <p class="m-0 text-[15px] leading-[1.76] text-ink3">The primary question concerns additional improvement beyond the control group. Checks of overall change, academic-major categories, starting scores, and model assumptions help qualify that result.</p>
      </header>

      <div class="mb-6 grid gap-4 md:grid-cols-2">
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[17px] font-bold text-ink">Scoring and data checks</h3>
          <p class="mt-3 text-[14px] leading-[1.75] text-ink3">Jefferson uses 14 items scored from 1 to 7, giving a possible total of 14–98. The modified Toronto measure uses 16 items scored from 0 to 4, giving a total of 0–64. Negatively worded items were reverse-coded before summing.</p>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">We confirmed all 30 items were recognized and scored in each of the 444 retained survey records, with no missing or unrecognized item values. The notebooks produce separate before, after, and matched-change datasets.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[17px] font-bold text-ink">What “STEM” means in this project</h3>
          <p class="mt-3 text-[14px] leading-[1.75] text-ink3">The project labels only Biology and Biological Sciences majors as “STEM”; every other major is grouped as “Non-STEM.” This is a project-specific classification, not a general comparison of all STEM and non-STEM fields.</p>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">These groups had similar starting scores. The analyses did not establish clear differences in their average improvement or in their response to training relative to the control group.</p>
        </article>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <article v-for="method in analysisMethods" :key="method.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[17px] font-bold text-ink">{{ method.title }}</h3>
          <p class="mt-2 text-[13px] font-semibold text-accent">{{ method.method }}</p>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">{{ method.body }}</p>
        </article>
      </div>

      <article class="mt-6 rounded-[12px] border border-border bg-white p-5 md:p-7" aria-labelledby="tests-title">
        <h3 id="tests-title" class="text-[17px] font-bold text-ink">Statistical comparisons</h3>
        <p class="mt-2 text-[14px] leading-[1.7] text-ink3">The project used a p-value threshold of 0.05. <strong class="font-bold">The overall before-and-after increases were statistically significant</strong>, but the training and major comparisons were not.</p>
        <div class="mt-4 overflow-x-auto rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" tabindex="0" role="region" aria-label="Statistical comparison p-values; scroll horizontally on small screens">
          <table class="w-full min-w-[580px] border-collapse text-left text-[13px] tabular-nums">
            <caption class="sr-only">P-values for overall changes and comparisons between study groups and major categories.</caption>
            <thead class="text-ink">
              <tr class="border-b border-border">
                <th scope="col" class="p-3">Comparison</th>
                <th scope="col" class="p-3">Jefferson p-value</th>
                <th scope="col" class="p-3">Modified Toronto p-value</th>
              </tr>
            </thead>
            <tbody class="text-ink3">
              <tr v-for="(row, index) in statisticalChecks" :key="row.comparison" class="border-b border-cream3 last:border-b-0" :class="{ 'bg-accent-pale font-bold': index === 0 }">
                <th scope="row" class="p-3 text-ink" :class="index === 0 ? 'font-bold' : 'font-semibold'">{{ row.comparison }}</th>
                <td class="whitespace-nowrap p-3">{{ row.jefferson }}</td>
                <td class="whitespace-nowrap p-3">{{ row.toronto }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mb-0 mt-4 text-[13px] leading-[1.7] text-ink3">A p-value does not tell us the probability that the training works or whether a change matters in practice. Values above the threshold indicate insufficient evidence of a difference, not proof of equivalence.</p>
      </article>

      <section v-for="group in diagnosticGroups" :key="group.id" class="mt-10" :aria-labelledby="group.id">
        <h3 :id="group.id" class="font-display text-[26px] font-bold leading-tight text-ink md:text-[32px]">{{ group.title }}</h3>
        <p class="mt-3 text-[15px] leading-[1.75] text-ink3">{{ group.introduction }}</p>
        <div class="mt-6 grid gap-6 lg:grid-cols-2">
          <figure v-for="figure in group.figures" :key="figure.title" class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
            <h4 class="text-[17px] font-bold text-ink">{{ figure.title }}</h4>
            <ProjectScreenshotLightbox
              :src="figure.image"
              :alt="figure.alt"
              :title="figure.title"
              trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">{{ figure.body }} Select the chart to enlarge it.</figcaption>
          </figure>
        </div>
      </section>

      <h3 id="limitations-title" class="mt-10 font-display text-[26px] font-bold leading-tight text-ink md:text-[32px]">Limitations</h3>
      <div class="mt-6 grid gap-4 md:grid-cols-2" role="group" aria-labelledby="limitations-title">
        <article v-for="limit in limitations" :key="limit.title" class="rounded-[12px] border border-border bg-white p-[22px]">
          <h4 class="text-[16px] font-bold text-ink">{{ limit.title }}</h4>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">{{ limit.body }}</p>
        </article>
      </div>

      <article class="mt-8 rounded-[12px] border border-accent bg-accent p-6 text-white md:p-9" aria-labelledby="conclusions-title">
        <h3 id="conclusions-title" class="font-display text-[26px] font-bold leading-tight text-white md:text-[32px]">Final Conclusions</h3>
        <p class="mb-0 mt-4 text-[15px] leading-[1.75] text-white/80">Across 222 matched students, average self-reported empathy rose on both questionnaires, but the training group did not clearly improve more than the control group. Individual changes varied, major categories did not clearly distinguish the results, and higher starting scores were associated with smaller gains. Adjusting for starting scores did not establish an added training benefit. These findings leave the benefit uncertain rather than proving no effect. They support a more consistent evaluation before wider adoption, including direct measures of communication and follow-up to assess whether any changes last.</p>
      </article>

      <article class="mt-8 rounded-[14px] bg-ink p-6 text-white md:p-9" aria-labelledby="next-steps-title">
        <div class="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-white/70">Recommended Next Steps</div>
        <h3 id="next-steps-title" class="font-display text-[26px] font-bold leading-tight md:text-[32px]">Make the next evaluation more informative.</h3>
        <ol class="mb-0 mt-5 list-decimal space-y-3 pl-5 text-[15px] leading-[1.75] text-white/80 marker:font-semibold marker:text-white">
          <li v-for="step in nextSteps" :key="step" class="pl-1">{{ step }}</li>
        </ol>
        <p class="mb-0 mt-5 text-xs leading-[1.6] text-white/70">These recommendations guide future evaluation. The current study does not establish improved communication or a lasting training benefit.</p>
      </article>
    </section>

    <section id="reports" class="scroll-mt-[100px] bg-cream2 py-14 md:py-[82px]" aria-labelledby="reports-title">
      <div class="mx-auto w-[min(1120px,calc(100%_-_32px))] xs:w-[min(1120px,calc(100%_-_48px))]">
        <header class="mb-[34px]">
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Reports &amp; Credits</div>
          <h2 id="reports-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Read the work behind the findings.</h2>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="flex flex-col rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Client project report</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">Six pages covering the complete before-and-after findings, updated charts, practical recommendations, and limits on interpretation.</p>
            <ProjectPdfReportModal
              :src="clientReportPdf"
              title="Science Communication Empathy Client Report — September 24, 2026"
              button-label="Read client report"
              trigger-class="mt-auto inline-flex min-h-[60px] w-full items-center justify-center self-start rounded-[10px] bg-ink px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent sm:w-auto"
            />
          </article>
          <article class="flex flex-col rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Technical project report</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">The 40-page technical report documents survey preparation and scoring, before-and-after comparisons, diagnostic checks, change-score models, baseline-adjusted analyses, and study limitations.</p>
            <ProjectPdfReportModal
              :src="technicalReportPdf"
              :title="technicalReportTitle"
              button-label="Read technical report"
              trigger-class="mt-auto inline-flex min-h-[60px] w-full items-center justify-center self-start rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white sm:w-auto"
            />
          </article>
        </div>
        <div class="mt-8 grid items-start gap-6 border-t border-border pt-7 md:grid-cols-[1fr_auto]">
          <div class="text-[14px] leading-[1.8] text-ink3">
            <p class="m-0"><strong class="font-semibold text-ink">Prepared by Austin Melendez and Sara Bruggman</strong> for Shelby Chandar, CSUS Biological Sciences.</p>
            <p class="mb-0 mt-1">STAT 192 Statistics Capstone Project.</p>
          </div>
          <a class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-border2 px-8 py-4 text-center text-base font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View project repository</a>
        </div>
      </div>
    </section>
  </main>
</template>
