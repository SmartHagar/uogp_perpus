/** @format */

import FooterComp from "@/components/footer/FooterComp";
import Navbar from "@/components/navbar/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="min-h-screen h-screen flex flex-col">
      {/* navbar */}
      <div className="fixed left-0 right-0 z-50 shadow-lg shadow-primary-content">
        <Navbar />
      </div>
      {/* content */}
      <div className="w-full pt-[6.5rem] px-4 lg:px-20">{props.children}</div>
      {/* footer */}
      <FooterComp />
    </div>
  );
};

export default layout;
