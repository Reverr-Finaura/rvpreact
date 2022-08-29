import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";

const PitchDeck = () => {
  return (
    <>
      <LoggedInNavbar />
      <div className="pitchdeck">
        <div className="pitchdeck__side-nav">
          <DealSideNav />
        </div>
        <div className="pitchdeck__right-wrap">
          <iframe
            title="pitch-deck"
            // encodeURI("http://www.mysite.com/a file with spaces.html") //http://www.mysite.com/a%20file%20with%20spaces.html
            src={encodeURI(
              "https://drive.google.com/viewerng/viewer?embedded=true&url=https://firebasestorage.googleapis.com/v0/b/reverr-25fb3.appspot.com/o/rvpDeal%2FpitchDecFiles%2Fch03.ppt?alt=media&token=85e43a86-9215-4f2a-9492-455698f95b19"
            )}
            width="100%"
            height="500px"
            frameborder="0"
            style={{ borderRadius: "10px" }}
          >
            This is an embedded{" "}
            <a target="_blank" href="https://office.com" rel="noreferrer">
              Microsoft Office
            </a>{" "}
            presentation, powered by{" "}
            <a
              target="_blank"
              href="https://office.com/webapps"
              rel="noreferrer"
            >
              Office
            </a>
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PitchDeck;
