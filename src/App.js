import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SingUp";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
