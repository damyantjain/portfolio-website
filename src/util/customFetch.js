import { getAccessToken, isTokenExpired } from "./tokenService";
import { refreshAccessToken } from "./commonAPI";

const customFetch = async (url, options = {}) => {
  var token = getAccessToken();
  if (isTokenExpired(token)) {
    token = refreshAccessToken();
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
