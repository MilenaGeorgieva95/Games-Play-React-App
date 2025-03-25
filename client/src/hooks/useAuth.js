import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";

export default function useAuth() {
  const { accessToken } = useContext(UserContext);
  return { accessToken };
}
