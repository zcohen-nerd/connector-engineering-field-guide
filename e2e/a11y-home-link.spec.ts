// Regression guard for the Navbar wordmark / home link.
//
// History: the link carried aria-label="Connector Field Guides home", which
// replaced the visible wordmark ("A zcohen-nerd technical guide" /
// "Connector Field Guides") in its accessible name and tripped axe's
// label-content-name-mismatch rule. It now exposes the visible text plus a
// visually-hidden " — home page" purpose clause.
//
// This runs in the `test:a11y` selection (filename contains "a11y") so a
// re-introduction of the mismatch is caught even though the broad a11y job is
// still continue-on-error during acceptance triage.
import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home route has no label-content-name-mismatch', async ({page}) => {
  await page.goto('/', {waitUntil: 'load'});
  await page.waitForLoadState('networkidle').catch(() => {});

  const {violations} = await new AxeBuilder({page})
    .withRules(['label-content-name-mismatch'])
    .analyze();

  const summary = violations
    .flatMap((v) => v.nodes.map((n) => `${v.id} — ${n.target.join(' ')}`))
    .join('\n  ');
  expect(violations, `label-content-name-mismatch:\n  ${summary}`).toEqual([]);
});

test('wordmark home link keeps its visible text and still says "home"', async ({
  page,
}) => {
  await page.goto('/', {waitUntil: 'load'});

  // Found by accessible name: must contain both visible wordmark lines AND a
  // "home" purpose token, in the header.
  const homeLink = page.locator('header').getByRole('link', {
    name: /A zcohen-nerd technical guide[\s\S]*Connector Field Guides[\s\S]*home/i,
  });
  await expect(homeLink).toBeVisible();
  await expect(homeLink).toHaveAttribute(
    'href',
    /\/connector-engineering-field-guide\/$/,
  );
  // The purpose text is supplied by content, not by an overriding aria-label.
  await expect(homeLink).not.toHaveAttribute('aria-label', /.+/);
});
