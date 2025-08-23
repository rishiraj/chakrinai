# Open Graph Images

This directory contains Open Graph (OG) images for Chakri Nai.

## Files

- `og-image-main.svg/png` - Main OG image (1200x630)
- `og-image-square.svg/png` - Square version for social media (1200x1200)
- `twitter-image.svg/png` - Twitter card image (1200x630)
- `how-it-works.svg/png` - How It Works section image
- `roast-masters.svg/png` - Roast Masters section image
- `testimonials.svg/png` - Testimonials section image

## Usage

These images are automatically used by the metadata configuration in the Next.js app.

## Dynamic Images

For dynamic OG images, use the API endpoint: `/api/og?title=Your Title&subtitle=Your Subtitle&type=main`

## Regeneration

To regenerate these images, run:
```bash
node scripts/generate-og-images.js
```
