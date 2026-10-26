# End-to-end tests

Install dependencies and browsers once:

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium firefox webkit
```

On Linux, use `pnpm exec playwright install --with-deps chromium firefox webkit` to include browser system dependencies.

Run the entire suite:

```sh
pnpm test
```

Playwright builds the app and starts a dedicated Vite preview server at `http://127.0.0.1:4173`. Keep that port free; an existing server is deliberately not reused, so tests always exercise a fresh production build. The server stops when testing completes.

Useful commands:

```sh
pnpm exec playwright test --project=chromium
pnpm exec playwright test tests/e2e/media.spec.ts --project=webkit
pnpm exec playwright test --project=chromium --ui
pnpm exec playwright show-report
```

## Coverage

- Chromium, Firefox, WebKit, Pixel 7 emulation, and iPhone 13 emulation.
- Main navigation, browser history, reloads, homepage calls to action, featured cards, keyboard activation, and desktop/mobile header behavior.
- All five registered project pages, all category filters, exact filtered membership, section anchors, back links, and unknown-project recovery.
- Every screenshot trigger on registered projects, image loading, dialog labels, matching full-size images, click-inside behavior, and Close/Escape/backdrop dismissal. Galleries intentionally disabled below 768px are checked as static images at those widths.
- All client/technical PDF triggers, distinct report sources, valid PDF responses, and dialog dismissal. The browser's native PDF viewer controls are outside the suite's scope.
- Contact labels, invalid email validation, contact destinations, and actual encoded `mailto:` navigation with supplied values and defaults. External-protocol observation uses Chromium's DevTools protocol, so only Chromium projects run `contact-mailto.spec.ts`; run these tests headless. They do not send email.
- Resume content and real PDF downloads, including filenames and PDF signatures.
- Direct loads and horizontal overflow checks for every public route, image response types, image alt attributes, fixed navigation, and featured-card reduced-motion behavior.
- Automatic checks for uncaught page exceptions and first-party HTTP failures in every test.

Tests use accessible roles/labels and independent expected project data. They do not call external demos or send messages, and they do not require external fonts to load. Mobile projects emulate browser/device settings; they do not replace testing on physical devices. This is functional and responsive coverage, not a complete accessibility audit or pixel-by-pixel visual regression suite.

GitHub Actions runs the suite for pull requests and pushes to `master`/`dev`. Failure traces, screenshots, videos, and an HTML report are retained as workflow artifacts. Local reports and browser artifacts are ignored by Git. CI retries failures twice; local runs do not retry.

Configuration follows Playwright's [test configuration](https://playwright.dev/docs/test-configuration) and [web server](https://playwright.dev/docs/test-webserver) documentation.
