import React, { useState, useEffect, useMemo } from "react";
import { FaPersonPraying } from "react-icons/fa6";
import Image from "next/image";
import { Message } from "../../../party/utils/message";
import { User } from "../../../party/utils/auth";

export default function Chatperson({
  messages,
  user,
}: {
  messages: Message[];
  user?: User;
}) {
  return (
    <div>
      {messages?.map((msg, idx) => {
        if (msg?.from?.id === user?.id) {
          return (
            <div className="h-auto w-full flex py-1 justify-end" key={idx}>
              <div className="col-span-6 px-1">
                <p className="text-black font-poppins font-medium text-xs pb-1 text-end">
                  {msg?.from?.name}
                </p>
                <div className="bg-abu2 rounded-lg p-2">
                  <p className="text-white font-poppins font-normal text-sm">
                    {msg?.text}
                  </p>
                </div>
              </div>
              <img
                src={msg?.from?.image}
                alt="user-profile-pic"
                className="w-[35px] h-[35px] rounded-full"
              />

              {/* <FaPersonPraying
                size={30}
                color="black"
                className="scale-x-[-1] bg-white rounded-full p-1"
              /> */}
            </div>
          );
        }
        return (
          <div className={`h-auto w-full flex py-1`} key={idx}>
            <img
              src={msg?.from?.image}
              alt="user-profile-pic"
              className="w-[35px] h-[35px] rounded-full"
            />
            <div className="col-span-6 px-1">
              <p className="text-black font-poppins font-medium text-xs pb-1">
                {msg?.from?.name}
              </p>
              <div className="bg-white rounded-lg p-2">
                <p className="text-black font-poppins font-normal text-sm">
                  {msg?.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
