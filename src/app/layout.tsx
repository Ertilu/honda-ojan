import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "./context/globalContext";
import ReactQueryProvider from "./reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://honda-bam.com"),
  keywords: [
    "Honda BAM",
    "Honda-BAM",
    "Dealer Honda BAM",
    "Dealer Honda",
    "Dealer Honda Bekasi",
    "Dealer Honda Bekasi Timur",
    "Dealer Honda Bekasi Barat",
    "Dealer Honda Jakarta",
    "Dealer Honda Cikarang",
    "Dealer Honda Tambun",
    "Dealer Honda Tambun Utara",
    "Dealer Honda Resmi",
    "Dealer Motor Honda",
    "Dealer Motor Honda Resmi Bekasi",
    "Dealer Motor Honda Resmi Jakarta",
    "Dealer Motor Honda Resmi Cikarang",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: "Honda BAM",
  description:
    "Honda BAM - Dealer Resmi Motor Honda di Bekasi, Cikarang, Jakarta, dan Tambun. Menyediakan berbagai model motor Honda terbaru dengan harga terbaik, Dealer honda Bekasi.",
  openGraph: {
    title: "Honda BAM",
    description:
      "Honda BAM - Dealer Resmi Motor Honda di Bekasi, Cikarang, Jakarta, dan Tambun. Menyediakan berbagai model motor Honda terbaru dengan harga terbaik, Dealer honda Bekasi.",
    url: "honda-bam.com",
    siteName: "Next.js",
    images: [
      {
        url: "https://res.cloudinary.com/dthdnryp3/image/upload/v1730202111/Logo_Honda_Bam_Kotak_1_fhdbsh.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dthdnryp3/image/upload/v1730202111/Logo_Honda_Bam_Kotak_1_fhdbsh.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Dealer Motor Honda Bekasi Tambun Jakarta Cikarang Honda Bam",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Honda BAM",
    description:
      "Honda BAM - Dealer Resmi Motor Honda di Bekasi, Cikarang, Jakarta, dan Tambun. Menyediakan berbagai model motor Honda terbaru dengan harga terbaik, Dealer honda Bekasi.",
    images: [
      "https://res.cloudinary.com/dthdnryp3/image/upload/v1730202111/Logo_Honda_Bam_Kotak_1_fhdbsh.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <GlobalProvider>
          <body className={inter.className}>{children}</body>
        </GlobalProvider>
      </ReactQueryProvider>
    </html>
  );
}
