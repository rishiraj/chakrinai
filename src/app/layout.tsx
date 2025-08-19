import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PostHogAnalytics from "@/components/PostHogAnalytics";
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
        {/* <Navbar /> */}
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
