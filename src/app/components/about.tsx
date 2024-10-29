import React, { useState } from "react";
import { NextSeo } from "next-seo";

export default function About() {
  const tags = [
    "Honda BAM",
    "Honda Bumen Abadi Motor",
    "Honda Bekasi",
    "Honda Bekasi Timur",
    "Honda Jakarta",
    "Honda Jakarta Timur",
    "Honda Cikarang",
    "Honda Tambun",
    "Honda Tambun Utara",
    "Honda Tambun Selatan",
    "Dealer Motor Honda",
    "Dealer Motor Honda Bekasi",
    "Dealer Motor Honda Bekasi Timur",
    "Dealer Motor Honda Jakarta",
    "Dealer Motor Honda Jakarta Timur",
    "Dealer Motor Honda Cikarang",
    "Dealer Motor Honda Tambun",
    "Dealer Motor Honda Tambun Utara",
    "Dealer Motor Honda Tambun Selatan",
  ];

  return (
    <div className="text-base font-medium text-black font-poppins w-[60em] ">
      <NextSeo
        title="Tentang Honda BAM"
        description="Selamat datang di Honda BAM Terpercaya di Bekasi, Cikarang, Jakarta, Tambun, dealer resmi motor Honda yang siap melayani kebutuhan kendaraan roda dua Anda dengan sepenuh hati. Kami hadir untuk memberikan pengalaman terbaik bagi Anda yang mencari sepeda motor Honda berkualitas, dengan berbagai pilihan tipe dan model yang sesuai dengan kebutuhan berkendara di segala medan."
        openGraph={{
          url: "https://www.honda-bam.com/about",
          title: "About Honda BAM",
          description:
            "Selamat datang di Honda BAM Terpercaya di Bekasi, Cikarang, Jakarta, Tambun, dealer resmi motor Honda yang siap melayani kebutuhan kendaraan roda dua Anda dengan sepenuh hati. Kami hadir untuk memberikan pengalaman terbaik bagi Anda yang mencari sepeda motor Honda berkualitas, dengan berbagai pilihan tipe dan model yang sesuai dengan kebutuhan berkendara di segala medan.",
          images: [
            {
              url: "https://res.cloudinary.com/dthdnryp3/image/upload/v1730202111/Logo_Honda_Bam_Kotak_1_fhdbsh.png",
              width: 1200,
              height: 630,
              alt: "Tentang Honda BAM",
            },
          ],
        }}
      />
      <p>
        <span className="text-xl">S</span>elamat datang di Honda BAM, dealer
        resmi motor Honda yang siap melayani kebutuhan kendaraan roda dua Anda
        dengan sepenuh hati. Kami hadir untuk memberikan pengalaman terbaik bagi
        Anda yang mencari sepeda motor Honda berkualitas, dengan berbagai
        pilihan tipe dan model yang sesuai dengan kebutuhan berkendara di segala
        medan.
      </p>
      <p className="mt-6">Mengapa Memilih Honda BAM?</p>
      <ul className="list-disc p-6">
        <li>
          Dealer Resmi Honda: Sebagai dealer resmi, kami menyediakan sepeda
          motor Honda dengan jaminan kualitas terbaik.
        </li>
        <li>
          Layanan Profesional: Tim kami yang profesional siap membantu Anda
          memilih motor yang sesuai kebutuhan dan preferensi.
        </li>
        <li>
          Komitmen Kepuasan Pelanggan: Kepuasan Anda adalah prioritas kami, dan
          kami berupaya memberikan layanan terbaik.
        </li>
      </ul>
      <p>
        Lokasi : PERUMAHAN GRAHA PRIMA RT.008 BLOK RWL016 FA/8 DESA MANGUN JAYA
        KEC. TAMBUN SELATAN KAB. BEKASI 17510
      </p>

      <p className="my-6">Tags :</p>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-rows-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-1 grid-flow-row-dense">
        {tags.map((data: any, index) => (
          <div
            className="col-span-1 bg-abu1 text-abu2 text-sm rounded-md w-fit h-fit px-2 py-1"
            key={index}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
}
