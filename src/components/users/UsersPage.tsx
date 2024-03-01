import React from "react";
import { useFetchUsers } from "../../hooks/useFetchUsers";


const UsersPage: React.FC = () => {
const {data: users} = useFetchUsers();

if(!users) return null;

return (
<>
{users.name}
</>
)


}

export default UsersPage;