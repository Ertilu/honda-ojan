import React from "react";
import WA from "@/image/icon-wa-putih.png";
import Image from "next/image";
import Link from "next/link";

export default function kontakwa() {
  return (
    <div>
      <div className="fixed bottom-4 right-4 hidden lg:block">
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="bg-[#25D366] hover:brightness-90 text-white font-poppins py-2 px-4 rounded-full shadow-lg grid grid-cols-4 w-[252px] h-[70px]">
            <div className="col-span-1 flex items-center">
              <Image src={WA} alt="" className="w-10 h-10" />
            </div>
            <div className="col-span-3 flex flex-col justify-center items-center">
              <div>
                <p className="font-medium text-sm">Hubungi Kami</p>
              </div>
              <div>
                <p className="font-semibold text-2xl">08126942069</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="fixed bottom-4 right-4 lg:hidden">
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="bg-[#25D366] hover:brightness-90 p-2 rounded-full shadow-lg w-[70px] h-[70px] flex items-center justify-center">
            <Image src={WA} alt="" className="w-[40px] h-[40px]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
