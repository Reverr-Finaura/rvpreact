import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const uid = JSON.parse(localStorage.getItem("uid"));
  console.log(uid);
  if (!uid) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
