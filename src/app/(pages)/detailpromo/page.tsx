"use client";

import React, { useContext, useMemo } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import moment from "moment";
import Kontakwa from "@/app/components/kontakwa";
import { GlobalContext } from "@/app/context/globalContext";

export default function page() {
  const { promo } = useContext(GlobalContext);

  const LoadingComponent = useMemo(() => {
    return (
      <div
        role="status"
        className="animate-pulse col-span-1 lg:w-[400px] lg:h-[479px] w-[157px] h-[213px] lg:my-0 my-4 bg-abu1 rounded-md lg:p-6 flex flex-col justify-center justify-self-center mx-auto cursor-pointer group hover:brightness-95 transition ease-in-out delay-50"
      >
        <div className="lg:w-[344px] lg:h-[245px] w-[132px] h-[111px] mb-2 flex justify-center items-center">
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

        <div className="lg:w-[350px] lg:h-[479px] w-[150px] h-[230px] lg:mt-4 lg:mb-2 lg:px-6 px-4">
          <div className="lg:h-6 h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          <div className="lg:h-6 h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="lg:h-6 h-2 w-full 2-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
          <div className="lg:h-6 h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5 mx-auto"></div>
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

      <div className="w-full h-auto lg:px-16 p-6 flex flex-col justify-center ">
        <img
          src={promo?.images?.[0]}
          alt=""
          // className="lg:h-[500px] lg:w-auto w-full h-auto"
          className="w-full h-auto"
        />

        <div className="w-full h-auto shadow-[0_1px_4px_rgba(0,0,0,0.16)] p-6">
          <div className="w-full lg:grid lg:grid-cols-2 mb-6">
            <div className="col-span-1">
              <p className="font-poppins font-semibold text-2xl text-black">
                {promo?.name}
              </p>
            </div>
            <div className="col-span-1 lg:text-end">
              <p className="font-poppins font-semibold text-lg text-black">
                Periode :{" "}
                <span className="text-[#cc0000]">
                  {moment(promo?.startDate).format("DD MMMM YYYY")} -{" "}
                  {moment(promo?.endDate).format("DD MMMM YYYY")}
                </span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-poppins font-medium text-lg text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor fugit blanditiis modi consectetur rerum sint harum
              cupiditate, ex consequatur, consequuntur sequi facere aperiam eos
              alias vero repellat est corrupti nobis non voluptas pariatur enim
              assumenda! Deserunt, vero quaerat asperiores ipsa, quidem officiis
              nostrum temporibus iure nulla animi architecto amet?
            </p>
          </div>

          <div>
            <p className="font-poppins font-medium text-md text-abu2">
              Syarat dan Ketentuan :
            </p>
            <p className="font-poppins font-medium text-md text-abu2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolor fugit blanditiis modi consectetur rerum sint harum
              cupiditate, ex consequatur, consequuntur sequi facere aperiam eos
              alias vero repellat est corrupti nobis non voluptas pariatur enim
              assumenda! Deserunt, vero quaerat asperiores ipsa, quidem officiis
              nostrum temporibus iure nulla animi architecto amet?
            </p>
          </div>
        </div>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div>
        <Kontakwa />
      </div>
    </div>
  );
}
