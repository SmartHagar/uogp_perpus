/** @format */

"use client";
import SkeletonDefault from "@/components/skeleton/SkeletonDefault";
import React from "react";

type Props = {};

const VisiMisi = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-6 min-h-screen">
      {/* visi misi */}
      <h2 className="text-4xl font-bold text-center">Visi & Misi</h2>
      {/* visi */}
      <div>
        <h3 className="text-3xl font-bold mb-2">Visi</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod enim
          facere, numquam soluta vel? Repellendus molestiae, alias enim,
          distinctio, soluta sequi in sed sit placeat esse expedita assumenda
          doloribus?
        </p>
      </div>
      {/* misi */}
      <div>
        <h3 className="text-3xl font-bold mb-2">Misi</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil
          aperiam modi, ipsa ducimus nulla dolorem nostrum provident, ipsum
          quisquam corrupti consequatur sunt ab, exercitationem optio aliquam
          est nobis quaerat
        </p>
      </div>
    </div>
  );
};

export default VisiMisi;
