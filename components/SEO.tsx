import Head from 'next/head';

const SEO = ({
  title = 'Thrilok Chaitanya | Computer Science Engineer',
  description = 'B.Tech Computer Science and Engineering student at VIT-AP University.',
  image = '/images/need-to-be-filled.svg',
  url,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="default" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Thrilok Chaitanya" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta
        name="keywords"
        content="Thrilok Chaitanya, Computer Science Engineer, Software Developer, AI, Machine Learning, Cybersecurity, React, TypeScript, FastAPI, Python, PostgreSQL"
      />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {url && <link rel="canonical" href={url} />}
    </Head>
  );
};

export default SEO;
