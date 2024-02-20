/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputDateMinMax from "@/components/input/InputDateMinMax";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useAnggotaApi from "@/stores/api/Anggota";
import useKatalogApi from "@/stores/api/Katalog";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  tgl_pinjam: Date | string;
  setTgl_pinjam: (data: Date) => void;
  setTgl_kembali: (data: Date) => void;
  tgl_kembali: Date | string;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tgl_pinjam,
  setTgl_pinjam,
  setTgl_kembali,
  tgl_kembali,
}) => {
  // store
  const { setAnggotaAll, dtAnggota } = useAnggotaApi();
  const { setKatalogReady, dtKatalog } = useKatalogApi();
  // state
  const [selectKatalog, setSelectKatalog] = useState<boolean>();
  // get params
  const params = useSearchParams();
  const status = (params && params.get("status")) || "";

  // memanggil data anggota
  const fetchDataAnggota = async ({ search }: any) => {
    await setAnggotaAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataAnggota({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  // watch jenis
  const watchJenis = watch("jenis") || "";
  // memanggil data anggota
  const fetchDataKatalog = async ({ search, jenis }: any) => {
    await setKatalogReady({
      search,
      jenis,
    });
    setSelectKatalog(true);
  };
  // ketika jenis watch berubah
  useEffect(() => {
    setSelectKatalog(false);
    if (watchJenis) {
      fetchDataKatalog({ jenis: watchJenis });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchJenis]);

  // watch tgl_kembali dan tgl_pinjam
  const tglPinjam = watch("tgl_pinjam");
  const tglKembali = watch("tgl_kembali");

  // count days between tgl_pinjam and tgl_kembali with moment
  const countDays = () => {
    if (tglPinjam && tglKembali) {
      const diff = moment(tglKembali).diff(moment(tglPinjam), "days");
      // jika lebih dari 3
      if (dtEdit?.keperluan === "Skripsi") {
        if (diff > 6) {
          const selisih = diff - 6;
          const denda = selisih * 1000;
          setValue("denda", denda);
        } else {
          setValue("denda", 0);
        }
      } else {
        if (diff > 2) {
          const selisih = diff - 2;
          const denda = selisih * 1000;
          setValue("denda", denda);
        } else {
          setValue("denda", 0);
        }
      }
    }
  };

  // memanggil count days ketika tgl_pinjam dan tgl_kembali berubah
  useEffect(() => {
    countDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tglPinjam, tglKembali]);

  return (
    <>
      {dtAnggota?.data && (
        <SelectFromDb
          label="Anggota"
          placeholder="Pilih Anggota"
          name="anggota_id"
          dataDb={dtAnggota?.data}
          body={["id", "NPM", "nama"]}
          control={control}
          required
          errors={errors.anggota_id}
          addClass="col-span-4"
        />
      )}
      {dtEdit ? (
        <div className="col-span-4">{dtEdit?.katalog?.judul}</div>
      ) : (
        <>
          <SelectDefault
            label="Jenis Katalog"
            defaultOption="Pilih Jenis"
            register={register}
            errors={errors}
            name="jenis"
            options={[
              { value: "buku", label: "Buku" },
              { value: "jurnal", label: "Jurnal" },
              { value: "tugas akhir", label: "Tugas Akhir" },
            ]}
            addClass="col-span-4 lg:col-span-1"
            required
          />
          {selectKatalog && dtKatalog?.data && (
            <SelectFromDb
              label="Katalog"
              placeholder="Pilih Katalog"
              name="katalog_id"
              dataDb={dtKatalog?.data}
              body={["id", "judul", "penulis", "tahun"]}
              control={control}
              required
              errors={errors.katalog_id}
              addClass="col-span-4 lg:col-span-3 "
            />
          )}
        </>
      )}

      {status === "peminjaman" && (
        <SelectDefault
          label="Keperluan"
          defaultOption="Pilih Keperluan"
          register={register}
          errors={errors}
          name="keperluan"
          options={[
            { value: "Lainnya", label: "Lainnya" },
            { value: "Skripsi", label: "Skripsi" },
          ]}
          addClass="col-span-4 lg:col-span-2"
          required
        />
      )}
      <InputDate
        label="Tgl. Peminjaman"
        name="tgl_pinjam"
        control={control}
        startDate={tgl_pinjam}
        setStartDate={setTgl_pinjam}
        required
        errors={errors.tgl_pinjam}
        addClass="col-span-4 lg:col-span-2"
      />
      {status === "pengembalian" && dtEdit.tgl_pinjam && (
        <>
          <InputDateMinMax
            label="Tgl. Kembali"
            name="tgl_kembali"
            control={control}
            startDate={tgl_kembali}
            setStartDate={setTgl_kembali}
            required
            errors={errors.tgl_kembali}
            addClass="col-span-4 lg:col-span-2"
            // mindate tgl_pinjam
            minDate={new Date(dtEdit?.tgl_pinjam)}
          />
          {/* // input disable denda */}
          <InputTextDefault
            label="Denda (Rp.)"
            name="denda"
            register={register}
            maxLength={12}
            required
            errors={errors.denda}
            addClass="col-span-4"
            readOnly
          />
        </>
      )}
    </>
  );
};

export default BodyForm;
