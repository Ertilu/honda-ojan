"use client";

import React, { useState } from "react";
import Logo from "@/image/Honda-logo.png";
import Image from "next/image";
import IconSearch from "@/image/icon-search.svg";
import IconMenu from "@/image/icon-menu.svg";
import { HiMenu } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div className="w-full h-20 lg:h-24 bg-white py-4 px-6 lg:px-2 grid grid-cols-3 lg:grid-cols-5 text-black border-2 border-red-500">
      <div className="col-span-2 lg:col-span-3 h-full w-full flex justify-start items-center lg:px-8">
        <Image src={Logo} alt="" className="h-12 w-auto lg:h-14" />
        <p className="text-4xl lg:text-5xl font-thin mx-8">|</p>
        <p className="text-5xl lg:text-5xl font-bebas">BAM</p>
      </div>

      <div className="lg:col-span-2 h-full w-full lg:grid sm:grid-cols-5 items-center font-poppins hidden">
        <div className="text-end col-span-1">
          <p className="cursor-pointer font-semibold text-xl">Home</p>
        </div>
        <div className="text-end col-span-1">
          <p className="cursor-pointer font-semibold text-xl">Produk</p>
        </div>
        <div className="text-end col-span-1">
          <p className="cursor-pointer font-semibold text-xl">Promo</p>
        </div>
        <div className="text-end col-span-1">
          <p className="cursor-pointer font-semibold text-xl">Kontak</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <FaSearch size={20} />
        </div>
      </div>

      <div className="lg:hidden col-span-1 flex justify-end items-center">
        <HiMenu size={32} onClick={() => setVisibleRight(true)} />

        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
          className="bg-white text-black font-poppins"
        >
          <div className="flex flex-col justify-end px-6 py-6">
            <div className="w-full h-10 border-2 border-abu2 rounded-2xl flex items-center px-2">
              <FaSearch size={24} />
              <input
                type="text"
                className="flex-grow mx-2 focus:outline-none"
              />
            </div>
            <div className="border-b-2 border-abu2 w-full h-10 my-2">
              <p className="text-2xl font-semibold text-end">Home</p>
            </div>
            <div className="border-b-2 border-abu2 w-full h-10 my-2">
              <p className="text-2xl font-semibold text-end">Produk</p>
            </div>
            <div className="border-b-2 border-abu2 w-full h-10 my-2">
              <p className="text-2xl font-semibold text-end">Promo</p>
            </div>
            <div className="border-b-2 border-abu2 w-full h-10 my-2">
              <p className="text-2xl font-semibold text-end">Kontak</p>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}
