/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import SelectTahun from "@/components/select/SelectTahun";
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
  const { setProdi, dtProdi } = useProdiApi();
  // memanggil data prodi
  const fetchDataProdi = async ({ search }: any) => {
    await setProdi({
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
          addClass="col-span-4 lg:col-span-2"
        />
      )}
      <InputTextDefault
        label="NPM"
        name="NPM"
        register={register}
        minLength={10}
        maxLength={10}
        required
        errors={errors.NPM}
        addClass="col-span-4 lg:col-span-2"
        placeholder="10 digit terakhir dari NPM"
        type="number"
      />
      <InputTextDefault
        label="Nama"
        name="nama"
        register={register}
        minLength={2}
        required
        errors={errors.nama}
        addClass="col-span-4"
      />

      <InputTextDefault
        label="No. HP"
        name="no_hp"
        register={register}
        minLength={11}
        maxLength={12}
        required
        errors={errors.no_hp}
        type="number"
        addClass="col-span-4 lg:col-span-2"
      />

      {/* jenkel */}
      <div className="col-span-4 lg:col-span-2">
        <div className="w-[100%]">
          <label className="block py-2 text-sm font-medium text-gray-700 tracking-wide">
            Jenis Kelamin
          </label>
          <div className="flex gap-2">
            <InputRadio
              id="Laki-laki"
              name="jenkel"
              value="Laki-laki"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Laki-laki"}
            />
            <InputRadio
              id="Perempuan"
              name="jenkel"
              value="Perempuan"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Perempuan"}
            />
          </div>
          {errors?.jenkel?.type === "required" && (
            <p className="text-red-500 font-inter italic text-sm">
              Jenis kelamin tidak boleh kosong
            </p>
          )}
        </div>
      </div>

      <InputTextDefault
        label="Alamat"
        name="alamat"
        register={register}
        minLength={1}
        required
        errors={errors.alamat}
        addClass="col-span-4"
      />
      <InputFile
        label="Foto"
        name="foto"
        register={register}
        accept="image/*"
        required
        errors={errors.foto}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.foto}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
