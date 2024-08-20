import React from "react";
import Navbar from "../components/navbar";
import Produk from "../components/produk";
import Footer from "../components/footer";
import Image from "next/image";
import Banner1 from "@/image/banner1.jpg";
import Banner2 from "@/image/banner2.jpg";

export default function Home() {
  return (
    <main className="w-screen h-auto flex flex-col items-center md:container md:mx-auto">
      <div className="w-full sticky top-0">
        <Navbar />
      </div>
      <div id="promo">
        <Image src={Banner2} className="max-w-[98%] h-auto" alt="" />
      </div>
      <div id="produk" className="my-16">
        <Produk />
      </div>
      <div id="kontak"></div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
