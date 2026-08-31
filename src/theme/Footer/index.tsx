import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';

type Props = WrapperProps<typeof FooterType>;

/**
 * Wraps the shared @zcohen-nerd/brand footer with a guide-specific
 * dual-license line. The split (content = CC BY 4.0, code = MIT) is stated
 * here, in the README, and on the Usage & Attribution page; this only makes it
 * visible in site chrome. It does not restate or change any license term —
 * `LICENSE` and `LICENSE-CODE` remain authoritative.
 */
export default function FooterWrapper(props: Props): React.ReactElement {
  return (
    <>
      <Footer {...props} />
      <div className="cn-footer-license">
        <p>
          <strong>Dual-licensed.</strong> Guide content (everything under{' '}
          <code>docs/</code>, including the templates) is{' '}
          <Link to="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </Link>
          ; site code and configuration are{' '}
          <Link to="https://opensource.org/license/mit">MIT</Link>. Reuse with
          credit: <em>A zcohen-nerd technical guide by Zac Cohen.</em>{' '}
          <Link to="/usage-and-attribution">Usage &amp; attribution →</Link>
        </p>
      </div>
    </>
  );
}
