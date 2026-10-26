import { readFile } from 'node:fs/promises';
import { test, expect } from './fixtures';

test('contact fields are labelled and reject malformed email addresses', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Test Visitor');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('not-an-email');
  await page.getByRole('textbox', { name: 'Subject', exact: true }).fill('A project');
  await page.getByRole('textbox', { name: 'Message', exact: true }).fill('Testing the contact form.');
  await page.getByRole('button', { name: 'Send message', exact: true }).click();
  const email = page.getByRole('textbox', { name: 'Email', exact: true });
  await expect(email).toBeFocused();
  expect(await email.evaluate((input: HTMLInputElement) => input.validity.typeMismatch)).toBe(true);
  await expect(page).toHaveURL('/contact');
  await expect(page.getByRole('textbox', { name: 'Message', exact: true })).toHaveValue('Testing the contact form.');
});

test('contact links point to the intended destinations', async ({ page }) => {
  await page.goto('/contact');
  for (const [name, href] of [
    ['Email austin.mel@mail.com', 'mailto:austin.mel@mail.com'],
    ['Website www.austinmelendez.com', 'https://www.austinmelendez.com'],
    ['LinkedIn austin-melendez', 'https://www.linkedin.com/in/austin-melendez'],
    ['Personal GitHub austin-mel', 'https://github.com/austin-mel'],
    ['Educational GitHub austin-mel-edu', 'https://github.com/austin-mel-edu'],
  ]) {
    const link = page.getByRole('link', { name, exact: true });
    await expect(link).toHaveAttribute('href', href);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noreferrer|noopener/);
  }
});

test('resume has education, experience, and skills', async ({ page }) => {
  await page.goto('/resume');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Austin Meléndez');
  for (const heading of ['Education', 'Industry Project Experience', 'Professional Experience']) {
    await expect(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
  }
  await expect(page.getByText('California State University, Sacramento', { exact: true })).toBeVisible();
  await expect(page.getByText('Programming', { exact: true })).toBeVisible();
});

for (const [label, filename] of [
  ['Download Resume', 'austin-melendez-resume.pdf'],
  ['Download CV', 'austin-melendez-cv.pdf'],
]) {
  test(`${label} downloads a real PDF with the correct filename`, async ({ page }) => {
    await page.goto('/resume');
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: label, exact: true }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(filename);
    expect(await download.failure()).toBeNull();
    const contents = await readFile((await download.path())!);
    expect(contents.subarray(0, 5).toString()).toBe('%PDF-');
    expect(contents.length).toBeGreaterThan(10_000);
    await expect(page).toHaveURL('/resume');
  });
}
