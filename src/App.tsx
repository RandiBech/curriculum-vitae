import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersPage from './components/users/UsersPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './Navbar';
import { Route,Routes } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();
  return (
<QueryClientProvider client={queryClient}>
  <NavBar/>
    <div className="App">
    <Routes>        
      <Route path="/"  element={<UsersPage/>} />
      <Route path="/users"  element={<UsersPage />}/>
    </Routes>
      <UsersPage/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
