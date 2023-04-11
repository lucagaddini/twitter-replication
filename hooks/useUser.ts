import useSRW from "swr";

import fetcher from "@/libs/fetcher";

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSRW(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
