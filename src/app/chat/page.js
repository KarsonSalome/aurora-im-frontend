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

export default function Home() {
  const { t } = useLanguage();
  const { showAlert } = useAlert();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [sidebarShow, setSidebarShow] = useState(true);


  const fetUserProfile = async () => {
    const result = await getProfile();
    if (result) {
      dispatch(updateUser({ user: result.user }));
    } else {
      // dispatch(logout());
      // router.push("/login");
    }
  };

  useEffect(() => {
    fetUserProfile();
  }, []);

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
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
