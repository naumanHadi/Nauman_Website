import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://naumanhadi.io";
const title = "Nauman Hadi | Enterprise AI & Infrastructure Leader";
const description =
  "Enterprise AI, cloud platforms, and large-scale network modernization leadership from Nauman Hadi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Nauman Hadi",
    "Enterprise AI",
    "Technical Program Management",
    "Product Leadership",
    "Open RAN",
    "Network Modernization",
  ],
  authors: [{ name: "Nauman Hadi" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Nauman Hadi",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
