import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Adira from "@/image/adira.png";
import Adiraku from "@/image/adiraku.png";
import AHM from "@/image/ahm.png";
import One from "@/image/one-heart.png";

export default function List() {
  return (
    <div className="w-full h-auto flex flex-col items-center lg:mx-auto bg-white">
      <div className="w-full sticky top-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="w-full h-auto lg:px-16 pt-6 px-6">
        <div className="w-full lg:h-20 h-10 grid grid-cols-4">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={Adira}
              alt=""
              className="lg:h-20 lg:w-auto h-8 w-auto"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={Adiraku}
              alt=""
              className="lg:h-20 lg:w-auto h-8 w-auto"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image src={AHM} alt="" className="lg:h-20 lg:w-auto h-6 w-auto" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={One}
              alt=""
              className="lg:h-20 lg:w-auto h-10 w-auto "
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[700px] lg:px-16 p-6 lg:grid lg:grid-cols-2 lg:gap-8">
        <table className="border-collapse border-2 border-abu2 w-full text-center lg:col-span-1">
          <thead className="text-white">
            <tr>
              <th rowSpan={2} className="border-2 border-abu2 bg-[#1d1d1d]">
                Tipe
              </th>
              <th rowSpan={2} className="border-2 border-abu2 bg-[#1d1d1d]">
                DP
              </th>
              <th colSpan={5} className="bg-[#1d1d1d]">
                Angsuran
              </th>
            </tr>
            <tr>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">11</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d] ">17</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">23</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">29</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">35</th>
            </tr>
          </thead>
          <tbody className="text-black uppercase">
            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>

            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>

            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>

            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border-2 border-abu2 w-full text-center lg:col-span-1 hidden lg:table">
          <thead className="text-white">
            <tr>
              <th rowSpan={2} className="border-2 border-abu2 bg-[#1d1d1d]">
                Tipe
              </th>
              <th rowSpan={2} className="border-2 border-abu2 bg-[#1d1d1d]">
                DP
              </th>
              <th colSpan={5} className="bg-[#1d1d1d]">
                Angsuran
              </th>
            </tr>
            <tr>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">11</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d] ">17</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">23</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">29</th>
              <th className="border-2 border-abu2 bg-[#1d1d1d]">35</th>
            </tr>
          </thead>
          <tbody className="text-black uppercase ">
            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>

            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>

            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>

            <tr>
              <td
                rowSpan={3}
                className="border-2 border-abu2 lg:text-lg text-sm font-semibold"
              >
                BeAT Street
              </td>
              <td className=" bg-abu1 h-8">2.300</td>
              <td className=" bg-abu1 h-8">1.979</td>
              <td className=" bg-abu1 h-8">1.420</td>
              <td className=" bg-abu1 h-8">1.127</td>
              <td className=" bg-abu1 h-8">957</td>
              <td className=" bg-abu1 h-8">851</td>
            </tr>
            <tr className="h-8 ">
              <td className="">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
            <tr className="h-8">
              <td className="border-l-2 border-abu2  bg-abu1">2.300</td>
              <td className="bg-abu1">1.979</td>
              <td className="bg-abu1">1.420</td>
              <td className="bg-abu1">1.127</td>
              <td className="bg-abu1">957</td>
              <td className="bg-abu1">851</td>
            </tr>
            <tr className="h-8">
              <td className="bg-abu1 lg:text-lg text-sm font-semibold">
                Rp. 15,550,000
              </td>
              <td className="border-l-2 border-abu2">2.300</td>
              <td className="">1.979</td>
              <td className="">1.420</td>
              <td className="">1.127</td>
              <td className="">957</td>
              <td className="">851</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="footer" className="bg-[#363636] w-full flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
