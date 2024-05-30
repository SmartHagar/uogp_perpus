/** @format */

import { BASE_URL } from "@/services/baseURL";
import KatalogTypes from "@/types/KatalogTypes";

const slide = (data: KatalogTypes[]) => {
  const dtImages = data?.map((row: KatalogTypes) => {
    return {
      src: `${BASE_URL}/${row?.cover}`,
      title: row.judul,
      description: row.penulis,
      width: 3840,
      height: 5760,
    };
  });
  console.log({ dtImages });
  return dtImages;
};

export default slide;
