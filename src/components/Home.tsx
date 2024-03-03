import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import BasePageComponent from "./BasePageComponent";

const Home: React.FC = () => {
  const { data: users } = useFetchUsers();

  if (!users) return null;

  return <BasePageComponent>Home page</BasePageComponent>;
};

export default Home;
