/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useTransaksi from "@/stores/crud/Transaksi";
import BtnDefault from "@/components/button/BtnDefault";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  anggota_id: string | number;
  katalog_id: string | number;
  tgl_pinjam: string | Date;
  tgl_kembali: string | Date;
  denda: number;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // store
  const { addData, updateData } = useTransaksi();
  // state
  const [tgl_pinjam, setTgl_pinjam] = useState(new Date());
  const [tgl_kembali, setTgl_kembali] = useState(new Date());
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
    setValue("anggota_id", "");
    setValue("katalog_id", "");
    setValue("denda", 0);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("anggota_id", dtEdit.anggota_id);
      setValue("katalog_id", dtEdit.katalog_id);
      setValue("denda", dtEdit.denda);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    console.log({ row });
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
      title="Form Transaksi"
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
            tgl_pinjam={tgl_pinjam}
            setTgl_pinjam={setTgl_pinjam}
          />
        </div>
        <div>
          <BtnDefault onClick={handleSubmit(onSubmit)}>Simpan</BtnDefault>
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
