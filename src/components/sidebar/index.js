"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";

import { useLanguage } from "../../../context/LanguageProvider";

const SideBar = ({ sidebarShow }) => {

  const { t } = useLanguage();
  if (!t) return <p className="text-white">Loading translations...</p>;

  return (
    <div className="flex">
      <Card
        className={`h-screen max-w-[24rem] transform transition-all duration-500 ease-in-out overflow-hidden rounded-none shadow-md shadow-gray-500  ${sidebarShow ? "w-80" : "w-0"}`}
      >
        <div className="flex justify-center items-center h-20 py-3 bg-gray-200">
          <Image src={"/log.png"} width={150} height={20} alt="logo" />
        </div>
        {/* <div className="w-full px-4">
          <Input label="Search" icon={<BsSearch />} />
        </div> */}
        <List className="p-0 text-sm">
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Tania Andrew
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Software Engineer @ Material Tailwind
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Alexander
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Backend Developer @ Material Tailwind
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Emma Willever
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
              Emma Willever is typing...
              </Typography>
            </div>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default SideBar;
