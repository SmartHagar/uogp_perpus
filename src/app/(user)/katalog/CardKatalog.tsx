/** @format */

import React, { FC } from "react";

type Props = {
  katalogData: any[];
};

const CardKatalog: FC<Props> = ({ katalogData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {katalogData?.map((item) => (
        <div className="card bg-neutral-content shadow-xl" key={item.id}>
          <figure>
            <img src={item.cover} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.penulis}</h2>
            <p>{item.judul}</p>
            <p>{item.tahun}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardKatalog;
