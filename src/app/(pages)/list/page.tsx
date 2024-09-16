import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Adira from "@/image/adira.png";
import Adiraku from "@/image/adiraku.png";
import AHM from "@/image/ahm.png";
import One from "@/image/one-heart.png";
import Brosur from "@/image/brosur.jpeg";
import Link from "next/link";

export default function List() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full h-auto lg:px-16 pt-6 px-6">
        <div className="w-full lg:h-20 h-10 grid grid-cols-4">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={Adira}
              alt=""
              className="lg:h-20 lg:w-auto h-8 w-auto"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={Adiraku}
              alt=""
              className="lg:h-20 lg:w-auto h-8 w-auto"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image src={AHM} alt="" className="lg:h-20 lg:w-auto h-6 w-auto" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={One}
              alt=""
              className="lg:h-20 lg:w-auto h-10 w-auto "
            />
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:h-auto w-auto h-[420px] lg:px-16 lg:p-6 flex flex-col justify-center items-center gap-4 my-4">
        <Image
          src={Brosur}
          alt=""
          className="lg:w-full lg:h-auto w-auto h-full lg:rotate-0 rotate-90"
        />

        <a
          href="image/brosur.jpeg"
          download="brosur-BAM.jpeg"
          className="z-30 w-5/6"
        >
          <div className="bg-[#cc0000] rounded-md hover:brightness-95 cursor-pointer flex justify-center items-center h-8">
            <p className="font-semibold font-poppins text-md text-white ">
              Unduh Brosur
            </p>
          </div>
        </a>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
