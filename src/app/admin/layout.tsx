/** @format */
"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import ThemeChange from "@/components/support/ThemeChange";
import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Spiner from "@/components/loading/Spiner";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  // pathname
  const pathname = usePathname();
  // route
  const route = useRouter();
  const { cekToken } = useLogin();
  const getCek = async () => {
    const res = await cekToken();
    if (res?.error) {
      // redirect to login
      route.push("/login");
    } else {
      const role = Cookies.get("role");
      if (role !== "admin") {
        route.push(`/${role}`);
      }
    }
    return res;
  };

  useEffect(() => {
    getCek();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const loadData = async () => {
    const cek = await getCek();
    console.log({ cek });
    if (!cek?.error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    console.log("pertama render");
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen h-screen justify-center items-center">
        <Spiner />
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex flex-col bg-base-100">
      <div className="flex h-16 w-full items-center justify-between">
        <div className="w-56">
          <h3 className="text-center">Menu</h3>
        </div>
        <div>Selamat Datang</div>
        <div className="w-10">
          <ThemeChange />
        </div>
      </div>
      <div className="flex w-screen h-full overflow-hidden">
        {/* navbar */}
        <div>
          <Sidebar />
        </div>
        {/* content */}
        <div className="bg-bg-perpus-1 bg-cover w-full h-full">
          <div className="w-full h-full bg-neutral-content/[0.4] backdrop-blur text-accent-content rounded-xl pt-6 px-6 overflow-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
