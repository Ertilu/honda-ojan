"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { UseQueryResult } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import { usePromoService } from "../queries/promo.query";

export default function Banner() {
  // const { getPromoList } = usePromoService({ getPromoListParams: {} });
  // const getPromoImages = useMemo(() => {
  //   return getPromoList?.data?.results?.map((item: any) => {
  //     return item?.images;
  //   });
  // }, [getPromoList]);
  const [dataBanner, setDataBanner] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://honda-bam-api.vercel.app/v1/images/banners"
      );

      setDataBanner(response);
    };

    getData();
  }, []);

  const LoadingComponent = useMemo(() => {
    return (
      <div
        role="status"
        className="animate-pulse col-span-1 w-full lg:h-[500px] h-[230px] m-4 bg-abu1  flex flex-col justify-center items-center justify-self-center cursor-pointer group hover:brightness-95 transition ease-in-out delay-50"
      >
        <div className="lg:w-[244px] lg:h-[245px] w-[102px] h-[91px] lg:mt-0 mt-6 flex justify-center items-center">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    );
  }, []);

  // console.log("banr", dataBanner);
  return (
    <div className=" lg:container w-full">
      {dataBanner.length === 0 ? (
        <div className="lg:w-full lg:h-auto w-auto h-full flex justify-center items-start">
          {LoadingComponent}
        </div>
      ) : (
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
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          {dataBanner?.data?.resources?.map((data: any, idx: string) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex justify-center items-start w-full h-auto">
                  <img
                    src={data?.secure_url}
                    alt={`banner-${idx}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
