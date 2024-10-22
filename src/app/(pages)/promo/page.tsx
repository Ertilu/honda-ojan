"use client";

import React, { useContext, useMemo } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PromoComp from "@/app/components/promo";
import Kontakwa from "@/app/components/kontakwa";

export default function Promo() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Promo</p>
      </div>

      <div className="w-full lg:min-h-screen min-h-80 lg:container">
        <PromoComp />
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
      <div className="w-full">
        <Kontakwa />
      </div>
    </div>
  );
}
