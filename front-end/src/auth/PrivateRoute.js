import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useUser } from "./useUser";

export const PrivateRoutes = () => {
  const user = useUser();

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};
