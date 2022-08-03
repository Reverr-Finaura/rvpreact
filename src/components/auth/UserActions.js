import { confirmPaswdReset } from "../../firebase/firebase";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./index.css";

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
      })
      .catch((err) => console.log(err.message));

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="main">
        <br />
        <input
          onChange={(e) => onPasswordEnterHandler(e.target.value)}
          type="password"
          placeholder="Enter your new Password"
        />
        <br />
        <button onClick={onResetPasswordClickHandler}>Reset Password</button>
      </div>
    </>
  );
};

export default ResetPassword;
