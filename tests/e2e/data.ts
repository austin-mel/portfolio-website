// Explicit user-facing expectations, independent of the app's project registry.
export const projects = [
  { slug: 'baseline-noise', title: 'Identifying Baseline Noise Distribution', heading: /Identifying and quantifying background noise/ },
  { slug: 'science-communication-empathy', title: 'Empathy in Scientific Communication', heading: /Evaluating measured empathy/ },
  { slug: 'dataguard', title: 'Dataguard Dataset Management Platform', heading: /Dataguard connects flagged values/ },
  { slug: 'pharmatrial', title: 'Pharmaceutical Clinical Trial Portal', heading: /Coordinating a clinical trial/ },
  { slug: 'sirs-simulation', title: 'SIRS Matrix-Based Epidemic Simulation', heading: /Exploring epidemic models/ },
];

export const routes = ['/', '/projects', '/resume', '/contact', ...projects.map(({ slug }) => `/projects/${slug}`)];
