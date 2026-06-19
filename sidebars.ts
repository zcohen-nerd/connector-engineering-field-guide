import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'index',
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: ['00-how-to-search-for-connectors'],
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
        '08-m12',
        '09-decision-examples',
        '10-selection-checklist',
        '11-red-flags',
        '12-consumer-hobby-prototype-connectors',
        '13-hands-on-exercises',
        '14-thirty-day-learning-plan',
      ],
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
