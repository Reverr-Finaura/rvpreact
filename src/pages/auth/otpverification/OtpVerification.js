import logo from "../../../assets/vectors/logo.svg";
import "./OtpVerification.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { delUser } from "../../../redux/auth/newUserSlice";
import { sendAccountHasBeenCreatedMail } from "../../../emailJs/emailJs";
import {login} from "../../../redux/user/userSlice"
const OtpVerification = () => {
  const navigate = useNavigate();
  const [otpInput, setOtpInput] = useState("");
  const onOtpEnterHandler = (value) => {
    setOtpInput(value);
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.newUser.newUser);
  const onVerifyOtpClickHandler = async () => {
    if (user) {
      const { otp, firstName, lastName, email } = user;
      const name = `${firstName} ${lastName}`;
      if (otp === otpInput) {
        dispatch(login(user))
        sendAccountHasBeenCreatedMail(name, email);
        toast.success(
          "Your account created successfully ! please login to continue !",
          setTimeout(() => {
            navigate("/");
            dispatch(delUser());
          }, 3000)
        );
      } else {
        toast.error("Please enter a valid OTP!", { autoClose: 1500 });
      }
    } else {
      toast.error("No OTP sent yet!", { autoClose: 1500 });
    }
  };

  return (
    <>
      <div className="otp-verify__navbar">
        <img src={logo} alt="reverr-logo" className="otp-verify__logo" />
        <div className="otp-verify__title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="otp-verify__card-wrap">
        {user && (
          <h3 style={{ margin: 0, width: "25%" }}>
            An otp has been sent to your mail please check and verify!
          </h3>
        )}
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  );
};

export default OtpVerification;
