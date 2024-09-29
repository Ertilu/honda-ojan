"use client";

import React from "react";
import Navbar from "../components/navbar";
import Banner from "@/app/components/banner";
import Produk from "../components/produk";
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
  const height = useTransform(scrollY, [0, 100], [120, 60]);
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(230, 27, 51, 1)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <main className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <motion.div
        className="w-full fixed top-0 right-0 left-0 height-60 z-50 flex justify-center items-center"
        style={{ background, height }}
      >
        <Navbar textColor={textColor} />
      </motion.div>

      <div className="w-full" style={{ backgroundColor: "red" }}>
        <Banner getPromoList={getPromoList} />
      </div>

      <div id="produk" className="w-full my-8 lg:container">
        <Produk />
      </div>

      <div id="kontak"></div>
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div className="w-full z-10">
        <Kontakwa />
      </div>
    </main>
  );
}
