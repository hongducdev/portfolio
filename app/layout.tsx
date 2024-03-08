import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "hongducdev.com",
    template: "%s | hongducdev.com",
  },
  description:
    "Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th year student majoring in Software Engineering at ICTU. I am a Front end developer and am striving to become a Fullstack developer.",
  openGraph: {
    title: "hongducdev.com",
    description:
      "Hi, my name is hongducdev. Full name is Nguyen Hong Duc. I am a 4th year student majoring in Software Engineering at ICTU. I am a Front end developer and am striving to become a Fullstack developer.",
    url: "https://hongducdev.com",
    siteName: "hongducdev.com",
    images: [
      {
        url: "https://hongducdev.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "hongducdev.com",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1240px] w-full mx-auto flex flex-col gap-y-2">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
