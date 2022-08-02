import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const signInButtonHandler = () => {
    return navigate("/signin");
  };

  return (
    <div className="flex justifyContent flexDirection">
      <h1 className="flex justifyContent">Home</h1>
      <button onClick={signInButtonHandler}>SignIn Page</button>
    </div>
  );
};

export default Home;
