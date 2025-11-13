import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  const token = response.data.token || response.data.access_token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
