/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Mobile from "./Mobile";
import menus from "./menu";
import MenuTypes from "@/types/MenuTypes";
import Link from "next/link";
import SubMenu from "./SubMenu";
import Dropdown from "./Dropdown";
import ThemeChange from "../support/ThemeChange";
import BtnOutline from "../button/BtnOutline";

type Props = {};

// dark=true light = false

const Navbar = (props: Props) => {
  const pathname = usePathname();

  const router = useRouter();

  const handleLogin = () => {
    console.log({ pathname });
    router.push("/login");
  };

  return (
    <>
      <div className="navbar justify-between flex-row-reverse bg-base-100 lg:px-20 lg:flex-row">
        <div className="flex-row-reverse justify-between  lg:justify-normal lg:flex-row">
          <div className="lg:hidden">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <div className="w-12 h-12 lg:w-16 lg:h-16">
                <Image src="/img/uogp.png" alt="logo" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center w-full">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            {menus &&
              menus.map((item: MenuTypes, index) => {
                const href = item.href;
                return item.subMenus ? (
                  SubMenu(item?.subMenus, item.name, index, item.slug, pathname)
                ) : (
                  <Link
                    key={index}
                    className="whitespace-nowrap flex flex-col justify-center items-center"
                    href={item.href}
                  >
                    <li>{item.name}</li>
                    {href === pathname && (
                      <div className="border-b w-[70%] mx-auto"></div>
                    )}
                  </Link>
                );
              })}
          </ul>
        </div>
        <div>
          <BtnOutline onClick={handleLogin} addClass="btn-primary">
            Login
          </BtnOutline>
        </div>
      </div>
      <div className="absolute left-0 right-0">{/* <Mobile /> */}</div>
    </>
  );
};

export default Navbar;
