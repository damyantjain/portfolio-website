import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getAccessToken, isTokenExpired } from "../util/tokenService";
import { useEffect, useState } from "react";
import { refreshAccessToken } from "../util/commonAPI";

const ProtectedComponent = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    let token = getAccessToken();
    if (isTokenExpired(token)) {
      token = await refreshAccessToken();
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
    }
    setIsAuthenticated(true);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/blog/login" />;
};
export default ProtectedComponent;
