import { useLogout } from "../api/authApi";
import { Navigate } from "react-router";

export default function Logout() {
  const { isLoggedOut } = useLogout();

  return (
    <>
      <h1>Logout page</h1>
      {isLoggedOut ? <Navigate to="/" /> : null}
    </>
  );
}
