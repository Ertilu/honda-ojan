import Image from "next/image";
import React from "react";
import Honda from "@/image/Honda-footer.png";
import WA from "@/image/icon-wa-putih.png";

export default function Footer() {
  return (
    <div className="lg:container w-full lg:min-h-[250px] min-h-[600px] lg:grid lg:grid-cols-3">
      <div className="col-span-1 p-6 hidden lg:block">
        <Image src={Honda} alt="" className="h-20 w-auto pb-8" />
        <p className="font-poppins">
          Nanti aLamat Lorem ipsum dolor sit amet consectetur. Sed nulla
          facilisis volutpat lorem justo id placerat augue rhoncus. Vulputate
          nec gravida id diam velit bibendum. Tortor sodales turpis imperdiet
          nunc bibendum amet.
        </p>
      </div>

      <div className="col-span-1 p-6 hidden lg:block">
        <p className="text-7xl font-bebas">BAM</p>
        <p className="font-poppins text-lg">Bumen Abadi Motor</p>
        <div className="bg-abu2 h-[113px] w-[229px] mt-2 flex justify-center items-center">
          <p>nanti ini gmaps bisa digeser-geser</p>
        </div>
      </div>

      <div className="col-span-1 font-poppins p-6 hidden lg:block h-100">
        <div className="border-b-2 border-abu2 w-36 my-2 pb-4">
          <p className="text-lg">Fitur/Menu</p>
        </div>
        <div className="border-b-2 border-abu2 w-36  my-2 pb-4">
          <p className="text-lg">Fitur/Menu</p>
        </div>
        <div className="border-b-2 border-abu2 w-36  my-2 pb-4">
          <p className="text-lg">Fitur/Menu</p>
        </div>
        <div className="w-50 h-16 bg-[#1d1d1d] rounded-xl flex items-center justify-center p-2">
          <div className="mr-4">
            <Image src={WA} alt="" className=" h-12 w-12" />
          </div>
          <div>
            <p className="text-lg">Hubungi Kami 08126942069</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-2">
        <div className="col-span-1 w-100 px-4 pt-4">
          <Image src={Honda} alt="" className="h-auto w-100" />
        </div>
        <div className="col-span-1 w-100 p-4">
          <p className="text-4xl font-bebas">BAM</p>
          <p className="font-poppins text-md -mt-2">Bumen Abadi Motor</p>
        </div>
      </div>

      <div className="lg:hidden flex flex-col px-4 pb-4">
        <div className="border-b-2 border-abu2 w-100 my-2 pb-4">
          <p className="text-lg">Fitur/Menu</p>
        </div>
        <div className="border-b-2 border-abu2 w-100 my-2 pb-4">
          <p className="text-lg">Fitur/Menu</p>
        </div>
        <div className="border-b-2 border-abu2 w-100  my-2 pb-4">
          <p className="text-lg">Fitur/Menu</p>
        </div>
      </div>

      <div className="lg:hidden p-4 ">
        <p className="font-poppins">
          Nanti aLamat Lorem ipsum dolor sit amet consectetur. Sed nulla
          facilisis volutpat lorem justo id placerat augue rhoncus. Vulputate
          nec gravida id diam velit bibendum. Tortor sodales turpis imperdiet
          nunc bibendum amet.
        </p>
        <div className="bg-abu2 h-[113px] w-[229px] mt-2 flex justify-center items-center justify-self-center mx-auto my-6">
          <p>nanti ini gmaps bisa digeser-geser</p>
        </div>
        <div className="w-50 h-16 bg-[#1d1d1d] rounded-3xl flex items-center justify-center p-2">
          <div className="mr-4">
            <Image src={WA} alt="" className=" h-12 w-12" />
          </div>
          <div>
            <p className="text-lg">Hubungi Kami 08126942069</p>
          </div>
        </div>
      </div>
    </div>
  );
}
