/** @format */

import Sidebar from "@/components/sidebar/Sidebar";
import ThemeChange from "@/components/support/ThemeChange";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="min-h-screen h-screen flex flex-col bg-base-200">
      <div className="flex h-12 w-full items-center justify-between">
        <div className="w-56">
          <h3 className="text-center">Menu</h3>
        </div>
        <div>Selamat Datang</div>
        <div className="w-10">
          <ThemeChange />
        </div>
      </div>
      <div className="flex h-full w-full">
        {/* navbar */}
        <div className="">
          {/* sidebar */}
          <Sidebar />
        </div>
        {/* content */}
        <div className="min-h-full w-full h-full dark:bg-base-300 rounded-xl p-6">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
