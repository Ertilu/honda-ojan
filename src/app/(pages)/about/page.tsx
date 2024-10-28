import React from "react";
import Navbar from "@/app/components/navbar";
import AboutComp from "@/app/components/about";
import Footer from "@/app/components/footer";
import Kontakwa from "@/app/components/kontakwa";

export default function About() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Tentang</p>
      </div>
      <div className="w-full lg:min-h-[35rem] md:min-h-[30rem] min-h-80 py-10 px-6 lg:container flex justify-center">
        <AboutComp />
      </div>
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>

      <div className="w-full z-40">
        <Kontakwa />
      </div>
    </div>
  );
}
