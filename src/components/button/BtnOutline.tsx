/** @format */
import React, { FC, ReactNode } from "react";
type Props = {
  onClick: () => void;
  addClass?: string;
  children: ReactNode;
};
const BtnOutline: FC<Props> = ({ onClick, addClass, children }) => {
  return (
    <button onClick={onClick} className={`btn btn-outline ${addClass}`}>
      {children}
    </button>
  );
};

export default BtnOutline;
