import { jwtDecode } from "jwt-decode";

export const getAccessToken = () => localStorage.getItem("accessToken");
export const setAccessToken = (token) =>
  localStorage.setItem("accessToken", token);
export const removeAccessToken = () => localStorage.removeItem("accessToken");

export const isTokenExpired = (token) => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  return Date.now() >= exp * 1000;
};
