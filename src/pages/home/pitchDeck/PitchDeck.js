import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { useSelector } from "react-redux";

const PitchDeck = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { pitchDeck } = deal;
  const pitchDeckUrl = pitchDeck.docUrl;

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
            src={`https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Ffirebasestorage%2Egoogleapis%2Ecom%3A443%2Fv0%2Fb%2Freverr%2D25fb3%2Eappspot%2Ecom%2Fo%2FComponents%2520of%2520Financial%2520System%2Epptx%3Falt%3Dmedia%26token%3Dc5be1430%2D9b0d%2D4b6f%2D89a9%2Da24bc95d25fe&amp;wdAr=1.3333333333333333`}
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
