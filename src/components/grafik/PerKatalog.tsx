/** @format */
"use client";
import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  katalogData: any;
};

const PerKatalog: FC<Props> = ({ katalogData }) => {
  const [series, setSeries] = useState<any>();
  const [categories, setCategories] = useState<any>();
  const onData = () => {
    // group by jenis and count
    const groupedData =
      katalogData &&
      katalogData.reduce((acc: any, item: any) => {
        const jenis = item.jenis;
        if (acc[jenis]) {
          acc[jenis]++;
        } else {
          acc[jenis] = 1;
        }
        return acc;
      }, {});

    console.log(groupedData);

    const dataGrafik =
      groupedData &&
      Object.entries(groupedData).map(([key, value]) => ({
        name: key,
        data: value,
      }));
    const categories =
      dataGrafik && dataGrafik.map((item: any) => item.name.toUpperCase());
    //   change categories to capitalize

    setCategories(categories);
    // setSeries(dataGrafik && dataGrafik.map((item: any) => item.data));
    setSeries([
      {
        name: "Jumlah",
        data: dataGrafik && dataGrafik.map((item: any) => item.data),
      },
    ]);
  };

  useEffect(() => {
    onData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [katalogData]);

  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories,
    },
  };

  return (
    series &&
    categories && (
      <ApexChart
        options={option}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
    )
  );
};

export default PerKatalog;
