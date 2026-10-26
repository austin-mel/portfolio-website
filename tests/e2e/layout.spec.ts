import { test, expect } from './fixtures';
import { routes } from './data';

for (const route of routes) {
  test(`${route}: direct load, responsive layout, and image assets`, async ({ page, request }) => {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeInViewport();
    for (const button of await nav.getByRole('button').all()) await expect(button).toBeInViewport();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    const images = await page.locator('img').evaluateAll((nodes: HTMLImageElement[]) =>
      nodes.map((img) => ({ src: img.src, alt: img.getAttribute('alt') })),
    );
    for (const image of images) expect(image.alt, `${image.src} has alt text`).not.toBeNull();
    for (const src of new Set(images.map((img) => img.src))) {
      if (src.startsWith('data:')) {
        expect(await page.evaluate(async (source) => {
          const image = new Image();
          image.src = source;
          await image.decode();
          return image.naturalWidth > 0;
        }, src), 'Bundled data image decodes').toBe(true);
        continue;
      }
      const response = await request.get(src);
      expect(response.ok(), src).toBe(true);
      expect(response.headers()['content-type'], src).toMatch(/^image\//);
    }
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
    await expect(nav).toBeInViewport();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  });
}

test('featured cards respect reduced motion while remaining usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const card = page.getByRole('link', { name: 'Identifying Baseline Noise Distribution', exact: true });
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveCSS('opacity', '1');
  await expect(card).toHaveCSS('transition-property', 'none');
  await expect(card).toHaveCSS('transform', 'none');
  await card.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/projects/baseline-noise');
});
