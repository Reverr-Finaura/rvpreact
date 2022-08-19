import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import TeamCard from "../../../components/teamCard/TeamCard";
import "./people.css";
const People = () => {
  return (
    <>
      <Navbar />
      <div className="people">
        <div className="people__side-nav">
          <DealSideNav />
        </div>
        <div className="people__right-wrap">
          <div className="people_team">
            <h1
              style={{
                color: "#0077B7",
                textAlign: "center",
              }}
            >
              Meet the team
            </h1>
            <div className="people_team-wrap">
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
            </div>
            <hr
              style={{
                border: "1px solid #0077B7",
                width: "600px",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            />
          </div>

          <div className="people_team">
            <h1
              style={{
                color: "#0077B7",
                textAlign: "center",
              }}
            >
              Investors
            </h1>
            <div className="people_team-wrap">
              <TeamCard />
              <TeamCard />
            </div>
            <hr
              style={{
                border: "1px solid #0077B7",
                width: "600px",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            />
          </div>

          <div className="people_team">
            <h1
              style={{
                color: "#0077B7",
                textAlign: "center",
              }}
            >
              Advisors
            </h1>
            <div className="people_team-wrap">
              <TeamCard />
              <TeamCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default People;
