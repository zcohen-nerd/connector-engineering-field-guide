// Connector guide Playwright config, adapted from the shared 2026-08-31 config.
//
// Drives the a11y (axe), keyboard, and responsive suites in this directory against
// the *built* site (`npm run build` then `npm run serve`), so what is tested is
// exactly what deploys. Chromium only — these are smoke checks, not a
// cross-browser matrix.
import {defineConfig, devices} from '@playwright/test';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const PORT = Number(process.env.PW_PORT || 4321);

export default defineConfig({
  testDir: '.',
  outputDir: resolve(root, 'test-results'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 45_000,
  expect: {timeout: 10_000},
  reporter: [
    ['list'],
    ['html', {outputFolder: resolve(root, 'playwright-report'), open: 'never'}],
    [
      'json',
      {outputFile: resolve(root, 'reports/quality/playwright-results.json')},
    ],
  ],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{name: 'chromium', use: {...devices['Desktop Chrome']}}],
  webServer: {
    cwd: root,
    command: `npm run serve -- --port ${PORT} --no-open`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
