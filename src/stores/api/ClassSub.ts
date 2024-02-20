/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api classSub
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtClassSub: any;
  setClassSub: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setClassSubAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useClassSubApi = create(
  devtools<Store>((set, get) => ({
    dtClassSub: [],
    setClassSub: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/classSub`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtClassSub: response.data }));
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
    setClassSubAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/classSub/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtClassSub: response.data }));
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

export default useClassSubApi;
