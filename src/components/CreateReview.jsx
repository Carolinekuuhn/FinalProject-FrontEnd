import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import "../pages/charityG.css";

const CreateReview = (props) => {
  const { setUpdated, charityId } = props;
  const [rating, setRating] = useState("");
  const [userComment, setUserComment] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/reviews`,
        { rating, userComment, userId: user._id, charityId }
      );
      console.log(response.data);
      // Reset form
      setRating("");
      setUserComment("");
      setUpdated(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="createReview">
        {/*  <div >
        <label htmlFor="rating"> Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </div>*/}
        <br></br>
        <div>
          <label htmlFor="comment">
            <h5 className="titleHome"> Create a Review :</h5>
          </label>
          <br />
          <textarea
            id="comment"
            value={userComment}
            onChange={(event) => setUserComment(event.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="submitBtnHome">
          Submit
        </button>
      </div>
      <br></br>
      <br></br>
    </form>
  );
};

export default CreateReview;
