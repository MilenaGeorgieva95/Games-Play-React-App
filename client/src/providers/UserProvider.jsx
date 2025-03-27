import usePersistedState from "../hooks/usePersistedState";
import { UserContext } from "../components/contexts/UserContext";

export default function UserProvider({ children }) {
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
