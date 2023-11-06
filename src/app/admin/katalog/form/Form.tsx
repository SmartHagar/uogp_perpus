/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useKatalog from "@/stores/crud/Katalog";
import BtnDefault from "@/components/button/BtnDefault";
import { useSearchParams } from "next/navigation";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  judul: string;
  penulis: string;
  penerbit: string;
  tahun: string | number;
  stok: number;
  cover: string;
  jenis: string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // state
  const [myFile, setMyFile] = useState<any>();
  // get params
  const params = useSearchParams();
  const jenis = (params && params.get("jenis")) || "";
  // store
  const { addData, updateData } = useKatalog();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("judul", "");
    setValue("penulis", "");
    setValue("penerbit", "");
    setValue("tahun", "");
    setValue("stok", 1);
    setValue("cover", "");
    setMyFile(null);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("judul", dtEdit.judul);
      setValue("penulis", dtEdit.penulis);
      setValue("penerbit", dtEdit.penerbit);
      setValue("tahun", parseInt(dtEdit.tahun));
      setValue("stok", dtEdit.stok);
      setValue("cover", dtEdit.cover);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    console.log({ row });
    // add jenis in row
    row.jenis = jenis; // Assuming `jenis` is the value you want to add to `row`
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      const { data } = await updateData(dtEdit.id, row);
      toastShow({
        event: data,
      });
      setShowModal(false);
    } else {
      const { data } = await addData(row);
      console.log({ data });
      toastShow({
        event: data,
      });
      data?.type !== "success" ? null : resetForm();
    }
  };

  return (
    <ModalDefault
      title="Form Katalog"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />

        <div className="grid grid-cols-4 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
            myFile={myFile}
            setMyFile={setMyFile}
          />
        </div>
        <div>
          <BtnDefault onClick={handleSubmit(onSubmit)} addClass="btn-primary">
            Simpan
          </BtnDefault>
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
