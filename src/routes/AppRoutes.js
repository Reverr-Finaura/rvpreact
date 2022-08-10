import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/signin/SignIn";
import SignUp from "../pages/auth/signup/SingUp";
import ForgotPassword from "../pages/auth/forgotpassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetpassword/ResetPassword";
import OtpVerification from "../pages/auth/otpverification/OtpVerification";
import Deals from "../pages/home/deals/Deals";
import LandingPage from "../pages/landingPage/LandingPage";
import Portfolio from "../pages/home/portfolio/Portfolio";
import Profile from "../pages/home/profile/Profile";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset" element={<ResetPassword />} />
      <Route path="/otp-verify" element={<OtpVerification />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
