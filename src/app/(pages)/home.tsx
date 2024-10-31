import React from "react";
import Navbar from "../components/navbar";
import Banner from "@/app/components/banner";
import Produk from "../components/produk";
import Promo from "../components/promo";
import Footer from "../components/footer";
import Kontakwa from "@/app/components/kontakwa";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="sticky top-0 z-50 backdrop-blur-sm w-full">
        <Navbar />
      </div>

      <div className="w-full flex justify-center mb-6">
        <Banner />
      </div>

      <div id="produk" className="w-full lg:container">
        <Produk />
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

      <div className="w-full z-40 lg:container">
        <Kontakwa />
      </div>
    </main>
  );
}
