import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import charityService from "../services/charity.service";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./charityG.css";

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

  const filterCharity = () => {
    const filteredCharity = charities.filter(
      (charity) => charity.urgencyNumber === "Urgent"
    );
    setFilteredCharity(filteredCharity);
  };

  useEffect(() => {
    filterCharity();
  }, [charities]);

  {
    /*const showAllCharities = () => {
    setFilteredCharities([]);
    setFilteredCharity([]);
  };*/
  }

  return (
    <div>
      <h1>All Charities</h1>
      <br></br>
      <br></br>
      <h2>Need help Urgently</h2>
      <div className="card-container-area">
        <div className="card-container">
          {filteredCharity.map((charityOne) => (
            <div key={charityOne._id} className="card-container-area">
              <Card className="card1" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={charityOne.image}
                  alt="CharityLogo"
                />
                <Card.Body>
                  <Card.Title>{charityOne.name}</Card.Title>
                  <Card.Text>{charityOne.description}</Card.Text>
                  <Link to={`/charities/${charityOne._id}`}>
                    <Button variant="outline-dark">See More Information</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <h2>Charities by group</h2>
      <br></br>
      <br></br>
      <div className="button-container">
        <button className="button1" onClick={() => filterCharities("Animals")}>
          Animals
        </button>
        <button className="button1" onClick={() => filterCharities("Homeless")}>
          Homeless
        </button>
        <button
          className="button1"
          onClick={() => filterCharities("Environment")}
        >
          Environment
        </button>
        <button
          className="button1"
           onClick={() => filterCharities("Families & Children")}
        >
          Families & Children
        </button>
      </div>{" "}
      <div>
        <br></br>
        <br></br>
        {filteredCharities.map((charity) => (
          <div key={charity._id} className="card-container-area">
            <Card className="card1" style={{ width: "18rem" }}>
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
    </div>
  );
}

export default CharityGroups;
