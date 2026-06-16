import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';

export type ProjectFilterId = 'all' | 'modeling' | 'product' | 'simulation' | 'analysis';
export type ProjectCategory = Exclude<ProjectFilterId, 'all'>;

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
  badge: string;
  stack: string[];
  sourceMockup?: string;
  summary: string;
  component: Component;
}

export const projectFilters: ProjectFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'modeling', label: 'Modeling' },
  { id: 'product', label: 'Product' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'analysis', label: 'Analysis' },
];

export const projects: ProjectRegistryEntry[] = [
  {
    slug: 'pharmatrial',
    num: '01',
    title: 'Pharmatrial Clinical Trial Portal',
    short: 'Role-aware Vue prototype for blinded clinical trial collaboration.',
    category: 'Front-End Systems Prototype',
    filter: 'product',
    badge: 'Product',
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
