import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  subsets: ["latin", "hebrew"],
  display: "swap",
  variable: "--font-varela-round",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "גולאסו - חוויה ספורטיבית בלתי נשכחת",
  description: "גולאסו מביאים לכם חוויה ספורטיבית בלתי נשכחת",
  keywords: "golaso, services, experiences, quality, excellence",
  authors: [{ name: "Golaso Team" }],
  creator: "Golaso",
  publisher: "Golaso",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://golaso.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://golaso.xyz",
    siteName: "Golaso",
    title: "גולאסו - חוויה ספורטיבית בלתי נשכחת",
    description: "גולאסו מביאים לכם חוויה ספורטיבית בלתי נשכחת",
    images: [
      {
        url: "/golasologo-thumb.jpg",
        width: 1200,
        height: 630,
        alt: "Golaso Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "גולאסו - חוויה ספורטיבית בלתי נשכחת",
    description: "גולאסו מביאים לכם חוויה ספורטיבית בלתי נשכחת",
    images: ["/golasologo-thumb.jpg"],
    creator: "@golaso",
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="he"
      className={`${varelaRound.variable} font-varela-round antialiased`}
    >
      <body className="font-varela-round">{children}</body>
    </html>
  );
}
