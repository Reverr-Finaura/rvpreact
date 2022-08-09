import "./PartnerCard.css";
import partnerCardImage from "../../assets/img/partner_card-image.png";

const PartnerCard = () => {
  return (
    <>
      <div className="partner-card__wrap">
        <div className="partner-card__background">
          <div className="partner-card__main">
            <div className="partner-card__main-top">Artmajuer</div>
            <div className="partner-card__main-content">
              <div style={{ width: "70%" }}>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  Artmajuer
                </div>
                Lorem Ipsum is a dummy text used for typesettings{" "}
              </div>
              <img
                src={partnerCardImage}
                alt="partner"
                style={{ width: "30%", transform: "translateY(-3.5rem)" }}
              />
            </div>

            <br />
            <hr style={{ width: "40%", border: "1.2px solid #0077B7" }} />
            <br />
            <div className="partner-card__achievements">
              <div className="partner-card__achievement">
                Raised
                <br />
                <span style={{ color: "#0077B7" }}>42.75%</span>
              </div>
              <hr
                style={{
                  height: "35px",
                  borderLeft: "1.5px solid #0077B7",
                }}
              />
              <div className="partner-card__achievement">
                Closes in
                <br />
                <span style={{ color: "#0077B7" }}>23 days</span>
              </div>
              <hr
                style={{
                  height: "35px",
                  borderLeft: "1.5px solid #0077B7",
                }}
              />
              <div className="partner-card__achievement">
                Investors
                <br />
                <span style={{ color: "#0077B7" }}>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
