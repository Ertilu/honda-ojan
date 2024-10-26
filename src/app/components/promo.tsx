import React, { useContext, useMemo } from "react";
import moment from "moment";
import Link from "next/link";
import { usePromoService } from "@/app/queries/promo.query";
import { GlobalContext } from "@/app/context/globalContext";

export default function Promo() {
  const { getPromoList } = usePromoService({ getPromoListParams: {} });
  const { setPromo } = useContext(GlobalContext);

  const LoadingComponent = useMemo(() => {
    return (
      <div
        role="status"
        className="animate-pulse col-span-1 lg:w-[400px] lg:h-[250px] w-full h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center cursor-pointer group hover:brightness-95 transition ease-in-out"
      >
        <div className="lg:w-[344px] lg:h-[750px] w-full h-[111px] my-2 flex justify-center items-center">
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
          <div className="lg:h-4 h-2 w-40 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className="lg:h-4 h-2 w-60 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="lg:h-4 h-2 w-20 2-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-5 mx-auto mt-6"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }, []);
  return (
    <div className="w-full">
      {getPromoList?.isFetching ? (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-6 my-6">
          {LoadingComponent}
        </div>
      ) : (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-6 my-6">
          {getPromoList?.data?.results?.map((item: any, idx: string) => {
            return (
              <Link
                href={`/detailpromo`}
                key={idx}
                className="col-span-1 lg:h-[250px] w-full h-[220px] rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pb-4 bg-white lg:cursor-pointer group hover:brightness-95 transition"
                onClick={() => setPromo(item)}
              >
                <div className="w-full h-auto max-h-[123px]">
                  <img
                    src={item?.images?.[0]}
                    alt=""
                    className="w-full h-full object-cover max-h-[123px] rounded-t-md"
                  />
                </div>
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
                <div className="flex lg:mb-0 mb-2">
                  <div className="flex justify-center items-end flex-1">
                    <p className="font-normal lg:text-md text-sm text-abu2 text-center group-hover:text-primaryRed">
                      Selengkapnya
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
