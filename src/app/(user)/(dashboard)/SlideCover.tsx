/** @format */
"use client";
import React, { FC, useEffect, useRef, useState } from "react";
// import Swiper core and required modules
import {
  Pagination,
  Autoplay,
  FreeMode,
  EffectCoverflow,
} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Reveal from "@/utils/Reveal";
import Image from "next/image";
// import BASE_URL
import { BASE_URL } from "@/services/baseURL";
import Link from "next/link";

type Props = {
  delay?: number;
  slidesPerView?: number;
  katalogData: any;
};

const SlideCover: FC<Props> = ({
  delay = 2500,
  slidesPerView = 5,
  katalogData,
}) => {
  const swiperRef = useRef<any>(null);

  const playContinue = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      setTimeout(() => {
        swiperRef.current?.swiper?.autoplay?.start();
      }, 1000);
      // swiperRef.current.autoplay.start();
    }
  };

  // get base url

  return (
    katalogData?.length > 0 && (
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        spaceBetween={10}
        modules={[Pagination, Autoplay, FreeMode, EffectCoverflow]}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
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
        {katalogData.map((item: any, index: React.Key | null | undefined) => {
          const slug = item.judul
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
          return (
            <SwiperSlide key={index} className="h-full">
              <Link
                href={`/katalog/detail?katalog_id=${item?.id}&judul=${slug}`}
                target="_blank"
              >
                <div
                  className="rounded-xl"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${BASE_URL}/${item.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="hvTopDown bg-neutral-content/[0.3] after:rounded-xl after:bg-primary-content/60 after:backdrop-blur-sm h-full hover:text-base-content p-6 flex flex-col items-center justify-end gap-4 z-0">
                    <h3 className="text-center font-bold lg:text-xl">
                      {item.judul}
                    </h3>
                    <div>
                      <p className="text-center text-sm lg:text-lg">
                        {item.penulis}
                      </p>
                      <p className="text-center text-sm lg:text-base">
                        {item.tahun}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
};

export default SlideCover;
