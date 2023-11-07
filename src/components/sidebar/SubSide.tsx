/** @format */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  index: number;
  menus: any[];
  name: string;
  slug: string;
  href: string;
};

const SubSide: FC<Props> = ({ index, menus, name, slug, href }) => {
  const pathname = usePathname();

  return (
    <li key={index}>
      <details>
        <summary>{name}</summary>
        <ul>
          {menus.map((menu, index) =>
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
              <li key={index}>
                <Link href={menu.href}>{menu.name}</Link>
              </li>
            )
          )}
        </ul>
      </details>
    </li>
  );
};

export default SubSide;
