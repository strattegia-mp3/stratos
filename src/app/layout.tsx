import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { productData } from "@/lib/content";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

// Display font — bold, editorial, unmistakable
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

// Body font — clean, readable, contemporary
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: productData.meta.title,
  description: productData.meta.description,
  keywords: productData.meta.keywords,
  authors: [{ name: "Victor Roch" }, { name: "Stratos" }],
  creator: "Stratos",
  publisher: "Victor Rocha",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: productData.meta.title,
    description: productData.meta.description,
    url: siteUrl,
    siteName: "Stratos",
    images: [
      {
        url: productData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Capa do ecossistema Stratos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: productData.meta.title,
    description: productData.meta.description,
    images: [productData.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="bg-[#060608] text-white font-dm-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>

        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
