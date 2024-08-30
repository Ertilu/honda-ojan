import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Context from "./context/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Honda BAM",
  description: "Dealer Resmi Motor Honda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Context>
        <body className={inter.className}>{children}</body>
      </Context>
    </html>
  );
}
