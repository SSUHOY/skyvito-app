import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainPage";
import { AuthPage } from "./pages/authPage";
import Profile from "./pages/profile";
import { ProtectedRoute } from "./components/protected-route";
import { NotFound } from "./pages/notFound/404";
import SellerProfile from "./pages/seller-profile";
import { AdvPage } from "./pages/advPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/adv-page/:id" element={<AdvPage />} />
      <Route path="/seller-account/:id" element={<SellerProfile />} />
      <Route element={<ProtectedRoute/>}>
        <Route path="/account" element={<Profile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
