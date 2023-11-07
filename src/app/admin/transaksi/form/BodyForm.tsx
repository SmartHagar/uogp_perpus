/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useAnggotaApi from "@/stores/api/Anggota";
import useKatalogApi from "@/stores/api/Katalog";
import React, { FC, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  tgl_pinjam: Date;
  setTgl_pinjam: (data: Date) => void;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tgl_pinjam,
  setTgl_pinjam,
}) => {
  // store
  const { setAnggotaAll, dtAnggota } = useAnggotaApi();
  const { setKatalogReady, dtKatalog } = useKatalogApi();
  // state
  const [selectKatalog, setSelectKatalog] = useState<boolean>();
  // memanggil data anggota
  const fetchDataAnggota = async ({ search }: any) => {
    await setAnggotaAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataAnggota({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  // watch jenis
  const watchJenis = watch("jenis");
  // memanggil data anggota
  const fetchDataKatalog = async ({ search, jenis }: any) => {
    await setKatalogReady({
      search,
      jenis,
    });
    setSelectKatalog(true);
  };
  // ketika jenis watch berubah
  useEffect(() => {
    setSelectKatalog(false);
    if (watchJenis) {
      fetchDataKatalog({ jenis: watchJenis });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchJenis]);
  console.log({ dtKatalog });
  return (
    <>
      {dtAnggota?.data && (
        <SelectFromDb
          label="Anggota"
          placeholder="Pilih Anggota"
          name="anggota_id"
          dataDb={dtAnggota?.data}
          body={["id", "NPM", "nama"]}
          control={control}
          required
          errors={errors.anggota_id}
          addClass="col-span-4"
        />
      )}
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
        addClass="col-span-4 lg:col-span-1"
        required
      />
      {selectKatalog && dtKatalog?.data && (
        <SelectFromDb
          label="Katalog"
          placeholder="Pilih Katalog"
          name="katalog_id"
          dataDb={dtKatalog?.data}
          body={["id", "judul", "penulis", "tahun"]}
          control={control}
          required
          errors={errors.katalog_id}
          addClass="col-span-4 lg:col-span-3 "
        />
      )}
      <InputDate
        label="Tgl. Peminjaman"
        name="tgl_pinjam"
        control={control}
        startDate={tgl_pinjam}
        setStartDate={setTgl_pinjam}
        required
        errors={errors.tgl_pinjam}
        addClass="col-span-4 lg:col-span-2"
      />
    </>
  );
};

export default BodyForm;
