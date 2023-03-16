import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  const [thisUser, setThisUser] = useState({});
  const [isCharity, setIsCharity] = useState(false);

  const getUser = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/users/${user._id}`
    );
    console.log(response.data);
    setThisUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  const checkUser = () => {
    if (thisUser.typeofCharity) {
      setIsCharity(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, [thisUser]);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn ? (
              <>
              
                <span>
                  <strong className="titleName"> Hello {user.name} </strong>
                </span>
                {isCharity ? (
                  <>
                    <Nav.Link href="/profile"> Charity Profile </Nav.Link>
                    <button onClick={logout} className="logoutBtn">Logout</button>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/charities">Charity Groups</Nav.Link>
                    <button onClick={logout} className="logoutBtn">Logout</button>
                  </>
                )}
              </>
            ) : (
              <>
                <Nav.Link href="/signupcharity"> Signup Charity</Nav.Link>
                <Nav.Link href="/signup">Signup Volunteer </Nav.Link>
                <Nav.Link href="/login"> Login </Nav.Link>
              </>
            )}
          </Nav>
          <div>
            <img src="/images/logo2-removebg-preview.png" alt="Logo" />
          </div>
        </Container>
        
      </Navbar>
    </div>
  );
}

export default NavBar;
