import "./Navbar.css";
import logo from "../../assets/vectors/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loginButtonClickHandler = () => {
    navigate("/");
  };

  const signupButtonClickHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <div className="reverr">
        <img src={logo} alt="reverr-logo" className="logo" />
        <div className="title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="links">
        <span className="link">Lorem Ipsum</span>
        <span className="link">Lorem Ipsum</span>
        <span className="link">Lorem Ipsum</span>
        <button className="login" onClick={loginButtonClickHandler}>
          Log in
        </button>
        <button className="signup" onClick={signupButtonClickHandler}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
