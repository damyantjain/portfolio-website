import { getAccessToken, isTokenExpired } from "./tokenService";
import { refreshAccessToken } from "./commonAPI";

const customFetch = async (url, options = {}) => {
  const accessToken = getAccessToken();
  if (isTokenExpired(accessToken)) {
    const token = refreshAccessToken();
    if (!token) {
      window.location.href = "/login";
      return;
    }
  }
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return await fetch(url, options);
};

export default customFetch;
