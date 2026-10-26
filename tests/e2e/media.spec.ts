import { test, expect } from './fixtures';
import { projects } from './data';

for (const project of projects) {
  test(`${project.slug}: screenshots load and lightboxes open and dismiss`, async ({ page }) => {
    await page.goto(`/projects/${project.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const triggers = page.getByRole('button', { name: /^Open full-size screenshot:/ });
    expect(await triggers.count()).toBeGreaterThanOrEqual(3);
    for (const trigger of await triggers.all()) {
      await trigger.scrollIntoViewIfNeeded();
      const thumbnail = trigger.getByRole('img');
      await expect.poll(() => thumbnail.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
      // Some project galleries intentionally show static images below md.
      if (page.viewportSize()!.width < 768 && await trigger.evaluate((el) => getComputedStyle(el).pointerEvents) === 'none') {
        await expect(page.getByRole('dialog')).toHaveCount(0);
        continue;
      }
      const title = (await trigger.getAttribute('aria-label'))!.replace('Open full-size screenshot: ', '');
      await trigger.click();
      const dialog = page.getByRole('dialog', { name: `${title} full-size screenshot`, exact: true });
      await expect(dialog).toBeVisible();
      await expect(dialog).toHaveAttribute('aria-modal', 'true');
      await expect(dialog.getByRole('img')).toHaveAttribute('src', (await thumbnail.getAttribute('src'))!);
      await expect.poll(() => dialog.getByRole('img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
      await dialog.getByRole('heading').click();
      await expect(dialog).toBeVisible();
      await dialog.getByRole('button', { name: 'Close', exact: true }).click();
      await expect(dialog).toHaveCount(0);
      await trigger.click();
      await page.keyboard.press('Escape');
      await expect(dialog).toHaveCount(0);
      await trigger.click();
      await dialog.click({ position: { x: 1, y: 1 } });
      await expect(dialog).toHaveCount(0);
    }
  });
}

for (const slug of ['baseline-noise', 'science-communication-empathy']) {
  test(`${slug}: all report buttons open valid PDFs and dialogs dismiss`, async ({ page, request }) => {
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const triggers = page.getByRole('button', { name: /^Open PDF report:/ });
    await expect(triggers).toHaveCount(4);
    const sources = new Set<string>();
    for (const trigger of await triggers.all()) {
      const title = (await trigger.getAttribute('aria-label'))!.replace('Open PDF report: ', '');
      await trigger.click();
      const dialog = page.getByRole('dialog', { name: `${title} PDF report`, exact: true });
      await expect(dialog).toBeVisible();
      await expect(dialog).toHaveAttribute('aria-modal', 'true');
      const viewer = dialog.locator('iframe');
      await expect(viewer).toHaveAttribute('title', `${title} PDF report viewer`);
      const src = (await viewer.getAttribute('src'))!;
      sources.add(src);
      const response = await request.get(src);
      expect(response.ok()).toBe(true);
      expect(response.headers()['content-type']).toContain('application/pdf');
      expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
      await dialog.getByRole('heading').click();
      await expect(dialog).toBeVisible();
      await dialog.getByRole('button', { name: 'Close', exact: true }).click();
      await expect(dialog).toHaveCount(0);
      await trigger.click();
      // Keep keyboard input in the page instead of the browser's native PDF viewer.
      await dialog.getByRole('button', { name: 'Close', exact: true }).focus();
      await page.keyboard.press('Escape');
      await expect(dialog).toHaveCount(0);
      await trigger.click();
      await dialog.click({ position: { x: 1, y: 1 } });
      await expect(dialog).toHaveCount(0);
    }
    expect(sources.size, 'Client and technical reports are distinct PDFs').toBe(2);
  });
}
