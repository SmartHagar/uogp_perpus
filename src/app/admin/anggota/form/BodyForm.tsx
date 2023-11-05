/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectTahun from "@/components/select/SelectTahun";
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
        label="Judul"
        name="judul"
        register={register}
        minLength={2}
        required
        errors={errors.judul}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Penulis"
        name="penulis"
        register={register}
        minLength={2}
        required
        errors={errors.penulis}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Penerbit"
        name="penerbit"
        register={register}
        minLength={2}
        required
        errors={errors.penerbit}
        addClass="col-span-4"
      />

      <SelectDefault
        label="Jenis"
        defaultOption="Pilih Jenis"
        register={register}
        required
        errors={errors}
        name="jenis"
        options={[
          { value: "buku", label: "Buku" },
          { value: "jurnal", label: "Jurnal" },
          { value: "tugas akhir", label: "Tugas Akhir" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="stok"
        name="stok"
        register={register}
        minLength={2}
        required
        errors={errors.stok}
        type="number"
        addClass="col-span-4 lg:col-span-1"
      />
      <InputFile
        label="Cover"
        name="cover"
        register={register}
        accept="image/*"
        required
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
