import { confirmPaswdReset } from "../../firebase/firebase";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

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
      <div
        className="main"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "cen",
        }}
      >
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
