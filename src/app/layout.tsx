import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PostHogAnalytics from "@/components/PostHogAnalytics";
import { OrganizationStructuredData, WebSiteStructuredData } from "@/components/StructuredData";
import {
  awesomeSerif,
  handwriting,
  fitfully,
  merriweatherSans,
} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Chakri Nai - Roast Comedy Job Pitch Show",
  description:
    "India's first roast-comedy job pitch show where job seekers get made, not broken.",
  keywords: [
    "job pitch",
    "roast comedy",
    "career development",
    "startup",
    "comedy show",
    "job seekers",
    "India",
    "entertainment",
    "professional development",
    "pitch competition"
  ],
  authors: [{ name: "Chakri Nai Team" }],
  creator: "Chakri Nai",
  publisher: "Chakri Nai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://chakrinai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Chakri Nai - India's First Roast Comedy Job Pitch Show",
    description: "Where job seekers get made, not broken. Join India's most entertaining career development platform featuring expert roast masters and real opportunities.",
    url: '/',
    siteName: 'Chakri Nai',
    images: [
      {
        url: 'https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png',
        width: 1200,
        height: 630,
        alt: 'Chakri Nai - Roast Comedy Job Pitch Show',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chakri Nai - India's First Roast Comedy Job Pitch Show",
    description: "Where job seekers get made, not broken. Join India's most entertaining career development platform.",
    images: ['https://res.cloudinary.com/da3zav192/image/upload/v1755974716/og_image_mnstv8.png'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweatherSans.variable} ${awesomeSerif.variable} ${handwriting.variable} ${fitfully.variable} ${merriweatherSans.className} antialiased bg-primary`}
      >
        <GoogleAnalytics />
        <PostHogAnalytics />
        <OrganizationStructuredData />
        <WebSiteStructuredData />
        {/* <Navbar /> */}
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
