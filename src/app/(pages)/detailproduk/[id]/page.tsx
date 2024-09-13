"use client";

import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Image from "next/image";
import Banner1 from "@/image/banner1.jpg";
import Beat from "@/image/beat.png";
import Lingkaran1 from "@/image/svg-lingkaran1.svg";
import Lingkaran2 from "@/image/svg-lingkaran2.png";
import Bulet1 from "@/image/svg-bulet1.png";
import Cross from "@/image/svg-cross.png";
import Kotak1 from "@/image/svg-kotak1.png";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import Kontakwa from "@/app/components/kontakwa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { GlobalContext } from "@/app/context/globalContext";
import { useDetailProductUtil } from "./page.util";

export default function Detail() {
  const { data } = useContext(GlobalContext);
  const ref = useRef(null);
  const isInScreen = useInView(ref, { once: true });
  const inScreenControl = useAnimation();
  const slideControl = useAnimation();
  const {
    state: { selectedColor },
    event: { setSelectedColorId },
  } = useDetailProductUtil({ data });
  const hoverFitur = {
    initial: { height: "50px" },
    hover: { height: "200px" },
  };

  const hoverParent = {
    initial: { opacity: "1" },
  };

  useEffect(() => {
    console.log(isInScreen);
    if (isInScreen) {
      inScreenControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInScreen]);

  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white overflow-x-hidden">
      <div className="w-full h-full sticky top-0 z-50 bg-white ">
        <Navbar />
      </div>

      <div className="w-full h-auto lg:px-16">
        <div className="w-full flex justify-center">
          <img src={data?.logo} className="h-full w-80" alt="" />
        </div>
      </div>

      <div className="w-full h-auto flex justify-center mt-5">
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
                <div className="flex justify-center items-center">
                  <img
                    src={b}
                    alt={`banner-${idx}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="w-full lg:h-[700px] h-[400px] lg:px-16 p-6 relative mt-6">
        <img
          src={selectedColor?.image}
          alt=""
          className="lg:h-80 h-44 w-auto z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
        />

        <div className="lg:w-[350px] w-[200px] lg:h-[35px] h-[25px] absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-abu1 w-full h-auto rounded-full">
            <div className="py-2 flex items-center justify-center flex-wrap gap-6">
              {data?.colors?.map((c: any, idx: any) => (
                <div
                  className="rounded-full w-[25px] h-[25px] col-span-1 cursor-pointer"
                  style={{ backgroundColor: c?.code }}
                  onClick={() => setSelectedColorId(c._id)}
                  key={idx}
                />
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center mt-4">
            <p className="text-abu2 lg:text-xl text-sm font-poppins font-semibold">
              {selectedColor?.name}
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

      <div className="w-full h-auto bg-[#1d1d1d] lg:px-16 p-6 flex flex-col items-center">
        <div className="w-full flex justify-center ">
          <p className="font-semibold font-poppins text-4xl ">FITUR</p>
        </div>
        <div
          className="w-[1000px] h-full grid grid-cols-2 gap-4 my-6"
          ref={ref}
        >
          {data?.features?.map((data: any, index: any) => (
            <motion.div
              whileHover="hover"
              key={index}
              className="col-span-1 relative bg-white w-full lg:h-[250px] flex justify-center items-end lg:cursor-pointer"
            >
              <img
                src={data.images}
                alt=""
                className="w-full h-full object-cover"
              />
              <motion.div
                variants={hoverFitur}
                className="absolute flex justify-center items-center w-full bg-black "
              >
                <p className="text-lg font-medium font-bebas tracking-widest text-white ">
                  {data.texts}
                </p>
              </motion.div>
            </motion.div>
          ))}
          {/* {data?.features?.map((data: any, index: any) =>
            index % 2 === 0 ? (
              <div className="grid grid-cols-2 mt-8 gap-4" key={index}>
                <div className="col-span-1 rounded-md w-full h-40 flex justify-center items-center">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, x: 80 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={slideControl}
                    transition={{ duration: 0.3, delay: index - 0.7 }}
                    className="lg:text-lg text-base text-white"
                  >
                    {data.texts}
                  </motion.p>
                </div>
                <div className="col-span-1 rounded-md w-full h-40 flex justify-center">
                  <motion.img
                    variants={{
                      hidden: { opacity: 0, x: -80 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={slideControl}
                    transition={{ duration: 0.3, delay: index - 0.7 }}
                    src={data.images}
                    className="h-full w-auto object-cover rounded-md"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 mt-8 gap-4" key={index}>
                <div className="col-span-1 rounded-md w-full h-40 flex justify-center">
                  <motion.img
                    variants={{
                      hidden: { opacity: 0, x: 80 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={slideControl}
                    transition={{ duration: 0.3, delay: index - 0.7 }}
                    src={data.images}
                    className="h-full w-auto object-cover rounded-md"
                    alt=""
                  />
                </div>
                <div className="col-span-1 rounded-md w-full h-40 flex justify-center items-center">
                  <motion.p
                    className="lg:text-lg text-base text-white"
                    variants={{
                      hidden: { opacity: 0, x: -80 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={slideControl}
                    transition={{ duration: 0.3, delay: index - 0.7 }}
                  >
                    {data.texts}
                  </motion.p>
                </div>
              </div>
            )
          )} */}
        </div>
      </div>

      <div className="w-full bg-white min-h-[400px] lg:px-16 p-6 lg:grid lg:grid-cols-2 lg:gap-4 mt-6">
        <div className=" font-poppins">
          <p className="text-black text-xl font-semibold">{data?.name}</p>
          <p className="text-abu2 text-sm">Mulai dari</p>
          <p className="font-bold text-[#dd2020] lg:text-4xl text-xl">
            Rp. {new Intl.NumberFormat("en-US").format(data?.price)}
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
              {data?.types?.map((t: any, idx: any) => {
                return (
                  <tr className="text-abu2" key={idx}>
                    <td className="h-8 w-1/2 px-2">{t?.name}</td>
                    <td className="h-8 w-1/2 px-2">
                      Rp. {new Intl.NumberFormat("en-US").format(t?.price)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Link href="/list">
            <div className="w-[200px] h-[40px] bg-abu1 border-2 border-[#1d1d1d] rounded-full flex justify-center items-center cursor-pointer hover:brightness-90 mt-6 lg:cursor-pointer">
              <p className="text-[#1d1d1d] font-semibold">Detail Angsuran</p>
            </div>
          </Link>
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
