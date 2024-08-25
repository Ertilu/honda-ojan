import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Kontakwa from "@/app/components/kontakWA";
import Image from "next/image";
import WA from "@/image/icon-wa-putih.png";

export default function Kontak() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Kontak</p>
      </div>
      <div className="w-full lg:px-6 p-6">
        <p className="font-poppins font-semibold text-lg text-black mb-4">
          WhatsApp
        </p>
        <div className="bg-[#25D366] cursor-pointer hover:brightness-90 text-white font-poppins py-2 px-4 rounded-md shadow-lg flex justify-center gap-4 w-full h-[70px]">
          <div className="flex items-center">
            <Image src={WA} alt="" className="w-10 h-10" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div>
              <p className="font-semibold text-2xl">08126942069</p>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-abu2 mt-6"></div>
      </div>

      <div className="w-full font-poppins font-medium text-md text-black lg:container px-6 my-2">
        <p className="font-poppins font-semibold text-lg text-black mb-4">
          Email
        </p>
        <form action="">
          <div className="w-full flex justify-center">
            <div className="border-2 border-abu2 px-6 py-4 rounded-md w-[420px] h-auto">
              <div>
                <p>Nama</p>
                <input
                  type="text"
                  className="border-2 border-abu1 bg-abu1 h-8 w-full rounded-md px-4"
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  className="border-2 border-abu1 bg-abu1 h-8 w-full rounded-md px-4"
                />
              </div>
              <div>
                <p>Pertanyaan / Pesan</p>
                <textarea className="border-2 border-abu1 bg-abu1 min-h-24 resize-none w-full rounded-md px-4" />
              </div>
              <div className="bg-[#cc0000] rounded-md hover:brightness-95 cursor-pointer flex justify-center items-center h-8">
                <p className="font-semibold font-poppins text-md text-white ">
                  Kirim
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
