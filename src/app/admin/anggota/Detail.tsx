/** @format */

import BtnOutline from "@/components/button/BtnOutline";
import { BASE_URL } from "@/services/baseURL";
import AnggotaTypes from "@/types/AnggotaTypes";
import myMoment from "@/utils/myMoment";
import Image from "next/image";
import { FC, useRef } from "react";
import { useReactToPrint } from "react-to-print";

type Props = {
  dtDetail: AnggotaTypes | null;
};

const Detail: FC<Props> = ({ dtDetail }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleCetak = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="flex flex-col gap-y-4">
      {/* card */}
      <div ref={componentRef} className="flex flex-col w-[32rem]">
        {/* cop */}
        <div className="relative">
          <Image
            src="/img/uogp.png"
            alt="logo"
            width={70}
            height={70}
            priority
            className="absolute"
          />
        </div>
        <div className="flex flex-col items-center grow">
          <h3 className="uppercase font-bold">Biro Perpustakaan</h3>
          <h3 className="uppercase font-bold text-lg">
            Universitas Ottow Geissler Papua
          </h3>
          <h3>Jln. Perkutut Kotaraja Dalam, Jayapura Papua</h3>
        </div>
        {/* ket */}
        <div className="bg-cyan-300 p-4">
          <h1 className="text-center uppercase font-bold text-lg">
            Kartu Anggota Perpustakaan
          </h1>
        </div>
        {/* biodata */}
        <div>
          <div className="flex">
            <span className="w-28">Nama Lengkap</span>
            <span>: {dtDetail?.nama}</span>
          </div>
          <div className="flex">
            <span className="w-28">NPM</span>
            <span>: {dtDetail?.NPM}</span>
          </div>
          <div className="flex">
            <span className="w-28">NPM</span>
            <span>: {dtDetail?.NPM}</span>
          </div>
          <div className="flex">
            <span className="w-28">Fakultas</span>
            <span>: {dtDetail?.prodi?.fakultas?.nama}</span>
          </div>
          <div className="flex">
            <span className="w-28">Progdi</span>
            <span>: {dtDetail?.prodi?.nama}</span>
          </div>
          <div className="flex">
            <span className="w-28">TTL</span>
            <span>
              : {dtDetail?.tempat}, {myMoment(dtDetail?.tgl_lahir).format("LL")}
            </span>
          </div>
          {/* footer */}
          <div className="flex justify-between">
            <div className="relative w-[3cm] h-[4cm]">
              <Image src={`${BASE_URL}/${dtDetail?.foto}`} alt="foto" fill />
            </div>
            <div className="mr-2 pt-4">
              <h1 className="text-right">
                Jayapura, {myMoment().format("LL")}
              </h1>
              <div className="flex flex-col justify-between h-full mr-11 pt-4">
                <h1 className="text-center">KEPALA PERPUSTAKAAN</h1>
                <h1 className="text-center">FONNEKE PANGAJOW, SE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cetak */}
      <BtnOutline onClick={handleCetak} addClass="text-black mt-4">
        Cetak
      </BtnOutline>
    </div>
  );
};

export default Detail;
