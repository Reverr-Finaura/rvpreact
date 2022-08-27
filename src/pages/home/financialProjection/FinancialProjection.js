// import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { useSelector } from "react-redux";
import "./financialProjection.css";

const FinancialProjection = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { projection } = deal;
  const projectionUrl = projection.docUrl;
  return (
    <>
      <LoggedInNavbar />
      <div className="pitchdeck">
        <div className="pitchdeck__side-nav">
          <DealSideNav />
        </div>
        <div className="pitchdeck__right-wrap">
          <hr
            style={{
              width: "12%",
              border: "6px solid #2A72DE",
              marginLeft: "0",
            }}
          />
          <div className="financial-projections__preview">Preview</div>
          <iframe
            title="financial-projection"
            src={
              "https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fwww.mohfw.gov.in%2Fpdf%2FCOVID19DistrictWisePositivityAnalysis05July.xlsx&wdOrigin=BROWSELINK"
            }
            width="100%"
            height="500px"
            frameBorder="0"
            style={{ borderRadius: "10px" }}
          ></iframe>
          <div className="financialprojection-downloadBtn">
            <button className="financialprojection-btn">Download</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FinancialProjection;
