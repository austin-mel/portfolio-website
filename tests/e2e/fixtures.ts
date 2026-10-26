import { test as base, expect } from '@playwright/test';

// Catch runtime exceptions and failed first-party responses in every browser flow.
// External fonts/services are not required for the portfolio to function.
export const test = base.extend<{ appHealth: void }>({
  appHealth: [async ({ page, baseURL }, use) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (new URL(response.url()).origin === new URL(baseURL!).origin && response.status() >= 400) {
        errors.push(`${response.status()} ${response.url()}`);
      }
    });
    await use();
    expect(errors, 'No uncaught errors or failed first-party responses').toEqual([]);
  }, { auto: true }],
});

export { expect };
