/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import InputTextPassword from "@/components/input/InputTextPassword";
import React, { FC } from "react";

type Props = {
  register: any;
  errors: any;
  control: any;
  watch: any;
  setValue: any;
};

const FormLogin: FC<Props> = ({
  register,
  errors,
  control,
  watch,
  setValue,
}) => {
  return (
    <>
      <InputTextDefault
        label="Email"
        name="email"
        register={register}
        required
        minLength={2}
        errors={errors.email}
        addClass="col-span-4"
        type="email"
      />
      <InputTextPassword
        label="Password"
        name="password"
        register={register}
        required
        minLength={3}
        errors={errors.password}
        addClass="w-[100%] mt-2"
        type="password"
      />
    </>
  );
};

export default FormLogin;
