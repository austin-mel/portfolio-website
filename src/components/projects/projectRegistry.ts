import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';

export type ProjectFilterId = 'all' | 'modeling' | 'full-stack' | 'analysis' | 'product';
export type ProjectCategory = Exclude<ProjectFilterId, 'all'>;
export type ProjectTagType =
  | 'report'
  | 'product'
  | 'full-stack'
  | 'liveDemo'
  | 'modeling'
  | 'analysis';

export interface ProjectFilter {
  id: ProjectFilterId;
  label: string;
}

export interface ProjectRegistryEntry {
  slug: string;
  num: string;
  title: string;
  short: string;
  category: string;
  filters: ProjectCategory[];
  tags: ProjectTagType[];
  stack: string[];
  sourceMockup?: string;
  summary: string;
  component: Component;
}

export const projectFilters: ProjectFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'modeling', label: 'Modeling' },
  { id: 'analysis', label: 'Data Analysis' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'product', label: 'Product' },
];

export const projects: ProjectRegistryEntry[] = [
  {
    slug: 'baseline-noise',
    num: '01',
    title: 'Identifying Baseline Noise Distribution',
    short: 'Dwell-time-specific statistical model for Prisma Pro mass spectrometer baseline noise.',
    category: 'Statistical Modeling Case Study',
    filters: ['modeling', 'analysis'],
    tags: ['modeling', 'analysis', 'report'],
    stack: ['Python', 'Statistical Modeling', 'EDA', 'Scientific Reporting'],
    sourceMockup: 'src/reference/baseline-noise-project-mockup.html',
    summary:
      'Model Prisma Pro mass spectrometer baseline noise and explain why dwell-time-specific correction is required.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/BaselineNoiseProjectPage.vue')),
  },
  {
    slug: 'pharmatrial',
    num: '02',
    title: 'Pharmaceutical Clinical Trial Portal',
    short: 'Full-stack Vue and Express portal for blinded clinical trial collaboration.',
    category: 'Full-Stack Clinical Workflow Product',
    filters: ['full-stack', 'product'],
    tags: ['full-stack', 'liveDemo', 'product'],
    stack: ['Vue', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    sourceMockup: 'src/reference/pharmatrial-project-mockup.html',
    summary:
      'Show a role-aware clinical trial operations portal with live database-backed workflows, seeded fallback data, privacy boundaries, and blinded assignment.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/PharmatrialProjectPage.vue')),
  },
  {
    slug: 'science-communication-empathy',
    num: '03',
    title: 'Empathy in Scientific Communication',
    short: 'Pre/post analysis of empathy scores across Jefferson and Toronto instruments.',
    category: 'Applied Statistical Analysis',
    filters: ['modeling', 'analysis'],
    tags: ['modeling', 'analysis', 'report'],
    stack: ['R', 'Regression', 'EDA', 'Survey Data'],
    sourceMockup: 'src/reference/scicomm-project-mockup.html',
    summary:
      'Explain whether a science communication intervention changed self-reported empathy across two survey instruments.',
    component: defineAsyncComponent(
      () => import('@/components/projects/ProjectPage/ScienceCommunicationEmpathyProjectPage.vue')
    ),
  },
  {
    slug: 'sirs-simulation',
    num: '04',
    title: 'SIRS Matrix-Based Epidemic Simulation',
    short: 'R package for SIR, SIS, and SIRS disease spread on two-dimensional grids.',
    category: 'Computational Epidemiology Case Study',
    filters: ['modeling', 'analysis', 'product'],
    tags: ['modeling', 'analysis', 'product'],
    stack: ['R', 'Package', 'Simulation', 'Visualization'],
    sourceMockup: 'src/reference/sirs-simulation-project-mockup.html',
    summary:
      'Present an R package that simulates SIR, SIS, and SIRS disease spread across two-dimensional matrices.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/SirsSimulationProjectPage.vue')),
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;

export const getProjectComponent = (slug: string) => getProjectBySlug(slug)?.component ?? null;
