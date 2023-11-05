/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useProdiApi from "@/stores/api/Prodi";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
}) => {
  const { setProdiAll, dtProdi } = useProdiApi();
  // memanggil data prodi
  const fetchDataProdi = async ({ search }: any) => {
    await setProdiAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataProdi({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtProdi?.data && (
        <SelectFromDb
          label="Prodi"
          placeholder="Pilih Prodi"
          name="prodi_id"
          dataDb={dtProdi?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.prodi_id}
          addClass="col-span-4"
        />
      )}
      <InputTextDefault
        label="Kode Matkul"
        name="kode"
        register={register}
        required
        minLength={2}
        errors={errors.kode}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="Nama Matkul"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Singkatan"
        name="singkat"
        register={register}
        maxLength={10}
        required
        errors={errors.singkat}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="Semester"
        name="semester"
        register={register}
        maxLength={2}
        required
        errors={errors.semester}
        type="number"
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="SKS"
        name="sks"
        register={register}
        maxLength={2}
        required
        errors={errors.sks}
        type="number"
        addClass="col-span-4 lg:col-span-1"
      />
    </>
  );
};

export default BodyForm;
