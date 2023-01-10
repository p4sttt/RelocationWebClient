import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../store";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const token = useAuth(state => state.token);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
