import { request } from "../../utils/requester";
const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = async (email, password) => {
    const loginData = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return loginData;
  };

  return {
    login,
  };
};
