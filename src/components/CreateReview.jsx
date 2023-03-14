import React, { useState } from 'react';
import axios from 'axios';

const CreateReview = () => {
  const [rating, setRating] = useState('');
  const [userComment, setUserComment] = useState('');
  const [userId, setUserId] = useState('0jj');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/reviews`, { rating, userComment, userId: "640b16b650d26c0f37bce5f9" });
      console.log(response.data);
      // Reset form
      setRating('');
      setUserComment('');
      setUserId('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rating"> Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={userComment}
          onChange={(event) => setUserComment(event.target.value)}
        ></textarea>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateReview;
