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
    "Dealer Honda Jakarta",
    "Dealer Honda Cikarang",
    "Dealer Honda Resmi",
    "Dealer Motor Honda",
    "Dealer Motor Honda Resmi Bekasi",
    "Dealer Motor Honda Resmi Jakarta",
    "Dealer Motor Honda Resmi Cikarang",
  ],
  title: "Honda BAM",
  description: "Dealer Resmi Motor Honda Bekasi",
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
