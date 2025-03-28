import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export default function GuestGuard() {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
}
