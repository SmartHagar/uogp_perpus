/** @format */
"use client";
import { BASE_URL } from "@/services/baseURL";
import useKatalogApi from "@/stores/api/Katalog";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const Detail = (props: Props) => {
  const params = useSearchParams();

  const katalog_id = params.get("katalog_id") || "";
  // store
  const { setKatalogDetail, dtKatalog } = useKatalogApi();
  // get katalog
  useEffect(() => {
    setKatalogDetail(katalog_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [katalog_id]);
  console.log({ dtKatalog });
  return (
    <div className="flex flex-col gap-y-6 min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="h-full lg:max-w-lg">
          <Image
            src={`${BASE_URL}/${dtKatalog.cover}`}
            alt="Katalog"
            width={100}
            height={100}
            className="w-full"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{dtKatalog.judul}</h2>
          <div className="flex flex-col gap-2 mt-2">
            <p>
              <span>Penulis :</span>
              <span> {dtKatalog.penulis}</span>
            </p>
            <p>
              <span>Penerbit :</span>
              <span> {dtKatalog.penerbit}</span>
            </p>
            <p>
              <span>Tahun :</span>
              <span> {dtKatalog.tahun}</span>
            </p>
            <p>
              <span>Stok :</span>
              <span> {dtKatalog.stok}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
