import { USERS_API } from "@/config/api-endpoints";
import useSWR from "swr";

export function useUsers() {
  const { data, error } = useSWR(USERS_API);
  return {
    data: data?.users,
    loading: !data && !error,
    error,
  };
}
