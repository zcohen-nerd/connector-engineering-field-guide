import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Hobby track — new in v0.8.
  hobbySidebar: [
    'hobby/hobby-index',
    'hobby/big-idea',
    'hobby/identify-unknown-connector',
    'hobby/jst-is-not-one-connector',
    'hobby/pitch',
    {
      type: 'category',
      label: 'Common Hobby Connector Families',
      link: {type: 'doc', id: 'hobby/families'},
      collapsed: false,
      items: ['hobby/jst-sm-led-connectors'],
    },
    'hobby/power-vs-signal',
    'hobby/crimping',
    'hobby/connector-kits',
    'hobby/buying-mating-parts',
    'hobby/when-hobby-is-not-enough',
    'hobby-or-professional',
    'hobby/decision-guide',
    'hobby/hobby-source-notes',
    {
      type: 'link',
      label: 'Glossary (shared)',
      href: '/connector-engineering-field-guide/glossary',
    },
    {
      type: 'link',
      label: 'Identification Workflow (shared)',
      href: '/connector-engineering-field-guide/connector-identification',
    },
  ],

  // Professional / industrial track — the original guide, URLs unchanged.
  // The site root (docs/index.md) is the two-track landing page and is
  // intentionally in no sidebar.
  guideSidebar: [
    'engineering-home',
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: ['00-how-to-search-for-connectors'],
    },
    {
      type: 'category',
      label: 'Decision Paths',
      link: {type: 'doc', id: 'decision-paths/decision-paths-index'},
      collapsed: false,
      items: [
        'decision-paths/industrial-sensor',
        'decision-paths/rugged-ethernet',
        'decision-paths/internal-pcb-harnessing',
        'decision-paths/rugged-on-a-budget',
        'decision-paths/high-current-dc-power',
        'decision-paths/sealed-enclosure-feedthrough',
        'decision-paths/debug-service-port',
        'decision-paths/defense-rugged-external-io',
        'decision-paths/removable-machine-module',
        'decision-paths/rf-gps-radio',
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      items: [
        '01-what-connectors-do',
        '02-major-connector-categories',
        '03-connector-standards-and-families',
        '04-connector-selection-workflow',
        '05-connector-anatomy',
        '06-reading-datasheets',
        '07-mil-dtl-38999',
        'mil-dtl-26482',
        '08-m12',
        '09-decision-examples',
        '10-selection-checklist',
        '11-red-flags',
        '12-consumer-hobby-prototype-connectors',
        '13-hands-on-exercises',
        '14-thirty-day-learning-plan',
      ],
    },
    'what-people-forget',
    'connector-identification',
    'glossary',
    {
      type: 'category',
      label: 'Tools & Templates',
      link: {type: 'doc', id: 'tools/tools-index'},
      collapsed: false,
      items: [
        'tools/connector-selection-checklist',
        'tools/connector-comparison-matrix',
        'tools/cable-drawing-template',
        'tools/connector-icd-template',
        'tools/design-review-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: {type: 'doc', id: 'examples/examples-index'},
      collapsed: false,
      items: ['examples/rugged-control-box', 'examples/connector-selection-packet'],
    },
    {
      type: 'category',
      label: 'Appendix',
      collapsed: false,
      items: ['appendix/quick-reference-tables', 'appendix/source-notes'],
    },
    'usage-and-attribution',
  ],
};

export default sidebars;
