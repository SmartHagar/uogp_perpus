/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useClassUmum from "@/stores/crud/ClassUmum";
import React, { FC, useEffect, useState } from "react";
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
  const { setClassUmum, dtClassUmum } = useClassUmum();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // get params
  const params = useSearchParams();
  const jenis = (params && params.get("jenis")) || "";

  const fetchDataClassUmum = async () => {
    const res = await setClassUmum({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataClassUmum();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, jenis]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataClassUmum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Nomor", "Nama Class Umum", "Aksi"];
  const tableBodies = ["nomor", "nm_umum"];

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
              dataTable={dtClassUmum.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtClassUmum?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtClassUmum?.current_page}
                totalPages={dtClassUmum?.last_page}
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
