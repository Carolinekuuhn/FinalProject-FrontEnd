import React, { useContext } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/signup">
                {" "}
                Signup Volunteer{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signupcharity">
                {" "}
                Signup Charity{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                {" "}
                Login{" "}
              </a>
            </li>
          </ul>
          <div>Caring Cumminities</div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
