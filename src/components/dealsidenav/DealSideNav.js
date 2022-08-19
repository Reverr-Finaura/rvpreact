// import "./sidenav.css";
import { NavLink } from "react-router-dom";
const DealSideNav = () => {
  return (
    <div className="sideNav">
      <NavLink to="/about-deal" className="NavLink NavLink NavLink__Dashboard">
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

      <NavLink to="/profile" className="NavLink ">
        Interested
      </NavLink>
      <NavLink to="/deals" className="NavLink NavLink__Logout ">
        Go back
      </NavLink>
    </div>
  );
};

export default DealSideNav;
