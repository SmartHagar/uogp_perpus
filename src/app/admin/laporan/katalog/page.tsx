/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import BtnDefault from "@/components/button/BtnDefault";
import { useRouter, useSearchParams } from "next/navigation";
import SelectTahun from "@/components/select/SelectTahun";
import { useForm } from "react-hook-form";
import { SelectDefault } from "@/components/select/SelectDefault";
import { BASE_URL } from "@/services/baseURL";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Anggota = () => {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useForm();
  // router
  const router = useRouter();
  // watch tahun dan jenis
  const tahunWatch = watch("tahun") || "";
  const jenisWatch = watch("jenis") || "";

  useEffect(() => {
    // push router
    router.push(`katalog?jenis=${jenisWatch}&tahun=${tahunWatch}`);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahunWatch, jenisWatch]);

  const handleCetak = () => {
    // open new tab
    window.open(
      `${BASE_URL}/laporan/katalog?jenis=${jenisWatch}&tahun=${tahunWatch}`,
      "_blank"
    );
  };

  const setEdit = (row: any) => {};

  const setDelete = async ({ id, isDelete }: Delete) => {};

  return (
    <div className="flex flex-col h-full">
      <div>
        <div className="mb-4 flex justify-between gap-8 items-center">
          <div className="grow w-full grid grid-cols-2 gap-2">
            <SelectTahun
              label="Tahun"
              name="tahun"
              start={new Date().getFullYear() - 10}
              end={new Date().getFullYear()}
              control={control}
              placeholder="Pilih"
              errors={errors.tahun}
            />
            <SelectDefault
              label="Jenis Katalog"
              defaultOption="Pilih Jenis"
              register={register}
              errors={errors}
              name="jenis"
              options={[
                { value: "buku", label: "Buku" },
                { value: "jurnal", label: "Jurnal" },
                { value: "tugas akhir", label: "Tugas Akhir" },
              ]}
            />
          </div>
          <div>
            <BtnDefault onClick={handleCetak} addClass="btn-primary">
              Cetak
            </BtnDefault>
          </div>
        </div>
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} />
    </div>
  );
};

export default Anggota;
