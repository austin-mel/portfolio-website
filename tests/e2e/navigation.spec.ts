import { test, expect } from './fixtures';
import { projects } from './data';

test('main navigation, browser history, reloads, and footer', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Data-driven');
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  for (const [label, path, heading] of [
    ['Projects', '/projects', 'Projects'],
    ['Resume', '/resume', 'Austin Meléndez'],
    ['Contact', '/contact', "Let's build"],
    ['Home', '/', 'Data-driven'],
  ]) {
    await nav.getByRole('button', { name: label, exact: true }).click();
    await expect(page).toHaveURL(path);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(heading);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  }
  await page.goBack();
  await expect(page).toHaveURL('/contact');
  await page.goForward();
  await expect(page).toHaveURL('/');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Data-driven');
  await expect(page.getByRole('contentinfo')).toContainText(`${new Date().getFullYear()}`);
  await expect(page.getByRole('contentinfo').getByRole('link')).toHaveAttribute('href', 'https://austinmelendez.com/');
});

for (const [label, path] of [
  ['View my work', '/projects'], ['Download resume', '/resume'],
  ['See all projects', '/projects'], ['Get in touch', '/contact'], ['See my work!', '/projects'],
]) {
  test(`homepage action: ${label}`, async ({ page }) => {
    await page.goto('/');
    const action = page.getByRole('button', { name: label, exact: true });
    await action.scrollIntoViewIfNeeded();
    // Scrolling starts reveal animations on either the button or its container.
    await expect.poll(() => action.evaluate((element) => {
      for (let node: Element | null = element; node; node = node.parentElement) {
        if (Number(getComputedStyle(node).opacity) < 1) return false;
      }
      return true;
    })).toBe(true);
    await action.click();
    await expect(page).toHaveURL(path);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
}

test('featured cards reveal on scroll and open their matching projects', async ({ page }) => {
  for (const project of projects.filter(({ slug }) => ['baseline-noise', 'dataguard', 'science-communication-empathy'].includes(slug))) {
    await page.goto('/');
    const target = page.getByRole('link', { name: project.title, exact: true });
    await target.scrollIntoViewIfNeeded();
    await expect(target).toHaveCSS('opacity', '1');
    const image = target.getByRole('img');
    await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
    await target.click();
    await expect(page).toHaveURL(`/projects/${project.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

test('keyboard navigation activates a main navigation button', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('button', { name: 'Home', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/projects');
});

test('hire button follows its desktop breakpoint', async ({ page }) => {
  await page.goto('/');
  const hire = page.getByRole('button', { name: 'Hire me!' });
  if (page.viewportSize()!.width < 1024) {
    await expect(hire).toBeHidden();
  } else {
    await hire.click();
    await expect(page).toHaveURL('/contact');
  }
});
