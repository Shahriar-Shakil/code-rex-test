import { USERS_API } from "@/config/api-endpoints";
import useSWR from "swr";

export function useUsers(
  pageSize: number = 10,
  skip: number = 0,
  searchTerm: string = ""
) {
  const { data, error } = useSWR(`${USERS_API}?limit=${pageSize}&skip=${skip}`);
  return {
    data: data?.users,
    limit: data?.limit,
    total: data?.total,
    skip: data?.skip,
    loading: !data && !error,
    error,
  };
}
