import React from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import BasePageComponent from "../BasePageComponent";
import UserProfileHeader from "./UserProfileHeader";

const UserProfile: React.FC = () => {
  const { data: user } = useFetchUser("user1");
  if (!user) return null;

  return (
    <BasePageComponent header={<UserProfileHeader user={user} />}>
      heheheh
    </BasePageComponent>
  );
};

export default UserProfile;
