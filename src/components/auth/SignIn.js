import { signIn, signInWithGoogle } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";
import logo from "../../assets/vectors/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import google from "../../assets/vectors/google.svg";
import linkedin from "../../assets/vectors/linkedin.svg";
import twitter from "../../assets/vectors/twitter.svg";
import Footer from "../footer/Footer";
import ellipse3 from "../../assets/img/ellipse3.png";
import ellipse4 from "../../assets/img/ellipse4.png";
import ellipse5 from "../../assets/img/ellipse5.png";
import ellipse6 from "../../assets/img/ellipse6.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const onSignInClickHandler = async () => {
    signIn(email, password).then((data) => console.log(data));
  };

  const onSignInWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => console.log(data));
  };

  return (
    <>
      <div className="navbar">
        <div className="reverr">
          <img src={logo} alt="reverr-logo" className="logo" />
          <div className="title">REVERR VENTURE PARTNERS</div>
        </div>
        <div className="links">
          <button
            className="no-account"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Don't have an account?
          </button>
          <button className="get-started" onClick={() => {}}>
            Get started
          </button>
        </div>
      </div>
      <div className="main">
        <div className="login-left">
          <div className="welcome-heading">Welcome !</div>
          <div className="login-to-account">Log in to your account</div>

          <div className="login-card">
            <div className="label">Your Email</div>
            <input
              onChange={(e) => onEmailEnterHandler(e.target.value)}
              placeholder="Enter Your Email"
              className="email__input-box"
            />
            <div className="label">You Password</div>
            <div>
              <input
                onChange={(e) => onPasswordEnterHandler(e.target.value)}
                placeholder="Enter Your Password"
                className="password__input-box"
                type={showPassword ? "text" : "password"}
                style={{ marginRight: "0", borderRadius: "4px 0px 0px 4px" }}
              />
              <button
                className="show-password"
                style={{ borderRadius: "0px 4px 4px 0px" }}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <BiShow size={18} /> : <BiHide size={18} />}
              </button>
            </div>
            <span
              className="forgot-password"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </span>
            <div
              style={{ textAlign: "center", color: "white", marginTop: "2rem" }}
            >
              Or Log In with
            </div>
            <div className="social-login-icons">
              <img
                src={google}
                alt="google"
                onClick={onSignInWithGoogleClickHandler}
                width="40px"
              />
              <img src={linkedin} alt="linkedin" width="50px" />
              <img src={twitter} alt="twitter" width="50px" />
            </div>
            <button className="login-button" onClick={onSignInClickHandler}>
              Log in
            </button>
          </div>
        </div>
        <div className="login-right">
          <img src={ellipse3} alt="handshake" className="ellipse3" />
          <img src={ellipse4} alt="hand" className="ellipse4" />
          <br />
          <img src={ellipse6} alt="man2" className="ellipse6" />
          <img src={ellipse5} alt="man" className="ellipse5" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
