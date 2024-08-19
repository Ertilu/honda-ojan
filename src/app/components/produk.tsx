import Image from "next/image";
import React from "react";
import Sort from "@/image/icon-sort.svg";
import Arrow from "@/image/icon-arrow.svg";
import Beat from "@/image/beat.png";
import Scoopy from "@/image/scoopy.png";
import Pcx from "@/image/pcx.png";

export default function Produk() {
  return (
    <div className="text-black font-poppins min-h-screen">
      <div className="w-full h-auto flex justify-center">
        <p className="font-extrabold text-4xl">Motor HONDA</p>
      </div>

      <div className="w-full h-auto flex justify-center mt-8">
        <div className="bg-abu1 h-[63px] w-[418px] rounded-xl grid grid-cols-3 m-auto justify-center items-center">
          <div className="col-span-1 bg-white h-[43px] w-[113px] rounded-xl justify-self-center mx-auto flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Matic</p>
          </div>
          <div className="col-span-1 h-[43px] w-[113px] justify-self-center mx-auto rounded-xl flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Sport</p>
          </div>
          <div className="col-span-1 h-[43px] w-[113px] justify-self-center mx-auto rounded-xl flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Cub</p>
          </div>
        </div>
      </div>

      <div className="bg-abu1 w-[276px] h-[43px] rounded-xl grid grid-cols-6 items-center justify-center my-6 cursor-pointer hover:brightness-90 transition delay-50">
        <div className="col-span-1 justify-self-center">
          <Image src={Sort} alt="" />
        </div>
        <div className="col-span-4">
          <p>Terbaru</p>
        </div>
        <div className="col-span-1 justify-self-center">
          <Image src={Arrow} alt="" />
        </div>
      </div>

      <div className="w-full h-auto grid grid-cols-3">
        <div className="col-span-1 w-[400px] h-[479px] bg-abu1 rounded-xl p-6 flex flex-col cursor-pointer group hover:brightness-90 transition ease-in-out delay-50">
          <div className="w-[344px] h-[245px] justify-self-center mx-auto flex justify-center items-end mb-2 ">
            <Image src={Beat} className="h-auto w-100" alt="" />
          </div>
          <div className="mt-4 mb-2">
            <p className="font-semibold text-2xl">BeAT Street</p>
          </div>
          <div className="mb-2">
            <p className="font-normal text-md  text-abu2">
              Mulai dari <br />
              <em className="text-2xl font-semibold text-black not-italic">
                Rp. 15,550,000
              </em>
            </p>
          </div>
          <div className="flex justify-center items-end flex-grow">
            <p className="font-normal text-md  text-abu2 text-center transition group-hover:text-black ease-in-out delay-50 group-hover:-translate-y-4 group-hover:text-lg group-hover:font-medium">
              Selengkapnya
            </p>
          </div>
        </div>

        <div className="col-span-1 w-[400px] h-[479px] bg-abu1 rounded-xl p-6 flex flex-col cursor-pointer group hover:brightness-90 transition ease-in-out delay-50">
          <div className="w-[344px] h-[245px] justify-self-center mx-auto flex justify-center items-end mb-2 ">
            <Image src={Scoopy} className="h-auto w-100" alt="" />
          </div>
          <div className="mt-4 mb-2">
            <p className="font-semibold text-2xl">Scoopy</p>
          </div>
          <div className="mb-2">
            <p className="font-normal text-md  text-abu2">
              Mulai dari <br />
              <em className="text-2xl font-semibold text-black not-italic">
                Rp. 15,550,000
              </em>
            </p>
          </div>
          <div className="flex justify-center items-end flex-grow">
            <p className="font-normal text-md  text-abu2 text-center transition group-hover:text-black ease-in-out delay-50 group-hover:-translate-y-4 group-hover:text-lg group-hover:font-medium">
              Selengkapnya
            </p>
          </div>
        </div>

        <div className="col-span-1 w-[400px] h-[479px] bg-abu1 rounded-xl p-6 flex flex-col cursor-pointer group hover:brightness-90 transition ease-in-out delay-50">
          <div className="w-[344px] h-[245px] justify-self-center mx-auto flex justify-center items-end mb-2 ">
            <Image src={Pcx} className="h-auto w-100" alt="" />
          </div>
          <div className="mt-4 mb-2">
            <p className="font-semibold text-2xl">PCX 160</p>
          </div>
          <div className="mb-2">
            <p className="font-normal text-md  text-abu2">
              Mulai dari <br />
              <em className="text-2xl font-semibold text-black not-italic">
                Rp. 15,550,000
              </em>
            </p>
          </div>
          <div className="flex justify-center items-end w-100 h-auto flex-grow">
            <p className="font-normal text-md  text-abu2 text-center transition group-hover:text-black ease-in-out delay-50 group-hover:-translate-y-4 group-hover:text-lg group-hover:font-medium">
              Selengkapnya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
