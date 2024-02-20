/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useClassUmumApi from "@/stores/api/ClassUmum";
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
  const { setClassUmumAll, dtClassUmum } = useClassUmumApi();
  // memanggil data classUmum
  const fetchDataClassUmum = async ({ search }: any) => {
    await setClassUmumAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataClassUmum({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtClassUmum?.data && (
        <SelectFromDb
          label="Class Umum"
          placeholder="Pilih Class Umum"
          name="class_umum_id"
          dataDb={dtClassUmum?.data}
          body={["id", "nm_umum"]}
          control={control}
          required
          errors={errors.class_umum_id}
          addClass="col-span-4 lg:col-span-2"
        />
      )}
      <InputTextDefault
        label="Nama Sub Class"
        name="nm_sub"
        register={register}
        minLength={1}
        required
        errors={errors.nm_sub}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
