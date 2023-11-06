/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useKatalog from "@/stores/crud/Katalog";
import React, { FC, useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Spiner from "@/components/loading/Spiner";
import { useSearchParams } from "next/navigation";

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
  const { setKatalog, dtKatalog } = useKatalog();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // get params
  const params = useSearchParams();
  const jenis = (params && params.get("jenis")) || "";

  const fetchDataKatalog = async () => {
    const res = await setKatalog({
      page,
      limit,
      search,
      jenis,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataKatalog();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, jenis]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataKatalog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Judul",
    "Penulis",
    "Penerbit",
    "Tahun",
    "Stok",
    "Cover",
    "Aksi",
  ];
  const tableBodies = [
    "judul",
    "penulis",
    "penerbit",
    "tahun",
    "stok",
    "cover",
  ];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
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
              dataTable={dtKatalog.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtKatalog?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtKatalog?.current_page}
                totalPages={dtKatalog?.last_page}
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
