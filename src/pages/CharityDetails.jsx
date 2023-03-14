import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CreateReview from "../components/CreateReview";

function CharityDetails() {
  const [charity, setCharity] = useState(null);

  const { id } = useParams();

  const getCharity = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/charities/${id}`
      );

      console.log(response.data);
      setCharity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // it is a function we need to call with ()
  // to load as soon as we get the component
  useEffect(() => {
    getCharity();
  }, []);

  return (
    <div>
      {charity && (
        <>
          <h1>{charity.name}</h1>
          <p>{charity.urlLink}</p>
          <img src={charity.image} alt="CharityLogo" />
          <CreateReview charityId = {charity._id}/>
          {charity.reviews.map(review => {
            return (<p>{review.userComment}</p>)
          })}
        </>
      )}

      
    </div>
  );
}

export default CharityDetails;
