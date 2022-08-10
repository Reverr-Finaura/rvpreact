import dealCardImage from "../../assets/img/Rectangle 2713.png";
import dealCardLogo from "../../assets/img/Rectangle 2714.png";
import "./dealcard.css";

const DealCard = () => {
  return (
    <div className="deal-card__wrap">
      <img className="deal-card__img" src={dealCardImage} />
      <div className="deal-card__head">
        <div className="deal-card_head-content">
          <h2>Artmajeur</h2>
          <p>Lorem Ipsum is a dummy text used for typesettings</p>
        </div>
        <img className="deal-card_headLogo" src={dealCardLogo} />
      </div>
      <hr className="deal-card_hr" />
      <div className="deal-card__contentwrap">
        <div className="deal-card__content">
          <h4>Raised</h4>
          <h5 style={{ margin: -10 }}>42.75%</h5>
        </div>
        <hr
          style={{
            marginTop: "25px",
            height: "60px",
            borderLeft: "1px solid #0077B7",
            background: "#0077B7",
          }}
        />
        <div className="deal-card__content">
          <h4>Closes in</h4>
          <h5 style={{ margin: -10 }}>23 days</h5>
        </div>
        <hr
          style={{
            marginTop: "25px",
            height: "60px",
            borderLeft: "1px solid #0077B7",
            background: "#0077B7",
          }}
        />
        <div className="deal-card__content">
          <h4>Investors</h4>
          <h5 style={{ margin: -10 }}>120</h5>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
