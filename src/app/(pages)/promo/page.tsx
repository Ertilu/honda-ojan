import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Banner1 from "@/image/Banner-Vario-160.jpg";
import Link from "next/link";
import Kontakwa from "@/app/components/kontakwa";

export default function Promo() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Promo</p>
      </div>

      <div className="w-full lg:min-h-screen min-h-80 lg:container px-6 my-6">
        <div className="grid lg:grid-cols-4 px-6">
          <Link href={`/detailpromo`}>
            <div className="col-span-1 shadow-[0_1px_4px_rgba(0,0,0,0.16)] h-[250px] bg-white cursor-pointer group hover:brightness-95 transition">
              <Image src={Banner1} alt="" className="w-full h-auto" />
              <div className="px-4 py-2">
                <p className="font-poppins font-semibold text-xl text-black">
                  Honda Vario 160 ABS
                </p>
                <p className="font-poppins font-medium text-md text-black">
                  Periode : <span className="text-[#cc0000]">Agustus 2024</span>
                </p>
              </div>
              <div className="flex flex-grow lg:mb-0 mb-2">
                <div className="flex justify-center items-end flex-grow">
                  <p className="font-normal lg:text-md text-sm text-abu2 text-center group-hover:text-black">
                    Selengkapnya
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
      <div className="w-full">
        <Kontakwa />
      </div>
    </div>
  );
}
