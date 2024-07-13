import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NextAuthProvider from "@/components/provider";
import { siteConfig } from "@/config/site";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  alternates: {
    canonical: "./",
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "hongducdev",
    "blog",
    "blog.hongducdev",
    "web development",
    "programming",
    "tech",
  ],
  authors: [
    {
      name: "hongducdev",
      url: "https://hongducdev.com",
    },
  ],
  creator: "hongducdev",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1362,
        height: 482,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@hongducdev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextAuthProvider>
          <div className="bg-zinc-50 antialiased bg-dot-zinc-400/[0.2] w-full min-h-screen">
            <Navbar />
            <div className="p-4 lg:p-8 ">
              <div className="text-zinc-600 max-w-2xl w-full mx-auto">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
