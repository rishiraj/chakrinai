# Open Graph (OG) Images and SEO Setup for Chakri Nai

This document outlines the comprehensive Open Graph images and SEO setup implemented for the Chakri Nai project.

## Overview

The setup includes:
- Dynamic OG image generation
- Static OG images for different sections
- Comprehensive metadata configuration
- Structured data for better SEO
- Twitter Card support
- PWA manifest
- Sitemap and robots.txt

## Files Structure

```
src/
├── app/
│   ├── api/og/route.tsx          # Dynamic OG image generation API
│   ├── layout.tsx                # Enhanced with comprehensive metadata
│   ├── sitemap.ts                # Sitemap generation
│   ├── robots.ts                 # Robots.txt generation
│   └── manifest.ts               # PWA manifest
├── components/
│   ├── MetaTags.tsx              # Dynamic meta tags component
│   └── StructuredData.tsx        # Structured data components
├── lib/
│   ├── metadata.ts               # Metadata generation utilities
│   └── og-utils.ts               # OG image utilities
public/
├── og/                           # Static OG images directory
│   ├── og-image-main.svg         # Main OG image
│   ├── twitter-image.svg         # Twitter card image
│   ├── how-it-works.svg          # Section-specific images
│   └── README.md                 # OG images documentation
scripts/
└── generate-og-images.js         # Script to generate static OG images
```

## Features

### 1. Dynamic OG Image Generation

**API Endpoint**: `/api/og`

**Parameters**:
- `title` - Main title text
- `subtitle` - Subtitle text
- `type` - Image type (main, event, roast-masters, how-it-works, testimonials)

**Example Usage**:
```
/api/og?title=Chakri Nai&subtitle=India's First Roast Comedy Job Pitch Show&type=main
```

### 2. Static OG Images

Generated using the script at `scripts/generate-og-images.js`:

```bash
node scripts/generate-og-images.js
```

**Generated Images**:
- `og-image-main.svg` - Main OG image (1200x630)
- `og-image-square.svg` - Square version (1200x1200)
- `twitter-image.svg` - Twitter card image
- `how-it-works.svg` - How It Works section
- `roast-masters.svg` - Roast Masters section
- `testimonials.svg` - Testimonials section

### 3. Metadata Configuration

**Enhanced Layout Metadata** (`src/app/layout.tsx`):
- Complete Open Graph tags
- Twitter Card support
- SEO-optimized meta tags
- Structured data integration

**Dynamic Metadata Utility** (`src/lib/metadata.ts`):
```typescript
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Custom Page Title',
  description: 'Custom description',
  image: '/og/custom-image.png',
  url: '/custom-page',
});
```

### 4. Structured Data

**Organization Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Chakri Nai",
  "description": "India's first roast-comedy job pitch show",
  "url": "https://chakrinai.com",
  "logo": "https://chakrinai.com/assets/logo.png"
}
```

**Usage**:
```tsx
import { OrganizationStructuredData } from '@/components/StructuredData';

// In your component
<OrganizationStructuredData />
```

### 5. Meta Tags Component

**Basic Usage**:
```tsx
import { MetaTags } from '@/components/MetaTags';

<MetaTags
  title="Custom Title"
  description="Custom description"
  image="/og/custom-image.png"
  url="/custom-page"
/>
```

**Pre-configured Components**:
```tsx
import { HomeMetaTags, HowItWorksMetaTags } from '@/components/MetaTags';

<HomeMetaTags />
<HowItWorksMetaTags />
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://chakrinai.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
NEXT_PUBLIC_TWITTER_HANDLE=@chakrinaishow
NEXT_PUBLIC_INSTAGRAM_HANDLE=@chakrinaishow
NEXT_PUBLIC_CONTACT_EMAIL=chakrinaishow@gmail.com
```

## SEO Features

### 1. Sitemap
- Automatically generated at `/sitemap.xml`
- Includes all main sections with appropriate priorities
- Updates automatically

### 2. Robots.txt
- Generated at `/robots.txt`
- Allows search engine crawling
- Includes sitemap reference

### 3. PWA Manifest
- Available at `/manifest.json`
- Enables PWA features
- Includes app icons and theme colors

## Testing

### 1. Open Graph Testing
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 2. SEO Testing
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Google PageSpeed Insights**: https://pagespeed.web.dev/

## Deployment Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Generate PNG versions of OG images (if needed)
- [ ] Test all OG images in social media debuggers
- [ ] Verify structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics and verification codes

## Maintenance

### Adding New OG Images
1. Add configuration to `scripts/generate-og-images.js`
2. Run the generation script
3. Update `src/lib/og-utils.ts` with new image paths
4. Create corresponding meta tag components if needed

### Updating Metadata
1. Modify `src/lib/metadata.ts` for global changes
2. Update specific components in `src/components/MetaTags.tsx`
3. Test changes with social media debuggers

## Brand Colors Used

```javascript
const colors = {
  primary: '#bd2f21',    // Main red
  secondary: '#fdb33a',  // Yellow/orange
  accent: '#fc7228',     // Orange accent
  cream: '#f2f0e0',      // Light cream
  black: '#000000',      // Black
  white: '#ffffff',      // White
};
```

## Support

For issues or questions about the OG setup:
1. Check the generated README files in respective directories
2. Test with social media debuggers
3. Verify environment variables are set correctly
4. Ensure all required dependencies are installed
