/** @format */
"use client";
import Spiner from "@/components/loading/Spiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useTransaksi from "@/stores/crud/Transaksi";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

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
  const { setTransaksi, dtTransaksi } = useTransaksi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // get params
  const params = useSearchParams();
  const status = (params && params.get("status")) || "";

  const fetchDataTransaksi = async () => {
    const res = await setTransaksi({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataTransaksi();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataTransaksi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status]);

  // table
  const headTable = ["No", "Anggota", "Judul", "Tgl. Pinjam", "Aksi"];
  const tableBodies = ["anggota.nama", "katalog.judul", "tgl_pinjam"];
  // add tgl_kembali in index 5 if status = pengembalian
  if (status === "pengembalian") {
    const index = headTable.length - 1;
    headTable.splice(index, 0, "Tgl. Kembali");
    tableBodies.splice(index, 0, "tgl_kembali");
  }
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
              dataTable={dtTransaksi.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtTransaksi?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtTransaksi?.current_page}
                totalPages={dtTransaksi?.last_page}
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
