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
    "Honda BAM - Dealer Resmi Motor Honda Terpercaya di Bekasi, Cikarang, Jakarta, Tambun. Temukan Beragam Model Motor Honda Terbaru, Suku Cadang, dan Layanan Servis Berkualitas Tinggi. Nikmati Penawaran Harga Terbaik dan Layanan Pelanggan Profesional untuk Semua Kebutuhan Motor Anda. Honda BAM: Solusi Berkendara Terbaik di Bekasi, Cikarang, Jakarta, Tambun",
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
