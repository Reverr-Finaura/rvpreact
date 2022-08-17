import Footer from "../../../components/footer/Footer";
import "./deals.css";
import logo from "../../../assets/vectors/logo.svg";
import Navbar from "../../../components/navbar/Navbar";
import PartnerCard from "../../../components/partnerCard/PartnerCard";
import { Link, NavLink } from "react-router-dom";
import SideNav from "../../../components/sideNav/SideNav";
import { useEffect, useState } from "react";
import { fetchDealsFromDatabase } from "../../../firebase/firebase";

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDeals = async () => {
    setIsLoading(true);
    let results = await fetchDealsFromDatabase();
    if (results.length) {
      setDeals([...results]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  console.log(deals);
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
              {isLoading ? (
                <h1>Fething Deals...</h1>
              ) : (
                deals.map((data) => <PartnerCard key={data.id} data={data} />)
              )}
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
            <div className="deal__card"></div>
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
            <div className="deal__card"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deals;
