<script setup lang="ts">
import ProjectPdfReportModal from '@/components/projects/ProjectPage/ProjectPdfReportModal.vue';
import ProjectScreenshotLightbox from '@/components/projects/ProjectPage/ProjectScreenshotLightbox.vue';

import clientReportPdf from '@/assets/projects/baseline/Baseline Noise Client Project Report.pdf';
import technicalReportPdf from '@/assets/projects/baseline/Baseline Noise Technical Project Report.pdf';
import backgroundFigure from '@/assets/projects/baseline/client-background-distributions.png';
import modelFigure from '@/assets/projects/baseline/client-model-fit.png';
import correlationFigure from '@/assets/projects/baseline/client-channel-correlations.png';

const githubRepoUrl = 'https://github.com/austin-mel-edu/sacramento-state-university/tree/master/STAT192%20-%20Senior%20Capstone%20Project/Adam%20G%20-%20Thermochron%20Systems%20LLC';

const keyFindings = [
  {
    title: 'Longer readings had less background noise.',
    body: 'The typical noise level (the median) was 82% lower at 4.096 seconds than at 0.128 seconds. Each reading took 32 times as long, so lower background comes with a measurement-time tradeoff.',
  },
  {
    title: 'Occasional large readings mattered.',
    body: 'The average was higher than the median at every setting. An average alone cannot describe the full range of background noise.',
  },
  {
    title: 'One channel did not reliably track the others.',
    body: 'Readings at different measurement times generally did not rise and fall together. That limits the case for using one live background reading to correct every channel.',
  },
];

// Client report p. 7; technical report §2.5 and §4.
const workflowSteps = [
  {
    number: '01',
    title: 'Organize the instrument files',
    body: 'Read the text-file headers, identify baseline runs, and match each measurement column to its dwell time. Keep laboratory and batch labels for later checks.',
  },
  {
    number: '02',
    title: 'Handle recording issues',
    body: 'Reverse suspected automatic baseline subtraction and retain the final continuous segment after a timestamp reset. These cleaning choices rely on assumptions about how the instrument recorded the data.',
  },
  {
    number: '03',
    title: 'Compare the noise patterns',
    body: 'Compare typical levels, variation, and unusually large readings across the six settings. Check whether channels tend to rise and fall together within the same measurement cycle.',
  },
  {
    number: '04',
    title: 'Fit and inspect a model',
    body: 'Fit a statistical description of noise that changes with dwell time, then compare it with the observed distributions. Treat the fit as a candidate for further testing.',
  },
];

// Client report p. 4: rounded values in femtoamperes, including all three zeros.
const noiseSummaries = [
  { dwell: '0.128', median: '29.86', mean: '39.28', spread: '34.87', p95: '108.40' },
  { dwell: '0.256', median: '19.56', mean: '24.90', spread: '21.39', p95: '66.62' },
  { dwell: '0.512', median: '12.66', mean: '15.65', spread: '12.92', p95: '40.81' },
  { dwell: '1.024', median: '8.61', mean: '10.25', spread: '7.97', p95: '25.57' },
  { dwell: '2.048', median: '6.36', mean: '7.16', spread: '5.13', p95: '16.65' },
  { dwell: '4.096', median: '5.26', mean: '5.64', spread: '3.70', p95: '12.25' },
];

const nextSteps = [
  'Compare the current correction, a median correction matched to dwell time, and the fitted model on independent blanks and samples with known signals.',
  'Measure how closely known signals are recovered, the remaining error, and uncertainty. Check results separately by instrument and laboratory, especially for weak signals.',
  'Keep the live baseline channel for monitoring. Test whether it adds useful information before using it to correct another channel.',
  'Develop a way to report nonnegative signal estimates and their uncertainty. Simple subtraction can still produce negative estimates, even with a positive noise model.',
];
</script>

