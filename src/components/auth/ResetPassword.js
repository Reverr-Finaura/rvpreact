import { confirmPaswdReset } from "../../firebase/firebase";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import logo from "../../assets/vectors/logo.svg";
import Footer from "../footer/Footer";
import "./ResetPassword.css";

const ResetPassword = ({ location }) => {
  const [password, setpassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const onResetPasswordClickHandler = () => {
    const oobCode = searchParams.get("oobCode");

    confirmPaswdReset(oobCode, password)
      .then(() => {
        console.log("Passoword reset successful, redirecting in 3 seconds...");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="reset-password__navbar">
        <img src={logo} alt="reverr-logo" className="reset-password__logo" />
        <div className="reset-password__title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="reset-password__card-wrap">
        <div className="reset-password__card">
          <div className="reset-password__card-heading">
            Enter your new Password
          </div>
          <input
            onChange={(e) => onPasswordEnterHandler(e.target.value)}
            type="password"
            placeholder="Enter your Password here"
            className="reset-password__password-input"
          />

          <button
            onClick={onResetPasswordClickHandler}
            className="reset-password__reset-button"
          >
            Reset Password
          </button>
          <div className="reset-password__login" onClick={() => navigate("/")}>
            Log in
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
