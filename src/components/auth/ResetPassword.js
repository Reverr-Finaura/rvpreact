import { useNavigate } from "react-router-dom";
import "./index.css";

const EmailVerification = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className="main">
      <h4>Email successfully verified</h4>
      <h4>Redirecting in 3 seconds...</h4>
    </div>
  );
};

export default EmailVerification;
