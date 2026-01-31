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
  keywords = 'contractor, estimating, AI, construction software, ROI, takeoff, bidding',
  image = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url = typeof window !== 'undefined' ? window.location.href : 'https://roiedge.ai',
  type = 'website',
  author = 'ROI Edge'
}: SEOProps) {
  const fullTitle = `${title} | ROI Edge – AI Estimating for Contractors`;

  // Ensure no trailing spaces in URLs
  const cleanImage = image.trim();
  const cleanUrl = url.trim();

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={cleanImage} />
      <meta property="og:url" content={cleanUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ROI Edge" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cleanImage} />

      {/* Canonical */}
      <link rel="canonical" href={cleanUrl} />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ROI Edge',
          description: 'AI-powered estimating and takeoff software for construction contractors',
          url: 'https://roiedge.ai',
          logo: cleanImage,
          sameAs: [
            'https://twitter.com/roiedge', // update if different
            'https://facebook.com/roiedge',
            'https://linkedin.com/company/roi-edge'
          ]
        })}
      </script>

      {/* SEO Directives */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="cache-control" content="public, max-age=3600" />
    </Helmet>
  );
}