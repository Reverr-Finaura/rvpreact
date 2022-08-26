import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const uid = JSON.parse(localStorage.getItem("uid"));
  console.log(uid);
  if (uid) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default AuthRoute;
