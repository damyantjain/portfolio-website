import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedComponent = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/blog/login" />;
  }
  try {
    const decodedToken = jwtDecode(token);
    if (decodedToken?.exp - Date.now() / 1000 <= 0) {
      return <Navigate to="/blog/login" />;
    }
  } catch (e) {
    console.log("Invalid token", e);
    localStorage.removeItem("token");
    return <Navigate to="/blog/login" />;
  }
  return children;
};
export default ProtectedComponent;
