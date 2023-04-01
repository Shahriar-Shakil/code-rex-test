import { USER_API } from "@/config/api-endpoints";
import useSWR from "swr";

export function useUser(id: string | number) {
  const { data, error } = useSWR(id ? `${USER_API}/${id}` : null);
  return {
    data: data,
    loading: !data && !error,
    error,
  };
}
