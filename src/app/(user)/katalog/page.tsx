/** @format */

"use client";
import BtnOutline from "@/components/button/BtnOutline";
import InputTextSearch from "@/components/input/InputTextSerch";
import Spiner from "@/components/loading/Spiner";
import SkeletonDefault from "@/components/skeleton/SkeletonDefault";
import getKatalog from "@/lib/getKatalog";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardKatalog from "./CardKatalog";
import PaginationDefault from "@/components/pagination/PaginationDefault";

type Props = {};

const Sejarah = (props: Props) => {
  const params = useSearchParams();
  const jenis = params.get("jenis") || "";
  // state
  const [katalogData, setKatalogData] = useState<any>();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // get katalog
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Gunakan prodi_id dan search dari URL sebagai parameter pada getAlumni
        const res = await getKatalog({
          page,
          limit,
          orderBy: "tahun",
          sort: "desc",
          search,
          jenis,
        });
        setKatalogData(res);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
    if (search) {
      setPage(1);
      fetchData();
    }
  }, [page, limit, search, jenis]);

  console.log({ katalogData });

  // handle search
  // const handleSearch = (e: any) => {
  //   setSearch(e.target.value);
  // };
  return (
    <div className="flex flex-col gap-y-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center">
        Koleksi <span className="capitalize">{jenis}</span>
      </h2>
      <div className="flex gap-x-4 flex-col">
        <InputTextSearch
          addClass="w-full"
          placeholder="Cari Judul, Pengarang atau Penerbit"
          onChange={(e) => setSearch(e)}
        />
        <h4 className="mt-2 text-lg">
          Total{" "}
          <span className="capitalize">
            {jenis}: {katalogData?.total}
          </span>
        </h4>
      </div>
      {/* card buku */}
      <div>
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <Spiner />
          </div>
        ) : (
          <CardKatalog katalogData={katalogData?.data} />
        )}
        {katalogData?.last_page > 1 && (
          <div className="mt-4">
            <PaginationDefault
              currentPage={katalogData?.current_page}
              totalPages={katalogData?.last_page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sejarah;
