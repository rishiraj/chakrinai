import Head from 'next/head';
import { generateCanonicalUrl, getOGImageForSection, ogImageConfigs } from '@/lib/og-utils';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  section?: keyof typeof ogImageConfigs;
  noIndex?: boolean;
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

/**
 * Comprehensive SEO Head component for adding meta tags to any page
 * This component should be used in pages that need custom SEO settings
 */
export default function SEOHead({
  title,
  description,
  image,
  url = '/',
  section,
  noIndex = false,
  additionalMeta = [],
}: SEOHeadProps) {
  // Use section-specific defaults if section is provided
  const sectionConfig = section ? ogImageConfigs[section] : null;

  const finalTitle = title || sectionConfig?.title || "Chakri Nai - India's First Roast Comedy Job Pitch Show";
  const finalDescription = description || sectionConfig?.subtitle || "Where job seekers get made, not broken. Join India's most entertaining career development platform.";
  const finalImage = image || 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png';

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com';
  const canonicalUrl = generateCanonicalUrl(url);
  const fullImageUrl = finalImage.startsWith('http') ? finalImage : `${baseUrl}${finalImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Chakri Nai" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:creator" content="@chakrinaishow" />
      <meta property="twitter:site" content="@chakrinaishow" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#bd2f21" />
      <meta name="msapplication-TileColor" content="#bd2f21" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Chakri Nai" />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      {/* Custom Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta
          key={index}
          {...(meta.name ? { name: meta.name } : {})}
          {...(meta.property ? { property: meta.property } : {})}
          content={meta.content}
        />
      ))}
    </Head>
  );
}

// Pre-configured SEO components for different sections
export function HomeSEOHead() {
  return (
    <SEOHead
      section="main"
      url="/"
    />
  );
}

export function HowItWorksSEOHead() {
  return (
    <SEOHead
      section="howItWorks"
      url="/#how-it-works"
      title="How It Works - Chakri Nai"
      description="From pitch to roast - discover your journey to success. Learn how our unique 3-step process helps job seekers get made, not broken."
    />
  );
}

export function RoastMastersSEOHead() {
  return (
    <SEOHead
      section="roastMasters"
      url="/#roast-masters"
      title="Meet Our Roast Masters - Chakri Nai"
      description="Industry experts who will make or break you. Meet the founders, comedians, and professionals who provide the feedback that matters."
    />
  );
}

export function TestimonialsSEOHead() {
  return (
    <SEOHead
      section="testimonials"
      url="/#testimonials"
      title="Success Stories - Chakri Nai"
      description="Real people, real results, real roasts. Discover how our participants transformed their careers through our unique approach."
    />
  );
}
