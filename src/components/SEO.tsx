import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export default function SEO({
  title,
  description,
  keywords = 'contractor, estimating, AI, software, construction',
  image = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
  url = typeof window !== 'undefined' ? window.location.href : 'https://handoff.example.com',
  type = 'website',
  author = 'Handoff'
}: SEOProps) {
  const fullTitle = `${title} | Handoff - AI Contractor Software`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Handoff" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Handoff',
          description: 'AI-powered estimating software for contractors',
          url: 'https://handoff.example.com',
          logo: image,
          sameAs: [
            'https://twitter.com/handoff',
            'https://facebook.com/handoff',
            'https://linkedin.com/company/handoff'
          ]
        })}
      </script>

      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="cache-control" content="public, max-age=3600" />
    </Helmet>
  );
}
