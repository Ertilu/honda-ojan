"use client";
import React, { use, useCallback, useEffect, useState } from "react";
import WA from "@/image/icon-wa-putih.png";
import LA from "@/image/icon-live-chat.png";
import Image from "next/image";
import Link from "next/link";
import Chatperson from "./chatperson";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST, PARTYKIT_URL } from "../env";
import { SINGLETON_ROOM_ID } from "../../../party/chatRooms";
import crypto from "crypto";
import { USER } from "@/constant/localStorage.const";
import { UserMessage } from "../../../party/utils/message";
import PartySocket from "partysocket";
import { User } from "../../../party/utils/auth";

const identify = async (socket: PartySocket, user: User) => {
  const splitUrl = socket.url.split("?_pk=");
  const pk = splitUrl[splitUrl.length - 1];
  // the ./auth route will authenticate the connection to the partykit room
  const url = `${PARTYKIT_URL}/parties/chatroom/${user?.id}/auth?_pk=${pk}`;
  const req = await fetch(url, { method: "POST", body: JSON.stringify(user) });

  if (!req.ok) {
    const res = await req.text();
    console.error("Failed to authenticate connection to PartyKit room", res);
  }
};

export default function Kontakwa() {
  const [roomId, setRoomId] = useState<string>();
  // open a websocket connection to the server
  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    party: "chatrooms",
    room: SINGLETON_ROOM_ID,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isKirim, setIsKirim] = useState(false);
  const [dataUser, setDataUser] = useState({
    username: "",
    pesan: "",
  });

  const onAuthenticateUser = useCallback((user: User) => {
    socket.updateProperties({
      party: "chatroom",
      room: user?.id,
    });
    socket.reconnect();
    socket.onopen = (e) => {
      // identify user upon connection
      if (e.target) {
        identify(e.target as PartySocket, user);
      }
    };
  }, []);

  const onSendMessage = useCallback(
    (body: UserMessage) => {
      if (typeof window !== "undefined") {
        const userFromStorage = localStorage.getItem(USER);
        const user: User = userFromStorage ? JSON.parse(userFromStorage) : null;
        socket.updateProperties({
          party: "chatroom",
          room: user?.id,
        });
        socket.reconnect();
        socket.send(JSON.stringify(body));
      }
    },
    [socket]
  );

  const sendMessage = useCallback(async () => {
    const body: UserMessage = {
      type: "new",
      text: "Halo! Selamat datang di Honda BAM. Ada yang bisa saya bantu hari ini?",
    };
    onSendMessage(body);
  }, [socket]);

  const handleKirim = useCallback(async () => {
    if (typeof window !== "undefined") {
      const id = crypto.randomBytes(20).toString("hex");
      const user: User = {
        id,
        username: dataUser?.username,
        joinedAt: new Date().toISOString(),
        image: "https://cdn-icons-png.freepik.com/512/5045/5045878.png",
      };
      window.localStorage.setItem(USER, JSON.stringify(user));
      onAuthenticateUser(user);
    }

    setIsKirim(true);
  }, [dataUser]);

  const handleInput = (e: any) => {
    e.preventDefault();
    setDataUser((data) => ({ ...data, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userFromStorage = window.localStorage.getItem(USER);
      const user = userFromStorage ? JSON.parse(userFromStorage) : null;

      if (user) {
        setIsKirim(true);
        setRoomId(user?.id);
        onAuthenticateUser(user);

        const fetchRooms = async () => {
          const rooms = await fetch(
            `${PARTYKIT_URL}/parties/chatroom/${user?.id}`,
            {
              method: "GET",
            }
          );
        };

        fetchRooms()
          // make sure to catch any error
          .catch(console.error);
      }
    }
  }, []);

  return (
    <div>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 bg-abu1 lg:w-96 w-80 h-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg grid grid-rows-9">
          <div className="row-span-1 bg-primaryRed rounded-t-lg grid grid-cols-5">
            <div className="col-span-4 flex items-center justify-start px-4">
              <p className="text-white font-poppins font-medium text-xl">
                Live Chat Honda BAM
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <IoClose
                color="white"
                size={20}
                className="lg:cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          {isKirim === false ? (
            <div className="row-span-7 bg-white px-2 flex justify-center items-center">
              <div>
                <div>
                  <p className="text-black">Nama:</p>
                  <input
                    type="text"
                    className="border-2 border-abu1 bg-abu1 h-8 w-full rounded-md px-4 text-black"
                    id="username"
                    value={dataUser.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <p className="text-black">Pesan:</p>
                  <textarea
                    className="border-2 border-abu1 bg-abu1 min-h-24 resize-none w-full rounded-md px-4 text-black"
                    id="pesan"
                    value={dataUser.pesan}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="row-span-7 bg-abu1 px-2 h-auto">
              <div className="w-full flex justify-center p-1">
                <div className="bg-white px-2 rounded-lg">
                  <p className="text-black text-xs font-light">
                    Anda terhubung dengan Fauzan
                  </p>
                </div>
              </div>
              <Chatperson dataUser={dataUser} />
            </div>
          )}
          {isKirim === false ? (
            <div className="row-span-1 bg-white p-2 flex justify-center items-center rounded-b-lg">
              <div
                className="bg-primaryRed rounded-lg w-full h-full flex justify-center items-center lg:cursor-pointer"
                onClick={handleKirim}
              >
                <p className="font-semibold font-poppins text-md text-white ">
                  Kirim
                </p>
              </div>
            </div>
          ) : (
            <div
              className="row-span-1 bg-abu1 rounded-b-lg p-2"
              onClick={sendMessage}
            >
              <div className="w-full h-full bg-white rounded-lg grid grid-cols-10 items-center">
                <input
                  type="text"
                  className="col-span-9 focus:outline-none text-black px-4 rounded-lg"
                  placeholder="Ketik pesan...."
                />
                <IoSend
                  color="black"
                  className="col-span-1 lg:cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="fixed lg:bottom-20 bottom-[86px] right-4">
            <div
              className="flex flex-col hover:brightness-95 rounded-b-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-[70px] w-[60px] lg:h-[120px] h-[110px] lg:cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="h-[50px] lg:w-[70px] w-[60px] rounded-t-lg bg-primaryRed">
                <p className="text-white font-bold h-fit text-center text-lg">
                  LIVE
                </p>

                <p className="text-white font-bold text-center text-lg -mt-2">
                  CHAT
                </p>
              </div>
              <Image
                src={LA}
                alt=""
                className="lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] bg-primaryRed rounded-b-full"
              />
            </div>
          </div>

          <div className="fixed bottom-4 right-4 hidden lg:block ">
            <Link
              href="https://wa.me/625162955851?text=Halo mas"
              target="_blank"
            >
              <div className="bg-[#25D366] hover:brightness-95 text-white font-poppins py-2 px-4 rounded-full grid grid-cols-4 w-[252px] h-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="col-span-1 flex items-center">
                  <Image src={WA} alt="" className="w-[35px] h-[35px]" />
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <div>
                    <p className="font-medium text-sm">Hubungi Via WhatsApp</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="fixed bottom-4 right-4 lg:hidden">
            <Link
              href="https://wa.me/625162955851?text=Halo mas"
              target="_blank"
            >
              <div className="bg-[#25D366] hover:brightness-90 p-2 rounded-full shadow-lg w-[60px] h-[60px] flex items-center justify-center">
                <Image src={WA} alt="" className="w-[30px] h-[30px]" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
