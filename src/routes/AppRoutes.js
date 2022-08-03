import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SingUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/password-reset" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
