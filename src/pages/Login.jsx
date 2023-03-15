import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { authenticateUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password }
      );

      localStorage.setItem("authToken", response.data.authToken); // to get the token, we just did this on the login, because we can store just if they create the token

      await authenticateUser();
      console.log(response.data);

      const thisUser = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/${response.data.id}`
      );

      console.log("2call: " + thisUser.data);

      if (thisUser.data.typeofCharity) {
        navigate("/profile");
      } else if (!thisUser.data.typeofCharity) {
        navigate("/charities");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page3">
    <section className="signupFrm">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Login</h1>

        <div className="inputContainer">
          <label htmlFor="email" className="label">
            Email
          </label>
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
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="input"
          />
        </div>

        <button type="submit" className="submitBtn">
          Login
        </button>

        <p>Don't have an account?</p>
        <Link to="/signup" className="nav-link">
          Signup
        </Link>
      </form>
    </section>
    </div>
  );
}

export default Login;
