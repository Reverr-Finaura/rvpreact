import "./sidenav.css";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="sideNav">
      <NavLink to="/dashboard" className="NavLink NavLink NavLink__Dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/deals" className="NavLink ">
        Deals
      </NavLink>
      <NavLink to="/portfolio" className="NavLink ">
        Portfolio
      </NavLink>
      <NavLink to="/profile" className="NavLink ">
        Profile
      </NavLink>
      <NavLink to="/profile" className="NavLink ">
        Analytics
      </NavLink>
      <NavLink to="/" className="NavLink NavLink__Logout ">
        Log out
      </NavLink>
    </div>
  );
};

export default SideNav;
