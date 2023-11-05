/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useAnggota from "@/stores/crud/Anggota";
import React, { FC, useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Spiner from "@/components/loading/Spiner";

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
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataAnggota();
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
              dataTable={dtAnggota.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
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
