import { test, expect } from './fixtures';

// Chromium's navigation event lets us inspect the real external-protocol handoff
// without sending email, replacing application code, or opening a mail client.
for (const scenario of [
  {
    name: 'encodes and trims supplied contact details',
    fields: { Name: '  Zoë & Co  ', Email: 'visitor@example.com', Subject: '  Research & data?  ', Message: '  Hello Austin,\nCan we discuss R + Python?  ' },
    subject: 'Research & data?', body: 'Name: Zoë & Co\nEmail: visitor@example.com\n\nHello Austin,\nCan we discuss R + Python?',
  },
  {
    name: 'provides defaults for an empty form', fields: {},
    subject: 'Portfolio contact from website visitor', body: 'Name: Not provided\nEmail: Not provided\n\nNo message provided.',
  },
  {
    name: 'uses the sender name when subject is blank', fields: { Name: '  Visitor  ' },
    subject: 'Portfolio contact from Visitor', body: 'Name: Visitor\nEmail: Not provided\n\nNo message provided.',
  },
]) {
  test(`contact mailto ${scenario.name}`, async ({ page, context }) => {
    await page.goto('/contact');
    for (const [label, value] of Object.entries(scenario.fields)) {
      await page.getByRole('textbox', { name: label, exact: true }).fill(value);
    }
    const session = await context.newCDPSession(page);
    await session.send('Page.enable');
    let mailto = '';
    session.on('Page.frameRequestedNavigation', ({ url }) => {
      if (url.startsWith('mailto:')) mailto = url;
    });
    await page.getByRole('button', { name: 'Send message', exact: true }).click();
    await expect.poll(() => mailto).toMatch(/^mailto:/);
    const url = new URL(mailto);
    expect(url.pathname).toBe('austin.mel@mail.com');
    expect(url.searchParams.get('subject')).toBe(scenario.subject);
    expect(url.searchParams.get('body')).toBe(scenario.body);
    await session.detach();
  });
}
