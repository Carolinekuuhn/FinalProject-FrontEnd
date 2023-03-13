import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import charityService from "../services/charity.service";

function CharityGroups() {
  const [charities, setCharities] = useState([]);
  const [animalCharities, setAnimalCharities] = useState([]);

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

  const filterAnimalCharities = () => {
    const filteredCharities = charities.filter(
      (charity) => charity.typeofCharity === "animals"
    );
    setAnimalCharities(filteredCharities);
  };

  return (
    <div>
      <h1>All Charities</h1>
      <button onClick={filterAnimalCharities}>Animals</button>
      <ul>
        {animalCharities.length > 0
          ? animalCharities.map((charity) => (
              <li key={charity._id}>{charity.name}</li>
            ))
          : charities.map((charity) => <li key={charity._id}>{charity.name}</li>)}
      </ul>
    </div>
  );
}

export default CharityGroups;