/** @format */
import React, { FC, ReactNode } from "react";
type Props = {
  onClick: () => void;
  addClass?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
};
const BtnDefault: FC<Props> = ({ onClick, addClass, children, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn btn-active ${addClass}`}
    >
      {children}
    </button>
  );
};

export default BtnDefault;
