import Navbar from "../../../components/navbar/Navbar";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import "./faq.css";
import Accordian from "../../../components/accordian/Accordian";
import Footer from "../../../components/footer/Footer";
const Faq = () => {
  const data = [
    {
      id: 1,
      question: "What is Reverr Venture Partners ?",
      answer:
        "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.",
    },
    {
      id: 2,
      question: "What does Reverr Venture Partners offer ?",
      answer:
        "Install the create-react-app package using the command prompt or terminal.",
    },
    {
      id: 3,
      question: "How is Reverr Venture Partners a solutions ?",
      answer:
        "An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.",
    },
    {
      id: 4,
      question: "What does Reverr Venture Partners makes it standout ?",
      answer:
        "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="faqs">
        <div className="faqs__side-nav">
          <DealSideNav />
        </div>
        <div className="faqs__right-wrap">
          <h1 style={{ color: "#2a72de", textAlign: "center" }}>
            About company
          </h1>
          {data.map((data) => (
            <Accordian key={data.id} {...data} />
          ))}

          <h1 style={{ color: "#2a72de", textAlign: "center" }}>
            About Reverr ventur partners
          </h1>
          {data.map((data) => (
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
