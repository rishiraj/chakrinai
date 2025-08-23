import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chakri Nai - Roast Comedy Job Pitch Show',
    short_name: 'Chakri Nai',
    description: "India's first roast-comedy job pitch show where job seekers get made, not broken.",
    start_url: '/',
    display: 'standalone',
    background_color: '#bd2f21',
    theme_color: '#bd2f21',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['entertainment', 'business', 'education'],
    lang: 'en-IN',
    orientation: 'portrait-primary',
  };
}
