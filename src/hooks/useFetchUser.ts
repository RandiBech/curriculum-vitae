import { useQuery } from "react-query";
import { UserClient } from "../clients/UserClient";

export const useFetchUser = (userId: string) => {
  const client = new UserClient();

  const getUser = async () => {
    return await client.getUser(userId);
  };

  return useQuery(["query-key"], getUser, {
    onError: (error: Error) => {
      console.log("Error fetching user: ", error);
    },
  });
};
