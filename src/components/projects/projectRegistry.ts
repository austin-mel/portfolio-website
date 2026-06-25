import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';

export type ProjectFilterId = 'all' | 'modeling' | 'product' | 'simulation' | 'analysis';
export type ProjectCategory = Exclude<ProjectFilterId, 'all'>;
export type ProjectTagType = 'report' | 'dashboard' | 'liveDemo' | 'modeling' | 'simulation' | 'analysis';

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
  filter: ProjectCategory;
  tags: ProjectTagType[];
  stack: string[];
  sourceMockup?: string;
  summary: string;
  component: Component;
}

export const projectFilters: ProjectFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'modeling', label: 'Modeling' },
  { id: 'product', label: 'Full-Stack Product' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'analysis', label: 'Data Analysis' },
];

export const projects: ProjectRegistryEntry[] = [
  {
    slug: 'baseline-noise',
    num: '01',
    title: 'Identifying Baseline Noise Distribution',
    short: 'Dwell-time-specific statistical model for Prisma Pro mass spectrometer baseline noise.',
    category: 'Statistical Modeling Case Study',
    filter: 'modeling',
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
    title: 'Pharmatrial Clinical Trial Portal',
    short: 'Full-stack Vue and Express portal for blinded clinical trial collaboration.',
    category: 'Full-Stack Clinical Workflow Product',
    filter: 'product',
    tags: ['dashboard', 'liveDemo'],
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
    filter: 'analysis',
    tags: ['analysis', 'report'],
    stack: ['R', 'Regression', 'EDA', 'Survey Data'],
    sourceMockup: 'src/reference/scicomm-project-mockup.html',
    summary:
      'Explain whether a science communication intervention changed self-reported empathy across two survey instruments.',
    component: defineAsyncComponent(
      () => import('@/components/projects/ProjectPage/ScienceCommunicationEmpathyProjectPage.vue')
    ),
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;

export const getProjectComponent = (slug: string) => getProjectBySlug(slug)?.component ?? null;
