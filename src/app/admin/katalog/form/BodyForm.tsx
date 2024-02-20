/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import SelectTahun from "@/components/select/SelectTahun";
import useClassSubApi from "@/stores/api/ClassSub";
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
  const { setClassSubAll, dtClassSub } = useClassSubApi();
  // memanggil data classSub
  const fetchDataClassSub = async ({ search }: any) => {
    await setClassSubAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataClassSub({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtClassSub?.data && (
        <SelectFromDb
          label="Class Sub"
          placeholder="Pilih Class Sub"
          name="class_sub_id"
          dataDb={dtClassSub?.data}
          body={["id", "class_umum.nm_umum", "nm_sub"]}
          control={control}
          required
          errors={errors.class_sub_id}
          addClass="col-span-4 lg:col-span-2"
        />
      )}
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
      <SelectTahun
        label="Tahun"
        name="tahun"
        start={new Date().getFullYear() - 10}
        end={new Date().getFullYear()}
        control={control}
        addClass="col-span-4 lg:col-span-2"
        placeholder="Pilih"
        required
        errors={errors.tahun}
      />
      <InputTextDefault
        label="stok"
        name="stok"
        register={register}
        minLength={1}
        required
        errors={errors.stok}
        type="number"
        addClass="col-span-4 lg:col-span-2"
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
