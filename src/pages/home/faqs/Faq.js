import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import "./faq.css";
import Accordian from "../../../components/accordian/Accordian";
import Footer from "../../../components/footer/Footer";
import { useSelector } from "react-redux";
const Faq = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { faqs } = deal;
  console.log(faqs);

  return (
    <>
      <LoggedInNavbar />
      <div className="faqs">
        <div className="faqs__side-nav">
          <DealSideNav />
        </div>
        <div className="faqs__right-wrap">
          <h1 style={{ color: "#2a72de", textAlign: "center" }}>
            About company
          </h1>
          {faqs.map((data) => (
            <Accordian key={data.id} {...data} />
          ))}

          <h1 style={{ color: "#2a72de", textAlign: "center" }}>
            About Reverr venture partners
          </h1>
          {faqs.map((data) => (
            <Accordian key={data.id} {...data} />
          ))}

          <div className="faqs__contact-wrap">
            <p style={{ marginBottom: "1rem" }}>
              Didn’t get what you’re looking for ? <br /> Write your query and
              we would answer as soon as possible
            </p>
            <input className="faqs__contact-input" placeholder="Type here..." />
            <button className="faqs__contact-btn">SEND</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
