import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import RootLayout from "./Components/Layouts/RootLayout";
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import { store } from "./apps/store.js";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<App />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
