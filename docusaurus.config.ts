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

  // Icons + a minimal, non-PWA web manifest (display: "browser", no service
  // worker). Docusaurus already emits <link rel="icon"> from `favicon`.
  // hrefs carry the baseUrl prefix because headTags entries are not
  // auto-prefixed. Per-doc TechArticle JSON-LD lives in
  // src/theme/DocItem/Layout/index.tsx.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/connector-engineering-field-guide/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/connector-engineering-field-guide/site.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', content: '#0a1428'},
    },
    // Search Console verification — paste the token from Google Search Console /
    // Bing Webmaster Tools and uncomment, then rebuild. See
    // SEARCH-CONSOLE-CHECKLIST.md. (No console change has been made.)
    // {tagName: 'meta', attributes: {name: 'google-site-verification', content: 'REPLACE_ME'}},
    // {tagName: 'meta', attributes: {name: 'msvalidate.01', content: 'REPLACE_ME'}},
  ],

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
      hubUrl: 'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      projectUrl: 'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      repoUrl: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
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
