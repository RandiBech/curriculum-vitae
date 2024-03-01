import React, { useEffect, useState } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import BasePageComponent from "../BasePageComponent";
import UserProfileHeader from "./UserProfileHeader";
import { Box, Typography, Stack, SvgIcon, Tabs, Tab } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import UserProfile from "./UserProfile";
import UserProfileEducation from "./UserProfileEducation";

type TabItem = {
  label: string;
  key: string;
};

type UserProfilePageProps = {
  children: React.ReactNode;
};

const UserProfilePage: React.FC<UserProfilePageProps> = (props) => {
  const { children } = props;
  const { data: user } = useFetchUser("user1");
  const [tabValue, setTabValue] = useState<string>("");
  const history = useNavigate();

  useEffect(() => {
    if (tabValue === "") {
      setTabValue("profile");
      history("/user/profile");
    }
  });

  const tabConfig: TabItem[] = [
    {
      label: "Profile",
      key: "profile",
    },
    {
      label: "Education",
      key: "education",
    },
  ];

  const onTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setTabValue(value);
    history(`/user/${value}`);
  };

  if (!user) return null;

  return (
    <BasePageComponent
      header={<UserProfileHeader user={user} />}
      tabs={
        <>
          <Tabs value={tabValue} onChange={onTabChange}>
            {tabConfig.map((tab) => (
              <Tab key={tab.key} label={tab.label} value={tab.key} />
            ))}
          </Tabs>
          <Routes>
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/education" element={<UserProfileEducation />} />
          </Routes>
        </>
      }
    >
      {children}
    </BasePageComponent>
  );
};

export default UserProfilePage;
