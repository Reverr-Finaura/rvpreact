import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";

const PitchDeck = () => {
  return (
    <>
      <Navbar />
      <div className="pitchdeck">
        <div className="pitchdeck__side-nav">
          <DealSideNav />
        </div>
        <div className="pitchdeck__right-wrap">
          <iframe
            src={
              "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Freverr-25fb3.appspot.com%2Fo%2FComponents%2520of%2520Financial%2520System.pptx%3Falt%3Dmedia%26token%3Dc5be1430-9b0d-4b6f-89a9-a24bc95d25fe&wdOrigin=BROWSELINK"
            }
            width="100%"
            height="600px"
            frameBorder="0"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PitchDeck;
