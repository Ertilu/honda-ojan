import Image from "next/image";
import React from "react";
import Honda from "@/image/Honda-footer.png";
import WA from "@/image/icon-wa-putih.png";
import Link from "next/link";

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
        <div className="bg-abu2 h-auto w-full mt-2 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0400536322336!2d106.83096277474974!3d-6.1253123938614085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e1a80420c57%3A0x275b93253d2232e3!2sDunia%20Fantasi!5e0!3m2!1sid!2sid!4v1725955230762!5m2!1sid!2sid"
            // width="400"
            // height="300"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            className="w-full h-[200px]"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="col-span-1 font-poppins p-6 hidden lg:block h-100">
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/">
            <p className="text-lg font-normal">Home</p>
          </Link>
        </div>
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/produk">
            <p className="text-lg font-normal">Produk</p>
          </Link>
        </div>
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/promo">
            <p className="text-lg font-normal">Promo</p>
          </Link>
        </div>
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/kontak">
            <p className="text-lg font-normal">Kontak</p>
          </Link>
        </div>
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="w-50 h-12 bg-[#1d1d1d] rounded-xl flex items-center justify-center p-2 lg:cursor-pointer">
            <div className="mr-4">
              <Image src={WA} alt="" className=" h-8 w-8" />
            </div>
            <div>
              <p className="text-lg">Hubungi via WA</p>
            </div>
          </div>
        </Link>
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
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/">
            <p className="text-lg font-normal">Home</p>
          </Link>
        </div>
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/produk">
            <p className="text-lg font-normal">Produk</p>
          </Link>
        </div>
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/promo">
            <p className="text-lg font-normal">Promo</p>
          </Link>
        </div>
        <div className="border-b-2 border-abu2 w-full h-10 my-2">
          <Link href="/kontak">
            <p className="text-lg font-normal">Kontak</p>
          </Link>
        </div>
      </div>

      <div className="lg:hidden p-4 ">
        <p className="font-poppins">
          Nanti aLamat Lorem ipsum dolor sit amet consectetur. Sed nulla
          facilisis volutpat lorem justo id placerat augue rhoncus. Vulputate
          nec gravida id diam velit bibendum. Tortor sodales turpis imperdiet
          nunc bibendum amet.
        </p>
        <div className="bg-abu2 h-auto w-full mt-2 flex justify-center items-center justify-self-center mx-auto my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0400536322336!2d106.83096277474974!3d-6.1253123938614085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e1a80420c57%3A0x275b93253d2232e3!2sDunia%20Fantasi!5e0!3m2!1sid!2sid!4v1725955230762!5m2!1sid!2sid"
            // width="400"
            // height="300"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            className="w-[400px] h-[200px]"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="w-50 h-16 bg-[#1d1d1d] rounded-md flex items-center justify-center p-2 lg:cursor-pointer">
            <div className="mr-4">
              <Image src={WA} alt="" className=" lg:h-12 lg:w-12 h-8 w-8" />
            </div>
            <div>
              <p className="text-lg">Hubungi via WA</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
