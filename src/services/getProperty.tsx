/** @format */

import { BASE_URL } from "./baseURL";
import Image from "next/image";
import moment from "moment";
import showRupiah from "./rupiah";

const getProperty = (obj: any, prop: any, index: number, setIndexBox: any) => {
  const angkatan = obj?.thn_angkatan?.substring(2);
  const mhs_angkatan = obj?.mhs?.thn_angkatan?.substring(2);
  const jmlh_simpanan = obj?.simpanan;
  // sum nominal in jumlah simpanan
  const totalNominal = jmlh_simpanan?.reduce(
    (a: number, b: any) => a + parseInt(b.nominal),
    0
  );

  let parts = prop.split(".");
  if (Array.isArray(parts)) {
    let last = parts.length > 1 ? parts.pop() : parts;
    // memisahkan properti dalam bentuk array
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
    if (
      prop === "tgl_masuk" ||
      prop === "tgl_simpanan" ||
      prop === "tgl_lahir" ||
      prop === "tgl_pinjam" ||
      prop === "tgl_bayar"
    ) {
      return moment(obj).format("DD/MM/YYYY");
    }
    const imgField = ["bukti_bayar", "bukti", "foto", "fotoktp", "cover"];
    if (imgField.includes(prop)) {
      return (
        obj && (
          <Image
            src={`${BASE_URL}/${obj}`}
            loading="lazy"
            width={70}
            height={70}
            alt=""
            className="cursor-pointer"
            onClick={setIndexBox ? () => setIndexBox(index) : undefined}
          />
        )
      );
    }
    if (prop === "nominal" || prop === "angsuran") {
      return showRupiah(obj);
    }
    if (prop === "jmlh_simpanan") {
      return showRupiah(totalNominal);
    }

    if (prop === "file") {
      return (
        obj && (
          <a href={`${BASE_URL}/${obj}`} target="_blank">
            Lihat File
          </a>
        )
      );
    }
    return <p className="capitalize">{obj}</p>;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw "parts is not valid array";
  }
};

export default getProperty;
