# Chakri Nai

**India's First Roast-Comedy Job Pitch Show**

Chakri Nai is a revolutionary platform where job seekers get made, not broken. It's a unique blend of entertainment and career development where participants pitch their ideas and get constructive feedback through humor and roasting from industry experts.

## Overview

Chakri Nai transforms the traditional job interview process into an engaging, entertaining experience. Job seekers step onto the stage, present their pitch, get roasted by startup founders, comedians, and industry icons, and ultimately get hired through this innovative format.

## Features

- **Interactive Job Pitch Platform**: A stage for job seekers to present their ideas and skills
- **Expert Roast Masters**: Feedback from startup founders, comedians, and industry professionals
- **Entertainment-First Approach**: Making career development fun and engaging
- **Real-time Reviews**: Live feedback and testimonials from participants
- **Modern Web Experience**: Built with cutting-edge web technologies

## Tech Stack

### Frontend
- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Custom Design System** - Branded components with unique styling

### Analytics & Monitoring
- **PostHog** - Product analytics and user behavior tracking
- **Google Analytics** - Web analytics and insights

### Development Tools
- **ESLint** - Code linting and quality
- **Turbopack** - Fast development builds
- **PNPM** - Efficient package management

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM (recommended package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rishiraj/chakrinai.git
cd chakrinai
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Main header component
│   ├── HowItWorks.tsx    # Process explanation
│   ├── RoastMasters.tsx  # Expert showcase
│   ├── Testimonials.tsx  # User testimonials
│   ├── Reviews.tsx       # User reviews
│   └── Footer.tsx        # Site footer
└── lib/                  # Utility functions
```

## Design System

The project uses a custom design system with:

- **Primary Colors**: Red-based palette (#bd2f21)
- **Secondary Colors**: Orange/Yellow accents (#fdb33a, #fc7228)
- **Typography**: Custom fonts including Awesome Serif and Figma Hand
- **Components**: Rounded corners, shadows, and playful animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Header
The main hero section featuring the core message: "Pitch. Get Roasted. Get Hired."

### How It Works
Three-step process visualization:
1. Step Onto the Stage
2. Get Roasted
3. Get Hired

### Roast Masters
Showcase of expert panel including startup founders, comedians, and industry icons.

### Testimonials & Reviews
Social proof from participants and success stories.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write meaningful commit messages
- Test thoroughly before submitting PRs

## Deployment

The application is optimized for deployment on Vercel, Netlify, or any platform supporting Next.js.

### Build Optimization

- Static generation where possible
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Bundle analysis and code splitting

## Analytics

The application includes:
- **PostHog**: User behavior tracking and product analytics
- **Google Analytics**: Web traffic and conversion tracking

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.

---

**Made with ❤️ for the future of job hunting in India**