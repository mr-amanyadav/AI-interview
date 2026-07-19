import authApi from "./auth";

export const registerUser = async (data) => {
  const res = await authApi.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await authApi.post("/auth/login", data);
  return res.data;
};