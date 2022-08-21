import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/signin/SignIn";
import SignUp from "../pages/auth/signup/SingUp";
import ForgotPassword from "../pages/auth/forgotpassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetpassword/ResetPassword";
import OtpVerification from "../pages/auth/otpverification/OtpVerification";
import Deals from "../pages/home/deals/Deals";
import LandingPageInvestors from "../pages/landingPage/LandingPageInvestors";
import Portfolio from "../pages/home/portfolio/Portfolio";
import Profile from "../pages/home/profile/Profile";
import Dashboard from "../pages/home/dashboard/Dashboard";
import AboutDeal from "../pages/home/aboutdeal/AboutDeal";
import Faq from "../pages/home/faqs/Faq";
import OnePager from "../pages/home/onePager/OnePager";
import People from "../pages/home/people/People";
import DealTerm from "../pages/home/dealTerms/DealTerm";
import PitchDeck from "../pages/home/pitchDeck/PitchDeck";
import FinancialProjection from "../pages/home/financialProjection/FinancialProjection";
import Analytics from "../pages/home/analytics/Analytics";
import ProtectedRoute from "./ProtectedRoute";
import LandingPageStartups from "../pages/landingPageInvestors/LandingPageStartups";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset" element={<ResetPassword />} />
      <Route path="/otp-verify" element={<OtpVerification />} />
      <Route path="/startups" element={<LandingPageStartups />} />
      <Route path="/investors" element={<LandingPageInvestors />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/deals"
        element={
          <ProtectedRoute>
            <Deals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio"
        element={
          <ProtectedRoute>
            <Portfolio />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about-deal"
        element={
          <ProtectedRoute>
            <AboutDeal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faqs"
        element={
          <ProtectedRoute>
            <Faq />
          </ProtectedRoute>
        }
      />
      <Route
        path="/one-pager"
        element={
          <ProtectedRoute>
            <OnePager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/people"
        element={
          <ProtectedRoute>
            <People />
          </ProtectedRoute>
        }
      />
      <Route
        path="/deal-terms"
        element={
          <ProtectedRoute>
            <DealTerm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pitch-deck"
        element={
          <ProtectedRoute>
            <PitchDeck />
          </ProtectedRoute>
        }
      />
      <Route
        path="/financial-projections"
        element={
          <ProtectedRoute>
            <FinancialProjection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
<<<<<<< HEAD
=======
      <Route path="/deals" element={<Deals />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about-deal" element={<AboutDeal />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/one-pager" element={<OnePager />} />
      <Route path="/people" element={<People />} />
      <Route path="/deal-terms" element={<DealTerm />} />
      <Route path="/pitch-deck" element={<PitchDeck />} />
      <Route path="/financial-projections" element={<FinancialProjection />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/investors" element={<LandingPageInvestors />} />
>>>>>>> ad396c7f98fecc8228324cc8a47ba5403145e058
    </Routes>
  );
};

export default AppRoutes;
