"use client";
import React, { useState } from "react";
import WA from "@/image/icon-wa-putih.png";
import LA from "@/image/icon-live-chat.png";
import Image from "next/image";
import Link from "next/link";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaPersonPraying } from "react-icons/fa6";

export default function Kontakwa() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "Mas Hengki",
    pesan: "",
  });
  return (
    <div>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 bg-abu1 w-96 h-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg grid grid-rows-9">
          <div className="row-span-1 bg-primaryRed rounded-t-lg grid grid-cols-5">
            <div className="col-span-4 flex items-center justify-start px-4">
              <p className="text-white font-poppins font-medium text-xl">
                Live Chat Honda BAM
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <IoClose
                color="white"
                size={20}
                className="lg:cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <div className="row-span-7 bg-abu1 px-2">
            <div className="w-full flex justify-center p-1">
              <div className="bg-white px-2 rounded-lg">
                <p className="text-black text-xs font-light">
                  Anda terhubung dengan Fauzan
                </p>
              </div>
            </div>
            <div className="h-auto w-full flex py-1">
              <Image
                src={LA}
                alt=""
                className="w-[35px] h-[35px] rounded-full"
              />
              <div className="col-span-6 px-1">
                <p className="text-black font-poppins font-medium text-xs pb-1">
                  Fauzan
                </p>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-black font-poppins font-normal text-sm">
                    Halo! Selamat datang di Honda BAM. Ada yang bisa saya bantu
                    hari ini?
                  </p>
                </div>
              </div>
            </div>

            <div className="h-auto w-full flex py-1 justify-end">
              <div className="col-span-6 px-1">
                <p className="text-black font-poppins font-medium text-xs pb-1 text-end">
                  Mas Hengki
                </p>
                <div className="bg-abu2 rounded-lg p-2">
                  <p className="text-white font-poppins font-normal text-sm">
                    Engga min iseng aja
                  </p>
                </div>
              </div>
              <FaPersonPraying
                size={30}
                color="black"
                className="scale-x-[-1] bg-white rounded-full p-1"
              />
            </div>
          </div>
          <div className="row-span-1 bg-abu1 rounded-b-lg p-2">
            <div className="w-full h-full bg-white rounded-lg grid grid-cols-10 items-center">
              <input
                type="text"
                className="col-span-9 focus:outline-none text-black px-4 rounded-lg"
                placeholder="Ketik pesan...."
              />
              <IoSend color="black" className="col-span-1 lg:cursor-pointer" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="fixed bottom-20 right-4">
            <div
              className="flex flex-col hover:brightness-95 rounded-b-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-[70px] w-[60px] lg:h-[120px] h-[110px] lg:cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="h-[50px] lg:w-[70px] w-[60px] rounded-t-lg bg-primaryRed">
                <p className="text-white font-bold h-fit text-center text-lg">
                  LIVE
                </p>

                <p className="text-white font-bold text-center text-lg -mt-2">
                  CHAT
                </p>
              </div>
              <Image
                src={LA}
                alt=""
                className="lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] bg-primaryRed rounded-b-full"
              />
            </div>
          </div>

          <div className="fixed bottom-4 right-4 hidden lg:block ">
            <Link
              href="https://wa.me/625162955851?text=Halo mas"
              target="_blank"
            >
              <div className="bg-[#25D366] hover:brightness-95 text-white font-poppins py-2 px-4 rounded-full grid grid-cols-4 w-[252px] h-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="col-span-1 flex items-center">
                  <Image src={WA} alt="" className="w-[35px] h-[35px]" />
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <div>
                    <p className="font-medium text-sm">Hubungi Via WhatsApp</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="fixed bottom-4 right-4 lg:hidden">
            <Link
              href="https://wa.me/625162955851?text=Halo mas"
              target="_blank"
            >
              <div className="bg-[#25D366] hover:brightness-90 p-2 rounded-full shadow-lg w-[60px] h-[60px] flex items-center justify-center">
                <Image src={WA} alt="" className="w-[30px] h-[30px]" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
