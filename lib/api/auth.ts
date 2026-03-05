import { mockServer } from "../mockServer";

export const loginApi = async (email: string, password: string) => {
  return mockServer.login(email, password);
};