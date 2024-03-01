import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UsersPage from "./components/users/UsersPage";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./components/users/UserProfile";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<UsersPage />} />
        </Routes>
        <UsersPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
