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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [visibleRight, setVisibleRight] = useState(false);
  const currentPath = usePathname();

  return (
    <div className="w-full h-16 bg-white px-6 lg:px-2 grid grid-cols-3 lg:grid-cols-7 text-black lg:container justify-self-center mx-auto">
      <div className="col-span-2 lg:col-span-4 h-full w-full flex justify-start items-center lg:px-8">
        <Image src={Logo} alt="" className="h-12 w-auto" />
        <p className="text-3xl lg:text-4xl font-thin mx-8">|</p>
        <p className="text-5xl lg:text-5xl font-bebas">BAM</p>
      </div>

      <div className="lg:col-span-3 h-full w-full lg:grid lg:grid-cols-6 items-center font-poppins hidden">
        <div className="text-end col-span-1">
          <Link
            href="/"
            className={
              currentPath === "/"
                ? "cursor-pointer underline text-[#cc0000] underline-offset-8 "
                : "cursor-pointer hover:underline hover:text-[#cc0000] hover:underline-offset-8"
            }
          >
            <p className="font-semibold text-xl ">Home</p>
          </Link>
        </div>
        <div className="text-end col-span-1">
          <Link
            href="/pages/produk"
            className={
              currentPath === "/pages/produk"
                ? "cursor-pointer underline text-[#cc0000] underline-offset-8 "
                : "cursor-pointer hover:underline hover:text-[#cc0000] hover:underline-offset-8"
            }
          >
            <p className="font-semibold text-xl ">Produk</p>
          </Link>
        </div>
        <div className="text-end col-span-1">
          <Link
            href="/pages/promo"
            className={
              currentPath === "/pages/promo"
                ? "cursor-pointer underline text-[#cc0000] underline-offset-8 "
                : "cursor-pointer hover:underline hover:text-[#cc0000] hover:underline-offset-8"
            }
          >
            <p className="font-semibold text-xl ">Promo</p>
          </Link>
        </div>
        <div className="text-end col-span-1">
          <Link
            href="/pages/kontak"
            className={
              currentPath === "/pages/kontak"
                ? "cursor-pointer underline text-[#cc0000] underline-offset-8 "
                : "cursor-pointer hover:underline hover:text-[#cc0000] hover:underline-offset-8"
            }
          >
            <p className="cursor-pointer font-semibold text-xl hover:underline hover:text-[#cc0000] hover:underline-offset-8">
              Kontak
            </p>
          </Link>
        </div>
        <div className="col-span-2 flex flex-col px-8 h-10">
          <div className="flex items-center px-2 border-2 border-abu2 w-full h-10 rounded-full">
            <FaSearch
              size={20}
              className="hover:text-[#cc0000] cursor-pointer"
            />
            <input
              type="text"
              className="flex-grow mx-2 focus:outline-none w-10 "
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden col-span-1 flex justify-end items-center h-full">
        <HiMenu size={32} onClick={() => setVisibleRight(true)} />

        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
          className="bg-white text-black font-poppins h-full"
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
              <Link href="/">
                <p className="text-2xl font-semibold text-end">Home</p>
              </Link>
            </div>
            <div className="border-b-2 border-abu2 w-full h-10 my-2">
              <Link href="/pages/produk">
                <p className="text-2xl font-semibold text-end">Produk</p>
              </Link>
            </div>
            <div className="border-b-2 border-abu2 w-full h-10 my-2">
              <Link href="/pages/promo">
                <p className="text-2xl font-semibold text-end">Promo</p>
              </Link>
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
