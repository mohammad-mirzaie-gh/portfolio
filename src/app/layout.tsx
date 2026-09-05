import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./index.css";

const SITE_URL = "https://mohammad-mirzaie.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohammad Mirzaie — Software Developer Portfolio",
    template: "%s | Mohammad Mirzaie",
  },
  description:
    "I'm Mohammad Mirzaie — a Software Developer and Biomedical Engineering student specializing in full-stack development, backend architecture, and modern application design.",
  creator: "Mohammad Mirzaie",
  authors: [
    { name: "Mohammad Mirzaie", url: "https://github.com/mohammad-mirzaie-gh" },
  ],
  keywords: [
    "Mohammad Mirzaie",
    "Software Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],
  applicationName: "Mohammad Mirzaie Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohammad Mirzaie — Software Developer Portfolio",
    description:
      "Portfolio of Mohammad Mirzaie — Full-stack developer, backend architect, and biomedical engineering student.",
    url: SITE_URL,
    siteName: "Mohammad Mirzaie Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Mirzaie — Portfolio cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Mirzaie — Software Developer",
    description:
      "Software Developer specializing in full-stack applications, backend architecture, and database systems.",
    images: ["/banner.png"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050b14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg-theme font-sans">{children}</body>
    </html>
  );
}
