import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof LayoutType>;

/**
 * Guide-scoped structured data.
 *
 * This wrapper only renders inside a documentation page (every route on this
 * site is guide content — there is no blog and no custom src/pages), so the
 * TechArticle JSON-LD below is always about an actual guide article.
 *
 * Deliberately minimal and only fields that are reliably generated:
 *   - headline / description  — the page's own frontmatter-derived metadata
 *   - url                     — the canonical URL Docusaurus already emits
 *   - image                   — the site-wide OG card (the real fallback image)
 *   - author                  — a real named person (see CITATION.cff / README)
 *   - license                 — the content license (CC BY 4.0)
 *   - isPartOf                — the guide as a CreativeWork
 *
 * No dateModified/datePublished: the site has no git-based "last updated"
 * time and CI checks out shallow, so any date here would be unreliable.
 * No Organization block, no review, no rating.
 */
export default function LayoutWrapper(props: Props): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const {metadata} = useDoc();

  const siteRoot = `${siteConfig.url}${siteConfig.baseUrl}`;
  const canonicalUrl = `${siteConfig.url}${metadata.permalink}`;

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    url: canonicalUrl,
    image: `${siteRoot}img/og-card.png`,
    inLanguage: 'en',
    author: {'@type': 'Person', name: 'Zac Cohen'},
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isPartOf: {
      '@type': 'CreativeWork',
      name: 'Connector Field Guides',
      url: siteRoot,
    },
  };
  if (metadata.description) {
    jsonLd.description = metadata.description;
  }

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <Layout {...props} />
    </>
  );
}
