/** @format */

import React, { FC } from "react";
import { BASE_URL } from "@/services/baseURL";
import Image from "next/image";
import Link from "next/link";
type Props = {
  katalogData: any[];
};

const CardKatalog: FC<Props> = ({ katalogData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {katalogData?.map((item) => (
        <Link
          href={`/katalog/detail?katalog_id=${item?.id}`}
          key={item?.id}
          className="card bg-base-100 shadow-lg"
        >
          <div className="card bg-neutral-content shadow-xl h-[26rem]">
            <figure>
              <Image
                src={`${BASE_URL}/${item.cover}`}
                alt="Katalog"
                width={100}
                height={100}
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.penulis}</h2>
              <p>{item.judul}</p>
              <p>{item.tahun}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardKatalog;
