import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainPage";
import { AuthPage } from "./pages/authPage";
import Profile from "./pages/profile";
import { ProtectedRoute } from "./components/protected-route";
import { NotFound } from "./pages/notFound/404";
import SellerProfile from "./pages/seller-profile";
import { AdvPage } from "./pages/advPage";

const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/adv-page" element={<AdvPage />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/account" element={<Profile />} />
        <Route path="/seller-account" element={<SellerProfile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
