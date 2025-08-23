#!/usr/bin/env node

/**
 * Script to generate static OG images for Chakri Nai
 * Run with: node scripts/generate-og-images.js
 */

const fs = require('fs');
const path = require('path');

// Image configurations
const imageConfigs = [
  {
    filename: 'og-image-main.png',
    title: 'Chakri Nai',
    subtitle: "India's First Roast Comedy Job Pitch Show",
    type: 'main',
    width: 1200,
    height: 630,
  },
  {
    filename: 'og-image-square.png',
    title: 'Chakri Nai',
    subtitle: 'Roast Comedy Job Pitch Show',
    type: 'main',
    width: 1200,
    height: 1200,
  },
  {
    filename: 'twitter-image.png',
    title: 'Chakri Nai',
    subtitle: "Where job seekers get made, not broken",
    type: 'main',
    width: 1200,
    height: 630,
  },
  {
    filename: 'how-it-works.png',
    title: 'How It Works',
    subtitle: 'From Pitch to Roast - Your Journey to Success',
    type: 'how-it-works',
    width: 1200,
    height: 630,
  },
  {
    filename: 'roast-masters.png',
    title: 'Meet Our Roast Masters',
    subtitle: 'Industry Experts Who Will Make or Break You',
    type: 'roast-masters',
    width: 1200,
    height: 630,
  },
  {
    filename: 'testimonials.png',
    title: 'Success Stories',
    subtitle: 'Real People, Real Results, Real Roasts',
    type: 'testimonials',
    width: 1200,
    height: 630,
  },
];

// Brand colors
const colors = {
  primary: '#bd2f21',
  secondary: '#fdb33a',
  accent: '#fc7228',
  cream: '#f2f0e0',
  black: '#000000',
  white: '#ffffff',
};

// Create SVG template
function createSVG(config) {
  const { title, subtitle, type, width, height } = config;
  
  // Background gradient based on type
  const getGradient = (type) => {
    switch (type) {
      case 'how-it-works':
        return `<defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors.cream};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:1" />
          </linearGradient>
        </defs>`;
      case 'roast-masters':
        return `<defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors.secondary};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:1" />
          </linearGradient>
        </defs>`;
      default:
        return `<defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:1" />
          </linearGradient>
        </defs>`;
    }
  };

  const textColor = type === 'how-it-works' ? colors.black : colors.white;
  const subtitleColor = type === 'how-it-works' ? colors.primary : colors.cream;
  const titleSize = width === 1200 && height === 1200 ? '64' : '72';
  const subtitleSize = width === 1200 && height === 1200 ? '28' : '32';

  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      ${getGradient(type)}
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bg)"/>
      
      <!-- Background Pattern -->
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3"/>
      
      <!-- Decorative circles -->
      <circle cx="${width - 100}" cy="100" r="50" fill="${colors.white}" opacity="0.1"/>
      <circle cx="100" cy="${height - 100}" r="30" fill="${colors.white}" opacity="0.1"/>
      
      <!-- Main Title -->
      <text x="${width/2}" y="${height/2 - 40}" 
            font-family="Arial, sans-serif" 
            font-size="${titleSize}" 
            font-weight="bold" 
            fill="${textColor}" 
            text-anchor="middle" 
            dominant-baseline="middle">
        ${title}
      </text>
      
      <!-- Subtitle -->
      <text x="${width/2}" y="${height/2 + 20}" 
            font-family="Arial, sans-serif" 
            font-size="${subtitleSize}" 
            fill="${subtitleColor}" 
            text-anchor="middle" 
            dominant-baseline="middle">
        ${subtitle}
      </text>
      
      <!-- Brand Badge -->
      <rect x="${width/2 - 100}" y="${height/2 + 60}" 
            width="200" height="50" 
            rx="25" ry="25" 
            fill="${colors.white}" 
            opacity="0.9"/>
      <text x="${width/2}" y="${height/2 + 85}" 
            font-family="Arial, sans-serif" 
            font-size="20" 
            font-weight="bold" 
            fill="${colors.primary}" 
            text-anchor="middle" 
            dominant-baseline="middle" 
            letter-spacing="2">
        CHAKRI NAI
      </text>
    </svg>
  `;
}

// Ensure output directory exists
const outputDir = path.join(__dirname, '..', 'public', 'og');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate images
console.log('🎨 Generating OG images for Chakri Nai...\n');

imageConfigs.forEach((config) => {
  const svg = createSVG(config);
  const outputPath = path.join(outputDir, config.filename.replace('.png', '.svg'));
  
  fs.writeFileSync(outputPath, svg);
  console.log(`✅ Generated: ${config.filename.replace('.png', '.svg')}`);
});

console.log('\n🎉 All OG images generated successfully!');
console.log('\n📝 Note: SVG files have been generated. For PNG conversion, you can:');
console.log('1. Use an online SVG to PNG converter');
console.log('2. Use a tool like ImageMagick: convert image.svg image.png');
console.log('3. Use the dynamic OG image API at /api/og for production');

// Create a README for the og directory
const readmeContent = `# Open Graph Images

This directory contains Open Graph (OG) images for Chakri Nai.

## Files

- \`og-image-main.svg/png\` - Main OG image (1200x630)
- \`og-image-square.svg/png\` - Square version for social media (1200x1200)
- \`twitter-image.svg/png\` - Twitter card image (1200x630)
- \`how-it-works.svg/png\` - How It Works section image
- \`roast-masters.svg/png\` - Roast Masters section image
- \`testimonials.svg/png\` - Testimonials section image

## Usage

These images are automatically used by the metadata configuration in the Next.js app.

## Dynamic Images

For dynamic OG images, use the API endpoint: \`/api/og?title=Your Title&subtitle=Your Subtitle&type=main\`

## Regeneration

To regenerate these images, run:
\`\`\`bash
node scripts/generate-og-images.js
\`\`\`
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), readmeContent);
console.log('📚 Generated README.md in og directory');
