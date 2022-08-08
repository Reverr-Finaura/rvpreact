import {
  createUserWithEmailPassword,
  signInWithGoogle,
  addUserInDatabase,
} from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/user/userSlice";
import "./SignUp.css";
import Navbar from "../navbar/Navbar";
import topImage from "../../assets/img/top-image.png";
import Footer from "../footer/Footer";
import { generateOtp } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/auth/newUserSlice";
import { sendOtpToMail } from "../../emailJs/emailjs";
import ellipseTop from "../../assets/img/ellipse_top.png";
import ellipseBottom from "../../assets/img/ellipse_bottom.png";
import OtpVerification from "./OtpVerification";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [personalDetailsTabActive, setPersonalDetailsTabActive] =
    useState(true);
  const [investmentDetailsTabActive, setInvestmentDetailsTabActive] =
    useState(false);
  const newUser = useSelector((state) => state.newUser);
  const navigate = useNavigate();
  // const onConfirmPasswordEnterHandler = (value) => {
  //   setconfirmPassword(value);
  // };

  const onCreateAccountClickHandler = async () => {
    const otp = generateOtp();
    const user = {
      firstName,
      lastName,
      email,
      password,
      gender,
      country,
      linkedInUrl,
      phoneNumber,
      password,
      otp,
    };
    const userName = firstName + " " + lastName;
    dispatch(createUser(user));
    sendOtpToMail(userName, email, otp);
    navigate("/otp-verify");
  };

  const onSignInWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => {
      const { user } = data;
      // dipatch(login({ user }));
    });
  };

  return (
    <>
      <Navbar />
      <img src={topImage} alt="growth" className="top-image" />
      <img src={ellipseTop} alt="ellipse" className="ellipse-top" />
      <div className="signup-card">
        <div className="card-heading">Let's get started!</div>

        <div className="details-tab">
          <button
            className={
              personalDetailsTabActive
                ? "personal-details__tab-button personal-details__tab-button-active"
                : "personal-details__tab-button"
            }
            onClick={() => {
              setInvestmentDetailsTabActive(false);
              setPersonalDetailsTabActive(true);
            }}
          >
            Personal Details
          </button>
          <button
            className={
              investmentDetailsTabActive
                ? "investment-details__tab-button investment-details__tab-button-active"
                : "investment-details__tab-button"
            }
            onClick={() => {
              setPersonalDetailsTabActive(false);
              setInvestmentDetailsTabActive(true);
            }}
          >
            Investment Details
          </button>
        </div>

        {personalDetailsTabActive && (
          <div className="personal-details">
            <label>
              First Name <span className="important">*</span>
            </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="input-box"
              placeholder="John"
            />
            <label>
              Last Name <span className="important">*</span>
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="input-box"
              placeholder="Doe"
            />
            <label>
              Email ID <span className="important">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-box"
              placeholder="example@reverr.com"
            />
            <label>
              Gender <span className="important">*</span>
            </label>
            <div className="genders">
              <input
                onClick={(e) => setGender(e.target.value)}
                type="radio"
                value="Male"
                name="gender"
                className="gender-radio-button"
              />
              <span className="gender">Male</span>
              <input
                onClick={(e) => setGender(e.target.value)}
                type="radio"
                value="Female"
                name="gender"
                className="gender-radio-button"
              />
              <span className="gender">Female</span>
              <input
                onClick={(e) => setGender(e.target.value)}
                type="radio"
                value="Non Binary"
                name="gender"
                className="gender-radio-button"
              />
              <span className="gender">Non Binary</span>
              <input
                onClick={(e) => setGender(e.target.value)}
                type="radio"
                value="Other"
                name="gender"
                className="gender-radio-button"
              />
              <span className="gender">Other</span>
            </div>
            <label>
              Country <span className="important">*</span>
            </label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              className="input-box"
              placeholder="Enter your country"
            />
            <label>
              LinkedIn URL <span className="important">*</span>
            </label>
            <input
              onChange={(e) => setLinkedInUrl(e.target.value)}
              className="input-box"
              placeholder="Enter your LinkedIn URL"
            />
            <label>
              Phone Number <span className="important">*</span>
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input-box"
              placeholder="Enter Your Phone No."
            />
            <label>
              Password <span className="important">*</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input-box"
              type="password"
              placeholder="Enter Your Password"
            />
            <button
              onClick={onCreateAccountClickHandler}
              className="signup-button"
            >
              Sign Up
            </button>
            <h3 style={{ textAlign: "center", color: "white" }}>OR</h3>
            <button
              onClick={onSignInWithGoogleClickHandler}
              className="signup-with-google"
            >
              Sign Up with Google
            </button>
            <h3 style={{ textAlign: "center", color: "white" }}>- - - - -</h3>
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginBottom: "2rem",
              }}
            >
              Already have an account?{" "}
              <Link to="/" className="bottom-sign-in-link">
                Sign In
              </Link>
            </div>
          </div>
        )}
        {investmentDetailsTabActive && (
          <div className="investment-details">
            <label>
              Full Name <span className="important">*</span>
            </label>
            <input className="input-box" placeholder="John Doe" />
            <label>
              Email ID <span className="important">*</span>
            </label>
            <input className="input-box" placeholder="example@reverr.com" />
            <label>
              Contact Number <span className="important">*</span>
            </label>
            <input
              className="input-box"
              placeholder="Enter your contact number"
            />
            <label>
              Sectors for investment <span className="important">*</span>
            </label>
            <div className="sectors-for-investment">
              <label class="container">
                Lorem Ipsum
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Lorem Ipsum
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Lorem Ipsum
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Lorem Ipsum
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <label>
              Preferred stage for Investment{" "}
              <span className="important">*</span>
            </label>
            <div className="stage-for-funding">
              <label class="container">
                Pre-seed funding
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Seed funding
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Pre-Series A
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Series A funding
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <label>
              Amount you want to invest <span className="important">*</span>
            </label>
            <div className="investment-amounts">
              <div className="investment-container">
                <input
                  type="radio"
                  value="Less than 1 Lakh"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">Less than 1 Lakh</span>
              </div>
              <div className="investment-container">
                <input
                  type="radio"
                  value="1 Lakh - 5 Lakh"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">1 Lakh - 5 Lakh</span>
              </div>
              <div className="investment-container">
                <input
                  type="radio"
                  value="5 Lakh - 10 Lakh"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">5 Lakh - 10 Lakh</span>
              </div>
              <div className="investment-container">
                <input
                  type="radio"
                  value="10 Lakh - 50 Lakh"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">10 Lakh - 50 Lakh</span>
              </div>
              <div className="investment-container">
                <input
                  type="radio"
                  value="50 Lakh - 1 Crore"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">50 Lakh - 1 Crore</span>
              </div>
              <div className="investment-container">
                <input
                  type="radio"
                  value="1 Crore - 5 Crore"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">1 Crore - 5 Crore</span>
              </div>
              <div className="investment-container">
                <input
                  type="radio"
                  value="More than 5 Crore"
                  name="investment-amount"
                  className="radio-button"
                />
                <span className="investment-amount">More than 5 Crore</span>
              </div>
            </div>

            <label>
              Years of experience in investing{" "}
              <span className="important">*</span>
            </label>
            <div className="investment-experiences">
              <div className="experience-container">
                <input
                  type="radio"
                  value="0-2 years"
                  name="investment-experience"
                  className="radio-button"
                />
                <span className="investment-experience">0-2 years</span>
              </div>
              <div className="experience-container">
                <input
                  type="radio"
                  value="2-5 years"
                  name="investment-experience"
                  className="radio-button"
                />
                <span className="investment-experience">2-5 years</span>
              </div>
              <div className="experience-container">
                <input
                  type="radio"
                  value="5-10 years"
                  name="investment-experience"
                  className="radio-button"
                />
                <span className="investment-experience">5-10 years</span>
              </div>
              <div className="experience-container">
                <input
                  type="radio"
                  value="More than 10 years"
                  name="investment-experience"
                  className="radio-button"
                />
                <span className="investment-experience">
                  More than 10 years
                </span>
              </div>
            </div>
            <label>
              By when do you want to start investing{" "}
              <span className="important">*</span>
            </label>
            <input className="input-box" placeholder="Type your answer" />
            <button
              onClick={onCreateAccountClickHandler}
              className="signup-button"
              style={{ marginBottom: "2rem" }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
