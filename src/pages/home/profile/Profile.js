import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import SideNav from "../../../components/sideNav/SideNav";
import "./profile.css";
import Rectangle2764 from "../../../assets/img/Rectangle 2764.png";
import Logo from "../../../assets/img/Flag_of_India 2.png";
import linkedIn from "../../../assets/img/teamCard_icons/linkedin.png";
import twitter from "../../../assets/img/teamCard_icons/twitter.png";
import gmail from "../../../assets/img/teamCard_icons/gmail.png";
import {
  BarChartLineFill,
  ImageFill,
  Pencil,
  PencilSquare,
} from "react-bootstrap-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const user = useSelector((state) => state.user.user);
  const {
    firstName,
    lastName,
    experienceOfInvesting,
    sectorsOfInvesting,
    stageOfInvestment,
    country,
  } = user;
  return (
    <>
      <LoggedInNavbar />
      <div className="profile">
        <div className="profile__side-nav">
          <SideNav />
        </div>
        <div className="profile__right-wrap">
          {isEditable ? (
            <>
              <div className="profile__bio profile__bioedit">
                <div className="profile__bio-content profile__bio-contentedit">
                  <div className="profile__bio__content__img profile__bio__content-edit">
                    {/* <img src={Rectangle2764} /> */}
                    <h3 className="profile__bio__content-editH3">
                      Edit picture
                    </h3>
                    <label for="user-img">
                      {" "}
                      <ImageFill /> Add from device
                    </label>
                    <input id="user-img" type="file" />
                  </div>
                  <div className="profile__bio__content-text profile__bio__content-textedit">
                    <input placeholder="Change Name" type="text" />
                    <input placeholder="Change Designation" type="text" />
                    <input placeholder="Change Country" type="text" />
                  </div>
                </div>
                <div className="textarea-wrap">
                  <textarea placeholder="Edit bio..." rows="10" />
                </div>
                <div className="edit-saveChanges">
                  <button
                    onClick={() => setIsEditable(false)}
                    className="edit-SaveChangesBtn"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
              <div className="profile__social">
                <div className="profile__stats profile__statsedit">
                  <h4>Sectors for Investment</h4>
                  <input placeholder="Change answer" type="text" />

                  <h4>Preferred stage for Investment</h4>
                  <input placeholder="Change answer" type="text" />

                  <h4>Amount you want Invest </h4>
                  <input placeholder="Change answer" type="text" />

                  <h4>Sectors for Investment</h4>
                  <input placeholder="Change answer" type="text" />

                  <h4>Years of experience in Investing </h4>
                  <input placeholder="Change answer" type="text" />
                </div>
                <div className="profile__contact profile__contactedit">
                  <h2>Contacts</h2>
                  <div className="profile__contact-Imgedit">
                    <input placeholder="LinkedIn" type="text" />
                    <input placeholder="twitter" type="text" />
                    <input placeholder="mail" type="text" />
                  </div>
                </div>
              </div>
            </>
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
                    <h2>
                      {firstName} {lastName}
                    </h2>
                    <h3>Investor</h3>
                    <h3>
                      <img
                        src={Logo}
                        width="25px"
                        style={{ marginRight: "5px" }}
                      />{" "}
                      {country}
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
                <div className="profile__stats ">
                  <h4>Sectors for Investment</h4>
                  <h5>{sectorsOfInvesting} </h5>
                  <h4>Preferred stage for Investment</h4>
                  <h5>{stageOfInvestment}</h5>
                  <h4>Amount you want Invest </h4>
                  <h5>10 lakh - 50 lakh</h5>
                  <h4>By when do you want to start Investing </h4>
                  <h5>Lorem Ipsum</h5>
                  <h4>Years of experience in Investing </h4>
                  <h5>{experienceOfInvesting}</h5>
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
