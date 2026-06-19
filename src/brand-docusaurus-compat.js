// Proxy: re-exports @docusaurus/core named exports used by @zcohen-nerd/brand.
//
// @docusaurus/core has no main/exports/index.js, so rspack cannot resolve bare
// `import {...} from '@docusaurus/core'` imports when the package is installed
// via a Windows junction (file: local dep). Docusaurus does alias individual
// exports like @docusaurus/useDocusaurusContext, so this proxy bridges them.
//
// Remove this file when @zcohen-nerd/brand is updated to use the individual
// @docusaurus/* aliases instead of @docusaurus/core directly.
export {default as useDocusaurusContext} from '@docusaurus/useDocusaurusContext';
