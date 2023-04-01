import { USERS_API } from "@/config/api-endpoints";
import useSWR from "swr";

export function useUsersSearch(searchTerm: string = "") {
  const { data, error } = useSWR(`${USERS_API}/search?q=${searchTerm}`);
  return {
    data: data?.users,
    loading: !data && !error,
    error,
  };
}
