import { sendPasswordResetMail } from "../../firebase/firebase";
import { useState } from "react";
import "./index.css";

const ForgotPassword = () => {
  const [email, setemail] = useState("");

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const onSendEmailClickHandler = () => {
    sendPasswordResetMail(email)
      .then(() => {
        alert("Email sent successfully");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="main">
        <input
          onChange={(e) => onEmailEnterHandler(e.target.value)}
          placeholder="Enter Your Email"
        />
        <br />

        <br />
        <button onClick={onSendEmailClickHandler}>Send Email</button>
      </div>
    </>
  );
};

export default ForgotPassword;
