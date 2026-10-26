import { test, expect } from './fixtures';
import { projects } from './data';

const filters = [
  { label: 'All', slugs: projects.map(({ slug }) => slug) },
  { label: 'Modeling', slugs: ['baseline-noise', 'science-communication-empathy', 'sirs-simulation'] },
  { label: 'Data Analysis', slugs: ['baseline-noise', 'science-communication-empathy', 'dataguard', 'sirs-simulation'] },
  { label: 'Full-Stack', slugs: ['dataguard', 'pharmatrial'] },
  { label: 'Product', slugs: ['dataguard', 'pharmatrial', 'sirs-simulation'] },
];

test('every filter shows exactly its projects and All restores the list', async ({ page }) => {
  await page.goto('/projects');
  for (const filter of [...filters, filters[0]]) {
    await page.getByRole('button', { name: filter.label, exact: true }).click();
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(
      projects.filter(({ slug }) => filter.slugs.includes(slug)).map(({ title }) => title),
    );
  }
});

for (const project of projects) {
  test(`${project.slug}: list to detail, refresh, and back`, async ({ page }) => {
    await page.goto('/projects');
    await page.getByRole('button').filter({ has: page.getByRole('heading', { name: project.title, exact: true }) }).click();
    await expect(page).toHaveURL(`/projects/${project.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(project.heading);
    await page.reload();
    await expect(page.getByRole('heading', { level: 1 })).toContainText(project.heading);
    await expect(page.getByRole('link', { name: /View .*repository/ }).first()).toHaveAttribute('href', /^https:\/\/github.com\//);
    await page.getByRole('link', { name: 'Back to projects', exact: true }).click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByRole('heading', { level: 2 })).toHaveCount(projects.length);
  });

  test(`${project.slug}: section links target real content`, async ({ page }) => {
    await page.goto(`/projects/${project.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const links = page.locator('a[href^="#"]');
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      const hash = await link.getAttribute('href');
      expect(hash).not.toBe('#');
      await expect(page.locator(hash!)).toHaveCount(1);
    }
    const first = links.first();
    const hash = await first.getAttribute('href');
    await first.click();
    await expect.poll(() => new URL(page.url()).hash).toBe(hash);
    await expect(page.locator(hash!)).toBeInViewport();
  });
}

test('unknown project shows a recoverable fallback', async ({ page }) => {
  await page.goto('/projects/does-not-exist');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This project page does not exist yet.');
  await expect(page.getByText('does-not-exist', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Back to projects' }).click();
  await expect(page).toHaveURL('/projects');
  await expect(page.getByRole('heading', { level: 2 })).toHaveCount(projects.length);
});
