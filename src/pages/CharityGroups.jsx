import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import charityService from "../services/charity.service";

function CharityGroups() {
  const [charities, setCharities] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);

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

  const showAllCharities = () => {
    setFilteredCharities([]);
  };

  return (
    <div>
      <h1>All Charities</h1>
      <h2>Need help Urgently</h2>
      <button onClick={() => filterCharities("3")}>Very Urgent</button>
      <h2>Charities by group</h2>
      <button onClick={() => filterCharities("Animals")}>Animals</button>
      <button onClick={() => filterCharities("Homeless")}>Homeless</button>
      <button onClick={() => filterCharities("Environment")}>
        Environment
      </button>
      <button onClick={() => filterCharities("Domestic Violence")}>
        Domestic Violence
      </button>

      <div>
        {filteredCharities.map((charity) => (
          <div key={charity._id}>
            <h3>{charity.name}</h3>
            <p>{charity.description}</p>
            <p>{charity.urlLink}</p>
            <img src={charity.image} alt="CharityLogo" />
          </div>
        ))}
      </div>

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
