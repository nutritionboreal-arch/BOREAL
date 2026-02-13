import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://borealnutrition.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "BOREAL. — Clean Canadian Supplements",
    template: "%s — BOREAL.",
  },

  description:
    "BOREAL. builds clean Canadian supplements — starting with easy-to-digest whey. No fillers. No bloating. Transparent formulas. Join the waitlist.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "BOREAL.",
    title: "BOREAL. — Clean Canadian Supplements",
    description:
      "Clean Canadian supplements. No bloat. No fillers. Transparent formulas.",
    images: [
      {
        url: "/og.jpg", // 👉 à ajouter dans /public
        width: 1200,
        height: 630,
        alt: "BOREAL. — Clean Canadian Supplements",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BOREAL. — Clean Canadian Supplements",
    description:
      "Clean Canadian supplements. No bloat. No fillers. Transparent formulas.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    // Optionnel si tu les ajoutes :
    // apple: "/apple-touch-icon.png",
  },

  // 👉 Pour Google Search Console (si tu fais la vérification via meta tag)
  // Remplace XXXXX par le code donné par Google
  verification: {
    // google: "XXXXXXXXXXXXXXXXXXXXXXXX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
