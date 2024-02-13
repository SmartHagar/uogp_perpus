/** @format */
"use client";
import useLogin from "@/stores/auth/login";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import FormLogin from "./FormLogin";
import Spiner from "@/components/loading/Spiner";
import BtnDefault from "@/components/button/BtnDefault";
import Link from "next/link";

type Props = {};
type Inputs = {
  email: string;
  password: string | number;
};

const Login = (props: Props) => {
  // store
  const { setLogin, cekToken } = useLogin();
  const router = useRouter();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // jika sudah login
  const fetchAuth = async () => {
    const token = Cookies.get("token");
    if (token) {
      const cekAuth = await cekToken();
      console.log({ cekAuth });
      if (!cekAuth?.error) {
        const role = cekAuth?.data?.data?.user?.role;
        // redirect to login
        router.push(`/${role}/dashboard`);
      }
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAuth();
    }
  }, []);
  // hook form
  const {
    register,
    setValue,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
    setError("");
    const res = await setLogin(row);
    if (res?.error) {
      setError(res?.error?.pesan);
    } else {
      const { data } = res;
      Cookies.set("token", data.token);
      Cookies.set("role", data.role);
      router.push(`${data.role}/dashboard`);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="hero min-h-screen bg-base-content text-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Sekarang!</h1>
          <p className="py-6">
            Silahkan melakukan login untuk melanjutkan ke halaman admin, atau
            anda bisa kembali ke{" "}
            <Link className="underline" href="/">
              Halaman Utama
            </Link>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-neutral-content">
          {error && <div className="text-error p-2 text-center">{error}</div>}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <FormLogin
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              setValue={setValue}
            />
            <div className="mt-4">
              {isLoading ? (
                <Spiner />
              ) : (
                <BtnDefault onClick={() => null} addClass="btn-primary">
                  Login
                </BtnDefault>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
