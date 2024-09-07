"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { UseQueryResult } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Banner({
  getPromoList,
}: {
  getPromoList: UseQueryResult<any>;
}) {
  const getPromoImages = useMemo(() => {
    return getPromoList?.data?.results?.map((item: any) => {
      return item?.images;
    });
  }, [getPromoList]);

  return (
    <div>
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
        {getPromoImages?.map((img: string, idx: string) => {
          return (
            <SwiperSlide key={idx}>
              <div className="flex justify-center items-center">
                <img
                  src={img}
                  alt={`banner-${idx}`}
                  style={{
                    objectFit: "cover",
                    width: window.innerWidth,
                    height: 600,
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
