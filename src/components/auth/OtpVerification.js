import logo from "../../assets/vectors/logo.svg";
import "./OtpVerification.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../footer/Footer";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otpInput, setOtpInput] = useState("");
  const onOtpEnterHandler = (value) => {
    setOtpInput(value);
  };

  const onVerifyOtpClickHandler = () => {
    // Logic and state management for OTP verification
  };

  return (
    <>
      <div className="otp-verify__navbar">
        <img src={logo} alt="reverr-logo" className="otp-verify__logo" />
        <div className="otp-verify__title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="otp-verify__card-wrap">
        <div className="otp-verify__card">
          <div className="otp-verify__card-heading">OTP Verification</div>
          <input
            onChange={(e) => onOtpEnterHandler(e.target.value)}
            placeholder="Enter Your OTP"
            className="otp-verify__otp-input"
          />

          <button
            onClick={onVerifyOtpClickHandler}
            className="otp-verify__verify-otp"
          >
            Verify Email
          </button>
          <div className="otp-verify__login" onClick={() => navigate("/")}>
            Log in
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OtpVerification;
