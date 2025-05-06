/** @format */
"use client";
import React, { FC, useEffect, useRef, useState } from "react";
// import Swiper core and required modules
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Reveal from "@/utils/Reveal";
import Image from "next/image";

type Props = {
  delay?: number;
  slidesPerView?: number;
};

const Slide: FC<Props> = ({ delay = 2500, slidesPerView = 5 }) => {
  const swiperRef = useRef<any>(null);

  const playContinue = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      setTimeout(() => {
        swiperRef.current?.swiper?.autoplay?.start();
      }, 1000);
      // swiperRef.current.autoplay.start();
    }
  };
  // url = https://api.unsplash.com/photos/?client_id=e8RKNU4IbfF07bQFvdIsqkxqA-XsYyDy4g9FLftS6v0

  // get data from url
  const [dataImg, setDataImg] = useState([]);
  const geDataImg = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=e8RKNU4IbfF07bQFvdIsqkxqA-XsYyDy4g9FLftS6v0"
    );
    const data = await res.json();
    console.log({ data });
    setDataImg(data);
  };
  useEffect(() => {
    geDataImg();

    return () => {};
  }, []);

  return (
    dataImg.length > 0 && (
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        modules={[Pagination, Autoplay, FreeMode]}
        loop={true}
        dir="rtl"
        autoplay={{
          delay,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onPaginationRender={(e) => {
          playContinue();
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => {}}
      >
        {dataImg.map((item: any, index) => (
          <SwiperSlide key={index} className="h-full">
            <div
              className="rounded-xl"
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${item.urls.regular})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hvTopDown  bg-neutral-content/[0.3] after:rounded-xl after:bg-primary-content/60 after:backdrop-blur-sm h-full hover:text-base-content p-6 flex flex-col items-center justify-end gap-4 z-0">
                <h3 className="text-center font-bold lg:text-2xl">Judul</h3>
                <div>
                  <p className="text-center text-sm lg:text-xl">Penulis</p>
                  <p className="text-center text-sm lg:text-lg">tahun</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default Slide;
