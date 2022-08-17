import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import logo from "../../../assets/img/Rectangle 2741.png";
import instagram from "../../../assets/img/instagram.png";
import linkedIn from "../../../assets/img/linkedin.png";
import twitter from "../../../assets/img/twitter.png";

import "./aboutdeal.css";
const AboutDeal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Navbar />
      <div className="aboutdeal">
        <div className="abousDeal-side__nav">
          <DealSideNav />
        </div>
        <div className="aboutdeal__right-wrap">
          <div className="aboutdeal__wrap">
            <div className="aboutdeal__head">
              <div className="aboutdeal__logo">
                <img style={{ width: "100%" }} src={logo} />
                <h1>ZEPP</h1>
              </div>

              <iframe
                className="aboutdeal__video"
                src="https://www.youtube.com/embed/nl2lYNjtCsI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="aboutdeal__head-content">
              <h3>Lorem Ipsum is a dummy text of printing and typesettings</h3>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="aboutdeal__stats-wrap">
              <progress
                id="file"
                value="42.75"
                max="100"
                className="aboutdeal__progress"
              />
              <div className="aboutdeal__stats">
                <div className="aboutdeal__stat">
                  <h2 style={{ margin: 0 }}>Raised</h2>
                  <br />
                  <span style={{ color: "#0077B7" }}>
                    <h2 style={{ margin: "-1rem 0rem 0rem 0rem" }}>42.75%</h2>
                  </span>
                </div>
                <hr
                  style={{
                    height: "40px",
                    borderLeft: "1.5px solid #0077B7",
                    backgroundColor: "#0077B7",
                  }}
                />
                <div className="aboutdeal__stat">
                  <h2 style={{ margin: 0 }}>Closes in</h2>
                  <span style={{ color: "#0077B7" }}>
                    <h2 style={{ margin: "0rem 0rem 0rem 0rem" }}>26 Days</h2>
                  </span>
                </div>
                <hr
                  style={{
                    height: "40px",
                    borderLeft: "1.5px solid #0077B7",
                    backgroundColor: "#0077B7",
                  }}
                />
                <div className="aboutdeal__stat">
                  <h2 style={{ margin: 0 }}>Investors</h2>
                  <br />
                  <span style={{ color: "#0077B7" }}>
                    <h2 style={{ margin: "-1rem 0rem 0rem 0rem" }}>9</h2>
                  </span>
                </div>
              </div>
            </div>

            <div className="aboutdeal__overview">
              <h2 style={{ fontWeight: "300" }}>BUSINESS OVERVIEW</h2>
              <div className="aboutdeal__overview-content">
                <div className="aboutdeal__overview-left">
                  <h3>Headquaters</h3>
                  <h3>Firm</h3>
                  <h3>Employee</h3>
                  <h3>Social media</h3>
                  <h3 style={{ marginTop: "24px" }}>Sector</h3>
                  <h3>Type</h3>
                  <h3>Website</h3>
                  <h3>incorporation date</h3>
                </div>
                <div className="aboutdeal__overview-right">
                  <h3>Delhi, India</h3>
                  <h3>Private</h3>
                  <h3>150</h3>
                  <div className="aboutdeal__overview-social-links">
                    <img src={instagram} />
                    <img src={linkedIn} />
                    <img src={twitter} />
                  </div>
                  <div className="aboutdeal__overview-social-tags">
                    <h4 style={{ marginLeft: 0 }}>Tech</h4>
                    <h4>Consumer electronics smart wearable</h4>
                  </div>
                  <h3>Equity</h3>
                  <h3 style={{ marginTop: "-4px" }}>
                    <a href="www.zepp.com">www.zepp.com</a>
                  </h3>
                  <h3>11 August 2022</h3>
                </div>
              </div>
              <button className="aboutdeal__overviewInterested-btn">
                Intersted
              </button>
            </div>

            <div className="aboutdeal__highlights">
              <div className="aboutdeal__highlight-heading">
                <h1>Highlights</h1>
              </div>
              <div className="aboutdeal__highlight-content">
                <li>
                  Any investment of less than ₹2L would get you CCD tagged with
                  valuation{" "}
                </li>
                <li>
                  With public beta launch on April 2022, Blup achieved 600+
                  registrations{" "}
                </li>{" "}
                <li>
                  Onboarded 4 paid clients in just 3 months of Beta launch with
                  100+ repeat users
                </li>{" "}
                <li>
                  {" "}
                  Launched BlupSheets in June, a pre-built backend system on top
                  of AWS
                </li>
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutDeal;
