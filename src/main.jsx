
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import RootLayout from './Components/Layouts/RootLayout';
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import DashboardPage from './pages/DashboardPage';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Route>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
);


