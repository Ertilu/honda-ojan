"use client";

import React, { useContext, useEffect, useState } from "react";
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
import LogoBeat from "@/image/logo-beat.png";
import Beat from "@/image/beat.png";
import { usePathname, useRouter } from "next/navigation";
import { useProductService } from "../queries/product.query";
import { GlobalContext } from "../context/globalContext";
import { useScroll, useTransform, motion } from "framer-motion";

interface Props {
  textColor?: any;
  background?: any;
  height?: any;
}

export default function Navbar({ textColor, background, height }: Props) {
  const [visibleRight, setVisibleRight] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();
  const [cariProduk, setCariProduk] = useState("");
  const [cariProdukMobile, setCariProdukMobile] = useState("");
  const [debouncedValue, setDebouncedValue] = React.useState("");
  const { setData } = useContext(GlobalContext);

  const { getCatalogueList } = useProductService({
    getCatalogueListParams: {
      params: {
        search: debouncedValue,
      },
    },
  });

  const handleKeyInput = (e: any) => {
    e.preventDefault();
    if (e.charCode == 13 && cariProduk !== "") {
      router.push(`/detailcari`);
    }
  };

  const handleInput = (e: any) => {
    // e.preventDefault();
    setCariProduk(e.target.value);
  };

  const handleInputMobile = (e: any) => {
    // e.preventDefault();
    setCariProdukMobile(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(
        cariProduk.length
          ? cariProduk
          : cariProdukMobile.length
          ? cariProdukMobile
          : ""
      );
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [cariProduk, cariProdukMobile]);
  // shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
  return (
    <motion.div className="w-full" style={{ height, background }}>
      <motion.div
        className="w-full px-6 lg:px-2 grid grid-cols-3 lg:grid-cols-7 text-black lg:container justify-self-center"
        style={{ height, background }}
      >
        <div className="col-span-2 lg:col-span-4 h-full w-full flex justify-start items-center lg:px-8">
          <Image src={Logo} alt="" className="h-10 w-auto" />
          <p className="text-3xl lg:text-4xl font-thin mx-8">|</p>
          <motion.p
            className="text-4xl pt-2 lg:text-4xl font-bebas"
            style={{ color: textColor }}
          >
            BAM
          </motion.p>
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
              href="/produk"
              className={
                currentPath === "/produk" ||
                currentPath?.includes("/detailproduk")
                  ? "cursor-pointer underline text-[#cc0000] underline-offset-8 "
                  : "cursor-pointer hover:underline hover:text-[#cc0000] hover:underline-offset-8"
              }
            >
              <p className="font-semibold text-xl ">Produk</p>
            </Link>
          </div>
          <div className="text-end col-span-1">
            <Link
              href="/promo"
              className={
                currentPath === "/promo"
                  ? "cursor-pointer underline text-[#cc0000] underline-offset-8 "
                  : "cursor-pointer hover:underline hover:text-[#cc0000] hover:underline-offset-8"
              }
            >
              <p className="font-semibold text-xl ">Promo</p>
            </Link>
          </div>
          <div className="text-end col-span-1">
            <Link
              href="/kontak"
              className={
                currentPath === "/kontak"
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
            <div className="flex items-center px-2 border-b-2 border-abu2 w-full h-10 ">
              <FaSearch
                size={20}
                className="hover:text-[#cc0000] cursor-pointer"
              />
              <input
                type="text"
                className="flex-grow mx-2 focus:outline-none w-10 text-black bg-transparent"
                onChange={handleInput}
                value={cariProduk}
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
                  onChange={handleInputMobile}
                  value={cariProdukMobile}
                />
              </div>
              <div className="border-b-2 border-abu2 w-full h-10 my-2">
                <Link href="/">
                  <p className="text-2xl font-semibold text-end">Home</p>
                </Link>
              </div>
              <div className="border-b-2 border-abu2 w-full h-10 my-2">
                <Link href="/produk">
                  <p className="text-2xl font-semibold text-end">Produk</p>
                </Link>
              </div>
              <div className="border-b-2 border-abu2 w-full h-10 my-2">
                <Link href="/promo">
                  <p className="text-2xl font-semibold text-end">Promo</p>
                </Link>
              </div>
              <div className="border-b-2 border-abu2 w-full h-10 my-2">
                <Link href="/promo">
                  <p className="text-2xl font-semibold text-end">Kontak</p>
                </Link>
              </div>
            </div>
          </Sidebar>
        </div>
      </motion.div>
      {cariProduk === "" ? null : (
        <div>
          <div className="w-full h-screen bg-black opacity-70 absolute top-16"></div>
          <div className="absolute top-16 w-full h-screen lg:container">
            <div className="bg-abu1 h-80 w-full py-4 flex justify-center items-center gap-6">
              {getCatalogueList?.data?.results?.map((item: any) => {
                return (
                  <Link
                    href={{
                      pathname: `/detailproduk/${item?.id}`,
                    }}
                    onClick={() => {
                      setData(item);
                    }}
                    key={item?.id}
                  >
                    <div className="bg-white rounded-md h-[270px] w-[300px] p-4 cursor-pointer hover:brightness-90 flex flex-col">
                      <div className="w-full h-[30px] flex justify-center items-start">
                        <img
                          src={item?.logo}
                          alt={"honda"}
                          className="w-full h-auto mb-6"
                        />
                      </div>
                      <div className="w-full h-auto p-6 flex-1 flex justify-center items-start">
                        <img
                          src={item?.images[0]}
                          alt={"honda"}
                          className="w-auto h-44"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
