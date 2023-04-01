import { getUsersPostApi, USER_API } from "@/config/api-endpoints";
import useSWR from "swr";

export function useUserPosts(id: string | number) {
  const { data, error } = useSWR(id ? `${getUsersPostApi(id)}` : null);
  return {
    data: data?.posts,
    loading: !data && !error,
    error,
  };
}
