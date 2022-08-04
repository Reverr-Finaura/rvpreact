import {
  createUserWithEmailPassword,
  signInWithGoogle,
  addUserInDatabase,
} from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import { sendOtpToMail } from "../../emailJs/emailjs";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [confirmPassword, setconfirmPassword] = useState("");

  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  // const onConfirmPasswordEnterHandler = (value) => {
  //   setconfirmPassword(value);
  // };

  const onCreateAccountClickHandler = async () => {
    createUserWithEmailPassword(email, password).then((data) => {
      const { user } = data;

      // Adding User In Database

      addUserInDatabase(user.uid, {
        uid: user.uid,
        email: user.email,
        userType: "Investor",
      });
    });
    console.log("Email verification link sent");
  };

  const onLoginWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => console.log(data));
  };

  const sendEmailVerficationOtp = async () => {
    sendOtpToMail().then(() => console.log("Email Sent"));
  };

  return (
    <>
      <div className="main">
        <input
          onChange={(e) => onEmailEnterHandler(e.target.value)}
          placeholder="Enter Your Email"
        />
        <br />
        <input
          onChange={(e) => onPasswordEnterHandler(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
        />
        <br />
        <button onClick={sendEmailVerficationOtp}>
          Send Verification Mail
        </button>
        <br />
        <button onClick={onCreateAccountClickHandler}>Create Accout</button>
        <br />
        <h1>Or</h1>

        <button onClick={onLoginWithGoogleClickHandler}>
          SignUpWithGoogle
        </button>

        <h1>----------</h1>

        <div>
          Already have an account? <Link to="/">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
