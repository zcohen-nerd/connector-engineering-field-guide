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

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Professional Connector Guide',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          href: 'https://zcohen-nerd.github.io/',
          label: 'zcohen-nerd',
          position: 'right',
        },
        {
          href: 'https://github.com/zcohen-nerd/connector-engineering-field-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {label: 'Home', to: '/'},
            {label: 'How to Search', to: '/00-how-to-search-for-connectors'},
            {label: 'Selection Workflow', to: '/04-connector-selection-workflow'},
            {label: 'MIL-DTL-38999', to: '/07-mil-dtl-38999'},
            {label: 'M12 Deep Dive', to: '/08-m12'},
            {label: 'Quick Reference', to: '/appendix/quick-reference-tables'},
          ],
        },
        {
          title: 'zcohen-nerd ecosystem',
          items: [
            {label: 'zcohen-nerd hub', href: 'https://zcohen-nerd.github.io/'},
            {label: 'GitHub', href: 'https://github.com/zcohen-nerd'},
          ],
        },
      ],
      copyright: 'A <a href="https://zcohen-nerd.github.io/">zcohen-nerd</a> technical guide by Zac Cohen. Licensed <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
