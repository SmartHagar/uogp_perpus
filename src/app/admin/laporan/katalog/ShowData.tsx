/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useEffect, useState } from "react";
import Spiner from "@/components/loading/Spiner";
import { useSearchParams } from "next/navigation";
import useKatalogApi from "@/stores/api/Katalog";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  const { setLapKatalog, dtKatalog } = useKatalogApi();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // get params
  const params = useSearchParams();
  const jenis = (params && params.get("jenis")) || "";
  const tahun = (params && params.get("tahun")) || "";

  const fetchDataKatalog = async () => {
    const res = await setLapKatalog({
      jenis,
      tahun,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataKatalog();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jenis, tahun]);

  // table
  const headTable = [
    "No",
    "Class Sub",
    "Judul",
    "Penulis",
    "Penerbit",
    "Jenis",
    "Tahun",
    "Stok",
  ];
  const tableBodies = [
    "class_sub.nm_sub",
    "judul",
    "penulis",
    "penerbit",
    "jenis",
    "tahun",
    "stok",
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
              page={1}
              limit={10}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={false}
              hapus={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowData;
