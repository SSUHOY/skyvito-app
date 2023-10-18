import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainPage";
import { AuthPage } from "./pages/authPage";

const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;
