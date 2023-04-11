import useSRW from "swr";

import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSRW("/api/users", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
