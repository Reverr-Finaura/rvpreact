import { sendPasswordResetMail } from "../../firebase/firebase";
import { useState } from "react";
import logo from "../../assets/vectors/logo.svg";
import "./ForgotPassword.css";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const onSendEmailClickHandler = () => {
    sendPasswordResetMail(email)
      .then(() => {
        toast("✅ Email sent successfully");
        console.log("sent");
      })
      .catch((err) => toast(err.message));
  };

  return (
    <>
      <div className="forgot-password__navbar">
        <img src={logo} alt="reverr-logo" className="forgot-password__logo" />
        <div className="forgot-password__title">REVERR VENTURE PARTNERS</div>
      </div>

      <div className="forgot-password__card-wrap">
        <div className="forgot-password__card">
          <div className="forgot-password__card-heading">Forgot Password</div>
          <input
            onChange={(e) => onEmailEnterHandler(e.target.value)}
            placeholder="Enter Your Email"
            className="forgot-password__email-input"
          />

          <button
            onClick={onSendEmailClickHandler}
            className="forgot-password__send-email"
          >
            Send Email
          </button>
          <div className="forgot-password__login" onClick={() => navigate("/")}>
            Log in
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  );
};

export default ForgotPassword;
