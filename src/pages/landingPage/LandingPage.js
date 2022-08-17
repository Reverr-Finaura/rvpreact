import Navbar from "../../components/navbar/Navbar";
import group from "../../assets/img/group.png";
import "./LandingPage.css";
import cardImage from "../../assets/img/card_image.png";
import profileIcon from "../../assets/img/profile-icon.png";
import searchIcon from "../../assets/img/search-icon.png";
import rupeeIcon from "../../assets/img/rupee-icon.png";
import Footer from "../../components/footer/Footer";
import PartnerCard from "../../components/partnerCard/PartnerCard";
import headImg from "../../assets/img/Rectangle 2958.png";

export const LandingPage = () => {
  return (
    <>
      <div className="landing__top-section-wrap">
        <Navbar />
        <div className="landing__top-section">
          <div className="group-image-wrap">
            <img src={group} alt="group" className="group-image" />
          </div>

          <div className="landing__top-section-content">
            <div className="landing__top-section-heading">
              REVERR VENTURE <span style={{ color: "#0077B7" }}>PARTNERS</span>
              <hr style={{ border: "1px solid #0077B7", width: "167px" }} />
            </div>
            <div className="landing__top-section-para">
              Lorem Ipsum is a dummy text used for typesettings and typewritting
              <hr style={{ border: "1px solid #0077B7", width: "167px" }} />
              <br />
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </span>
            </div>
          </div>
        </div>
        <div className="landing__achievements">
          <div className="achievements-card">
            200+
            <div style={{ fontSize: "20px", fontWeight: "normal" }}>
              Startups Registered
            </div>
          </div>
          <div className="achievements-card">
            25+
            <div style={{ fontSize: "20px", fontWeight: "normal" }}>
              Team Members
            </div>
          </div>
          <div className="achievements-card">
            5 Cr+
            <div style={{ fontSize: "20px", fontWeight: "normal" }}>
              Funds Raised
            </div>
          </div>
          <div className="achievements-card">
            100+
            <div style={{ fontSize: "20px", fontWeight: "normal" }}>
              Investors Onboard
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page__blogs">
        <div className="landing-page__blog-header">
          <h1>Reverr Blogs</h1>
        </div>
      </div>

      <div className="lading-page__main">
        <hr
          style={{
            border: "1px solid #0077B7",
            width: "800px",
            marginBottom: "5%",
          }}
        />
        <div className="lading-page__main-heading">
          How we <span style={{ color: "#0077B7" }}>works</span>
        </div>
        <div className="landing__investor-content-wrap">
          <div className="landing__investor-card-wrap">
            <div className="landing__investor-card">
              <div className="landing__investor-card-content-wrap">
                <div>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: "600",
                      color: "#0077B7",
                    }}
                  >
                    I am an
                    <br /> Investor
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    Lorem ipsum is a <br />
                    dummy text used
                    <br /> for typesettings .
                  </div>
                </div>
                <img
                  src={cardImage}
                  alt="man-with-tablet"
                  style={{ marginLeft: "1rem" }}
                />
              </div>
              <div
                style={{
                  color: "#0077B7",
                  margin: "1rem",
                  fontWeight: "600",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum is a dummy text used for typing
              </div>
              <button className="landing-page__signup-button">Sign Up</button>
            </div>
          </div>
          <div className="landing__investor-options">
            <div className="landing__investor-option">
              <img src={profileIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Create your profile</div>
            </div>
            <div
              className="landing__investor-option"
              style={{ transform: "translateX(40%)" }}
            >
              <img src={searchIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Discover Startups</div>
            </div>
            <div className="landing__investor-option">
              <img src={rupeeIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Start Investing</div>
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "1px solid #0077B7",
            width: "800px",
            marginTop: "5%",
          }}
        />
        <div className="lading-page__main-heading">
          Invest with Reverr venture{" "}
          <span style={{ color: "#0077B7" }}>partners</span>
          <div className="landing-page_subHeading">
            <span
              style={{ fontSize: "24px", fontWeight: "900", color: "#0077B7" }}
            >
              Live Deals
            </span>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                width: "60%",
                margin: "auto",
              }}
            >
              Lorem Ipsum is a dummy text used for typesettings and typewritting
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

{
  /* <div className="landing-page__partner-cards">
<div className="landing-page__partner-wrap">
  <div className="partner-card__background"></div>
  <PartnerCard />
  <div className="landing-page__partner-cards-details">
    Under Due diligence
    <div className="landing-page__partner-cards-details-para">
      Lorem Ipsum is a dummy text used for typesettings and
      typewritting
    </div>
  </div>
</div>
<div className="landing-page__partner-wrap">
  <PartnerCard />
  <div className="landing-page__partner-cards-details">
    Live diligence
    <div className="landing-page__partner-cards-details-para">
      Lorem Ipsum is a dummy text used for typesettings and
      typewritting
    </div>
  </div>
</div>
<div className="landing-page__partner-wrap">
  <PartnerCard />
  <div className="landing-page__partner-cards-details">
    Due diligence
    <div className="landing-page__partner-cards-details-para">
      Lorem Ipsum is a dummy text used for typesettings and
      typewritting
    </div>
  </div>
</div>
</div> */
}
