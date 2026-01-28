import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileSideBanner from "@/components/functionality/MobileSideBanner";
import FacebookPixel from "@/components/functionality/FacebookPixel";
import SmoothScroll from "@/components/SmoothScroll";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doodie Duty - Professional Pet Waste Removal Service",
  description: "Professional pet waste removal service trusted by pet owners. Safe, reliable, and eco-friendly pet waste services for your yard.",
  metadataBase: new URL('https://doodiedutyservice.com'), // Replace with your actual domain
  openGraph: {
    title: "Doodie Duty - Professional Pet Waste Removal Service",
    description: "Professional pet waste removal service trusted by pet owners. Safe, reliable, and eco-friendly pet waste services for your yard.",
    url: 'https://doodiedutyservice.com', // Replace with your actual domain
    siteName: 'Doodie Duty',
    images: [
      {
        url: 'https://doodiedutyservice.com/images/open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Doodie Duty - Professional Pet Waste Removal Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Doodie Duty - Professional Pet Waste Removal Service",
    description: "Professional pet waste removal service trusted by pet owners. Safe, reliable, and eco-friendly pet waste services for your yard.",
    images: ['https://doodiedutyservice.com/images/open-graph.png'],
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
  icons: {
    icon: [
      { url: '/images/digital-infrastructure/favicon16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/digital-infrastructure/favicon32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/digital-infrastructure/apple120.png', sizes: '120x120', type: 'image/png' },
      { url: '/images/digital-infrastructure/apple152.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/digital-infrastructure/apple180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />
        {/* Preload LCP hero image for faster discovery */}
        <link
          rel="preload"
          as="image"
          href="/images/avif/real-life-images/hero-image-2.avif"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-gutter-stable`}
      >
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <SmoothScroll>
          {children}
          <MobileSideBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
