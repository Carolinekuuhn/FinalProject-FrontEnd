import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn ? (
              <>
                <span>
                  <strong> Hello {user.name} </strong>
                </span>

                <Nav.Link href="/charities">Charity Groups</Nav.Link>
                <Nav.Link href="/charities/:id"> Charity Details</Nav.Link>
                <Nav.Link href="/profile"> Charity Profile </Nav.Link>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Nav.Link href="/signupcharity"> Signup Charity</Nav.Link>
                <Nav.Link href="/signup">Signup Volunteer </Nav.Link>
                <Nav.Link href="/login"> Login </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
