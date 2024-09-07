import React from "react";
import WA from "@/image/icon-wa-putih.png";
import Image from "next/image";
import Link from "next/link";

export default function kontakwa() {
  return (
    <div>
      <div className="fixed bottom-4 right-4 hidden lg:block">
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="bg-[#25D366] hover:brightness-90 text-white font-poppins py-2 px-4 rounded-full shadow-lg grid grid-cols-4 w-[252px] h-[50px]">
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
