"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Kontakwa from "@/app/components/kontakwa";
import Image from "next/image";
import WA from "@/image/icon-wa-putih.png";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Kontak() {
  const [dataPesan, setDataPesan] = useState({
    namaCust: "",
    emailCust: "",
    pesanCust: "",
    tanggalEmailCust: "",
  });
  const tanggal = new Date();

  const notifyGagal = (pesan: any) => toast.error(pesan);
  const notifySukses = (pesan: any) => toast.success(pesan);

  const handleInput = (e: any) => {
    e.preventDefault();
    setDataPesan((data) => ({ ...data, [e.target.id]: e.target.value }));
  };

  const handleKirim = (e: any) => {
    e.preventDefault();

    const tgl_input =
      tanggal.getDate() +
      "/" +
      (+tanggal.getMonth() + 1) +
      "/" +
      tanggal.getFullYear() +
      ", " +
      tanggal.getHours() +
      ":" +
      tanggal.getMinutes();
    setDataPesan((data) => ({ ...data, tanggalEmailCust: tgl_input }));

    if (dataPesan.namaCust === "") {
      notifyGagal("Nama tidak boleh kosong!");
    } else if (dataPesan.emailCust === "") {
      notifyGagal("Email tidak boleh kosong!");
    } else if (dataPesan.pesanCust === "") {
      notifyGagal("Pesan tidak boleh kosong!");
    } else {
      emailjs
        .send(
          "service_5xvgtf6",
          "template_uxt46rk",
          dataPesan,
          "JJk7fWuFBmuUuR02t"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      notifySukses("Pesan Terkirim");

      setDataPesan((data) => ({
        ...data,
        namaCust: "",
        emailCust: "",
        pesanCust: "",
        tanggalEmailCust: "",
      }));
    }
  };

  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <div className="w-full h-16 bg-[#cc0000] flex justify-center items-center">
        <p className="font-medium font-poppins text-3xl">Kontak</p>
      </div>
      <div className="w-full lg:px-6 p-6">
        <p className="font-poppins font-semibold text-lg text-black mb-4">
          WhatsApp
        </p>
        <Link href="https://wa.me/625162955851?text=Halo mas" target="_blank">
          <div className="bg-[#25D366] cursor-pointer hover:brightness-90 text-white font-poppins py-2 px-4 rounded-md shadow-lg flex justify-center gap-4 w-full h-[50px]">
            <div className="flex items-center">
              <Image src={WA} alt="" className="w-8 h-8" />
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div>
                <p className="font-semibold text-xl">Hubungi via WA</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="border-b-2 border-abu2 mt-6"></div>
      </div>
      <div className="w-full px-6 my-2 mb-6">
        <p className="font-poppins font-semibold text-lg text-black mb-4">
          Email
        </p>
        <form action="">
          <div className="w-full flex justify-center font-poppins font-medium text-md text-black ">
            <div className="border-2 border-abu2 px-6 py-4 rounded-md w-[420px] h-auto">
              <div className="my-2">
                <p>Nama Bapak kamu</p>
                <input
                  type="text"
                  className="border-2 border-abu1 bg-abu1 h-8 w-full rounded-md px-4"
                  id="namaCust"
                  value={dataPesan.namaCust}
                  onChange={handleInput}
                />
              </div>
              <div className="my-2">
                <p>Email</p>
                <input
                  type="text"
                  className="border-2 border-abu1 bg-abu1 h-8 w-full rounded-md px-4"
                  id="emailCust"
                  value={dataPesan.emailCust}
                  onChange={handleInput}
                />
              </div>
              <div className="my-2">
                <p>Pertanyaan / Pesan</p>
                <textarea
                  className="border-2 border-abu1 bg-abu1 min-h-24 resize-none w-full rounded-md px-4"
                  id="pesanCust"
                  value={dataPesan.pesanCust}
                  onChange={handleInput}
                />
              </div>
              <div
                className="bg-[#cc0000] rounded-md hover:brightness-95 cursor-pointer flex justify-center items-center h-8"
                onClick={handleKirim}
              >
                <p className="font-semibold font-poppins text-md text-white ">
                  Kirim
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      ;
      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
