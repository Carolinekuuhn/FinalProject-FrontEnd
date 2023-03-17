import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CreateReview from "../components/CreateReview";
import { Card } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import "./charityG.css";

function CharityDetails() {
  const [charity, setCharity] = useState(null);
  const [updated, setUpdated] = useState(true);
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const getCharity = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/charities/${id}`
      );
      setCharity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharity();
  }, []);

  useEffect(() => {
    getCharity();
    setUpdated(true);
  }, [updated]);

  const deleteReview = async (reviewId, charityId) => {
    try {
      setUpdated(false);
      const response = await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/api/delete-review/${reviewId}/${charityId}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="
    card3">
      {charity && (
        <>
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src={charity.image} alt="CharityLogo" />
            <Card.Body>
              <Card.Title className="titleGC2"> {charity.name} </Card.Title>
              <br />
              <Link
                to={charity.urlLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#1a3858"}}
              >
                {charity.urlLink}
              </Link>
              <br />
              <br />
              <Card.Text className="adjustText">{charity.description}</Card.Text>
            </Card.Body>
     
            <CreateReview charityId={charity._id} setUpdated={setUpdated}/>
            {charity.reviews.map((review) => {
              return (
                
                <div className="reviewsgroup">
                <Card.Text> {review.userId.name} : {review.userComment}</Card.Text>
                  {user._id === review.userId._id && (
                    <button className="submitBtnHome"
                      onClick={() => deleteReview(review._id, charity._id)}
                    >
                      Delete Review
                    </button>
              
                  )}
              
                </div>
              );
            
            })}
          </Card>
          
        </>
       
      )}
    </div>
  );
}

export default CharityDetails;
