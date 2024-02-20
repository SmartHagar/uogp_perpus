/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api classUmum
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtClassUmum: any;
  setClassUmum: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setClassUmumAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useClassUmumApi = create(
  devtools<Store>((set, get) => ({
    dtClassUmum: [],
    setClassUmum: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/classUmum`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtClassUmum: response.data }));
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
    setClassUmumAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/classUmum/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtClassUmum: response.data }));
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

export default useClassUmumApi;
