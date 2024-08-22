import Image from "next/image";
import React from "react";
import Sort from "@/image/icon-sort.svg";
import Arrow from "@/image/icon-arrow.svg";
import Beat from "@/image/beat.png";
import Scoopy from "@/image/scoopy.png";
import Pcx from "@/image/pcx.png";
import Link from "next/link";

export default function Produk() {
  return (
    <div className="text-black font-poppins w-full min-h-screen px-6">
      <div className="w-full h-auto flex justify-center">
        <p className="font-extrabold text-4xl">Motor HONDA</p>
      </div>

      <div className="w-full h-auto flex justify-center mt-8">
        <div className="bg-abu1 h-[63px] w-[418px] rounded-md grid grid-cols-3 m-auto justify-center items-center">
          <div className="col-span-1 bg-white h-[43px] lg:w-[113px] w-[100px] rounded-md justify-self-center mx-auto flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Matic</p>
          </div>
          <div className="col-span-1 h-[43px] w-[113px] justify-self-center mx-auto rounded-md flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Sport</p>
          </div>
          <div className="col-span-1 h-[43px] w-[113px] justify-self-center mx-auto rounded-md flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Cub</p>
          </div>
        </div>
      </div>

      <div className="bg-abu1 w-[276px] h-[43px] rounded-md grid grid-cols-6 items-center justify-center my-6 lg:mx-12   mx-auto cursor-pointer hover:brightness-95 transition delay-50">
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

      <div className="w-full h-auto grid lg:grid-cols-3 grid-cols-2 justify-center">
        <Link href="/pages/detail">
          <div className="col-span-1 lg:w-[400px] lg:h-[479px] w-[157px] h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50">
            <div className="lg:w-[344px] lg:h-[245px] w-[132px] h-[111px] justify-self-center mx-auto flex justify-center items-end mb-2">
              <Image src={Beat} className="h-auto w-100" alt="" />
            </div>
            <div className="lg:mt-4 lg:mb-2 lg:px-0 px-4">
              <p className="font-semibold lg:text-2xl text-lg">BeAT Street</p>
            </div>
            <div className="mb-2 lg:px-0 px-4">
              <p className="font-normal lg:text-md text-sm text-abu2">
                Mulai dari <br />
                <span className="lg:text-2xl text-md font-semibold text-black">
                  Rp. 15,550,000
                </span>
              </p>
            </div>

            <div className="flex flex-grow lg:mb-0 mb-2">
              <div className="flex justify-center items-end flex-grow">
                <p className="font-normal lg:text-md text-sm text-abu2 text-center transition group-hover:text-[#cc0000] ease-in-out delay-75 lg:group-hover:-translate-y-4 group-hover:-translate-y-2 lg:group-hover:text-lg group-hover:text-md group-hover:font-medium">
                  Selengkapnya
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className="col-span-1 lg:w-[400px] lg:h-[479px] w-[157px] h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50">
          <div className="lg:w-[344px] lg:h-[245px] w-[132px] h-[111px] justify-self-center mx-auto flex justify-center items-end mb-2">
            <Image src={Pcx} className="h-auto w-100" alt="" />
          </div>
          <div className="lg:mt-4 lg:mb-2 lg:px-0 px-4">
            <p className="font-semibold lg:text-2xl text-lg">PCS 160</p>
          </div>
          <div className="mb-2 lg:px-0 px-4">
            <p className="font-normal lg:text-md text-sm text-abu2">
              Mulai dari <br />
              <span className="lg:text-2xl text-md font-semibold text-black">
                Rp. 15,550,000
              </span>
            </p>
          </div>

          <div className="flex flex-grow lg:mb-0 mb-2">
            <div className="flex justify-center items-end flex-grow">
              <p className="font-normal lg:text-md text-sm text-abu2 text-center transition group-hover:text-[#cc0000] ease-in-out delay-75 lg:group-hover:-translate-y-4 group-hover:-translate-y-2 lg:group-hover:text-lg group-hover:text-md group-hover:font-medium">
                Selengkapnya
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:w-[400px] lg:h-[479px] w-[157px] h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50">
          <div className="lg:w-[344px] lg:h-[245px] w-[132px] h-[111px] justify-self-center mx-auto flex justify-center items-end mb-2">
            <Image src={Scoopy} className="h-auto w-100" alt="" />
          </div>
          <div className="lg:mt-4 lg:mb-2 lg:px-0 px-4">
            <p className="font-semibold lg:text-2xl text-lg">Scoopy</p>
          </div>
          <div className="mb-2 lg:px-0 px-4">
            <p className="font-normal lg:text-md text-sm text-abu2">
              Mulai dari <br />
              <span className="lg:text-2xl text-md font-semibold text-black">
                Rp. 15,550,000
              </span>
            </p>
          </div>

          <div className="flex flex-grow lg:mb-0 mb-2">
            <div className="flex justify-center items-end flex-grow">
              <p className="font-normal lg:text-md text-sm text-abu2 text-center transition group-hover:text-[#cc0000] ease-in-out delay-75 lg:group-hover:-translate-y-4 group-hover:-translate-y-2 lg:group-hover:text-lg group-hover:text-md group-hover:font-medium">
                Selengkapnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
