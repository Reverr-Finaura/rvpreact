import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  console.log(user.user);
  if (!user.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
