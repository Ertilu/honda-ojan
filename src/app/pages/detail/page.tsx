"use client";

import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import WA from "@/image/icon-wa-putih.png";
import Logo from "@/image/logo-beat.png";
import Banner1 from "@/image/banner1.jpg";
import Beat from "@/image/beat.png";
import Lingkaran1 from "@/image/svg-lingkaran1.svg";
import Lingkaran2 from "@/image/svg-lingkaran2.png";
import Segitiga from "@/image/svg-segitiga.svg";
import Bulet1 from "@/image/svg-bulet1.png";
import Cross from "@/image/svg-cross.png";
import Kotak1 from "@/image/svg-kotak1.png";
import { motion } from "framer-motion";

export default function Detail() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full lg:h-[600px] h-auto lg:px-16 p-6">
        <div className="w-full flex justify-center">
          <Image src={Logo} alt="" className="lg:h-24 w-auto" />
        </div>
        <div className="w-full h-auto flex justify-center mt-12">
          <Image
            src={Banner1}
            alt=""
            className="lg:h-[400px] lg:w-auto h-auto w-full"
          />
        </div>
      </div>

      <div className="w-full lg:h-[700px] h-[400px] lg:px-16 p-6 relative mt-6">
        <Image
          src={Beat}
          alt=""
          className="lg:h-80 h-44 w-auto z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <div className="bg-abu1 lg:w-[250px] w-[200px] lg:h-[35px] h-[25px] rounded-full absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full grid grid-cols-4 items-center px-6">
            <div className="bg-red-500 rounded-full lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] col-span-1 justify-self-center cursor-pointer"></div>
            <div className="bg-blue-500 rounded-full lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] col-span-1 justify-self-center cursor-pointer "></div>
            <div className="bg-green-500 rounded-full lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] col-span-1 justify-self-center cursor-pointer outline outline-4 outline-offset-2 outline-abu2"></div>
            <div className="bg-gray-500 rounded-full lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] col-span-1 justify-self-center cursor-pointer "></div>
          </div>

          <div className="w-full flex justify-center mt-4">
            <p className="text-abu2 text-xl font-poppins font-semibold">
              Ijo Miskin
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
        >
          <Image
            src={Lingkaran1}
            alt=""
            className="absolute lg:top-[12%] top-[17%] lg:left-[27%] left-[15%] lg:h-[430px] h-[200px] w-auto"
          />
          <Image
            src={Lingkaran2}
            alt=""
            className="absolute top-[30%] left-[45%] w-auto lg:h-[300px] h-[150px]"
          />
          <Image
            src={Bulet1}
            alt=""
            className="absolute top-[65%] lg:left-[10%] left-0 lg:h-[150px] h-[50px] w-auto"
          />

          <motion.div
            animate={{ rotate: [0, 360], x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
            className="absolute top-[20%] left-[75%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={Cross}
              alt=""
              className="lg:h-[100px] h-[25px] w-auto"
            />
          </motion.div>

          <Image
            src={Kotak1}
            alt=""
            className="absolute lg:top-[37%] top-[30%] left-[80%] lg:h-[100px] h-[25px] w-auto"
          />
        </motion.div>
      </div>

      <div className="w-full h-[500px] bg-[#1d1d1d] lg:px-16 p-6">
        <div className="w-full flex justify-center">
          <p className="font-semibold font-poppins text-4xl ">FITUR</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="border-2 border-abu1 rounded-md w-full h-40"></div>
          <div className="border-2 border-abu1 rounded-md w-full h-40"></div>
          <div className="border-2 border-abu1 rounded-md w-full h-40"></div>
          <div className="border-2 border-abu1 rounded-md w-full h-40"></div>
        </div>
      </div>

      <div className="w-full bg-white min-h-[400px] lg:px-16 p-6 lg:grid lg:grid-cols-2 lg:gap-4 mt-6">
        <div className=" font-poppins">
          <p className="text-black text-xl font-semibold">Honda BeAT</p>
          <p className="text-abu2 text-sm">Mulai dari</p>
          <p className="font-bold text-[#dd2020] lg:text-4xl text-xl">
            Rp. 15,000,000
          </p>
          <div className="w-full h-12 bg-[#1d1d1d] rounded-full flex justify-center items-center cursor-pointer mt-6 hover:bg-[#cc0000]">
            <p className="font-medium">Hubungi Kami</p>
          </div>
        </div>

        <div className="lg:mt-0 mt-6">
          <table className="border-collapse border-2 border-abu1 w-full">
            <thead>
              <tr className="bg-[#1d1d1d]">
                <th>Tipe</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-abu2">
                <td className="h-8 w-1/2 px-2">BeAT CBS</td>
                <td className="h-8 w-1/2 px-2">Rp. 15.550.000</td>
              </tr>
              <tr className="text-abu2">
                <td className="bg-abu1 h-8 w-1/2 px-2">BeAT Deluxe</td>
                <td className="bg-abu1 h-8 w-1/2 px-2">Rp. 15.550.000</td>
              </tr>
              <tr className="text-abu2">
                <td className="h-8 w-1/2 px-2">BeAT Deluxe Smart Key</td>
                <td className="h-8 w-1/2 px-2">Rp. 15.550.000</td>
              </tr>
            </tbody>
          </table>

          <div className="w-[200px] h-[40px] bg-abu1 border-2 border-[#1d1d1d] rounded-full flex justify-center items-center cursor-pointer hover:brightness-90 mt-6">
            <p className="text-[#1d1d1d] font-semibold">Detail Angsuran</p>
          </div>
        </div>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div className="fixed bottom-4 right-4 hidden lg:block z-50">
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
      </div>

      <div className="fixed bottom-4 right-4 lg:hidden">
        <div className="bg-[#25D366] hover:brightness-90 p-2 rounded-full shadow-lg w-[70px] h-[70px] flex items-center justify-center">
          <Image src={WA} alt="" className="w-[50px] h-[50px]" />
        </div>
      </div>
    </div>
  );
}
