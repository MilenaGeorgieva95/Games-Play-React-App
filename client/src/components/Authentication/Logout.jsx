import { useContext } from "react";
import { useLogout } from "../api/authApi";
import { UserContext } from "../contexts/UserContext";

export default function Logout() {
  const userCtx = useContext(UserContext);

  const logout = useLogout(userCtx);
  logout().then((data) => console.log(data));
  return <></>;
}
