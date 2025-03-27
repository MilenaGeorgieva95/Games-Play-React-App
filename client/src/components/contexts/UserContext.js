import { createContext } from "react";
import usePersistedState from "../../hooks/usePersistedState";

export const UserContext = createContext({
  _id: "",
  email: "",
  username: "",
  accessToken: "",
  userLoginHandler: () => null,
  userLogoutHandler: () => null,
});

export function UserProvider({ children }) {
  const [authData, setAuthData] = usePersistedState("auth", {});

  const userLoginHandler = (user) => {
    setAuthData(user);
  };
  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
