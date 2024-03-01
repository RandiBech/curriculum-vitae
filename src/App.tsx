import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UsersPage from "./components/users/UsersPage";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import UserProfilePage from "./components/users/UserProfilePage";
import UserProfile from "./components/users/UserProfile";
import UserProfileEducation from "./components/users/UserProfileEducation";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="App App-content">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route
            path="/user"
            element={<UserProfilePage children={<UserProfile />} />}
          />
          <Route
            path="/user/profile"
            element={<UserProfilePage children={<UserProfile />} />}
          />
          <Route
            path="/user/education"
            element={<UserProfilePage children={<UserProfileEducation />} />}
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
