/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import React, { FC } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  myFile: any;
  setMyFile: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  myFile,
  setMyFile,
}) => {
  return (
    <>
      <InputTextDefault
        label="judul"
        name="judul"
        register={register}
        minLength={2}
        errors={errors.judul}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="penulis"
        name="penulis"
        register={register}
        minLength={2}
        errors={errors.penulis}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="penerbit"
        name="penerbit"
        register={register}
        minLength={2}
        errors={errors.penerbit}
        addClass="col-span-4"
      />
      <SelectDefault
        label="Jenis"
        defaultOption="Pilih Jenis"
        register={register}
        errors={errors}
        name="jenis"
        options={[
          { value: "buku", label: "Buku" },
          { value: "jurnal", label: "Jurnal" },
          { value: "tugas akhir", label: "Tugas Akhir" },
        ]}
        addClass="col-span-4 lg:col-span-3"
      />
      <InputTextDefault
        label="stok"
        name="stok"
        register={register}
        minLength={2}
        errors={errors.stok}
        type="number"
        addClass="col-span-4 lg:col-span-1"
      />
      <InputFile
        label="Cover"
        name="cover"
        register={register}
        accept="image/*"
        errors={errors.cover}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.cover}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
