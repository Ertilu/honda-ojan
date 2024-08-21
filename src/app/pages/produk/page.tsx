import React from "react";
import Navbar from "../../components/navbar";
import ProdukM from "../../components/produk";
import Footer from "../../components/footer";

export default function Produk() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full p-6">
        <div className="bg-abu1 w-full h-20 rounded-xl p-2">
          <div className="bg-white w-full h-full rounded-xl flex justify-center items-center cursor-pointer hover:bg-abu1 hover:brightness-90 transition ease-in-out delay-75 active:abu2">
            <p className="text-black font-poppins text-xl font-semibold">
              Cek List Harga Disini
            </p>
          </div>
        </div>
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
