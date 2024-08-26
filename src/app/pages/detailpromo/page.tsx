import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Kontakwa from "@/app/components/kontakwa";
import Banner1 from "@/image/Banner-Vario-160.jpg";

export default function page() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full h-auto lg:px-16 p-6 flex flex-col justify-center ">
        <Image
          src={Banner1}
          alt=""
          className="lg:h-[500px] lg:w-auto w-full h-auto"
        />

        <div className="w-full h-auto shadow-[0_1px_4px_rgba(0,0,0,0.16)] p-6">
          <div className="w-full lg:grid lg:grid-cols-2 mb-6">
            <div className="col-span-1">
              <p className="font-poppins font-semibold text-2xl text-black">
                Promo Honda Vario 160 ABS
              </p>
            </div>
            <div className="col-span-1 lg:text-end">
              <p className="font-poppins font-semibold text-lg text-black">
                Periode : <span className="text-[#cc0000]">Agustus 2024</span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-poppins font-medium text-lg text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor fugit blanditiis modi consectetur rerum sint harum
              cupiditate, ex consequatur, consequuntur sequi facere aperiam eos
              alias vero repellat est corrupti nobis non voluptas pariatur enim
              assumenda! Deserunt, vero quaerat asperiores ipsa, quidem officiis
              nostrum temporibus iure nulla animi architecto amet?
            </p>
          </div>

          <div>
            <p className="font-poppins font-medium text-md text-abu2">
              Syarat dan Ketentuan :
            </p>
            <p className="font-poppins font-medium text-md text-abu2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor fugit blanditiis modi consectetur rerum sint harum
              cupiditate, ex consequatur, consequuntur sequi facere aperiam eos
              alias vero repellat est corrupti nobis non voluptas pariatur enim
              assumenda! Deserunt, vero quaerat asperiores ipsa, quidem officiis
              nostrum temporibus iure nulla animi architecto amet?
            </p>
          </div>
        </div>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div>
        <Kontakwa />
      </div>
    </div>
  );
}
