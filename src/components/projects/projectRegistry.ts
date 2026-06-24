import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';

export type ProjectFilterId = 'all' | 'modeling' | 'product' | 'simulation' | 'analysis';
export type ProjectCategory = Exclude<ProjectFilterId, 'all'>;
export type ProjectTagType = 'report' | 'dashboard' | 'liveDemo' | 'modeling' | 'simulation';

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
    tags: ['modeling', 'report'],
    stack: ['Python', 'Statistics', 'MLE', 'Notebooks'],
    sourceMockup: 'src/reference/baseline-noise-project-mockup.html',
    summary:
      'Model Prisma Pro mass spectrometer baseline noise and explain why dwell-time-specific correction is required.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/BaselineNoiseProjectPage.vue')),
  },
  {
    slug: 'pharmatrial',
    num: '02',
    title: 'Pharmatrial Clinical Trial Portal',
    short: 'Role-aware Vue prototype for blinded clinical trial collaboration.',
    category: 'Front-End Systems Prototype',
    filter: 'product',
    tags: ['dashboard', 'liveDemo'],
    stack: ['Vue', 'TypeScript', 'Pinia', 'Tailwind'],
    sourceMockup: 'src/reference/pharmatrial-project-mockup.html',
    summary:
      'Show a role-aware clinical trial operations prototype with lifecycle guardrails, privacy boundaries, and blinded assignment.',
    component: defineAsyncComponent(() => import('@/components/projects/ProjectPage/PharmatrialProjectPage.vue')),
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;

export const getProjectComponent = (slug: string) => getProjectBySlug(slug)?.component ?? null;
