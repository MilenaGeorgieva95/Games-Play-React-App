import { useLogout } from "../api/authApi";

export default function Logout() {
  const logout = useLogout();
  logout().then((data) => console.log(data));
  return <></>;
}
