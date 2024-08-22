import React from "react";
import Navbar from "../../components/navbar";
import ProdukM from "../../components/produk";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Produk() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full lg:px-16 p-6">
        <Link href="/pages/list">
          <div className="bg-abu1 w-full lg:h-12 rounded-xl border-2 border-abu2 p-2 flex justify-center items-center cursor-pointer hover:brightness-90">
            <p className="text-black font-poppins text-lg font-semibold">
              Cek List Harga Disini
            </p>
          </div>
        </Link>
      </div>
      <div id="produk" className="w-full my-8 lg:container">
        <ProdukM />
      </div>
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
