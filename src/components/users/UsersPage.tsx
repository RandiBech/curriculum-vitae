import React from "react";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import BasePageComponent from "../BasePageComponent";

const UsersPage: React.FC = () => {
  const { data: users } = useFetchUsers();

  if (!users) return null;

  return <BasePageComponent>gggg</BasePageComponent>;
};

export default UsersPage;
