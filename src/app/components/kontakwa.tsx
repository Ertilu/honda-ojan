import React from "react";
import WA from "@/image/icon-wa-putih.png";
import LA from "@/image/icon-live-chat.png";
import Image from "next/image";
import Link from "next/link";

export default function kontakwa() {
  return (
    <div>
      <div className="fixed bottom-20 right-4">
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="flex flex-col hover:brightness-95 rounded-b-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-[70px] w-[60px] lg:h-[120px] h-[110px]">
            <div className="h-[50px] lg:w-[70px] w-[60px] rounded-t-lg bg-primaryRed">
              <p className="text-white font-bold h-fit text-center text-lg">
                LIVE
              </p>

              <p className="text-white font-bold text-center text-lg -mt-2">
                CHAT
              </p>
            </div>
            <Image
              src={LA}
              alt=""
              className="lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] bg-primaryRed rounded-b-full"
            />
          </div>
        </Link>
      </div>

      <div className="fixed bottom-4 right-4 hidden lg:block ">
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="bg-[#25D366] hover:brightness-95 text-white font-poppins py-2 px-4 rounded-full grid grid-cols-4 w-[252px] h-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="col-span-1 flex items-center">
              <Image src={WA} alt="" className="w-[35px] h-[35px]" />
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <div>
                <p className="font-medium text-sm">Hubungi Via WhatsApp</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="fixed bottom-4 right-4 lg:hidden">
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="bg-[#25D366] hover:brightness-90 p-2 rounded-full shadow-lg w-[60px] h-[60px] flex items-center justify-center">
            <Image src={WA} alt="" className="w-[30px] h-[30px]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
