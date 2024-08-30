"use client";

import React from "react";
import Navbar from "../components/navbar";
import Banner from "@/app/components/banner";
import Produk from "../components/produk";
import Footer from "../components/footer";
import Image from "next/image";
import WA from "@/image/icon-wa-putih.png";
import Banner1 from "@/image/banner1.jpg";
import Banner2 from "@/image/banner2.jpg";
import Kontakwa from "@/app/components/kontakwa";
import { useProductService } from "../queries/product.query";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div id="promo">
        <Image
          src={Banner2}
          className="w-[98%] h-auto justify-self-center mx-auto"
          alt=""
        />
        {/* <Banner /> */}
      </div>

      <div id="produk" className="w-full my-8 lg:container">
        <Produk />
      </div>

      <div id="kontak"></div>
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div className="w-full">
        <Kontakwa />
      </div>
    </main>
  );
}
