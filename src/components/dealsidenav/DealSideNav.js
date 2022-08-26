import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  sendInteredtedDealMail,
  sendUserInterestedDealToMail,
} from "../../emailJs/emailJs";

const DealSideNav = () => {
  const user = useSelector((state) => state.user.user);
  const deal = useSelector((state) => state.deal.deal);
  const { firstName, lastName, email } = user;
  console.log(deal);
  const { dealDetails } = deal;
  const { name } = dealDetails;

  return (
    <div className="sideNav">
      <NavLink
        to={`/deals/${deal.id}/about`}
        className="NavLink NavLink NavLink__Dashboard"
      >
        About deal
      </NavLink>

      <NavLink to="/one-pager" className="NavLink ">
        One pager
      </NavLink>
      <NavLink to="/pitch-deck" className="NavLink ">
        Pitch deck
      </NavLink>
      <NavLink to="/financial-projections" className="NavLink ">
        Financial projections
      </NavLink>
      <NavLink to="/faqs" className="NavLink ">
        FAQs
      </NavLink>
      <NavLink to="/deal-terms" className="NavLink ">
        Deal terms
      </NavLink>
      <NavLink to="/people" className="NavLink ">
        People
      </NavLink>
      <NavLink to="/analytics" className="NavLink ">
        Analytics
      </NavLink>

      <NavLink
        onClick={async () => {
          await sendInteredtedDealMail(firstName + " " + lastName, email, name);
          await sendUserInterestedDealToMail(
            name,
            firstName + " " + lastName,
            firstName + " " + lastName
          );
          alert("Email Sent SuccessFuly");
        }}
        to="/interested"
        className="NavLink-interested"
      >
        <div className="interested__text">Interested</div>
      </NavLink>

      <NavLink
        to="/deals"
        className="NavLink NavLink__Logout "
        style={{ borderBottom: "none" }}
      >
        Go back
      </NavLink>
    </div>
  );
};

export default DealSideNav;
