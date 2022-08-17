import {
  getAdminsFromDatabase,
  signIn,
  signInWithGoogle,
} from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SignIn.css";
import logo from "../../../assets/vectors/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import google from "../../../assets/img/login_icons/google.png";
import linkedin from "../../../assets/img/login_icons/linkedin.png";
import twitter from "../../../assets/img/login_icons/twitter.png";
import Footer from "../../../components/footer/Footer";
import ellipse3 from "../../../assets/img/ellipse3.png";
import ellipse4 from "../../../assets/img/ellipse4.png";
import ellipse5 from "../../../assets/img/ellipse5.png";
import ellipse6 from "../../../assets/img/ellipse6.png";

import ellipseLogin from "../../../assets/img/ellipse_login.png";

import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const getBlogs = async () => {
    const results = await getAdminsFromDatabase();
    if (results.length) {
      console.log(results);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const onSignInClickHandler = async () => {
    if (email && password) {
      signIn(email, password)
        .then((data) => {
          console.log(data);
          navigate("/home");
          window.scrollTo(0, 0);
        })
        .catch((err) =>
          toast.error(err.message, {
            autoClose: 2000,
          })
        );
    } else {
      toast.error("Please enter a valid email or password !", {
        autoClose: 2000,
      });
    }
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
        <img src={ellipseLogin} alt="ellipse" className="ellipse-login" />
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
              <div className="password-wrap">
                <input
                  onChange={(e) => onPasswordEnterHandler(e.target.value)}
                  placeholder="Enter Your Password"
                  className="password__input-box"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="show-password"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <BiShow size={20} /> : <BiHide size={20} />}
                </button>
              </div>
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
                height="34px"
                className="social-login-icons__image"
              />
              <img
                src={linkedin}
                alt="linkedin"
                width="50px"
                className="social-login-icons__image"
              />
              <img
                src={twitter}
                alt="twitter"
                width="50px"
                className="social-login-icons__image"
              />
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

export default SignIn;
