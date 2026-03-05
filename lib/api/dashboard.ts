import { mockServer } from "../mockServer";

export const getDashboardDataApi = async (token: string) => {
  return mockServer.getDashboardData(token);
};