"use client";
import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { GlobalContext } from "../context/globalContext";
import { MdSort } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { useProductService } from "../queries/product.query";

export default function Produk() {
  const { getCatalogueList } = useProductService({
    getCatalogueListParams: {
      params: {},
    },
  });

  const { setData } = useContext(GlobalContext);
  const [sortData, setSortData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveMatic, setIsActiveMatic] = useState(true);
  const [isActiveSport, setIsActiveSport] = useState(false);
  const [isActiveCub, setIsActiveCub] = useState(false);
  const [isTerbaru, setIsTerbaru] = useState(true);

  const [dataTest, setDataTest] = useState<any[]>([
    {
      id: "1",
      name: "Es Kelapa",
      price: "7.000",
    },
    {
      id: "2",
      name: "Bakso kumis",
      price: "15.000",
    },
    {
      id: "3",
      name: "Rujak bebek",
      price: "10.000",
    },
    {
      id: "4",
      name: "Helm BMX",
      price: "25.000",
    },
  ]);

  const handleSort = () => {
    setIsOpen(!isOpen);
  };

  const handleMatic = () => {
    setIsActiveMatic(true);
    setIsActiveSport(false);
    setIsActiveCub(false);
  };

  const handleSport = () => {
    setIsActiveMatic(false);
    setIsActiveSport(true);
    setIsActiveCub(false);
  };

  const handleCub = () => {
    setIsActiveMatic(false);
    setIsActiveSport(false);
    setIsActiveCub(true);
  };

  const LoadingComponent = useMemo(() => {
    return (
      <div
        role="status"
        className="animate-pulse col-span-1 lg:w-[300px] lg:h-[379px] w-[150px] h-[230px] m-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center items-center justify-self-center cursor-pointer group hover:brightness-95 transition ease-in-out delay-50"
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

        <div className="lg:w-[250px] lg:h-[379px] w-[150px] h-[230px] lg:mt-4 lg:mb-2 lg:px-6 px-4 mt-8">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          <div className="h-3 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className=" h-3 w-full 2-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
          <div className="h-3 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5 mx-auto"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }, []);

  return (
    <div className="text-black font-poppins w-full min-h-screen lg:px-6 px-4">
      <div className="w-full h-auto flex justify-center">
        <p className="font-extrabold text-4xl">Motor HONDA</p>
      </div>

      <div className="w-full h-auto flex justify-center mt-8">
        <div className="bg-abu1 h-[63px] w-[418px] rounded-md grid grid-cols-3 m-auto justify-center items-center">
          <div
            className={`col-span-1 h-[43px] lg:w-[113px] w-[90px] rounded-md justify-self-center mx-auto flex justify-center items-center lg:cursor-pointer hover:brightness-95 ${
              isActiveMatic ? `bg-white` : `bg-abu1`
            }`}
            onClick={handleMatic}
          >
            <p className="font-semibold">Matic</p>
          </div>
          <div
            className={`col-span-1 h-[43px] lg:w-[113px] w-[90px] rounded-md justify-self-center mx-auto flex justify-center items-center lg:cursor-pointer hover:brightness-95 ${
              isActiveSport ? `bg-white` : `bg-abu1`
            }`}
            onClick={handleSport}
          >
            <p className="font-semibold">Sport</p>
          </div>
          <div
            className={`col-span-1 h-[43px] lg:w-[113px] w-[90px] rounded-md justify-self-center mx-auto flex justify-center items-center lg:cursor-pointer hover:brightness-95 ${
              isActiveCub ? `bg-white` : `bg-abu1`
            }`}
            onClick={handleCub}
          >
            <p className="font-semibold">Cub</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[100px]">
        <div
          className="bg-abu1 w-[276px] h-[43px] rounded-md grid grid-cols-6 items-center justify-center my-6 lg:mx-12 mx-auto cursor-pointer hover:brightness-95 "
          onClick={handleSort}
        >
          <div className="col-span-1 justify-self-center">
            <MdSort />
          </div>
          <div className="col-span-4">
            {isTerbaru ? <p>Terbaru</p> : <p>Termurah</p>}
          </div>
          <div className="col-span-1 justify-self-center">
            <IoMdArrowDropdown />
          </div>
        </div>

        {isOpen ? (
          <div className="bg-abu1 w-[276px] h-auto relative lg:mx-12 top-2 left-0 right-0 mx-auto transform -translate-y-1/2 rounded-md z-30 p-2">
            <div
              className="cursor-pointer hover:brightness-95 rounded-md bg-abu1 h-[40px] flex items-center px-2"
              onClick={() => {
                setIsTerbaru(!isTerbaru), setIsOpen(!isOpen);
              }}
            >
              {isTerbaru ? <p>Termurah</p> : <p>Terbaru</p>}
            </div>
          </div>
        ) : null}
      </div>

      <div className=" w-full h-auto flex justify-center">
        {getCatalogueList?.isPending ? (
          <div className="grid lg:grid-cols-4 grid-cols-2 justify-center">
            {[1, 2, 3, 4]?.map((item) => LoadingComponent)}
          </div>
        ) : (
          <div className="lg:w-[1250px] w-full grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-4">
            {getCatalogueList?.data?.results?.map((item: any) => {
              return (
                <Link
                  href={{
                    pathname: `/detailproduk/${item?.id}`,
                  }}
                  onClick={() => {
                    setData(item);
                  }}
                  key={item?.id}
                >
                  <div className="col-span-1 lg:w-[300px] lg:h-[379px] w-[150px] h-[230px] bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out">
                    <div className="lg:w-[244px] lg:h-auto w-[132px] p-2 justify-self-center mx-auto flex justify-center items-center">
                      <img
                        src={item?.images?.[0]}
                        className="h-auto w-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="lg:mt-4 lg:mb-2 lg:px-0 px-4">
                      <p className="font-semibold lg:text-xl text-sm">
                        {item?.name ?? "-"}
                      </p>
                    </div>
                    <div className="mb-2 lg:px-0 px-4">
                      <p className="font-normal lg:text-md text-xs text-abu2">
                        Mulai dari <br />
                        <span className="lg:text-xl text-sm font-semibold text-black">
                          Rp.{" "}
                          {new Intl.NumberFormat("en-US").format(item?.price)}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-grow lg:mb-0 mb-2">
                      <div className="flex justify-center items-end flex-grow">
                        <p className="font-normal lg:text-md text-xs text-abu2 text-center transition group-hover:text-[#cc0000] ease-in-out delay-75 lg:group-hover:-translate-y-2 group-hover:-translate-y-2 group-hover:text-md group-hover:font-medium">
                          Selengkapnya
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
