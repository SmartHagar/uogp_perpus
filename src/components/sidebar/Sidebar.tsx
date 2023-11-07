/** @format */
"use client";
import React, { FC } from "react";
import { adminMenus } from "./Menus";
import Link from "next/link";
import SubSide from "./SubSide";
import { usePathname } from "next/navigation";

type Props = {};

const Sidebar: FC<Props> = () => {
  const pathname = usePathname();
  return (
    <ul className="menu w-56 h-full overflow-auto">
      {adminMenus.map((menu, index) =>
        menu?.subMenus ? (
          <SubSide
            key={index}
            menus={menu.subMenus}
            name={menu.name}
            index={index}
            slug={menu.slug}
            href={menu.href}
          />
        ) : (
          <li
            key={index}
            className={pathname === menu.href ? "bg-neutral rounded-lg" : ""}
          >
            <Link href={menu.href}>{menu.name}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Sidebar;
