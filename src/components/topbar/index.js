"use client";

import { useLanguage } from "../../../context/LanguageProvider";
import { BsTextIndentLeft } from "react-icons/bs";
import ProfileDropDown from "./profileDropDown";
import { useSelector } from "react-redux";
import { Avatar, Typography } from "@material-tailwind/react";

const TopBar = ({ sidebarShow, setSidebarShow }) => {
  const { t } = useLanguage();
  const { user } = useSelector((state) => state.auth);
  if (!t) return <p className="text-white">Loading translations...</p>;

  return (
    <div className="bg-white w-full flex justify-between px-8 py-2 items-center shadow-sm shadow-gray">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarShow(!sidebarShow)}>
          <BsTextIndentLeft className="w-6 h-6 text-red-300" />
        </button>
        <div className="flex items-center gap-3">
          <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
          <div>
            <Typography variant="h6" color="blue-gray">
              Emma Willever
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              last seen recently
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <ProfileDropDown />
      </div>
    </div>
  );
};

export default TopBar;
