import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Professional Connector Guide',
  tagline: 'Practical connector selection for rugged, industrial, military-style, and electromechanical systems.',
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
      projectName: 'Professional Connector Guide',
      projectFamily: 'technical-guide',
      projectBadge: 'A zcohen-nerd technical guide',
      hubUrl: 'https://zcohen-nerd.github.io/',
      projectUrl: 'https://zcohen-nerd.github.io/connector-engineering-field-guide/',
      repoUrl: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
      attribution: 'A zcohen-nerd technical guide by Zac Cohen.',
      isHub: false,
      navLinks: [],
      connectLinks: [
        {
          label: 'GitHub',
          href: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
        },
        {
          label: 'zcohen-nerd',
          href: 'https://zcohen-nerd.github.io/',
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
