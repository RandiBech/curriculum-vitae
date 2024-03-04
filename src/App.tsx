import React from "react";
import "./App.css";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import UserProfilePage from "./components/users/UserProfilePage";
import UserProfile from "./components/users/UserProfile";
import UserProfileEducation from "./components/users/UserProfileEducation";
import { Paths } from "./Paths";
import UserProfileWorkExperience from "./components/users/UserProfileWorkExperience";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="App App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={Paths.User}
            element={<UserProfilePage children={<UserProfile />} />}
          />
          <Route
            path={Paths.UserProfile}
            element={<UserProfilePage children={<UserProfile />} />}
          />
          <Route
            path={Paths.UserEducation}
            element={<UserProfilePage children={<UserProfileEducation />} />}
          />
          <Route
            path={Paths.UserWorkExperience}
            element={
              <UserProfilePage children={<UserProfileWorkExperience />} />
            }
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
