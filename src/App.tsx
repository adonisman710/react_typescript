import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import DashboardPage from './Pages/DashboardPage';
import ClientsPage from './Pages/ClientsPage';
import ClientDetailPage from './Pages/ClientDetailPage';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/clients" element={<ClientsPage/>}/>
        <Route path="/clients/client/:cId" element={<ClientDetailPage/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  );
}

export default App;
