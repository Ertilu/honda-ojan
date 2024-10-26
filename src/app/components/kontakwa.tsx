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
import {
  ChatMessage,
  Message,
  UserMessage,
} from "../../../party/utils/message";
import PartySocket from "partysocket";
import { User } from "../../../party/utils/auth";
import "./css/kontakwa.css";
import { motion } from "framer-motion";
import { IoCaretBack } from "react-icons/io5";

function ComponentUI({
  isOpen,
  isKirim,
  dataUser,
  handleInput,
  setIsOpen,
  handleKirim,
  sendMessage,
  messages = [],
  user,
  message,
}: {
  isOpen: any;
  isKirim: any;
  dataUser: any;
  handleInput: any;
  setIsOpen: any;
  handleKirim: any;
  sendMessage: any;
  messages?: Message[];
  user?: User;
  message?: string;
}) {
  const [isChatAdmin, setIsChatAdmin] = useState(false);
  const [JawabFAQ, setJawabFAQ] = useState({
    alamat: "Alamat ku rt 5 rw 3 10 nomor rumah ku",
    pertanyaan2: "Jawaban 2",
    pertanyaan3: "Jawaban 3",
  });
  const [JawabanFAQ, setJawabanFAQ] = useState("");

  const handleFAQ1 = () => {
    setJawabanFAQ(JawabFAQ.alamat);
  };

  const handleFAQ2 = () => {
    setJawabanFAQ(JawabFAQ.pertanyaan2);
  };

  const handleFAQ3 = () => {
    setJawabanFAQ(JawabFAQ.pertanyaan3);
  };

  const handleChatAdmin = () => {
    setIsChatAdmin(true);
  };

  return (
    <div>
      {isOpen ? (
        <motion.div
          className="lg:w-96 w-80 h-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg bottom-4 right-4 fixed "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            scale: {
              type: "tween",
            },
          }}
        >
          <div className="relative bg-abu1 rounded-lg grid grid-rows-9 h-full">
            <div className="row-span-1 bg-primaryRed rounded-t-lg grid grid-cols-5">
              <div className="col-span-4 flex items-center justify-start px-4">
                <p className="text-white font-poppins font-medium text-xl">
                  Live Chat Honda BAM
                </p>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <IoClose
                  color="white"
                  size={30}
                  className="lg:cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>
            <div className="row-span-8 rounded-b-lg">
              {isChatAdmin === false && isKirim === false ? (
                <div className="bg-white p-2 grid grid-rows-9 h-full w-full rounded-b-lg">
                  <div className="row-span-8 p-4">
                    <p className="text-primaryRed font-poppins text-2xl font-semibold">
                      Halo 👋
                      <br />
                      <span className="text-black">ada yang bisa dibantu?</span>
                    </p>

                    <p className="text-black font-poppins text-lg font-medium mt-4 mb-1">
                      FAQ :
                    </p>
                    <div
                      className="bg-abu1 my-1 lg:cursor-pointer rounded-lg w-fit h-fit py-1 px-2"
                      id="alamat"
                      onClick={handleFAQ1}
                    >
                      <p className="text-black font-poppins ">Alamat Dealer</p>
                    </div>
                    <div
                      className="bg-abu1 my-1 lg:cursor-pointer rounded-lg w-fit h-fit py-1 px-2"
                      onClick={handleFAQ2}
                    >
                      <p className="text-black font-poppins ">Pertanyaan2</p>
                    </div>
                    <div
                      className="bg-abu1 my-1 lg:cursor-pointer rounded-lg w-fit h-fit py-1 px-2"
                      onClick={handleFAQ3}
                    >
                      <p className="text-black font-poppins ">Pertanyaan3</p>
                    </div>
                    {JawabanFAQ === "" ? null : (
                      <div className="mt-2 w-full h-[140px] p-2">
                        <p className="text-black">{JawabanFAQ}</p>
                      </div>
                    )}
                  </div>
                  <div className="row-span-1 pt-2 flex justify-center items-center">
                    <div
                      className="bg-primaryRed rounded-lg w-full h-full flex justify-center items-center lg:cursor-pointer"
                      onClick={handleChatAdmin}
                    >
                      <p className="font-semibold font-poppins text-white">
                        Chat Admin
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full grid grid-rows-8">
                  {isKirim === false ? (
                    <div className="row-span-7 bg-white px-2 ">
                      <div
                        className="w-fit h-fit mt-2 px-2 py-1 rounded-lg bg-primaryRed lg:cursor-pointer"
                        onClick={() => setIsChatAdmin(false)}
                      >
                        <p className="text-white text-sm font-semibold flex items-center">
                          <IoCaretBack color="white" size={15} />
                          Kembali
                        </p>
                      </div>
                      <div className="flex justify-center items-center h-full -mt-6">
                        <div>
                          <div>
                            <p className="text-black">Nama:</p>
                            <input
                              type="text"
                              className="border-2 border-abu1 bg-abu1 h-8 w-full rounded-md px-4 text-black"
                              id="username"
                              value={dataUser?.username}
                              onChange={handleInput}
                            />
                          </div>
                          <div>
                            <p className="text-black">Pesan:</p>
                            <textarea
                              className="border-2 border-abu1 bg-abu1 min-h-24 resize-none w-full rounded-md px-4 text-black"
                              id="pesan"
                              value={dataUser?.pesan}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="row-span-7 bg-abu1 px-2 h-auto overflow-y-auto pb-4"
                      id="style-13"
                    >
                      <div className="w-full flex justify-center p-1">
                        <div className="bg-white px-2 rounded-lg">
                          <p className="text-black text-xs font-light">
                            Anda terhubung dengan Fauzan
                          </p>
                        </div>
                      </div>
                      <Chatperson messages={messages} user={user} />
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
                    <div className="row-span-1 bg-abu1 rounded-b-lg p-2">
                      <div className="w-full h-full bg-white rounded-lg grid grid-cols-10 items-center">
                        <input
                          type="text"
                          className="col-span-9 focus:outline-none text-black px-4 rounded-lg"
                          placeholder="Ketik pesan...."
                          onChange={handleInput}
                          value={message}
                          onKeyUp={(e) => {
                            var code = e.keyCode || e.which;
                            if (code === 13) {
                              e.preventDefault();
                              sendMessage();
                            }
                          }}
                        />
                        <IoSend
                          color="black"
                          className="col-span-1 lg:cursor-pointer"
                          onClick={sendMessage}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <div>
          <div className="fixed lg:bottom-20 bottom-[86px] right-4 cursor-pointer">
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

  return req;
};

function ComponentUserAuthenticated({
  user,
  isOpenProps,
  initialMessage,
}: {
  user: User;
  isOpenProps: any;
  initialMessage: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenProps);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [socketConnected, setSocketConnected] = useState<boolean>(false);

  // open a websocket connection to the server
  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    party: "chatroom",
    room: user.id,
    async onOpen(e) {
      if (e.target) {
        const resFetch = await identify(e.target as PartySocket, user);
        const res = await resFetch.json();
        if (res.ok) {
          setSocketConnected(true);
        }
      }
    },
    onMessage(event: MessageEvent<string>) {
      const message = JSON.parse(event.data) as ChatMessage;

      if (message.type === "sync") setMessages(message.messages);

      // after that, the server will send updates as they arrive
      if (message.type === "new") setMessages((prev) => [...prev, message]);
      if (message.type === "clear") setMessages([]);
      if (message.type === "edit") {
        setMessages((prev) =>
          prev.map((m) => (m.id === message.id ? message : m))
        );
      }
    },
  });

  const onSendMessage = useCallback(
    (body: UserMessage) => {
      socket.send(JSON.stringify(body));
    },
    [socket]
  );

  const sendMessage = useCallback(async () => {
    const body: UserMessage = {
      type: "new",
      text: message,
    };
    onSendMessage(body);
    setMessage("");
  }, [socket, message]);

  const handleInput = useCallback((e: any) => {
    e.preventDefault();
    setMessage(e.target.value);
  }, []);

  useEffect(() => {
    if (isOpenProps && socketConnected && !messages.length) {
      /** user first send message */
      onSendMessage({
        type: "firstMessage",
        text: initialMessage,
      });
    }
  }, [socketConnected]);

  useEffect(() => {
    if (isOpen) {
      const container = document.getElementById("style-13");

      if (container) {
        // container.scrollTop = container?.scrollHeight;
        container?.scrollTo({
          top: container.scrollHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, [isOpen, messages]);

  return (
    <ComponentUI
      isOpen={isOpen}
      dataUser={null}
      handleInput={handleInput}
      handleKirim={null}
      isKirim={true}
      sendMessage={sendMessage}
      setIsOpen={setIsOpen}
      key={"ui-kontakwa1"}
      messages={messages}
      message={message}
      user={user}
    />
  );
}

export default function Kontakwa() {
  const [user, setUser] = useState<User>();
  const [dataUser, setDataUser] = useState({
    username: "",
    pesan: "",
  });
  const [isOpen, setIsOpen] = useState(false);

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
      setUser(user);
    }
  }, [dataUser]);

  const handleInput = (e: any) => {
    e.preventDefault();
    setDataUser((data) => ({ ...data, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userFromStorage = window.localStorage.getItem(USER);
      const _user = userFromStorage ? JSON.parse(userFromStorage) : null;

      if (_user && !user) {
        setUser(_user);

        // const fetchRooms = async () => {
        //   const rooms = await fetch(
        //     `${PARTYKIT_URL}/parties/chatroom/${user?.id}`,
        //     {
        //       method: "GET",
        //     }
        //   );
        // };
        // fetchRooms()
        //   // make sure to catch any error
        //   .catch(console.error);
      }
    }
  }, []);

  if (user) {
    /** ketika user sudah pernah chat admin / baru pertama chat dan langsung set local storage user */
    return (
      <div>
        <ComponentUserAuthenticated
          user={user}
          isOpenProps={isOpen}
          initialMessage={dataUser.pesan}
        />
      </div>
    );
  }

  /** ketika user blm pernah chat admin */
  return (
    <div>
      <ComponentUI
        isOpen={isOpen}
        dataUser={dataUser}
        handleInput={handleInput}
        handleKirim={handleKirim}
        isKirim={false}
        sendMessage={null}
        setIsOpen={setIsOpen}
        key={"ui-kontakwa2"}
      />
    </div>
  );
}
