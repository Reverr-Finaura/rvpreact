import {
  createUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/firebase";

import { useState } from "react";

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
    createUserWithEmailPassword(email, password).then((data) =>
      console.log(data)
    );
  };

  const onLoginWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => console.log(data));
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => onEmailEnterHandler(e.target.value)}
          placeholder="Enter Your Email"
        />
        <input
          onChange={(e) => onPasswordEnterHandler(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button onClick={() => onCreateAccountClickHandler()}>
          Create Accout
        </button>

        <h1>Or</h1>

        <button onClick={() => onLoginWithGoogleClickHandler()}>
          SignUpWithGoogle
        </button>
      </div>
    </>
  );
};

export default SignUp;
