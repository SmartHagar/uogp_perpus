/** @format */
"use client";
import BtnDefault from "@/components/button/BtnDefault";
import Reveal from "@/utils/Reveal";
import React, { useEffect } from "react";

type Props = {};

const DescSlide = (props: Props) => {
  return (
    <div className="absolute w-full left-10 lg:left-20 top-1/3 md:top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:w-96">
      <Reveal>
        <p className="text-lg">Penelusuran</p>
      </Reveal>
      <Reveal delay={300}>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
          Tim Profesional & Kompeten
        </h1>
      </Reveal>
      <Reveal delay={600}>
        <BtnDefault onClick={() => null} addClass="btn-primary">
          Tambah
        </BtnDefault>
      </Reveal>
    </div>
  );
};

export default DescSlide;
