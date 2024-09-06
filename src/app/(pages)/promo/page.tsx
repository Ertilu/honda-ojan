"use client";

import React, { useContext, useMemo } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import moment from "moment";
import Link from "next/link";
import { usePromoService } from "@/app/queries/promo.query";
import { GlobalContext } from "@/app/context/globalContext";
import Kontakwa from "@/app/components/kontakwa";

export default function Promo() {
  const { getPromoList } = usePromoService({ getPromoListParams: {} });
  const { setPromo } = useContext(GlobalContext);

  const LoadingComponent = useMemo(() => {
    return (
      <div
        role="status"
        className="animate-pulse col-span-1 lg:w-[400px] lg:h-[280px] w-[157px] h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50"
      >
        <div className="lg:w-[344px] lg:h-[750px] w-[132px] h-[111px] mb-2 flex justify-center items-center">
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

        <div className="lg:w-[350px] lg:h-[479px] w-[150px] h-[230px] mt-6 lg:mb-2 lg:px-6 px-4">
          <div className="lg:h-4 h-2 w-40 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
          <div className="lg:h-4 h-2 w-60 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="lg:h-4 h-2 w-20 2-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-5 mx-auto mt-6"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Promo</p>
      </div>

      <div className="w-full grid grid-cols-4 lg:min-h-screen min-h-80 lg:container px-6 my-6">
        {getPromoList?.isFetching ? (
          LoadingComponent
        ) : (
          <div>
            {getPromoList?.data?.results?.map((item: any, idx: string) => {
              return (
                <div
                  className="grid lg:grid-cols px-6"
                  key={idx}
                  onClick={() => setPromo(item)}
                >
                  <Link href={`/detailpromo`}>
                    <div className="col-span-1 shadow-[0_1px_4px_rgba(0,0,0,0.16)] h-auto pb-4 bg-white cursor-pointer group hover:brightness-95 transition">
                      <img
                        src={item?.images?.[0]}
                        alt=""
                        className="w-full h-auto"
                      />
                      <div className="px-4 py-2">
                        <p className="font-poppins font-semibold text-xl text-black">
                          {item?.name}
                        </p>
                        <p className="font-poppins font-medium text-md text-black">
                          Periode :{" "}
                          <span className="text-[#cc0000]">
                            {moment(item?.startDate).format("MMMM YYYY")}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-grow lg:mb-0 mb-2">
                        <div className="flex justify-center items-end flex-grow">
                          <p className="font-normal lg:text-md text-sm text-abu2 text-center group-hover:text-black">
                            Selengkapnya
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
      <div className="w-full">
        <Kontakwa />
      </div>
    </div>
  );
}
