import Head from 'next/head';
import { generateCanonicalUrl, generateTwitterCardMeta, generateFacebookMeta, commonMetaTags } from '@/lib/og-utils';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
  additionalMeta?: Record<string, string>;
}

export default function MetaTags({
  title = "Chakri Nai - India's First Roast Comedy Job Pitch Show",
  description = "Where job seekers get made, not broken. Join India's most entertaining career development platform featuring expert roast masters and real opportunities.",
  image = 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  url = '/',
  type = 'website',
  noIndex = false,
  additionalMeta = {},
}: MetaTagsProps) {
  const canonicalUrl = generateCanonicalUrl(url);
  const fullImageUrl = image.startsWith('http') ? image : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com'}${image}`;

  const twitterMeta = generateTwitterCardMeta({
    title,
    description,
    image: fullImageUrl,
  });

  const facebookMeta = generateFacebookMeta({
    title,
    description,
    image: fullImageUrl,
    url: canonicalUrl,
    type,
  });

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Common Meta Tags */}
      {Object.entries(commonMetaTags).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Open Graph / Facebook */}
      {Object.entries(facebookMeta).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}

      {/* Twitter */}
      {Object.entries(twitterMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Additional Meta Tags */}
      {Object.entries(additionalMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

// Pre-configured meta tag components for different sections
interface SectionMetaTagsProps {
  additionalMeta?: Record<string, string>;
}

export function HomeMetaTags({ additionalMeta }: SectionMetaTagsProps = {}) {
  return (
    <MetaTags
      title="Chakri Nai - India's First Roast Comedy Job Pitch Show"
      description="Where job seekers get made, not broken. Join India's most entertaining career development platform featuring expert roast masters and real opportunities."
      image="https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png"
      url="/"
      additionalMeta={additionalMeta}
    />
  );
}

export function HowItWorksMetaTags({ additionalMeta }: SectionMetaTagsProps = {}) {
  return (
    <MetaTags
      title="How It Works - Chakri Nai"
      description="From pitch to roast - discover your journey to success. Learn how our unique 3-step process helps job seekers get made, not broken."
      image="https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png"
      url="/#how-it-works"
      additionalMeta={additionalMeta}
    />
  );
}

export function RoastMastersMetaTags({ additionalMeta }: SectionMetaTagsProps = {}) {
  return (
    <MetaTags
      title="Meet Our Roast Masters - Chakri Nai"
      description="Industry experts who will make or break you. Meet the founders, comedians, and professionals who provide the feedback that matters."
      image="https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png"
      url="/#roast-masters"
      additionalMeta={additionalMeta}
    />
  );
}

export function TestimonialsMetaTags({ additionalMeta }: SectionMetaTagsProps = {}) {
  return (
    <MetaTags
      title="Success Stories - Chakri Nai"
      description="Real people, real results, real roasts. Discover how our participants transformed their careers through our unique approach."
      image="https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png"
      url="/#testimonials"
      additionalMeta={additionalMeta}
    />
  );
}
