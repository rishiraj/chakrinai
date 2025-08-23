/**
 * Utility functions for generating Open Graph images and metadata
 */

export interface OGImageConfig {
  title: string;
  subtitle?: string;
  type?: 'main' | 'event' | 'roast-masters' | 'how-it-works' | 'testimonials';
}

/**
 * Generate OG image URL for dynamic images
 */
export function generateOGImageUrl(config: OGImageConfig): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com';
  const params = new URLSearchParams();

  params.set('title', config.title);
  if (config.subtitle) params.set('subtitle', config.subtitle);
  if (config.type) params.set('type', config.type);

  return `${baseUrl}/api/og?${params.toString()}`;
}

/**
 * Pre-configured OG image configurations for different sections
 */
export const ogImageConfigs = {
  main: {
    title: 'Chakri Nai',
    subtitle: "India's First Roast Comedy Job Pitch Show",
    type: 'main' as const,
  },
  howItWorks: {
    title: 'How It Works',
    subtitle: 'From Pitch to Roast - Your Journey to Success',
    type: 'how-it-works' as const,
  },
  roastMasters: {
    title: 'Meet Our Roast Masters',
    subtitle: 'Industry Experts Who Will Make or Break You',
    type: 'roast-masters' as const,
  },
  testimonials: {
    title: 'Success Stories',
    subtitle: 'Real People, Real Results, Real Roasts',
    type: 'testimonials' as const,
  },
  event: {
    title: 'Join the Show',
    subtitle: 'Get Ready to Be Roasted and Rise',
    type: 'event' as const,
  },
} as const;

/**
 * Generate static OG image paths
 */
export const staticOGImages = {
  main: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  square: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  twitter: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  howItWorks: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  roastMasters: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
  testimonials: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
} as const;

/**
 * Get the appropriate OG image URL based on section
 */
export function getOGImageForSection(section: keyof typeof ogImageConfigs): string {
  // Return the Cloudinary image for all sections
  return staticOGImages.main;
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterCardMeta(config: {
  title: string;
  description: string;
  image: string;
  creator?: string;
  site?: string;
}) {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': config.image,
    'twitter:creator': config.creator || '@chakrinaishow',
    'twitter:site': config.site || '@chakrinaishow',
  };
}

/**
 * Generate Facebook/OpenGraph metadata
 */
export function generateFacebookMeta(config: {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
}) {
  return {
    'og:title': config.title,
    'og:description': config.description,
    'og:image': config.image,
    'og:url': config.url,
    'og:type': config.type || 'website',
    'og:site_name': 'Chakri Nai',
    'og:locale': 'en_IN',
  };
}

/**
 * Common meta tags for all pages
 */
export const commonMetaTags = {
  'theme-color': '#bd2f21',
  'msapplication-TileColor': '#bd2f21',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'default',
  'apple-mobile-web-app-title': 'Chakri Nai',
  'application-name': 'Chakri Nai',
  'mobile-web-app-capable': 'yes',
  'format-detection': 'telephone=no',
};

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string = '/'): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com';
  return `${baseUrl}${path}`;
}
