export type BadgeClass = 'b-blue' | 'b-green' | 'b-amber' | 'b-purple' | 'b-demo';

export type ProjectCategory = 'dashboard' | 'pipeline' | 'ml' | 'automation';

export type DrawFnName =
  | 'drawDash'
  | 'drawPipe'
  | 'drawML'
  | 'drawDistribution'
  | 'drawClinicalTrial'
  | 'drawSurveyAnalysis'
  | 'drawSelf'
  | 'drawGeo'
  | 'drawBot';

export interface Badge {
  t: string;
  c: BadgeClass;
}

export interface ImpactStat {
  n: string;
  d: string;
}

export interface Project {
  id: number;
  num: string;
  title: string;
  short: string;
  desc: string;
  cat: ProjectCategory;
  badge: Badge;
  stack: string[];
  type: string;
  impact: ImpactStat[];
  hasDemo: boolean;
  hasReport: boolean;
  color: string;
  draw: DrawFnName;
}

export type FilterValue = ProjectCategory | 'all';

export type AppIconName =
  | 'add'
  | 'arrowBack'
  | 'arrowForward'
  | 'chart'
  | 'check'
  | 'close'
  | 'cloud'
  | 'code'
  | 'communication'
  | 'database'
  | 'error'
  | 'lightning'
  | 'menu'
  | 'model'
  | 'science'
  | 'shield'
  | 'trash'
  | 'uploadFile'
  | 'visibilityOff';

export interface NavItem {
  id: 'home' | 'projects' | 'resume' | 'contact';
  label: string;
  path: string;
}

export interface SkillCategory {
  icon: AppIconName;
  title: string;
  pills: { name: string; highlight: boolean }[];
  delay?: number;
}

export interface JobEntry {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  company: string;
  description: string;
  delay?: number;
}

export interface ContactLink {
  icon: AppIconName;
  label: string;
  value: string;
}

export interface FactRow {
  key: string;
  value: string;
  highlight?: boolean;
}

export interface Pillar {
  icon: AppIconName;
  title: string;
  desc: string;
}

export type CanvasDrawFn = (canvas: HTMLCanvasElement, color: string) => void;
