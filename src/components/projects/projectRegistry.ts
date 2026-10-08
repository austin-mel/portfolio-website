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
    category: 'Measurement-Risk Analysis',
    filters: ['modeling', 'analysis'],
    tags: ['modeling', 'analysis', 'report'],
    stack: ['Python', 'Statistical Modeling', 'EDA', 'Scientific Reporting'],
    summary:
      'Model Prisma Pro mass spectrometer baseline noise and explain why dwell-time-specific correction is required.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/BaselineNoiseProjectPage.vue')),
  },
  {
    slug: 'science-communication-empathy',
    num: '02',
    title: 'Empathy in Scientific Communication',
    short: 'Pre/post analysis of empathy scores across Jefferson and Toronto instruments.',
    category: 'Applied Statistical Analysis',
    filters: ['modeling', 'analysis'],
    tags: ['modeling', 'analysis', 'report'],
    stack: ['R', 'Regression', 'EDA', 'Survey Analysis', 'Scientific Reporting'],
    summary:
      'Explain whether a science communication intervention changed self-reported empathy across two survey instruments.',
    component: defineAsyncComponent(
      () => import('@/components/projects/ProjectPage/ScienceCommunicationEmpathyProjectPage.vue')
    ),
  },
  {
    slug: 'pharmatrial',
    num: '03',
    title: 'Pharmaceutical Clinical Trial Portal',
    short: 'Fictional full-stack Vue and Express demo for role-specific trial workflow state.',
    category: 'Full-Stack Workflow Demo',
    filters: ['full-stack', 'product'],
    tags: ['full-stack', 'liveDemo', 'product'],
    stack: ['Vue', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    summary:
      'Show a fictional role-aware trial workflow demo with live database-backed actions, seeded fallback data, patient masking, and blinded assignment state.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/PharmatrialProjectPage.vue')),
  },
  {
    slug: 'sirs-simulation',
    num: '04',
    title: 'SIRS Matrix-Based Epidemic Simulation',
    short: 'R package for tested SIR, SIS, and SIRS transition simulations on two-dimensional grids.',
    category: 'R Simulation Package',
    filters: ['modeling', 'analysis', 'product'],
    tags: ['modeling', 'analysis', 'product'],
    stack: ['R', 'Package', 'Simulation', 'Visualization'],
    summary:
      'Present an R package that exposes tested SIR, SIS, and SIRS grid-simulation functions, repeated-run summaries, and full cell logs.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/SirsSimulationProjectPage.vue')),
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;

export const getProjectComponent = (slug: string) => getProjectBySlug(slug)?.component ?? null;
