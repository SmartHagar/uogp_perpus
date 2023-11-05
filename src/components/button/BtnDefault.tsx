/** @format */
import React, { FC, ReactNode } from "react";
type Props = {
  onClick: () => void;
  addClass?: string;
  children?: ReactNode;
};
const BtnDefault: FC<Props> = ({ onClick, addClass, children }) => {
  return (
    <button onClick={onClick} className={`btn btn-active ${addClass}`}>
      {children}
    </button>
  );
};

export default BtnDefault;
