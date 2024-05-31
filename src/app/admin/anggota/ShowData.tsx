/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useAnggota from "@/stores/crud/Anggota";
import { FC, useEffect, useState } from "react";
import Spiner from "@/components/loading/Spiner";
import { useSearchParams } from "next/navigation";
import slide from "./slide";
import LightPlugins from "@/components/lightBox/LightPlugins";
import { BsCardText } from "react-icons/bs";
import ModalDefault from "@/components/modal/ModalDefault";
import Detail from "./Detail";
import AnggotaTypes from "@/types/AnggotaTypes";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search }) => {
  const { setAnggota, dtAnggota } = useAnggota();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [indexBox, setIndexBox] = useState<number>(-1);
  const [slides, setSlides] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dtDetail, setDtDetail] = useState<any>();
  // get params
  const params = useSearchParams();
  const jenis = (params && params.get("jenis")) || "";

  const fetchDataAnggota = async () => {
    const res = await setAnggota({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataAnggota();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, jenis]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataAnggota();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Nama",
    "NPM",
    "Prodi",
    "Jenkel",
    "Tempat",
    "Tgl. Lahir",
    "Alamat",
    "No_hp",
    "Foto",
    "Aksi",
  ];
  const tableBodies = [
    "nama",
    "NPM",
    "prodi.nama",
    "jenkel",
    "tempat",
    "tgl_lahir",
    "alamat",
    "no_hp",
    "foto",
  ];

  useEffect(() => {
    setSlides(slide(dtAnggota.data));
  }, [dtAnggota.data]);

  const costume = (data: AnggotaTypes) => {
    return (
      <BsCardText
        className="w-6 h-6 cursor-context-menu"
        onClick={() => handleDetail(data)}
      />
    );
  };

  const handleDetail = (row: AnggotaTypes) => {
    setDtDetail(row);
    setShowModal(true);
  };

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {/* detail */}
      <ModalDefault
        showModal={showModal}
        setShowModal={setShowModal}
        title="Detail Anggota"
        width="36rem"
      >
        <Detail dtDetail={dtDetail} />
      </ModalDefault>
      {/* lightBox */}
      <LightPlugins index={indexBox} setIndex={setIndexBox} slides={slides} />

      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spiner />
        </div>
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtAnggota.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
              setIndexBox={setIndexBox}
              costume={costume}
            />
          </div>
          {dtAnggota?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtAnggota?.current_page}
                totalPages={dtAnggota?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowData;
