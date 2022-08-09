import Footer from "../../../components/footer/Footer";
import "./deals.css";
import logo from "../../../assets/vectors/logo.svg";
import Navbar from "../../../components/navbar/Navbar";
import DealCard from "../../../components/dealCard/DealCard";
import { NavLink } from "react-router-dom";
import SideNav from "../../../components/sideNav/SideNav";
const Deals = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="deal">
        <SideNav />
        <div className="deal-wrap">
          <div className="deal-wrap__search">
            <h1>
              Explore <span className="badge">deals</span>
            </h1>

            <input
              className="deal-search__input"
              placeholder="Search your deals"
            />
          </div>
          <div className="live-deal__wrap">
            <div className="deal__content">
              <h1>
                <span className="badge">Live</span> deals
              </h1>
              <p>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </p>
            </div>
            <div className="deal__card">
              <DealCard />
              <DealCard />
              <DealCard />
            </div>
          </div>

          <div className="uder-due-diligence__deal__wrap uder-due-diligence__deal__wrap-center">
            <div className="deal__content">
              <h1>
                <span className="badge">Under</span> due diligence
              </h1>
              <p>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </p>
            </div>
            <div className="deal__card">
              <DealCard />
              <DealCard />
              <DealCard />
            </div>
          </div>

          <div className="due-diligence__deal__wrap">
            <div className="deal__content">
              <h1>
                <span className="badge">Due</span> diligence
              </h1>
              <p>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </p>
            </div>
            <div className="deal__card">
              <DealCard />
              <DealCard />
              <DealCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deals;
