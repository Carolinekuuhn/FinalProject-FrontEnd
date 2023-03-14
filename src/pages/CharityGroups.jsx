import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import charityService from "../services/charity.service";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function CharityGroups() {
  const [charities, setCharities] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);
  const [filteredCharity, setFilteredCharity] = useState([]);

  const getCharities = async () => {
    try {
      const response = await charityService.getAllCharities();
      console.log(response.data);
      setCharities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharities();
  }, []);

  const filterCharities = (type) => {
    const filteredCharities = charities.filter(
      (charity) => charity.typeofCharity === type
    );
    setFilteredCharities(filteredCharities);
  };

  const filterCharity = (type) => {
    const filteredCharity = charities.filter(
      (charityOne) => charityOne.urgencyNumber === type
    );
    setFilteredCharity(filteredCharity);
  };

  const showAllCharities = () => {
    setFilteredCharities([]);
    setFilteredCharity([]);
  };

  return (
    <div>
      <h1>All Charities</h1>
      <br></br>
      <br></br>
      <h2>Need help Urgently</h2>
      <button onClick={() => filterCharity("Urgent")}>Very Urgent</button>
      {filteredCharity.map((charityOne) => (
        <div key={charityOne._id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={charityOne.image} alt="CharityLogo" />
            <Card.Body>
              <Card.Title> {charityOne.name} </Card.Title>

              <Card.Text>{charityOne.description}</Card.Text>
              <Link to={`/charities/${charityOne._id}`}>
                <Button variant="outline-dark">See More Information</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
      <br></br>
      <h2>Charities by group</h2>
      <button onClick={() => filterCharities("Animals")}>Animals</button>
      <button onClick={() => filterCharities("Homeless")}>Homeless</button>
      <button onClick={() => filterCharities("Environment")}>
        Environment
      </button>
      <button onClick={() => filterCharities("Domestic Violence")}>
        Domestic Violence
      </button>
      {/* <button onClick={() => showAllCharities()}>Show All</button> */}
      <div>
        {filteredCharities.map((charity) => (
          <div key={charity._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={charity.image} alt="CharityLogo" />
              <Card.Body>
                <Card.Title> {charity.name} </Card.Title>
                <Card.Text>{charity.description}</Card.Text>
                <Link to={`/charities/${charity._id}`}>
                  <Button variant="outline-dark">See More Information</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/* <div>
        {charities.map((charity) => (
          <div key={charity._id}>
            <Link to={`/charities/${charity._id}`}>
            <h3>{charity.name}</h3></Link>
            <p>{charity.description}</p>
            <p>{charity.urlLink}</p>
            <img src={charity.image} alt="CharityLogo" />
          </div>
        ))}
      </div> */}
      {/*<div>
        {filteredCharities.length > 0
          ? filteredCharities.map((charity) => (
              <div>
                <h3 key={charity._id}>{charity.name}</h3>
                <p key={charity._id}>{charity.description}</p>
              </div>
            ))
          : charities.map((charity) => (
              <li key={charity._id}>{charity.name}</li>
            ))}
      </div>*/}
    </div>
  );
}

export default CharityGroups;
