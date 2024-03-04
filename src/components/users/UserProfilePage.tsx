import React, { useEffect, useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import BasePageComponent from "../BasePageComponent";
import UserProfileHeader from "./UserProfileHeader";
import { Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserProfileProvider } from "./UserProfileProvider";
import { Paths } from "../../Paths";
import LoadingScreen from "../utils/LoadingScreen";

type TabItem = {
  label: string;
  key: string;
};

type UserProfilePageProps = {
  children: React.ReactNode;
};

const UserProfilePage: React.FC<UserProfilePageProps> = (props) => {
  const { children } = props;
  const { data: user, status: userStatus } = useFetchUser("user1");
  const history = useNavigate();
  const [tabValue, setTabValue] = useState<string>(window.location.pathname);

  useEffect(() => {
    if (window.location.pathname === "/user") {
      setTabValue(Paths.UserProfile);
      history(Paths.UserProfile);
    }
  }, [history, tabValue]);

  const tabConfig: TabItem[] = [
    {
      label: "Profile",
      key: Paths.UserProfile,
    },
    {
      label: "Education",
      key: Paths.UserEducation,
    },
    {
      label: "Work experience",
      key: Paths.UserWorkExperience,
    },
  ];

  const onTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setTabValue(value);
    history(value);
  };

  if (userStatus === "loading") {
    return <LoadingScreen />;
  }

  console.log(userStatus, user);
  if (!user) return null;

  return (
    <UserProfileProvider user={user}>
      <BasePageComponent
        header={<UserProfileHeader user={user} />}
        tabs={
          <>
            <Tabs value={tabValue} onChange={onTabChange}>
              {tabConfig.map((tab) => (
                <Tab key={tab.key} label={tab.label} value={tab.key} />
              ))}
            </Tabs>
          </>
        }
      >
        {children}
      </BasePageComponent>
    </UserProfileProvider>
  );
};

export default UserProfilePage;
