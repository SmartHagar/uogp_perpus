/** @format */

import Link from "next/link";
import React, { FC } from "react";
import menus from "./menu";
import MenuTypes from "@/types/MenuTypes";

type Props = {};

const Mobile: FC<Props> = () => {
  return (
    <ul className="menu bg-base-200 w-full rounded-box">
      {menus &&
        menus.map((item: MenuTypes, index) => {
          const href = item.href;
          return item.subMenus ? (
            <li key={index}>
              <details open>
                <summary>Parent</summary>
                <ul>
                  {item.subMenus.map((menu, index) => (
                    <li key={index}>
                      <Link href={menu.href}>{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <Link
              key={index}
              className="whitespace-nowrap ml-4 my-2"
              href={item.href}
            >
              <li>{item.name}</li>
            </Link>
          );
        })}
    </ul>
  );
};

export default Mobile;
