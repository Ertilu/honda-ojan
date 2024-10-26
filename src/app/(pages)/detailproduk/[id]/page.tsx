"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Image from "next/image";
import Lingkaran1 from "@/image/svg-lingkaran1.svg";
import Lingkaran2 from "@/image/svg-lingkaran2.png";
import Bulet1 from "@/image/svg-bulet1.png";
import Cross from "@/image/svg-cross.png";
import Kotak1 from "@/image/svg-kotak1.png";
import {
  AnimatePresence,
  frame,
  motion,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";
import Kontakwa from "@/app/components/kontakwa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Cardfiturmobile from "@/app/components/cardfiturmobile";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { GlobalContext } from "@/app/context/globalContext";
import { useDetailProductUtil } from "./page.util";

export default function Detail() {
  const { data } = useContext(GlobalContext);
  const [isOpenFiturMobile, setIsOpenFiturMobile] = useState(false);
  const [dataOpenFiturMobile, setDataOpenFiturMobile] = useState({
    image: "",
    title: "",
    text: "",
  });

  const inScreenControl = useAnimation();
  const slideControl = useAnimation();
  const {
    state: { selectedColor },
    event: { setSelectedColorId },
  } = useDetailProductUtil({ data });

  const hoverFitur = {
    initial: { height: "50px" },
    hover: { height: "200px", opacity: "0.8" },
  };

  const hoverIsiFitur = {
    // initial: { opacity: "0" },
    hover: { opacity: "1", marginTop: "30px" },
  };

  // const variantImage = {
  //   // initial: { opacity: 0 },
  //   // animate: { opacity: 1 },
  //   // exit: { opacity: 0 },
  //   rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
  //   stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } },
  // };

  // console.log("dataada", dataOpenFiturMobile);
  console.log("dataini", data);

  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white ">
        <Navbar />
      </div>

      <div className="w-full h-auto flex justify-center items-center p-4">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data?.banners?.map((b: any, idx: any) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex justify-center items-center ">
                  <img
                    src={b}
                    alt={`banner-${idx}`}
                    className="rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="w-full lg:h-[700px] h-[550px] lg:px-16 relative mt-6">
        <div className="w-full h-auto lg:px-16 flex justify-center items-center ">
          <div className="w-full lg:h-20 h-12 flex justify-center ">
            <img src={data?.logo} className="h-full w-auto" alt="" />
          </div>
        </div>

        <motion.img
          src={selectedColor?.image}
          alt=""
          className="lg:h-80 h-56 w-auto z-40 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
          // animate={rotate ? "rotate" : "stop"}
          // variants={variantImage}
        />

        <div className="w-full lg:h-[35px] h-[30px] absolute lg:top-[70%] top-[67%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primaryRed w-fit px-4 py-1 rounded-md justify-items-center mx-auto mb-6">
            <p className="text-white text-2xl font-bebas font-normal italic">
              {selectedColor?.type}
            </p>
          </div>
          <div className="bg-abu1 w-fit px-4 h-auto rounded-full justify-items-center mx-auto">
            <div className="py-2 flex items-center justify-center flex-wrap gap-4">
              {data?.colors?.map((c: any, idx: any) => (
                <div
                  className={`rounded-full lg:w-[25px] lg:h-[25px] w-[18px] h-[18px] col-span-1 lg:cursor-pointer ${
                    selectedColor?.code2 === c?.code2
                      ? "outline outline-4 outline-abu2"
                      : null
                  }`}
                  style={{
                    background: `linear-gradient(315deg, ${c?.code} , ${c?.code2} , ${c?.code3})`,
                  }}
                  onClick={() => setSelectedColorId(c._id)}
                  key={idx}
                />
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center my-4">
            <p
              className="lg:text-4xl text-2xl font-bebas tracking-widest font-semibold"
              // style={{
              //   background: `linear-gradient(315deg, ${selectedColor?.code}, ${selectedColor?.code2}, ${selectedColor?.code3})`,
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
              style={{ color: `${selectedColor?.code2}` }}
            >
              {/* {console.log("etlete", selectedColor)} */}
              {selectedColor?.name}
            </p>
          </div>
        </div>

        {/* <motion.div
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
        </motion.div> */}
      </div>

      <div className="w-full h-auto bg-[#1d1d1d] lg:px-16 p-6 flex flex-col items-center">
        <div className="w-full flex justify-center ">
          <p className="font-semibold font-poppins text-4xl ">FITUR</p>
        </div>
        <div className="lg:w-[1000px] w-full h-full lg:grid grid-cols-2 gap-4 my-6 hidden">
          {data?.features?.map((data: any, index: any) => (
            <motion.div
              whileHover="hover"
              key={index}
              className="col-span-1 relative bg-white w-full lg:h-[250px] flex justify-center items-end lg:cursor-pointer"
            >
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <motion.div
                variants={hoverFitur}
                className="absolute flex flex-col justify-start items-center w-full bg-black lg:h-auto"
              >
                <p className="text-lg font-medium font-bebas tracking-widest text-white ">
                  {data.title}
                </p>
                <motion.div
                  variants={hoverIsiFitur}
                  initial={{ opacity: 0, height: "0px" }}
                >
                  <p>{data.text}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden w-full h-full flex flex-col gap-4 my-6 justify-center items-center">
          {data?.features?.map((data: any, index: any) => (
            <Cardfiturmobile
              key={index}
              index={index}
              data={data}
              isOpenFiturMobile={isOpenFiturMobile}
              setIsOpenFiturMobile={setIsOpenFiturMobile}
              setDataOpenFiturMobile={setDataOpenFiturMobile}
            />
          ))}
        </div>
      </div>

      {isOpenFiturMobile ? (
        <div
          className="fixed z-40 w-full h-screen bg-black/[.60] flex justify-center items-center"
          onClick={() => setIsOpenFiturMobile(false)}
        >
          <div className="bg-black w-4/5 md:w-[550px] h-auto">
            <img
              src={dataOpenFiturMobile?.image}
              alt=""
              className="w-full h-auto"
            />
            <div className="flex justify-center items-center w-full h-fit py-2">
              <p className="text-lg font-medium font-bebas tracking-widest text-white">
                {dataOpenFiturMobile?.title}
              </p>
            </div>
            <div className="flex justify-center px-4 pb-4">
              <p className="font-thin text-sm font-poppins text-white">
                {dataOpenFiturMobile?.text}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="w-full bg-white min-h-[400px] lg:px-16 p-6 lg:grid lg:grid-cols-2 lg:gap-4 mt-6">
        <div className=" font-poppins">
          <p className="text-black text-xl font-semibold">{data?.name}</p>
          <p className="text-abu2 text-sm">Mulai dari</p>
          <p className="font-bold text-[#dd2020] lg:text-4xl text-xl">
            Rp. {new Intl.NumberFormat("en-US").format(data?.price)}
          </p>
          <Link
            href="/kontak"
            className="w-full h-12 bg-[#1d1d1d] rounded-full flex justify-center items-center lg:cursor-pointer mt-6 hover:bg-[#cc0000]"
          >
            <p className="font-medium">Hubungi Kami</p>
          </Link>
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
              {data?.types?.map((t: any, idx: any) => {
                return (
                  <tr className="text-abu2 border" key={idx}>
                    <td className="h-8 w-1/2 px-2">{t?.name}</td>
                    <td className="h-8 w-1/2 px-2">
                      Rp. {new Intl.NumberFormat("en-US").format(t?.price)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="lg:w-[200px] w-full h-[40px]">
            <Link href="/list">
              <div className="lg:w-[200px] w-full h-[40px] bg-abu1 border-2 border-[#1d1d1d] rounded-full flex justify-center items-center cursor-pointer hover:brightness-90 mt-6 lg:cursor-pointer">
                <p className="text-[#1d1d1d] font-semibold">Detail Angsuran</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div className="w-full lg:px-16 p-6 absolute z-40">
        <Kontakwa />
      </div>
    </div>
  );
}
