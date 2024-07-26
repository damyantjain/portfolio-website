import { jwtDecode } from "jwt-decode";

export const getAccessToken = () => localStorage.getItem("accessToken");
export const setAccessToken = (token) =>
  localStorage.setItem("accessToken", token);
export const removeAccessToken = () => localStorage.removeItem("accessToken");
export const getRefreshToken = () =>
  document.cookie.replace(
    /(?:(?:^|.*;\s*)refreshToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

export const isTokenExpired = (token) => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  return Date.now() >= exp * 1000;
};
