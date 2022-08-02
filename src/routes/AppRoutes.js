import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SingUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