<template>
  <main class="relative overflow-hidden break-words bg-cream text-ink">
    <div class="pointer-events-none absolute right-[-180px] top-[-260px] h-[620px] w-[620px] rounded-full border border-accent2/[0.08]" aria-hidden="true"></div>

    <section id="executive-summary" class="relative mx-auto w-[min(1120px,calc(100%_-_32px))] pb-14 pt-6 xs:w-[min(1120px,calc(100%_-_48px))] md:pb-20 md:pt-10" aria-labelledby="project-title">
      <header class="mb-8">
        <div class="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Executive Summary</div>
        <h1 id="project-title" class="max-w-[850px] font-display text-[34px] font-bold leading-[1.08] tracking-normal text-ink xs:text-[42px] md:text-[56px]">
          Understanding <em class="text-accent">background noise</em> in scientific measurements.
        </h1>
        <p class="mt-4 text-[15px] leading-[1.7] text-ink3">A statistics capstone project for Thermochron Systems.</p>
      </header>

      <dl class="overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_8px_24px_rgb(13_17_23_/_4%)]">
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">The Problem</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            Thermochron Systems needed to understand instrument background noise to guide more reliable estimates of the true sample signal. Could one background reading appropriately correct channels that collect measurements over different lengths of time?
          </dd>
        </div>
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">The Data &amp; Tools</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            <strong class="font-semibold text-ink">492,000 background readings from 73 Prisma Pro instrument runs</strong>, collected at three laboratories across six measurement durations. These Baseline Characterization Analysis (BCA) readings measure the instrument's background. The analysis used Python with pandas, NumPy, SciPy, and Matplotlib.
          </dd>
        </div>
        <div class="grid gap-3 border-b border-border p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-ink">The Methodology</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-ink3">
            Instrument files were organized, suspected automatic background subtraction was reversed, and timestamp resets were handled. Noise patterns were compared across <strong class="font-semibold text-ink">dwell times, the time spent collecting one reading</strong>, and a statistical model was fitted to describe those patterns.
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
        <div class="grid gap-3 bg-ink p-5 md:grid-cols-[170px_1fr] md:gap-8 md:p-7">
          <dt class="text-[15px] font-bold text-white">Business Impact</dt>
          <dd class="m-0 text-[15px] leading-[1.75] text-white/80">
            The project gives Thermochron a basis for <strong class="font-semibold text-white">testing corrections matched to each channel's measurement time</strong>. Start with the observed median and compare the fitted model on independent samples. Improved accuracy for real samples or the rock ages calculated from them has not yet been demonstrated.
          </dd>
        </div>
      </dl>

      <div class="mt-8 grid gap-3 md:grid-cols-3" role="group" aria-label="Project repository and reports">
        <a :href="githubRepoUrl" target="_blank" rel="noreferrer" class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-ink px-8 py-4 text-center text-base font-semibold text-white no-underline transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">View project repository</a>
        <ProjectPdfReportModal
          :src="clientReportPdf"
          title="Baseline Noise Client Project Report — September 24, 2026 rerun"
          button-label="Read client report"
          trigger-class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        />
        <ProjectPdfReportModal
          :src="technicalReportPdf"
          title="Baseline Noise Technical Project Report — May 19, 2026"
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
            <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Why Background Noise Matters</div>
            <h2 id="context-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">Small signals need a careful correction.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">Gas mass spectrometry helps estimate rock ages by measuring gases released from samples. The instrument measures very small electrical currents, so its own background can affect how the sample signal is interpreted.</p>
        </header>
        <div class="grid gap-4 md:grid-cols-2">
          <article class="rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">What the instrument sees</h3>
            <p class="mb-0 mt-3 text-[15px] leading-[1.7] text-ink3">A sample reading includes both the sample signal and instrument background. A BCA run measures a channel where no real gas signal is expected, allowing the background to be studied on its own.</p>
          </article>
          <article class="rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="text-[17px] font-bold text-ink">Why matching the setting matters</h3>
            <p class="mb-0 mt-3 text-[15px] leading-[1.7] text-ink3">Subtracting too much background can leave a negative estimate of the sample's current. A background reading collected at one dwell time may not represent a sample channel collected at another.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="methodology" class="mx-auto w-[min(1120px,calc(100%_-_32px))] scroll-mt-[100px] py-14 xs:w-[min(1120px,calc(100%_-_48px))] md:py-[82px]" aria-labelledby="methodology-title">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">How the Analysis Worked</div>
          <h2 id="methodology-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">From instrument files to a testable recommendation.</h2>
        </div>
        <p class="m-0 text-[15px] leading-[1.76] text-ink3">Three Python notebooks document preparation, exploration, and modeling. The workflow preserves the measurement setting and source of each reading so the patterns can be checked.</p>
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
            <h2 id="findings-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">See how the background changes.</h2>
          </div>
          <p class="m-0 text-[15px] leading-[1.76] text-ink3">Each setting has 82,000 readings. The chart and table include the three zero readings and describe background noise, rather than corrected sample signals.</p>
        </header>

        <figure class="m-0 rounded-[12px] border border-border bg-white p-5 md:p-7">
          <h3 class="text-[17px] font-bold text-ink">Longer measurement times had lower, less variable background.</h3>
          <ProjectScreenshotLightbox
            :src="backgroundFigure"
            alt="Box plots of background current at six dwell times, with median values decreasing from 29.86 to 5.26 femtoamperes as measurement time increases."
            title="Background noise by measurement time"
            trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
            image-class="transition-transform duration-200 group-hover:scale-[1.01]"
          />
          <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">
            Boxes contain the middle half of the readings; the dark lines mark the medians. Whiskers extend to the most extreme readings within 1.5 box heights of each box. Outlier points are hidden for readability but remain in the calculations. Current is measured in femtoamperes (fA), a tiny unit of electrical current: 1 fA = 10<sup>−15</sup> amperes. Select the chart to enlarge it.
          </figcaption>
        </figure>

        <article class="mt-6 rounded-[12px] border border-border bg-white p-5 md:p-7" aria-labelledby="statistics-title">
          <h3 id="statistics-title" class="text-[17px] font-bold text-ink">The measurements behind the finding</h3>
          <p class="mt-2 text-[14px] leading-[1.7] text-ink3">All current values below are in femtoamperes. Smaller values mean less background.</p>
          <div class="mt-4 overflow-x-auto rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" tabindex="0" role="region" aria-label="Background measurements table; scroll horizontally on small screens">
            <table class="w-full min-w-[640px] border-collapse text-left text-[13px] tabular-nums">
              <caption class="sr-only">Background noise by dwell time, with 82,000 readings per setting.</caption>
              <thead class="text-ink">
                <tr class="border-b border-border">
                  <th scope="col" class="p-3">Dwell time (s)</th>
                  <th scope="col" class="p-3">Median (fA)</th>
                  <th scope="col" class="p-3">Mean (fA)</th>
                  <th scope="col" class="p-3">Std. deviation (fA)</th>
                  <th scope="col" class="p-3">95th percentile (fA)</th>
                </tr>
              </thead>
              <tbody class="text-ink3">
                <tr v-for="(row, index) in noiseSummaries" :key="row.dwell" class="border-b border-cream3 last:border-b-0" :class="{ 'bg-accent-pale': index === 0 || index === noiseSummaries.length - 1 }">
                  <th scope="row" class="p-3 font-semibold text-ink">{{ row.dwell }}</th>
                  <td class="p-3">{{ row.median }}</td>
                  <td class="p-3">{{ row.mean }}</td>
                  <td class="p-3">{{ row.spread }}</td>
                  <td class="p-3">{{ row.p95 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <dl class="mt-5 grid gap-4 text-[13px] leading-[1.65] sm:grid-cols-2 lg:grid-cols-4">
            <div><dt class="font-semibold text-ink">Median</dt><dd class="m-0 mt-1 text-ink3">The middle reading when values are ordered.</dd></div>
            <div><dt class="font-semibold text-ink">Mean</dt><dd class="m-0 mt-1 text-ink3">The arithmetic average, influenced by large readings.</dd></div>
            <div><dt class="font-semibold text-ink">Standard deviation</dt><dd class="m-0 mt-1 text-ink3">A measure of spread. Smaller values mean less variation.</dd></div>
            <div><dt class="font-semibold text-ink">95th percentile</dt><dd class="m-0 mt-1 text-ink3">About 95% of background readings fall below this value. It is not a validated sample detection limit.</dd></div>
          </dl>
          <p class="mb-0 mt-5 text-xs leading-[1.6] text-ink3">Values are rounded. Differences across settings do not measure an improvement in sample accuracy.</p>
        </article>

        <figure class="m-0 mt-6 grid items-center gap-6 rounded-[12px] border border-border bg-white p-5 md:grid-cols-[0.8fr_1fr] md:gap-10 md:p-7">
            <figcaption>
              <h3 class="text-[20px] font-bold leading-snug text-ink">Do the channels rise and fall together?</h3>
              <p class="mt-3 text-[15px] leading-[1.75] text-ink3">Values near zero indicate little tendency for two channels to rank high or low together in the same cycle. The average pairwise correlation was <strong class="font-semibold text-ink">0.0073</strong>, with individual pairs ranging from −0.0948 to 0.1335.</p>
              <p class="mt-3 text-[14px] leading-[1.7] text-ink3">This supports testing any transfer of a live background reading between channels. It does not prove that the channels are independent or rule out relationships within individual runs and laboratories.</p>
              <p class="mb-0 mt-4 text-xs leading-[1.6] text-ink3">Based on 82,000 aligned measurement cycles. Labels are dwell times in seconds. Each diagonal is 1 because a channel is compared with itself. Select the chart to enlarge it.</p>
            </figcaption>
            <ProjectScreenshotLightbox
              :src="correlationFigure"
              alt="Correlation matrix comparing the six dwell-time channels. Off-diagonal correlations are close to zero, ranging from minus 0.0948 to 0.1335."
              title="How background channels relate"
              trigger-class="group block w-full overflow-hidden rounded-[10px] border border-border bg-white"
              image-class="transition-transform duration-200 group-hover:scale-[1.01]"
            />
        </figure>
      </div>
    </section>

    <section id="technical-details" class="mx-auto w-[min(1120px,calc(100%_-_32px))] scroll-mt-[100px] py-14 xs:w-[min(1120px,calc(100%_-_48px))] md:py-[82px]" aria-labelledby="technical-title">
      <header class="mb-[34px] grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <div>
          <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">Technical Details &amp; Limitations</div>
          <h2 id="technical-title" class="font-display text-[28px] font-bold leading-[1.06] text-ink xs:text-[34px] md:text-[48px]">A model to test, with clear limits.</h2>
        </div>
        <p class="m-0 text-[15px] leading-[1.76] text-ink3">The model describes observed background noise. Independent blank and known-signal runs are still needed to find out whether it improves correction of real samples.</p>
      </header>

      <div class="grid gap-4 md:grid-cols-2">
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[17px] font-bold text-ink">What was fitted</h3>
          <p class="mt-3 text-[14px] leading-[1.75] text-ink3">A seven-parameter log-skew-t model was fitted to natural-log current. Its center, spread, and tail behavior depend on log dwell time, with one shared skewness parameter. The fit used 491,997 positive readings.</p>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">A smoothed view of the measured data, called kernel density estimation (KDE), provides a visual comparison. Only one fitted statistical model is reported, so it has not been established as the best available choice.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[17px] font-bold text-ink">How to interpret the fit</h3>
          <p class="mt-3 text-[14px] leading-[1.75] text-ink3">The best of six fitting starts reported convergence; several others stopped after one iteration at poorer fits. A global optimum has not been established.</p>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The rerun reports AIC 1,351,186.11 and BIC 1,351,263.86. These are scores for comparing models fitted on comparable data and likelihood scales, rather than accuracy percentages or pass marks.</p>
        </article>
      </div>

      <figure class="m-0 mt-6 rounded-[12px] border border-border bg-white p-5 md:p-7">
        <h3 class="text-[17px] font-bold text-ink">Where the model follows the data, and where it differs</h3>
        <ProjectScreenshotLightbox
          :src="modelFigure"
          alt="Six panels comparing observed background readings, smoothed observations, and the fitted model. Curves follow the broad patterns with visible differences at some peaks and tails."
          title="Observed background and the fitted model"
          trigger-class="group mt-5 block w-full overflow-hidden rounded-[10px] border border-border bg-white"
          image-class="transition-transform duration-200 group-hover:scale-[1.01]"
        />
        <figcaption class="mt-4 text-[13px] leading-[1.7] text-ink3">
          Gray bars show the observed readings, teal curves smooth them, and rust curves show the model. The horizontal axes use log10 current in amperes: one unit represents ten times the current. Each panel shows the 0.1st to 99.9th percentile range of positive readings, leaving the most extreme tails outside view. Density describes relative concentration, not a count of readings. These are the same data used to fit the model, so visual agreement does not establish better sample correction. Select the chart to enlarge it.
        </figcaption>
      </figure>

      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[16px] font-bold text-ink">The data cover specific conditions</h3>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The study covers three Prisma Pro instruments at Glasgow, Salzburg, and Wuhan. Nineamu is a separate Salzburg batch, not a fourth laboratory. Laboratory and batch differences remain relevant and are not explicitly adjusted for in the model. Transfer to other settings or periods needs checking.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[16px] font-bold text-ink">Cleaning required assumptions</h3>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The parser used a 1.024-second reference to reverse suspected automatic subtraction and kept the final segment after timestamp resets. One file with an incomplete header was excluded. Three zeros remain in descriptive summaries and were excluded only from logarithmic modeling.</p>
        </article>
        <article class="rounded-[12px] border border-border bg-white p-[22px]">
          <h3 class="text-[16px] font-bold text-ink">Many readings came from the same runs</h3>
          <p class="mb-0 mt-3 text-[14px] leading-[1.75] text-ink3">The observation count alone does not establish independence or long-term stability. The original file-selection rule excluded the nested duplicate data and the separate nosem folder. The proposed correction still needs checks on runs excluded from fitting.</p>
        </article>
      </div>

      <article class="mt-8 rounded-[14px] bg-ink p-6 text-white md:p-9" aria-labelledby="next-steps-title">
        <div class="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-white/70">Recommended Next Steps</div>
        <h3 id="next-steps-title" class="font-display text-[26px] font-bold leading-tight md:text-[32px]">Test the correction before relying on it.</h3>
        <ol class="mb-0 mt-5 list-decimal space-y-3 pl-5 text-[15px] leading-[1.75] text-white/80 marker:font-semibold marker:text-white">
          <li v-for="step in nextSteps" :key="step" class="pl-1">{{ step }}</li>
        </ol>
        <p class="mb-0 mt-5 text-xs leading-[1.6] text-white/70">These are recommendations for validation. The practical benefits remain to be measured.</p>
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
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">Seven pages explaining the question, current findings, recommendations, and limitations. This is the source for the results and charts on this page.</p>
            <ProjectPdfReportModal
              :src="clientReportPdf"
              title="Baseline Noise Client Project Report — September 24, 2026 rerun"
              button-label="Read client report"
              trigger-class="mt-auto inline-flex min-h-[60px] w-full items-center justify-center self-start rounded-[10px] bg-ink px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent sm:w-auto"
            />
          </article>
          <article class="flex flex-col rounded-[12px] border border-border bg-white p-[22px]">
            <h3 class="mt-3 text-[20px] font-bold text-ink">Technical project report</h3>
            <p class="mb-6 mt-3 text-[15px] leading-[1.7] text-ink3">The 38-page report documents instrument context, cleaning methods, equations, diagnostics, and historical model results.</p>
            <ProjectPdfReportModal
              :src="technicalReportPdf"
              title="Baseline Noise Technical Project Report — May 19, 2026"
              button-label="Read technical report"
              trigger-class="mt-auto inline-flex min-h-[60px] w-full items-center justify-center self-start rounded-[10px] border border-accent2 bg-accent-pale px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white sm:w-auto"
            />
          </article>
        </div>
        <div class="mt-8 grid items-start gap-6 border-t border-border pt-7 md:grid-cols-[1fr_auto]">
          <div class="text-[14px] leading-[1.8] text-ink3">
            <p class="m-0"><strong class="font-semibold text-ink">Prepared by Austin Melendez and Harmen Hundal</strong> for Thermochron Systems LLC and Adam Goldsmith.</p>
            <p class="mb-0 mt-1">STAT 192 Statistics Capstone Project · Original analysis: May 19, 2026.</p>
          </div>
          <a class="inline-flex min-h-[60px] items-center justify-center rounded-[10px] border border-border2 px-8 py-4 text-center text-base font-semibold text-ink no-underline transition-colors hover:border-accent2 hover:text-accent2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" :href="githubRepoUrl" target="_blank" rel="noreferrer">View project repository</a>
        </div>
      </div>
    </section>
  </main>
</template>
