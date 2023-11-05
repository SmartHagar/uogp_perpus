/** @format */

import Sidebar from "@/components/sidebar/Sidebar";
import ThemeChange from "@/components/support/ThemeChange";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-base-200">
      <div className="flex h-16 w-full items-center justify-between">
        <div className="w-56">
          <h3 className="text-center">Menu</h3>
        </div>
        <div>Selamat Datang</div>
        <div className="w-10">
          <ThemeChange />
        </div>
      </div>
      <div className="flex w-screen h-full overflow-hidden">
        {/* navbar */}
        <div>
          <Sidebar />
        </div>
        {/* content */}
        <div className="w-full h-full dark:bg-base-300 rounded-xl pt-6 px-6 overflow-auto">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default layout;
