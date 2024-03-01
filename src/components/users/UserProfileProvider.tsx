import { User } from "../../clients/UserClient";
import React, { createContext } from "react";

type UserProfileContextProps = {
  user: User;
};

type UserProfileProviderProps = {
  user: User;
  children: React.ReactNode;
};

export const UserProfileContext = createContext<UserProfileContextProps | null>(
  null
);
export const useUserProfileContext = () => {
  if (!UserProfileContext) {
    console.log("No UserProfileContext!");
    return null;
  }

  return UserProfileContext.Consumer;
};

export const UserProfileProvider: React.FC<UserProfileProviderProps> = (
  props
) => {
  const { user, children } = props;
  return (
    <UserProfileContext.Provider value={{ user: user }}>
      {children}
    </UserProfileContext.Provider>
  );
};
