import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Adira from "@/image/adira.png";
import FIF from "@/image/icon-fif.png";
import MCF from "@/image/icon-mcf.png";
import BCA from "@/image/icon-bca.png";
import Mandiri from "@/image/icon-mandiri.png";
import OTO from "@/image/icon-oto.png";
import Brosur from "@/image/brosur.jpeg";
import Link from "next/link";
import { saveAs } from "file-saver";

export default function List() {
  // const downloadImage = () => {
  //   saveAs(Brosur, "image.jpg"); // Put your image URL here.
  // };
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full h-auto lg:px-16 pt-6 px-6">
        <div className="w-full lg:h-20 h-10 grid lg:grid-cols-6 grid-cols-3 lg:gap-0 gap-3 lg:mb-0 mb-6">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={Adira}
              alt=""
              className="lg:h-12 lg:w-auto h-6 w-auto"
            />
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <Image src={FIF} alt="" className="lg:h-12 lg:w-auto h-6 w-auto" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image src={OTO} alt="" className="lg:h-20 lg:w-auto h-9 w-auto" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image src={MCF} alt="" className="lg:h-12 lg:w-auto h-6 w-auto" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image src={BCA} alt="" className="lg:h-12 lg:w-auto h-6 w-auto" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={Mandiri}
              alt=""
              className="lg:h-12 lg:w-auto h-6 w-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto lg:px-16 lg:p-6 flex flex-col justify-center items-center gap-4 my-6">
        <Image src={Brosur} alt="" className="w-full h-auto " />

        <a
          target="_blank"
          href="http://honda-bam.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrosur.56ec84de.jpeg&w=1920&q=75"
          download="brosur-BAM.jpeg"
          className="z-30 w-5/6"
        >
          <div
            className="bg-[#cc0000] rounded-md hover:brightness-95 lg:cursor-pointer flex justify-center items-center h-8"
            // onClick={downloadImage}
          >
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
