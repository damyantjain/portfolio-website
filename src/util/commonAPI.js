import { REFRESH_TOKEN } from "./constants";
import { setAccessToken, removeAccessToken } from "./tokenService";

export const refreshAccessToken = async () => {
  const response = await fetch(REFRESH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include', 
  });
  if (response.ok) {
    const data = await response.json();
    setAccessToken(data.accessToken);
    return data.accessToken;
  } else {
    removeAccessToken();
  }
  return null;
};
