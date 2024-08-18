/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api katalog
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  jenis?: string;
  tahun?: string | number;
  orderBy?: string;
  sort?: string;
};

type Store = {
  dtKatalog: any;
  setKatalog: ({ page, limit, orderBy, sort, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKatalogAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKatalogReady: ({ search, jenis }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKatalogDetail: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setLapKatalog: ({ jenis, tahun }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKatalogApi = create(
  devtools<Store>((set, get) => ({
    dtKatalog: [],
    setKatalog: async ({ page = 1, limit = 10, orderBy, sort, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/katalog`,
          params: {
            limit,
            page,
            orderBy,
            sort,
            search,
          },
        });
        set((state) => ({ ...state, dtKatalog: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setKatalogAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/katalog/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtKatalog: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setKatalogReady: async ({ search, jenis }) => {
      try {
        const response = await api({
          method: "get",
          url: `/katalog/ready`,
          params: {
            search,
            jenis,
          },
        });
        set((state) => ({ ...state, dtKatalog: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setKatalogDetail: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/katalog/detail/${id}`,
        });
        set((state) => ({ ...state, dtKatalog: response.data?.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setLapKatalog: async ({ jenis, tahun }) => {
      try {
        const response = await api({
          method: "get",
          url: `/katalog/laporan`,
          params: {
            jenis,
            tahun,
          },
        });
        set((state) => ({ ...state, dtKatalog: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useKatalogApi;
