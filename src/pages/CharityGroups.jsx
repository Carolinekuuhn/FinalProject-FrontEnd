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
    <section>
      <h1 className="titleGC"> Need Help Urgently!</h1>
      <br></br>
      <br></br>
      <div className="cardtotal">
      
        <div className="card-container-area">
          {filteredCharity.map((charityOne) => (
            <div key={charityOne._id} className="card-container-area">
              <Card className="card1" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={charityOne.image}
                  alt="CharityLogo"
                />
                <Card.Body>
                  <Card.Title className="titlecard">{charityOne.name}</Card.Title>
                  
                  <Card.Text>{charityOne.description}</Card.Text>
                
                </Card.Body> 
                 <Link to={`/charities/${charityOne._id}`} className="nav-link">
                    <Button className="submitBtn" id="urgentcard">See More Information</Button>
                  </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <br></br>
      <br></br>
      <h2 className="titleGC">Find More Charities</h2>
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
          <div key={charity._id} className="card-container-area2">
            <Card className="card2" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={charity.image} alt="CharityLogo" />
              <Card.Body>
                <Card.Title class="titlecard" > {charity.name} </Card.Title>
                <Card.Text>{charity.description}</Card.Text>
                
              </Card.Body>
              <Link className="nav-link" to={`/charities/${charity._id}`}>
                  <Button  className="submitBtn" id="urgentcard" variant="outline-dark">See More Information</Button>
                </Link>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CharityGroups;
