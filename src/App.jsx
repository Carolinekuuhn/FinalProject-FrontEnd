import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignupUser from "./pages/SignupUser";
import Login from "./pages/Login";
import SignupCharity from "./pages/SignupCharity";
import CharityGroup from "./pages/CharityGroups";
import CharityDetails from "./pages/CharityDetails";
import EditCharity from "./pages/EditCharity";
import CreateReview from "./components/CreateReview";


function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupUser />} />
        <Route path="/signupcharity" element={<SignupCharity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/charities" element={<CharityGroup />} />
        <Route path="/charities/:id" element={<CharityDetails />} />
        <Route path="/profile" element={<EditCharity />} />
        <Route path="/reviews" element={<CreateReview />} />
      </Routes>
    </div>
  );
}

export default App;
