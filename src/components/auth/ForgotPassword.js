import { sendPasswordResetMail } from "../../firebase/firebase";
import { useState } from "react";

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
