import "./OnePager.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import { useEffect, useState } from "react";
import logo from "../../../assets/img/Ellipse 280.png";
import project from "../../../assets/img/My project 4.png";
import TeamCard from "../../../components/teamCard/TeamCard";

const OnePager = () => {
  return (
    <>
      <Navbar />
      <div className="one-pager__main">
        <div className="one-pager__side-nav">
          <DealSideNav />
        </div>
        <div className="one-pager__right">
          <div className="one-pager__top-title">
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="logo" />
              <h1
                style={{
                  color: "#0077B7",
                  marginLeft: "1.5rem",
                  fontWeight: "800",
                }}
              >
                ZEPP
              </h1>
            </span>
            <img src={project} alt="project" style={{ width: "250px" }} />
          </div>
          <div className="one-pager__deal-branding">
            <hr
              style={{
                border: "6px solid #2A72DE",
                width: "15%",
                marginLeft: "0",
              }}
            />
            <h1 style={{ color: "#0077B7" }}>Think big , think bip</h1>
            <p style={{ fontSize: "30px" }}>
              AMAZFIT INTRODUCES BEST-VALUE ESSENTIAL
              <br /> SMARTWATCH ADDITIONS
            </p>
          </div>
          <div className="one-pager__problem-solution-wrap">
            <div className="one-pager__problem">
              <h1
                style={{
                  color: "#0077B7",
                  paddingLeft: "1.5rem",
                  borderLeft: "10px solid #0077B7",
                }}
              >
                Problem
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="one-pager__solution">
              <h1
                style={{
                  color: "#0077B7",
                  paddingLeft: "1.5rem",
                  borderLeft: "10px solid #0077B7",
                }}
              >
                Solution
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="one-pager__market-details">
            <div
              style={{
                marginLeft: "0.5rem",
                borderLeft: "8px solid #000",
                paddingLeft: "1rem",
              }}
            >
              <div style={{ fontSize: "36px", fontWeight: "900" }}>Market</div>
              <div style={{ fontSize: "20px", fontWeight: "900" }}>
                (in crores)
              </div>
            </div>
            <div className="one-pager__market-tam">
              <div>
                <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  TAM
                </div>
                <div>(Total Addressable Market)</div>
              </div>
              <div style={{ color: "white" }}>1.4 crores</div>
            </div>
            <div className="one-pager__market-sam">
              <div>
                <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  SAM
                </div>
                <div>(Service Addressable Market)</div>
              </div>
              <div style={{ color: "white" }}>1.4 crores</div>
            </div>
            <div className="one-pager__market-som">
              <div>
                <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  SOM
                </div>
                <div>(Service Obtainable Market)</div>
              </div>
              <div style={{ color: "white" }}>1.4 crores</div>
            </div>
          </div>
          <div className="one-pager__growth-traction-wrap">
            <div className="one-pager__growth-strategy">
              <h1
                style={{
                  color: "#0077B7",
                  paddingLeft: "1.5rem",
                  borderLeft: "10px solid #0077B7",
                }}
              >
                Growth Strategy
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="one-pager__market-traction">
              <h1
                style={{
                  color: "#0077B7",
                  paddingLeft: "1.5rem",
                  borderLeft: "10px solid #0077B7",
                }}
              >
                Market traction
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="one-pager__projections">
            <h1
              style={{
                color: "#0077B7",
                paddingLeft: "1.5rem",
                borderLeft: "10px solid #0077B7",
              }}
            >
              Projections
            </h1>
            <div className="one-pager__projections-table">
              <table>
                <tr>
                  <th style={{ color: "#fff", opacity: "0.6" }}>
                    Amount in crores
                  </th>
                  <th>2019</th>
                  <th>2020</th>
                  <th>2021</th>
                  <th style={{ borderRight: "none" }}>2022</th>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>1.4 Cr</td>
                  <td>1.4 Cr</td>
                  <td>1.4 Cr</td>
                  <td style={{ borderRight: "none" }}>1.4 Cr</td>
                </tr>
                <tr>
                  <td>Expenses</td>
                  <td>1.4 Cr</td>
                  <td>1.4 Cr</td>
                  <td>1.4 Cr</td>
                  <td style={{ borderRight: "none" }}>1.4 Cr</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: "none" }}></td>
                  <td style={{ borderBottom: "none" }}></td>
                  <td style={{ borderBottom: "none" }}></td>
                  <td style={{ borderBottom: "none" }}></td>
                  <td
                    style={{ borderRight: "none", borderBottom: "none" }}
                  ></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="one-pager__fundings">
            <h1
              style={{
                color: "#0077B7",
                paddingLeft: "1.5rem",
                borderLeft: "10px solid #0077B7",
              }}
            >
              Fundings
              <div
                style={{ fontSize: "20px", color: "black", fontWeight: "900" }}
              >
                (in lakhs)
              </div>
            </h1>
            <div className="one-pager__funding">56 Lakhs</div>
          </div>
          <div className="one-pager__team">
            <h1
              style={{
                color: "#0077B7",
                paddingLeft: "1.5rem",
                borderLeft: "10px solid #0077B7",
              }}
            >
              Team
            </h1>
            <div className="one-pager__team-card-section">
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
            </div>
          </div>
          <div className="one-pager__download-button">Download</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnePager;
