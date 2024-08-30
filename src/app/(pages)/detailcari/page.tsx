"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { MdSort } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Cari() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Cari Vario</p>
      </div>

      <div className="w-full">
        <div className="bg-abu1 w-[276px] h-[43px] text-black rounded-md grid grid-cols-6 items-center justify-center my-6 lg:mx-12   mx-auto cursor-pointer hover:brightness-95 transition delay-50">
          <div className="col-span-1 justify-self-center">
            <MdSort size={25} />
          </div>
          <div className="col-span-4">
            <p>Terbaru</p>
          </div>
          <div className="col-span-1 justify-self-center">
            <IoMdArrowDropdown size={25} />
          </div>
        </div>
      </div>

      <div className="w-full lg:h-[600px] h-auto lg:px-16 p-6"></div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
