import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
    locale: "vi_VN",
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

const ldJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vietnam",
    addressRegion: "Yen Bai",
    postalCode: "33000",
    streetAddress: "Group 5, Dong Tam Ward, Yen Bai City",
  },
  colleague: ["https://www.datdev.click/"],
  email: "hey@hongducdev.com",
  image: "https://avatars.githubusercontent.com/u/73995275?v=4",
  jobTitle: "Software Engineer",
  name: "Nguyen Hong Duc",
  birthPlace: "Yen Bai, Vietnam",
  birthDate: "2002-10-05",
  gender: "male",
  nationality: "Vietnamese",
  url: "https://hongducdev.com",
  sameAs: [
    "https://www.facebook.com/hongduc.dev/",
    "https://www.linkedin.com/in/hongducdev/",
    "https://github.com/hongducdev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen px-2 lg:px-0 lg:max-w-[1240px] w-full mx-auto flex flex-col gap-y-2">
          <Header />
          {children}
          <Footer />
        </div>
        <Script
          id="ld+json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldJson),
          }}
        />
      </body>
    </html>
  );
}
