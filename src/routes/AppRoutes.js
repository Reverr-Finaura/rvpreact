import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SingUp";
import ResetPassword from "../components/auth/UserActions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset" element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
