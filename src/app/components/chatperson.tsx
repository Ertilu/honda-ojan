import React, { useState, useEffect } from "react";
import { FaPersonPraying } from "react-icons/fa6";
import Image from "next/image";
import LA from "@/image/icon-live-chat.png";

// interface IMsgDataTypes {
//   roomId: String | number;
//   user: String;
//   msg: String;
//   time: String;
// }

export default function Chatperson({ dataUser }: any) {
  // const [currentMsg, setCurrentMsg] = useState("");
  // const [chat, setChat] = useState<IMsgDataTypes[]>([]);

  // const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (currentMsg !== "") {
  //     const msgData: IMsgDataTypes = {
  //       roomId,
  //       user: username,
  //       msg: currentMsg,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };
  //     await socket.emit("send_msg", msgData);
  //     setCurrentMsg("");
  //   }
  // };

  // useEffect(() => {
  //   socket.on("receive_msg", (data: IMsgDataTypes) => {
  //     setChat((pre) => [...pre, data]);
  //   });
  // }, [socket]);

  return (
    <div>
      <div className="h-auto w-full flex py-1">
        <Image src={LA} alt="" className="w-[35px] h-[35px] rounded-full" />
        <div className="col-span-6 px-1">
          <p className="text-black font-poppins font-medium text-xs pb-1">
            Fauzan
          </p>
          <div className="bg-white rounded-lg p-2">
            <p className="text-black font-poppins font-normal text-sm">
              Halo! Selamat datang di Honda BAM. Ada yang bisa saya bantu hari
              ini?
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto w-full flex py-1 justify-end">
        <div className="col-span-6 px-1">
          <p className="text-black font-poppins font-medium text-xs pb-1 text-end">
            {dataUser.username}
          </p>
          <div className="bg-abu2 rounded-lg p-2">
            <p className="text-white font-poppins font-normal text-sm">
              {dataUser.pesan}
            </p>
          </div>
        </div>
        <FaPersonPraying
          size={30}
          color="black"
          className="scale-x-[-1] bg-white rounded-full p-1"
        />
      </div>
    </div>
  );
}
