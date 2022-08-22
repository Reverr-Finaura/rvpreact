import Footer from "../../../components/footer/Footer";
import "./dashboard.css";
import logo from "../../../assets/vectors/logo.svg";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import PartnerCard from "../../../components/partnerCard/PartnerCard";
import { Link, NavLink } from "react-router-dom";
import SideNav from "../../../components/sideNav/SideNav";
import { useCallback, useEffect, useState } from "react";
import { fetchDealsFromDatabase } from "../../../firebase/firebase";
import leftBlogImage from "../../../assets/img/leftBlog.png";
import rightBlogImage from "../../../assets/img/rightBlog.png";
import bgImage from "../../../assets/img/Rectangle 2958.png";
import leftBlogBgImage from "../../../assets/img/Rectangle 2910.png";
import rightBlogBgImage1 from "../../../assets/img/Rectangle 2911.png";
import rightBlogBgImage2 from "../../../assets/img/Rectangle 2913.png";
import leftStartupImg from "../../../assets/img/Ellipse 304.png";
import {
  BarChartLineFill,
  ChatRightTextFill,
  HandIndexThumbFill,
  HandThumbsUpFill,
  Search,
} from "react-bootstrap-icons";
import Accordian from "../../../components/accordian/Accordian";
import { setDeals } from "../../../redux/deal/dealSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const fetchDeals = useCallback(async () => {
    const results = await fetchDealsFromDatabase();
    dispatch(setDeals(results));
  }, [user.uid]);

  useEffect(() => {
    fetchDeals();
  }, [user.uid]);

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
      <LoggedInNavbar />
      <div className="dashboard">
        <div className="dashboard__side-nav">
          <SideNav />
        </div>
        <div className="dashboard__right-wrap">
          <div className="dashboard-stats">
            <div className="dashboard__stats-wrap">
              <div className="dashboard__stats-left">
                <h1>0.0k</h1>
                <p>Total Investment Value</p>
              </div>
              <div className="dashboard__stats-right">
                <h1>0</h1>
                <p>Startups Invested In</p>
              </div>
            </div>
            <div className="dashboard__stats-investments">
              <Link className="Link" to="/investments">
                View all your investments
              </Link>
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "5%",
            }}
          />

          <div className="dashboard-calls">
            <h1>Your calls</h1>
            <div className="dashboard-calls_wrap">
              <div className="dashboard__calls-left">
                <h1>Timer Here</h1>
              </div>
              <div className="dashboard__calls-right">
                <h1>ACME INC.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text .
                </p>
                <div className="dashboard__calls-date">
                  <p>11th August 2022</p>
                  <p>At 1300 hours</p>
                </div>
                <div className="dashboard__calls-btn">
                  <button className="dashboard__calls-btn-proceed">
                    Proceed
                  </button>
                  <button className="dashboard__calls-btn-reschedule">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>

            <div className="dashboard-calls_wrap">
              <div className="dashboard__calls-left">
                <h1>Timer Here</h1>
              </div>
              <div className="dashboard__calls-right">
                <h1>ACME INC.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text .
                </p>
                <div className="dashboard__calls-date">
                  <p>11th August 2022</p>
                  <p>At 1300 hours</p>
                </div>
                <div className="dashboard__calls-btn">
                  <button className="dashboard__calls-btn-proceed">
                    Proceed
                  </button>
                  <button className="dashboard__calls-btn-reschedule">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard-blogs">
            <div className="dashboard__blogs-head">
              <img className="dashboard__blogs-bgImage" src={bgImage} />
              <h1 style={{ position: "absolute", left: "35%", top: "10%" }}>
                Reverr Blogs
              </h1>
              <img className="dashboard__blogs-leftImg" src={leftBlogImage} />
              <input className="dashboard__blogs-input" placeholder="Search" />
              <img className="dashboard__blogs-rightImg" src={rightBlogImage} />
            </div>

            <div className="dashboard__blogs-body">
              <div className="dashboard__blogs__leftcontent">
                <img
                  className="dashboard__blogs__leftcontentImg"
                  src={leftBlogBgImage}
                />
                <h2 style={{ color: "#2a72de" }}>
                  Guide to help you build your business
                </h2>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown{" "}
                </p>

                <p
                  style={{
                    textAlign: "right",
                    margin: "30px 50px 0px 0px",
                    color: "#2a72de",
                  }}
                >
                  Read more...
                </p>
              </div>
              <div className="dashboard__blogs__rightcontent">
                <div className="dahsboard__blogs_content1">
                  <img src={rightBlogBgImage1} />
                  <h4> build your business and Lorem Ipsum</h4>
                </div>
                <div className="dahsboard__blogs_content2">
                  <img src={rightBlogBgImage2} />
                  <h4> build your business and network</h4>
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard__faqs">
            <h1 style={{ color: "#2a72de", textAlign: "center" }}>FAQs</h1>
            {data.map((data) => (
              <Accordian key={data.id} {...data} />
            ))}
            <div className="dasboard__contact-wrap">
              <p style={{ marginBottom: "1rem" }}>
                Didn’t get what you’re looking for ? <br /> Write your query and
                we would answer as soon as possible
              </p>
              <input
                className="dasboard__contact-input"
                placeholder="Type here..."
              />
              <button className="dasboard__contact-btn">SEND</button>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard__startups">
            <h1>
              From the <span style={{ color: "#2a72de" }}>startups</span>
            </h1>
            <div className="dashboard__startups-content">
              <div className="dashboard__startups-leftcontent">
                <img src={leftStartupImg} />
              </div>
              <div className="dashboard__startups-rightcontent">
                <h3>Jatin Khurana</h3>
                <h4>5 hrs ago</h4>
                <p
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Lorem Ipsum is a dummy text used for typesettings and
                  typewrittingLorem Ipsum is a dummy text used for typesettings
                  and typewritting
                </p>
                <span
                  style={{
                    color: "grey",
                    marginTop: "10px",
                  }}
                >
                  <HandThumbsUpFill /> 5 Upvots
                </span>

                <span
                  style={{
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  <ChatRightTextFill /> 5 Upvots
                </span>
              </div>
            </div>

            <div className="dashboard__startups-content">
              <div className="dashboard__startups-leftcontent">
                <img src={leftStartupImg} />
              </div>
              <div className="dashboard__startups-rightcontent">
                <h3>Jatin Khurana</h3>
                <h4>5 hrs ago</h4>
                <p
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Lorem Ipsum is a dummy text used for typesettings and
                  typewrittingLorem Ipsum is a dummy text used for typesettings
                  and typewritting
                </p>
                <span
                  style={{
                    color: "grey",
                    marginTop: "10px",
                  }}
                >
                  <HandThumbsUpFill /> 5 Upvots
                </span>

                <span
                  style={{
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  <ChatRightTextFill /> 5 Upvots
                </span>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard__startupdeals">
            <h1>Deals for you</h1>
            <h2>You recently viewed</h2>
            <div className="Dashboard__startupdeals-card_wrap">
              <h3>View more...</h3>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
