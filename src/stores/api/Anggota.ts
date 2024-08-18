/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api anggota
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtAnggota: any;
  setAnggota: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setAnggotaAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useAnggotaApi = create(
  devtools<Store>((set, get) => ({
    dtAnggota: [],
    setAnggota: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/anggota`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtAnggota: response.data }));
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
    setAnggotaAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/anggota/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtAnggota: response.data }));
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

export default useAnggotaApi;
