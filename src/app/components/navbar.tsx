import React from "react";
import Logo from "@/image/Honda-logo.png";
import Image from "next/image";
import IconSearch from "@/image/icon-search.svg";

export default function Navbar() {
  return (
    <div className="sm:container mx-4 w-full h-24 bg-white py-4 grid sm:grid-cols-5 text-black">
      <div className="sm:col-span-3 h-100 w-auto flex justify-start items-center">
        <Image src={Logo} alt="" className="h-[4em] w-[4em]" />
        <p className="text-5xl font-thin mx-4">|</p>
        <p className="text-7xl font-bebas">BAM</p>
      </div>

      <div className="sm:col-span-2 h-100 w-auto grid-cols-2 grid sm:grid-cols-5 items-center font-poppins">
        <div className="text-center font-semibold text-2xl col-span-1">
          Home
        </div>
        <div className="text-center font-semibold text-2xl col-span-1">
          Produk
        </div>
        <div className="text-center font-semibold text-2xl col-span-1">
          Promo
        </div>
        <div className="text-center font-semibold text-2xl col-span-1">
          Kontak
        </div>
        <div className="justify-self-center font-bold text-4xl col-span-1">
          <Image src={IconSearch} alt="" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
}
