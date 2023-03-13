import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignupCharity() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeofCharity, setTypeofCharity] = useState("");
  const [image, setImage] = useState("");
  const [urgencyNumber, setUrgencyNumber] = useState("");
  const [description, setDescritpion] = useState("");
  const [urlLink, setUrlLink] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleTypeofCharity = (e) => setTypeofCharity(e.target.value);

  const handleUrgencyNumber = (e) => setUrgencyNumber(e.target.value);
  const handleDescription = (e) => setDescritpion(e.target.value);
  const handleUrlLink = (e) => setUrlLink(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

  



    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signupcharity`,
        {
          email,
          name,
          password,
          typeofCharity,
          urgencyNumber,
          image,
          description,
          urlLink,
        }
      );
      console.log(response.data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleFileUpload = async (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, uploadData);
      setImage(response.data.fileUrl);
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }};

  const navigate = useNavigate();

  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        {/* <label htmlFor="UrgencyNumber">Urgency</label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={handleNumber}
        /> */}

        <div className="col-md-3">
          <label htmlFor="urgencyNumber" className="urgencyNumber">
            Number of Urgency
          </label>
          <select
            name="urgencyNumber"
            value={urgencyNumber}
            onChange={handleUrgencyNumber}
            className="form-select is-invalid"
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            <option value="">Choose...</option>
            <option value="Not Urgent">1</option>
            <option value="A bit Urgent">2</option>
            <option value="Urgent">3</option>
          </select>
        </div>
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="urlLink">Website Link:</label>
        <input
          type="text"
          id="urlLink"
          name="urlLink"
          value={urlLink}
          onChange={handleUrlLink}
          placeholder="Enter website link here"
        />

        <br></br>
        <br></br>
        <div className="mb-3">
          <input
            type="file"
            name="image"
           
            onChange={handleFileUpload}
            className="form-control"
            aria-label="file example"
            required
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="typeofCharity" className="typeofCharity">
            Type of Charity:
          </label>
          <select
            name="typeofCharity"
            value={typeofCharity}
            onChange={handleTypeofCharity}
            className="form-select is-invalid"
            id="validationServer05"
            aria-describedby="validationServer04Feedback"
            required
          >
            <option value="">Choose...</option>
            <option value="Animals">Animals</option>
            <option value="Domestic Violence">Domestic Violence</option>
            <option value="Homeless">Homeless</option>
            <option value="Environment">Environment</option>
          </select>
        </div>

        <br />
        <br />
        <br />
        <br />
        <button type="submit">Create account</button>
      </form>

      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </section>
  );
}

export default SignupCharity;
