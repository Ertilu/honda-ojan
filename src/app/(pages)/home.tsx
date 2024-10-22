"use client";

import React from "react";
import Navbar from "../components/navbar";
import Banner from "@/app/components/banner";
import Produk from "../components/produk";
import Promo from "../components/promo";
import Footer from "../components/footer";
import Kontakwa from "@/app/components/kontakwa";
import { usePromoService } from "../queries/promo.query";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  const { getPromoList } = usePromoService({ getPromoListParams: {} });
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [80, 60]);
  const width = useTransform(scrollY, [0, 100], [120, 500]);
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(230, 27, 51, 1)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <main className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      {/* <motion.div style={{ width }}> */}
      <div
        className="sticky top-0 z-50 backdrop-blur-sm w-full"
        // style={{ background, height }}
      >
        <Navbar textColor={textColor} background={background} height={height} />
      </div>
      {/* </motion.div> */}

      <div className="w-full flex justify-center mb-6">
        <Banner getPromoList={getPromoList} />
      </div>

      <div id="produk" className="w-full lg:container">
        <Produk initialCategory="matic" />
      </div>

      <div id="promo" className="w-full my-8 lg:container">
        <div className="w-full flex justify-center items-center h-fit">
          <p className="font-extrabold text-4xl text-black font-poppins">
            Promo
          </p>
        </div>
        <Promo />
      </div>

      <div id="kontak"></div>
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div className="w-full z-40">
        <Kontakwa />
      </div>
    </main>
  );
}
