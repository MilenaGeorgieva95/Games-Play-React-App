import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";

export default function useAuth() {
  const {
    _id,
    email,
    username,
    accessToken,
    userLoginHandler,
    userLogoutHandler,
  } = useContext(UserContext);
  const isAuth = !!accessToken;
  return {
    _id,
    email,
    username,
    accessToken,
    userLoginHandler,
    userLogoutHandler,
    isAuth,
  };
}
