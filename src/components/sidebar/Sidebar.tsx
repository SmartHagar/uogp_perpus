/** @format */
"use client";
import React, { FC, useState } from "react";
import { adminMenus } from "./Menus";
import Link from "next/link";
import SubSide from "./SubSide";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import BtnDefault from "../button/BtnDefault";

type Props = {};

const Sidebar: FC<Props> = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSingout = async () => {
    setIsLoading(true);
    // remove cookie token and role
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("dosen_id");
    // redirect to roote page
    router.push("/");
    setIsLoading(false);
  };

  return (
    <>
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
      <div className="text-white absolute bottom-0 left-0 w-56 flex justify-center">
        <BtnDefault onClick={handleSingout}>
          {isLoading ? "Logout..." : "Logout"}
        </BtnDefault>
      </div>
    </>
  );
};

export default Sidebar;
