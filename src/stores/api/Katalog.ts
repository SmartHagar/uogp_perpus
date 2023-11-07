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
};

type Store = {
  dtKatalog: any;
  setKatalog: ({ page, limit, search }: Props) => Promise<{
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
};

const useKatalogApi = create(
  devtools<Store>((set, get) => ({
    dtKatalog: [],
    setKatalog: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/katalog`,
          params: {
            limit,
            page,
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
  }))
);

export default useKatalogApi;
