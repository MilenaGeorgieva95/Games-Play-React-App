import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard() {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to={"/auth/login"} />;
  }
  return <Outlet />;
}
