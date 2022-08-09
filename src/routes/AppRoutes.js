import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SingUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import OtpVerification from "../pages/auth/OtpVerification";
import { LandingPage } from "../pages/landingPage/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset" element={<ResetPassword />} />
      <Route path="/otp-verify" element={<OtpVerification />} />
      <Route path="/home" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
