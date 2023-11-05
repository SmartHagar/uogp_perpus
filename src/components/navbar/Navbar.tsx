/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";
import Mobile from "./Mobile";
import menus from "./menu";
import MenuTypes from "@/types/MenuTypes";
import Link from "next/link";
import SubMenu from "./SubMenu";
import Dropdown from "./Dropdown";
import ThemeChange from "../support/ThemeChange";

type Props = {};

// dark=true light = false

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div className="navbar bg-primary flex-row-reverse dark:bg-base-100 lg:px-20 lg:flex-row">
        <div className="navbar-start flex-row-reverse justify-between w-full lg:justify-normal lg:flex-row lg:max-w-sm">
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
              <div className="absolute -top-6 w-16 h-16 lg:w-20 lg:h-20">
                <Image src="/img/uogp.png" alt="logo" fill />
              </div>
            </div>
          </div>
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
            Laboratorium FST
          </div> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menus &&
              menus.map((item: MenuTypes, index) => {
                const href = item.href;
                return item.subMenus ? (
                  SubMenu(item?.subMenus, item.name, index, item.slug, pathname)
                ) : (
                  <li key={index}>
                    <Link
                      className={`${
                        pathname === href ? "border-b border-accent" : ""
                      } whitespace-nowrap`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex lg:max-w-sm">
          <ThemeChange />
        </div>
      </div>
      <div className="absolute left-0 right-0">{/* <Mobile /> */}</div>
    </>
  );
};

export default Navbar;