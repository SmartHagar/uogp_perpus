/** @format */

import { BASE_URL } from "@/services/baseURL";

export default async function getAlumni({
  prodi_id,
  search,
  page,
  limit = 12,
  orderBy,
  sort,
}: any) {
  const res = await fetch(
    `${BASE_URL}/api/alumni?prodi_id=${prodi_id}&search=${search}&page=${page}&limit=${limit}&orderBy=${orderBy}&sort=${sort}`,
    {
      next: { revalidate: 1000 },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getAlumniAll({ prodi_id, search }: any) {
  const res = await fetch(
    `${BASE_URL}/api/alumni/all?prodi_id=${prodi_id}&search=${search}`,
    {
      next: { revalidate: 1000 },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}
