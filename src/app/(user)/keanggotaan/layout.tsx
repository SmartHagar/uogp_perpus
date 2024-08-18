/** @format */

import { Metadata } from "next";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Sejarah",
  description: "Sejarah Perpustakaan Universitas Ottow Geissler Papua",
};

const layout = (props: Props) => {
  return <div className="mt-4">{props.children}</div>;
};

export default layout;
