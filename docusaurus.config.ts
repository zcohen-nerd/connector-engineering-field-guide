import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Connector Field Guides',
  tagline: 'Practical connector selection for hobby projects and engineered hardware.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://zcohen-nerd.github.io',
  baseUrl: '/connector-engineering-field-guide/',

  organizationName: 'zcohen-nerd',
  projectName: 'connector-engineering-field-guide',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // CRITICAL: .md files use CommonMark parser, not MDX v3.
  // Required to preserve <!-- TODO: source/verify --> HTML comments
  // without MDX parse errors.
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Shared brand package: provides @theme/Navbar and @theme/Footer.
  // Reads customFields.brand below for project-aware configuration.
  themes: ['@zcohen-nerd/brand'],

  customFields: {
    brand: {
      projectName: 'Connector Field Guides',
      projectFamily: 'technical-guide',
      projectBadge: 'A zcohen-nerd technical guide',
      // The brand Navbar renders the top-left logo as <a href={brand.hubUrl}>.
      // Point it at this site's landing page so "home" stays on the guide;
      // the Portfolio remains reachable via connectLinks (footer) and the
      // Projects switcher.
      hubUrl: 'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      projectUrl: 'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      repoUrl: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
      attribution: 'A zcohen-nerd technical guide by Zac Cohen.',
      isHub: false,
      // TODO(brand-package): custom top-nav links (Start / Hobby / Engineering /
      // Source Notes) are not possible today — the brand Navbar renders
      // brand.navLinks ONLY in hub mode (isHub: true); project mode renders
      // projectBadge instead (verified in @zcohen-nerd/brand Navbar source).
      // Supporting project-mode navLinks is a feature request against the
      // brand package, not this repo. Navigation runs via sidebars + landing.
      navLinks: [],
      connectLinks: [
        {
          label: 'GitHub',
          href: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
        },
        {
          label: 'zcohen-nerd Portfolio',
          href: 'https://zcohen-nerd.github.io/Portfolio/',
        },
      ],
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // themeConfig.navbar and themeConfig.footer are intentionally omitted:
  // the @zcohen-nerd/brand theme provides @theme/Navbar and @theme/Footer
  // and is configured via customFields.brand above.
  themeConfig: {
    image: 'img/og-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
