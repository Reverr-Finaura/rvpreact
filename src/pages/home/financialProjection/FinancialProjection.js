// import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./financialProjection.css";
const FinancialProjection = () => {
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
              "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.mohfw.gov.in%2Fpdf%2FCOVID19DistrictWisePositivityAnalysis05July.xlsx&wdOrigin=BROWSELINK"
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
