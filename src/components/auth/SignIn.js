import { signIn, signInWithGoogle } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../Global.css";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const onSignInClickHandler = async () => {
    signIn(email, password).then((data) => console.log(data));
  };

  const onLoginWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => console.log(data));
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
        <button onClick={onSignInClickHandler}>Sign In</button>

        <h1>Or</h1>

        <button onClick={onLoginWithGoogleClickHandler}>
          SignInWithGoogle
        </button>

        <h1>----------</h1>

        <div>
          Don't have an account? <Link to="/signup">Create One</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
