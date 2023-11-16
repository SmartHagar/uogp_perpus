/** @format */
"use client";
import PerKatalog from "@/components/grafik/PerKatalog";
import { getKatalogAll } from "@/lib/getKatalog";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [katalogData, setKatalogData] = useState<any>();
  // get katalog
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        // Gunakan prodi_id dan search dari URL sebagai parameter pada getAlumni
        const res = await getKatalogAll({});
        setKatalogData(res);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex felx-col">
      <div className="h-80 w-full ">
        <PerKatalog katalogData={katalogData} />
      </div>
    </div>
  );
};

export default Home;
