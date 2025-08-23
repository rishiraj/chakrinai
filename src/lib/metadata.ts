import { Metadata } from 'next';

interface SEOConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

const defaultConfig = {
  title: "Chakri Nai - India's First Roast Comedy Job Pitch Show",
  description: "Where job seekers get made, not broken. Join India's most entertaining career development platform featuring expert roast masters and real opportunities.",
  image: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  url: '/',
  type: 'website' as const,
};

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = defaultConfig.title,
    description = defaultConfig.description,
    image = defaultConfig.image,
    url = defaultConfig.url,
    type = defaultConfig.type,
    publishedTime,
    modifiedTime,
    authors,
    tags,
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com';
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: tags || [
      'job pitch',
      'roast comedy',
      'career development',
      'startup',
      'comedy show',
      'job seekers',
      'India',
      'entertainment',
      'professional development',
      'pitch competition'
    ],
    authors: authors?.map(name => ({ name })) || [{ name: "Chakri Nai Team" }],
    creator: "Chakri Nai",
    publisher: "Chakri Nai",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Chakri Nai',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@chakrinaishow',
      site: '@chakrinaishow',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredData(config: {
  type: 'Organization' | 'Event' | 'WebSite';
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  startDate?: string;
  endDate?: string;
  location?: {
    name: string;
    address: string;
  };
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com';

  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': config.type,
    name: config.name,
    description: config.description,
    url: config.url ? `${baseUrl}${config.url}` : baseUrl,
  };

  switch (config.type) {
    case 'Organization':
      return {
        ...baseStructure,
        logo: config.logo ? `${baseUrl}${config.logo}` : `${baseUrl}/assets/logo.png`,
        sameAs: config.sameAs || [
          'https://instagram.com/chakrinaishow',
          'https://twitter.com/chakrinaishow',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'chakrinaishow@gmail.com',
          contactType: 'customer service',
        },
      };

    case 'Event':
      return {
        ...baseStructure,
        startDate: config.startDate,
        endDate: config.endDate,
        location: config.location ? {
          '@type': 'Place',
          name: config.location.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: config.location.address,
          },
        } : undefined,
        organizer: {
          '@type': 'Organization',
          name: 'Chakri Nai',
          url: baseUrl,
        },
      };

    case 'WebSite':
      return {
        ...baseStructure,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    default:
      return baseStructure;
  }
}
