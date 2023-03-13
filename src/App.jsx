import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignupUser from "./pages/SignupUser";
import Login from "./pages/Login";
import SignupCharity from "./pages/SignupCharity";
import CharityGroup from "./pages/CharityGroups";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupUser />} />
        <Route path="/signupcharity" element={<SignupCharity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/charities" element={<CharityGroup/>} />

      </Routes>
    </div>
  );
}

export default App;
