/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// store classUmum

type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtClassUmum: any;
  showClassUmum: any;
  setClassUmum: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowClassUmum: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
  removeData: (
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  updateData: (
    id: number | string,
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useClassUmum = create(
  devtools<Store>((set, get) => ({
    dtClassUmum: [],
    showClassUmum: [],
    setClassUmum: async ({ page = 1, limit = 10, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/classUmum`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtClassUmum: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    setShowClassUmum: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/classUmum/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showClassUmum: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/classUmum`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtClassUmum: {
            last_page: prevState.dtClassUmum.last_page,
            current_page: prevState.dtClassUmum.current_page,
            data: [res.data.data, ...prevState.dtClassUmum.data],
          },
        }));
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/classUmum/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtClassUmum: {
            last_page: prevState.dtClassUmum.last_page,
            current_page: prevState.dtClassUmum.current_page,
            data: prevState.dtClassUmum.data.filter(
              (item: any) => item.id !== id
            ),
          },
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "PUT",
          url: `/classUmum/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtClassUmum: {
            last_page: prevState.dtClassUmum.last_page,
            current_page: prevState.dtClassUmum.current_page,
            data: prevState.dtClassUmum.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
        }));
        return {
          status: "berhasil update",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useClassUmum;
