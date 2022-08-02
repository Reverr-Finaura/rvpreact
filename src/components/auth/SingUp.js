import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailPassword,
  signInWithGoogle,
  addUserInDatabase,
  checkIfUserExist,
} from "../../firebase/firebase";

import { Link } from "react-router-dom";
import Card from "./AuthCard";
import { useEffect, useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const isValidate = () => {
    if (!email.includes("@gmail.com")) {
      setError("*Please Enter A Valid Email");
    }
    if (password !== confirmPassword) {
      setError("*Password Doesn't Matched");
    }
    return true;
  };

  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const onConfirmPasswordEnterHandler = (value) => {
    setconfirmPassword(value);
  };

  const setUserInLocalStorage = (userInfo) => {
    const {
      user: { uid, email, picture, name, accessToken },
    } = userInfo;
    const userData = { uid, email, name, picture, accessToken };
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const onCreateAccountClickHandler = async () => {
    const validate = isValidate();
    if (validate) {
      createUserWithEmailPassword(email, password).then((data) => {
        setUserInLocalStorage(data);
        addUserInDatabase(data.user.uid, {
          email: data.user.email,
          auth_provider: "email",
        });
        navigate("/dashboard");
      });
    }
  };

  const onLoginWithGoogleClickHandler = async () => {
    signInWithGoogle().then(async (data) => {
      const doesExist = await checkIfUserExist(data.user.uid);
      const userData = {
        user: {
          uid: data.user.uid,
          email: data.user.email,
          name: data.user.displayName,
          picture: data.user.photoURL,
          auth_provider: "google",
          accessToken: data.user.accessToken,
        },
      };

      setUserInLocalStorage(userData);
      if (!doesExist) {
        addUserInDatabase(data.user.uid, { ...userData.user });
        return navigate("/dashboard");
      }

      return navigate("/dashboard");
    });
  };

  return (
    <div className=" background vh100 flex  justifyContent flexDirection alignItems">
      {error.length ? <h4 style={{ color: " #FFA07A" }}>{error}</h4> : ""}
      <Card
        onConfirmPasswordEnterHandler={onConfirmPasswordEnterHandler}
        email={email}
        onPasswordEnterHandler={onPasswordEnterHandler}
        onEmailEnterHandler={onEmailEnterHandler}
        onLoginWithGoogleClickHandler={onLoginWithGoogleClickHandler}
        OnclikcHandler={onCreateAccountClickHandler}
        BtnText="Sign Up"
        googleBtnText="Google SignUp"
        thirdField={true}
      />
      <h4>
        Already have an account? <Link to="/signin">SignIn</Link>
      </h4>
    </div>
  );
};

export default SignUp;
