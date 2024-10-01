import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProvider from "./context/globalContext";
import ReactQueryProvider from "./reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://honda-bam.com"),
  keywords: [
    "Dealer Honda",
    "Dealer Honda Bekasi",
    "Dealer Honda Jakarta",
    "Dealer Honda Cikarang",
    "Dealer Honda Resmi",
    "Dealer Motor Honda Resmi",
    "Dealer Motor Honda",
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
