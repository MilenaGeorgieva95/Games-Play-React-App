import { useContext, useEffect, useRef } from "react";
import { request } from "../../utils/requester";
import { UserContext } from "../contexts/UserContext";
const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const abortRef = useRef(new AbortController());

  const login = async (email, password) => {
    const loginData = await request.post(
      `${baseUrl}/login`,
      {
        email,
        password,
      },
      { signal: abortRef.current.signal }
    );
    return loginData;
  };

  useEffect(() => {
    const abortController = abortRef.current;
    return () => abortController.abort();
  });

  return {
    login,
  };
};

export const useRegister = () => {
  const abortRef = useRef(new AbortController());

  const register = async (username, email, password) => {
    const registerData = await request.post(
      `${baseUrl}/register`,
      { username, email, password },
      { signal: abortRef.current.signal }
    );
    return registerData;
  };

  useEffect(() => {
    const abortController = abortRef.current;
    return () => abortController.abort();
  });

  return {
    register,
  };
};

export const useLogout = (token) => {
  const { accessToken } = useContext(UserContext);
  const logout = () => request.get(`${baseUrl}/logout`, "", "", accessToken);
  return logout;
};
