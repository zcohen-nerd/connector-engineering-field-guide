import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Connector Field Guides',
  tagline:
    'Practical connector selection for hobby projects and engineered hardware.',
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
  onBrokenAnchors: 'throw',

  // CRITICAL: .md files use CommonMark parser, not MDX v3.
  // Required to preserve <!-- TODO: source/verify --> HTML comments
  // without MDX parse errors.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Shared brand package: provides the Footer, design tokens, and canonical
  // ecosystem registry. The site-specific Navbar override in src/theme/Navbar
  // reads the same customFields.brand values below.
  themes: ['@zcohen-nerd/brand'],

  customFields: {
    brand: {
      projectName: 'Connector Field Guides',
      projectFamily: 'technical-guide',
      projectBadge: 'A zcohen-nerd technical guide',
      // Keep the project URLs canonical for the header's current-project state
      // and the shared footer links.
      hubUrl:
        'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      projectUrl:
        'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      repoUrl:
        'https://github.com/zcohen-nerd/connector-engineering-field-guide',
      attribution: 'A zcohen-nerd technical guide by Zac Cohen.',
      isHub: false,
      // Local primary navigation lives in src/theme/Navbar. Keep this field for
      // compatibility with the shared brand package.
      navLinks: [],
      connectLinks: [
        {
          label: 'GitHub',
          href: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
        },
        {
          label: 'zcohen-nerd Portfolio',
          href: 'https://portfolio.zcohen-nerd.com/',
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

  // themeConfig.navbar and themeConfig.footer are intentionally omitted. The
  // local @theme/Navbar override and shared brand Footer both read the brand
  // configuration above.
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
