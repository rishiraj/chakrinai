import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PostHogAnalytics from "@/components/PostHogAnalytics";
import { awesomeSerif, handwriting, fitfully } from "@/lib/fonts";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Chakri Nai - Roast Comedy Job Pitch Show",
  description: "India's first roast-comedy job pitch show where job seekers get made, not broken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${awesomeSerif.variable} ${handwriting.variable} ${fitfully.variable} ${inter.className} antialiased`}
      >
        <GoogleAnalytics />
        <PostHogAnalytics />
        {/* <Navbar /> */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
