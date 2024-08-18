/** @format */
"use client";
import MenuTypes from "@/types/MenuTypes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const SubMenu = (
  menus: MenuTypes[],
  name: string,
  index: number,
  slug?: string,
  pathname?: string
) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownButtonRef = useRef<HTMLSpanElement | null>(null);
  const dropdownMenuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    // Close the dropdown when clicking outside of it
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownButtonRef.current &&
        dropdownMenuRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node) &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to toggle the dropdown
  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    if (isDropdownOpen) {
      dropdownMenuRef.current!.classList.remove("hidden");
    } else {
      dropdownMenuRef.current!.classList.add("hidden");
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname, slug]);

  return (
    <li className="relative inline-block -mx-4" key={index}>
      <span
        ref={dropdownButtonRef}
        className={`inline-flex w-full`}
        onClick={toggleDropdown}
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <ul
        ref={dropdownMenuRef}
        className="origin-top absolute right-0 left-4 mt-2 bg-base-100 w-fit hidden"
      >
        {menus &&
          menus.map((item: MenuTypes, index) => {
            const { href } = item;
            return (
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
    </li>
  );
};

export default SubMenu;
