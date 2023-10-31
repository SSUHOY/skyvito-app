import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  if (!localStorage.getItem('access_token')) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};
