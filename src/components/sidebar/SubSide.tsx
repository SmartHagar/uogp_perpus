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
  console.log({ pathname });
  const isOpen = pathname.includes(slug);

  return (
    <li key={index}>
      <details open={isOpen}>
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
