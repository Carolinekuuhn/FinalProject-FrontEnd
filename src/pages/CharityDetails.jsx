import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CreateReview from "../components/CreateReview";
import { Card } from "react-bootstrap";

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

  useEffect(() => {
    getCharity();
  }, []);

  return (
    <div>
      {charity && (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={charity.image} alt="CharityLogo" />
            <Card.Body>
              <Card.Title> {charity.name} </Card.Title>
              <Link
                to={charity.urlLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {charity.urlLink}
              </Link>
              <Card.Text>{charity.description}</Card.Text>
            </Card.Body>

            <CreateReview charityId={charity._id} />
            {charity.reviews.map((review) => {
              return <Card.Text>{review.userComment}</Card.Text>;
            })}
          </Card>
        </>
      )}
    </div>
  );
}

export default CharityDetails;
