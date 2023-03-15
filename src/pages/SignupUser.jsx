import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignupUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {name, email, password});
        console.log(response.data);

        navigate('/login');
      } catch (error) {
        console.log(error)
      };
    
  };


  const navigate = useNavigate();

  return (
    <div className="page">
    <section className="signupFrm">
    <form onSubmit={handleSubmit} className="form">
      <h2 className="title">Signup Volunteer</h2>
      

      <div className="inputContainer">
        <label htmlFor="name" className="label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
          className="input"
        />
        </div>

        <div className="inputContainer">
        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          className="input"
        />
        </div>

<div className="inputContainer">
        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          className="input"
        />
        </div>

        <button type="submit" className="submitBtn">Create account</button>
      

      <p>Already have an account?</p>
      <Link to="/login" className="nav-link">Login</Link>
      </form>
    </section>
    </div>
  );
}

export default SignupUser;
