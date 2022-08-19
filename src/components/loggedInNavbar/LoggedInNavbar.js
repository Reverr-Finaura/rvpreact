import "./LoggedInNavbar.css";
import logo from "../../assets/vectors/Reverr Black 2.png";
import { useNavigate } from "react-router-dom";
import { Bell, QuestionCircle, Person } from "react-bootstrap-icons";

const LogedInNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="loged-in__navbar">
      <div className="loged-in__reverr">
        <img src={logo} alt="reverr-logo" className="loged-in__logo" />
        <div className="loged-in__title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="loged-in__links">
        <span className="loged-in__link">
          <Bell />
        </span>
        <span className="loged-in__link">
          <QuestionCircle />
        </span>
        <span className="loged-in__link" onClick={() => navigate("/profile")}>
          <Person />
        </span>
      </div>
    </div>
  );
};

export default LogedInNavbar;
