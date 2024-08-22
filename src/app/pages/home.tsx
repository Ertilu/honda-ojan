import React from "react";
import Navbar from "../components/navbar";
import Banner from "@/app/components/banner";
import Produk from "../components/produk";
import Footer from "../components/footer";
import Image from "next/image";
import WA from "@/image/icon-wa-putih.png";
import Banner1 from "@/image/banner1.jpg";
import Banner2 from "@/image/banner2.jpg";

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

      <div className="fixed bottom-4 right-4 hidden lg:block">
        <div className="bg-[#25D366] hover:brightness-90 text-white font-poppins py-2 px-4 rounded-full shadow-lg grid grid-cols-4 w-[252px] h-[70px]">
          <div className="col-span-1 flex items-center">
            <Image src={WA} alt="" className="w-10 h-10" />
          </div>
          <div className="col-span-3 flex flex-col justify-center items-center">
            <div>
              <p className="font-medium text-sm">Hubungi Kami</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">08126942069</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 lg:hidden">
        <div className="bg-[#25D366] hover:brightness-90 p-2 rounded-full shadow-lg w-[70px] h-[70px] flex items-center justify-center">
          <Image src={WA} alt="" className="w-[50px] h-[50px]" />
        </div>
      </div>
    </main>
  );
}
