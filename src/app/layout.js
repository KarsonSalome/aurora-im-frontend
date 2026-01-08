"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

import SideBar from "@/components/sidebar";
import TopBar from "@/components/topbar";

import ReduxProvider from "../../redux/reduxProvider";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "../../context/LanguageProvider";
import { AlertProvider } from "../../context/alertContext";
import { useState } from "react";

const hideFooterRoutes = ["/login", "/register", "/verify"];

function RootLayout({ children }) {
  const pathname = usePathname();
  const shouldShowFooter = !hideFooterRoutes.some(
    (route) => pathname === route
  );

  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
        <title>QiXiang</title>
      </head>
      <body className="flex overflow-hidden">
        <ReduxProvider>
          <LanguageProvider>
            <div className="w-full h-screen">
              <AlertProvider>
                <div className="w-full h-full">{children}</div>
              </AlertProvider>
            </div>
          </LanguageProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
