"use client";
import React, { useState, Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  data: any;
  isOpenFiturMobile: boolean;
  setIsOpenFiturMobile: Dispatch<SetStateAction<any>>;
  setDataOpenFiturMobile: Dispatch<SetStateAction<any>>;
}

export default function Cardfiturmobile({
  index,
  data,
  isOpenFiturMobile,
  setIsOpenFiturMobile,
  setDataOpenFiturMobile,
}: Props) {
  const handleOpen = () => {
    setIsOpenFiturMobile(true);
    setDataOpenFiturMobile((item: any) => ({
      ...item,
      image: data.image,
      title: data.title,
      text: data.text,
    }));
  };
  return (
    <div onClick={handleOpen}>
      {index % 2 === 0 ? (
        <div className="grid grid-cols-2 bg-white w-full md:w-[550px]">
          <img
            src={data.image}
            alt=""
            id="image"
            className="col-span-1 w-full h-full object-cover"
          />
          <div className="col-span-1 w-full bg-black h-full">
            <div className="flex justify-center items-center w-full h-4/5 p-4">
              <p className="text-lg font-medium font-bebas tracking-widest text-white ">
                {data.title}
              </p>
            </div>
            <div className="flex justify-center items-end w-full h-1/5 py-1">
              <p className="font-thin text-xs font-poppins text-abu2">
                ketuk untuk detail
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 bg-white w-full md:w-[550px]">
          <div className="col-span-1 w-full bg-black h-full">
            <div className="flex justify-center items-center w-full h-4/5 p-4">
              <p className="text-lg font-medium font-bebas tracking-widest text-white ">
                {data.title}
              </p>
            </div>
            <div className="flex justify-center items-end w-full h-1/5 py-1 ">
              <p className="font-thin text-xs font-poppins text-abu2 ">
                ketuk untuk detail
              </p>
            </div>
          </div>
          <img
            src={data.image}
            alt=""
            className="col-span-1 w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
