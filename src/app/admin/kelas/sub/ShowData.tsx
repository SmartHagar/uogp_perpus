/** @format */
"use client";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useClassSub from "@/stores/crud/ClassSub";
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
  const { setClassSub, dtClassSub } = useClassSub();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // get params
  const params = useSearchParams();
  const jenis = (params && params.get("jenis")) || "";

  const fetchDataClassSub = async () => {
    const res = await setClassSub({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataClassSub();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, jenis]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataClassSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Nama Class Umum", "Nama Sub", "Aksi"];
  const tableBodies = ["class_umum.nm_umum", "nm_sub"];

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
              dataTable={dtClassSub.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtClassSub?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtClassSub?.current_page}
                totalPages={dtClassSub?.last_page}
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
