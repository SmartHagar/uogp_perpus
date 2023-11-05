/** @format */

import React from "react";
import { BASE_URL } from "./baseURL";
import Image from "next/image";
import moment from "moment";

const getProperty = (obj: any, prop: any) => {
  let parts = prop.split(".");
  if (Array.isArray(parts)) {
    let last = parts.length > 1 ? parts.pop() : parts;
    let l = parts.length,
      i = 1,
      current = parts[0];
    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (typeof obj === "object") {
      return obj ? obj[last] : "";
    }

    if (prop === "prodi_id") {
    }

    if (prop === "tgl_mulai" || prop === "tgl_selesai") {
      return moment(obj).format("DD/MM/YYYY");
    }

    if (prop === "image" || prop === "foto" || prop === "cover") {
      const image = obj;
      // console.log({ image });
      // periksa 4 karakter pertama
      const firstFourChars = image ? image.substring(0, 4) : "";
      // jika string pertama 4 karakternya adalah http
      let showImage = image ? `${BASE_URL}/${image}` : "/images/no-image.png";
      if (firstFourChars === "http") {
        showImage = image;
      }
      return obj && <Image src={showImage} width={100} height={100} alt="" />;
    }
    if (prop === "link") {
      return (
        obj && (
          <a
            href={`/stackholder/penilaian?link=${obj}`}
            target="_blank"
            className="hover:underline"
          >
            Buka Link
          </a>
        )
      );
    }
    return obj;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw "parts is not valid array";
  }
};

export default getProperty;
