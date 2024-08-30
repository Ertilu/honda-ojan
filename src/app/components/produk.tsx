import Image from "next/image";
import React, { useContext, useMemo } from "react";
import Sort from "@/image/icon-sort.svg";
import Arrow from "@/image/icon-arrow.svg";
import Beat from "@/image/beat.png";
import Scoopy from "@/image/scoopy.png";
import Pcx from "@/image/pcx.png";
import Link from "next/link";
import { GlobalContext } from "../context/globalContext";

export default function Produk({
  getCatalogueList,
}: {
  getCatalogueList: any;
}) {
  const { setData } = useContext(GlobalContext);

  const LoadingComponent = useMemo(() => {
    return (
      <div
        role="status"
        className="animate-pulse col-span-1 lg:w-[400px] lg:h-[479px] w-[157px] h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50"
      >
        <div className="lg:w-[344px]   w-[132px] h-[111px] justify-self-center mx-auto flex justify-center items-end mb-2">
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
        <div className="w-full lg:mt-4 lg:mb-2 lg:px-0 px-4">
          <div className="h-6  bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 w-48 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-4 w-48 2-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
          <div className="h-4 w-40 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5 mx-auto"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }, []);
  return (
    <div className="text-black font-poppins w-full min-h-screen px-6">
      <div className="w-full h-auto flex justify-center">
        <p className="font-extrabold text-4xl">Motor HONDA</p>
      </div>

      <div className="w-full h-auto flex justify-center mt-8">
        <div className="bg-abu1 h-[63px] w-[418px] rounded-md grid grid-cols-3 m-auto justify-center items-center">
          <div className="col-span-1 bg-white h-[43px] lg:w-[113px] w-[100px] rounded-md justify-self-center mx-auto flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Matic</p>
          </div>
          <div className="col-span-1 h-[43px] w-[113px] justify-self-center mx-auto rounded-md flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Sport</p>
          </div>
          <div className="col-span-1 h-[43px] w-[113px] justify-self-center mx-auto rounded-md flex justify-center items-center cursor-pointer hover:bg-abu2 transition ease-in-out delay-50">
            <p className="font-semibold">Cub</p>
          </div>
        </div>
      </div>

      <div className="bg-abu1 w-[276px] h-[43px] rounded-md grid grid-cols-6 items-center justify-center my-6 lg:mx-12   mx-auto cursor-pointer hover:brightness-95 transition delay-50">
        <div className="col-span-1 justify-self-center">
          <Image src={Sort} alt="" />
        </div>
        <div className="col-span-4">
          <p>Terbaru</p>
        </div>
        <div className="col-span-1 justify-self-center">
          <Image src={Arrow} alt="" />
        </div>
      </div>

      <div className="w-full h-auto">
        {getCatalogueList?.isPending ? (
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-center">
            {[1, 2, 3]?.map((item) => LoadingComponent)}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-center">
            {getCatalogueList?.data?.results?.map((item: any) => {
              return (
                <Link
                  href={{
                    pathname: `/pages/detailproduk/${item?.id}`,
                  }}
                  onClick={() => {
                    setData(item);
                  }}
                  key={item?.id}
                >
                  <div className="col-span-1 lg:w-[400px] lg:h-[479px] w-[170px] h-[230px] lg:my-0 my-2 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50">
                    <div className="lg:w-[344px] lg:h-[245px] w-[132px] h-[111px] justify-self-center mx-auto flex justify-center items-end mb-2">
                      <img
                        src={item?.images?.[0]}
                        className="h-full w-auto"
                        alt=""
                      />
                    </div>
                    <div className="lg:mt-4 lg:mb-2 lg:px-0 px-4">
                      <p className="font-semibold lg:text-2xl text-lg">
                        {item?.name ?? "-"}
                      </p>
                    </div>
                    <div className="mb-2 lg:px-0 px-4">
                      <p className="font-normal lg:text-md text-sm text-abu2">
                        Mulai dari <br />
                        <span className="lg:text-2xl text-md font-semibold text-black">
                          Rp{" "}
                          {new Intl.NumberFormat("en-US").format(item?.price)}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-grow lg:mb-0 mb-2">
                      <div className="flex justify-center items-end flex-grow">
                        <p className="font-normal lg:text-md text-sm text-abu2 text-center transition group-hover:text-[#cc0000] ease-in-out delay-75 lg:group-hover:-translate-y-4 group-hover:-translate-y-2 lg:group-hover:text-lg group-hover:text-md group-hover:font-medium">
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
