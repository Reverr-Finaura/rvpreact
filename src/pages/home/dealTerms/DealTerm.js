import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Navbar from "../../../components/navbar/Navbar";
import "./dealterm.css";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";
const DealTerm = () => {
  return (
    <>
      <Navbar />
      <div className="deal-term">
        <div className="deal-term__side-nav">
          <DealSideNav />
        </div>
        <div className="deal-term__right-wrap">
          <div className="deal-term__document">
            <h1
              style={{
                color: "#0077B7",
                textAlign: "center",
              }}
            >
              Documents
            </h1>
            <div className="deal-term__document-content">
              <div className="deal-term__document-left__content">
                A due diligence report is a document prepped by an independent
                third party due diligence team which includes information
                related to financials, compliance, key risks and a lot more.
              </div>
              <div className="deal-term__document-right__content">
                <div className="deal-term__right__content1">
                  <h3>Company Certificates </h3>
                  <h2>
                    <FileEarmarkArrowUp />
                  </h2>
                </div>
                <div className="deal-term__right__content2">
                  <h3>Company Due Dilligence</h3>
                  <h2>
                    <FileEarmarkArrowUp />
                  </h2>
                </div>
                <button>Download</button>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  );
};

export default DealTerm;
