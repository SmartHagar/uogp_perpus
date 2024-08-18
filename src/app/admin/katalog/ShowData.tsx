/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useKatalog from "@/stores/crud/Katalog";
import { FC, useEffect, useState } from "react";
import Spiner from "@/components/loading/Spiner";
import { useSearchParams } from "next/navigation";
import slide from "./slide";
import LightPlugins from "@/components/lightBox/LightPlugins";

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
  const [indexBox, setIndexBox] = useState<number>(-1);
  const [slides, setSlides] = useState<any>();
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
  }, [page, limit]);
  // ketika jenis berubah
  useEffect(() => {
    setPage(1);
    fetchDataKatalog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jenis]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataKatalog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Class Sub",
    "Judul",
    "Penulis",
    "Penerbit",
    "Tahun",
    "Stok",
    "Cover",
    "Aksi",
  ];
  const tableBodies = [
    "class_sub.nm_sub",
    "judul",
    "penulis",
    "penerbit",
    "tahun",
    "stok",
    "cover",
  ];

  useEffect(() => {
    setSlides(slide(dtKatalog.data));
  }, [dtKatalog.data]);

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
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
              dataTable={dtKatalog.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
              setIndexBox={setIndexBox}
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
