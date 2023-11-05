/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { RiCodeSSlashLine, RiDvLine, RiSlideshowLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
type Props = {};

const Dashboard = (props: Props) => {
  const pathname = usePathname();
  // state
  const [slide, setSlide] = useState(5);
  useEffect(() => {
    // get width screen
    const widthScreen = window.innerWidth;
    if (widthScreen < 768) {
      setSlide(2);
    }
    if (widthScreen > 768 && widthScreen < 1024) {
      setSlide(3);
    }
    if (widthScreen > 1024) {
      setSlide(4);
    }
    console.log({ widthScreen });
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="h-64 md:h-96 lg:h-[25rem] z-10 flex flex-col">
        <h4 className="text-xl font-bold text-secondary mb-2">Buku Terbaru</h4>
        <Slide delay={2000} slidesPerView={slide} />
      </div>
      <div className="h-64 md:h-96 lg:h-[25rem] z-10 mb-2 flex flex-col">
        <h4 className="text-xl font-bold text-secondary">Buku Terlaris</h4>
        <Slide slidesPerView={slide} />
      </div>
    </div>
  );
};

export default Dashboard;
