import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { useSelector } from "react-redux";

const PitchDeck = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { pitchDeck } = deal;
  const pitchDeckUrl = pitchDeck.docUrl;

  let meetings = [
    {
      meetingDetails: {
        time: "",
        date: "",
        desc: "",
        meetingLinks: "",
        id: "",
      },
      interestedUser: [],
    },
  ];

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
            src={`https://view.officeapps.live.com/op/embed.aspx?src=https://firebasestorage.googleapis.com/v0/b/reverr-25fb3.appspot.com/o/rvpDeal%2FpitchDecFiles%2FLinoui%20August%2026%2C%202022%20at%2009%3A14%3A14%20PM?alt=media&token=b83f6b6a-f393-4348-948a-8ab1a800010a`}
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
            .
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PitchDeck;
