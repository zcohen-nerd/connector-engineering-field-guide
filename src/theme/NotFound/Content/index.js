import Content from '@theme-original/NotFound/Content';
import Head from '@docusaurus/Head';

/**
 * Wraps the default 404 content only to add `noindex`. GitHub Pages still
 * serves build/404.html with a real HTTP 404, and the default body keeps its
 * "back to home" recovery link; this just keeps the soft-404 page out of
 * search indexes while letting crawlers follow that link.
 */
export default function NotFoundContentWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Content {...props} />
    </>
  );
}
