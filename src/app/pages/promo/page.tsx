import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Banner1 from "@/image/banner1.jpg";

export default function Promo() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="min-h-[500px] w-full bg-white lg:container mt-20 px-6">
        <div className="w-full mb-6">
          <p className="text-black text-4xl font-poppins font-semibold">
            Promo
          </p>
        </div>
        <div className="w-full h-[300px]">
          <Image
            src={Banner1}
            alt=""
            className="lg:w-auto lg:h-full w-[350px] h-auto justify-self-center mx-auto"
          />
        </div>
      </div>
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
