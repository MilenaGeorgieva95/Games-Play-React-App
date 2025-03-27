import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router";

export default function AuthGuard({ children }) {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to={"/auth/login"} />;
  }
  return <>{children}</>;
}
