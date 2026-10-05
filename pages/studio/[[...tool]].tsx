/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio/client-component';
import { ComponentProps, useEffect, useState } from 'react';
import Script from 'next/script';

export default function StudioPage() {
  const [config, setConfig] = useState<ComponentProps<typeof NextStudio>['config']>();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) return;
    import('../../sanity.config').then(({ default: studioConfig }) => setConfig(studioConfig));
  }, []);

  return (
    <>
      <Head>
        <meta name="referrer" content="same-origin" />
        <meta name="robots" content="noindex" />
      </Head>
      {config ? (
        <>
          <Script src="https://core.sanity-cdn.com/bridge.js" type="module" data-sanity-core />
          <NextStudio config={config} />
        </>
      ) : (
        <main className="grid min-h-screen place-items-center bg-black p-8 text-center text-white">
          Sanity Studio configuration: NEED TO BE FILLED
        </main>
      )}
    </>
  );
}
