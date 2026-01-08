"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { useLanguage } from "../../../context/LanguageProvider";
import { useAlert } from "../../../context/alertContext";
import { getProfile } from "../api/user";
import { logout, updateUser } from "../../../redux/authSlice";
import SideBar from "@/components/sidebar";
import TopBar from "@/components/topbar";
import ChatWindow from "./chatWindow";

import useWebSocket from "../hooks/useWebSocket";

export default function Home() {
  const { t } = useLanguage();
  const { showAlert } = useAlert();
  const { token, user } = useSelector((state) => state.auth);
  console.log("Token:", token);
  const dispatch = useDispatch();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [sidebarShow, setSidebarShow] = useState(true);
  const { messages, sendMessage, status } = useWebSocket(token);
  const [text, setText] = useState("");

  // const fetUserProfile = async () => {
  //   const result = await getProfile();
  //   if (result) {
  //     dispatch(updateUser({ user: result.user }));
  //   } else {
  //     // dispatch(logout());
  //     // router.push("/login");
  //   }
  // };

  // useEffect(() => {
  //   fetUserProfile();
  // }, []);

  useEffect(() => {
    console.log("New Message Arrived, ", messages)
  }, [messages])

  if (!t) return <p className="text-white">Loading translations...</p>;
  return (
    <div className="w-full h-full bg-white flex overflow-hidden">
      <SideBar sidebarShow={sidebarShow} />
      <div className="w-full h-screen flex flex-col bg-blue-100/30">
        <TopBar
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
        />
        <div className="w-full flex-1 bg-blue-100/30">
        <button onClick={() => sendMessage({sender_id: 14, receiver_id:15, content: "123", type: "214323"})} >BBBBBB</button>
          <ChatWindow messages={messages} />
        </div>
      </div>
    </div>
  );
}
