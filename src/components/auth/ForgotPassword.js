import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { confirmPaswdReset } from "../../firebase/firebase";
const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const forgotPasswordHandler = async () => {
    const oobCode = searchParams.get("oobCode");
    confirmPaswdReset(oobCode, newPassword)
      .then(() => alert("Password Reset Successfully!"))
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <input onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={forgotPasswordHandler}>Set Password</button>
    </>
  );
};

export default ForgotPassword;
