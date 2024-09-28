import React from "react";
import Navbar from "../../components/navbar";
import ProdukM from "../../components/produk";
import Footer from "../../components/footer";
import Link from "next/link";
import Kontakwa from "@/app/components/kontakwa";

export default function Produk() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Produk</p>
      </div>
      <div className="w-full flex justify-center lg:px-16 p-6">
        <Link href="/list">
          <div className="bg-[#cc0000] rounded-md hover:brightness-95 lg:w-[500px] w-full lg:h-12  p-2 flex justify-center items-center cursor-pointer ">
            <p className="text-white mx-6 font-poppins text-lg font-semibold">
              Cek List Harga Disini
            </p>
          </div>
        </Link>
      </div>
      <div id="produk" className="w-full my-2 lg:container">
        <ProdukM initialCategory="matic" />
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
