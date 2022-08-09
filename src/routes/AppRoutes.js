import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import SignIn from "../pages/auth/signin/SignIn";
import SignUp from "../pages/auth/signup/SingUp";
import ForgotPassword from "../pages/auth/forgotpassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetpassword/ResetPassword";
import OtpVerification from "../pages/auth/otpverification/OtpVerification";
import Deals from "../pages/home/deals/Deals";
=======
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SingUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import OtpVerification from "../pages/auth/OtpVerification";
import { LandingPage } from "../pages/landingPage/LandingPage";

>>>>>>> f440dddbcebdf2b2d70c63a4ddd01f070b0e61eb
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset" element={<ResetPassword />} />
      <Route path="/otp-verify" element={<OtpVerification />} />
<<<<<<< HEAD
      <Route path="/deals" element={<Deals />} />
=======
      <Route path="/home" element={<LandingPage />} />
>>>>>>> f440dddbcebdf2b2d70c63a4ddd01f070b0e61eb
    </Routes>
  );
};

export default AppRoutes;
