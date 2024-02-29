import { useQuery } from "react-query";
import { UserClient } from "../clients/UserClient";

export const useFetchUsers = () => {
    const client = new UserClient();

    const getUsers = async () => {
        return await client.getAllUsers();
    
    }
    console.log('hit');

    return useQuery(['query-key'], getUsers, {
        onError: (error: Error) => {
            console.log('Error fetching all users: ', error);
        }
    });
}