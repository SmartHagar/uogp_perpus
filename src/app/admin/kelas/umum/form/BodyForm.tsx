/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
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
  return (
    <>
      <InputTextDefault
        label="Nomor"
        name="nomor"
        register={register}
        minLength={1}
        required
        errors={errors.nomor}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Nama Class Umum"
        name="nm_umum"
        register={register}
        minLength={1}
        required
        errors={errors.nm_umum}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
