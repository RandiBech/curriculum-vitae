import { User } from "../../clients/UserClient";
import React, { createContext } from "react";

export type UserProfileContextType = {
  user: User;
};

type UserProfileProviderProps = {
  user: User;
  children: React.ReactNode;
};

export const UserProfileContext = createContext<UserProfileContextType | null>(
  null
);
// export const useUserProfileContext = () => {
//   if (UserProfileContext === null) {
//     console.log("No UserProfileContext!");
//     return undefined;
//   }

//   return UserProfileContext.Consumer;
// };

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
