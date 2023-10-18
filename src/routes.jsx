import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainPage";
import { AuthPage } from "./pages/authPage";
import Account from "./pages/account";
import { ProtectedRoute } from "./components/protected-route";
import { NotFound } from "./pages/notFound/404";

const AppRoutes = ({ user }) => {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
