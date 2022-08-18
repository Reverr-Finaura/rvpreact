import "./TeamCard.css";
import profile from "../../assets/img/Rectangle 3025.png";
import linkedin from "../../assets/img/teamCard_icons/linkedin.png";
import twitter from "../../assets/img/teamCard_icons/twitter.png";
import gmail from "../../assets/img/teamCard_icons/gmail.png";

const TeamCard = () => {
  return (
    <div className="team-card">
      <img src={profile} alt="profile" />
      <div className="team-card__name">Jim Hoper</div>
      <div className="team-card__title">Investor</div>
      <p className="team-card__para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="team-card__social-icons">
        <img src={linkedin} alt="linkedin" className="team-card__social-icon" />
        <img src={twitter} alt="twitter" className="team-card__social-icon" />
        <img src={gmail} alt="gmail" className="team-card__social-icon" />
      </div>
    </div>
  );
};

export default TeamCard;
