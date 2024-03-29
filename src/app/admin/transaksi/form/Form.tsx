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
import { useSearchParams } from "next/navigation";
import moment from "moment";

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
  status: string;
  keperluan: string;
  jenis?: string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // store
  const { addData, updateData } = useTransaksi();
  // state
  const [tgl_pinjam, setTgl_pinjam] = useState(new Date());
  const [tgl_kembali, setTgl_kembali] = useState<Date | string>("");
  // get params
  const params = useSearchParams();
  const status = (params && params.get("status")) || "";
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
    setValue("tgl_pinjam", moment(new Date()).format("YYYY-MM-DD"));
    setValue("tgl_kembali", "");
    setTgl_pinjam(new Date());
    setTgl_kembali("");
    setValue("jenis", "");
    setValue("denda", 0);
    setValue("keperluan", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("anggota_id", dtEdit.anggota_id);
      setValue("katalog_id", dtEdit.katalog_id);
      setValue("jenis", dtEdit.katalog.jenis);
      setValue("tgl_pinjam", dtEdit.tgl_pinjam);
      setValue("tgl_kembali", dtEdit.tgl_kembali);
      setTgl_pinjam(new Date(dtEdit.tgl_pinjam));
      setTgl_kembali(dtEdit.tgl_kembali ? new Date(dtEdit.tgl_kembali) : "");
      setValue("keperluan", dtEdit.keperluan);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    // add status in row
    row.status = status; // Assuming `status` is the value you want to add to `row`
    // remove jenis from row
    delete row.jenis;
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
            tgl_kembali={tgl_kembali}
            setTgl_kembali={setTgl_kembali}
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
