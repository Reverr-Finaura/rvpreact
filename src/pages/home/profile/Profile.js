import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import SideNav from "../../../components/sideNav/SideNav";
import "./profile.css";
import Rectangle2764 from "../../../assets/img/Rectangle 2764.png";
import Logo from "../../../assets/img/Flag_of_India 2.png";
import linkedIn from "../../../assets/img/linkedin.png";
import twitter from "../../../assets/img/twitter.png";
import gmail from "../../../assets/img/gmail.png";
import { BarChartLineFill, Pencil, PencilSquare } from "react-bootstrap-icons";
import { useState } from "react";
const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__side-nav">
          <SideNav />
        </div>
        <div className="profile__right-wrap">
          {isEditable ? (
            <h1 style={{ color: "red" }}>Edit Here</h1>
          ) : (
            <>
              <div className="profile__bio">
                <div className="profile_edit">
                  <h4 onClick={() => setIsEditable(true)}>
                    <Pencil /> Edit profile
                  </h4>
                </div>
                <div className="profile__bio-content">
                  <div className="profile__bio__content__img">
                    <img src={Rectangle2764} />
                  </div>
                  <div className="profile__bio__content-text">
                    <h2>Jim Hopper</h2>
                    <h3>Investor</h3>
                    <h3>
                      <img
                        src={Logo}
                        width="25px"
                        style={{ marginRight: "5px" }}
                      />{" "}
                      India
                    </h3>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="profile__social">
                <div className="profile__stats">
                  <h4>Sectors for Investment</h4>
                  <h5>Lorem Ipsum</h5>
                  <h4>Preferred stage for Investment</h4>
                  <h5>Pre-series A</h5>
                  <h4>Amount you want Invest </h4>
                  <h5>10 lakh - 50 lakh</h5>
                  <h4>Sectors for Investment</h4>
                  <h5>By when do you want to start Investing </h5>
                  <h4>Years of experience in Investing </h4>
                  <h5>2-5 years</h5>
                </div>
                <div className="profile__contact">
                  <h2>Contacts</h2>
                  <div className="profile__contact-Img">
                    <img src={linkedIn} />
                    <img src={twitter} />
                    <img src={gmail} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
