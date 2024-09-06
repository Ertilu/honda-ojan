"use client";

import React from "react";
import Navbar from "../components/navbar";
import Banner from "@/app/components/banner";
import Produk from "../components/produk";
import Footer from "../components/footer";
import Kontakwa from "@/app/components/kontakwa";
import { usePromoService } from "../queries/promo.query";

export default function Home() {
  const { getPromoList } = usePromoService({ getPromoListParams: {} });

  return (
    <main className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full lg:container">
        <Banner getPromoList={getPromoList} />
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
