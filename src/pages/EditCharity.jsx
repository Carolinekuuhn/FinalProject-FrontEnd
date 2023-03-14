import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // after we edit, we go back to the project list

function EditCharity() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const navigate = useNavigate(); // store in variable so now we can use this function   (to redirect)

  const { id } = useParams();

  const getCharity = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/charity/${id}`
      ); // we could just copy-paste the url, but problems: by deployment we won't connect to localhost! -> it needs to be a variable  **
      setName(response.data.name);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCharity = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/charity/${id}`);
      navigate("/charity");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharity();
  }, []); // we don't need to write [id] here

  const handleSubmit = async (e) => {
    e.preventDefault();

    // axios is syncronous, so we transfor the function into a async function
    const body = { name, description };
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/charity/${id}`,
        body
      );
      navigate(`/charity/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="signupFrm">
        <h1 className="title"> Edit Profile: </h1>
        <div className="inputContainer">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
            className="input"
          />
        </div>

        <div className="inputContainer">
          <div className="col-md-3">
            <label htmlFor="urgencyNumber" className="urgencyNumber" id="label">
              Urgency
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
              <option value="" className="submitBtn">
                Choose...
              </option>
              <option value="Not Urgent">1</option>
              <option value="A bit Urgent">2</option>
              <option value="Urgent">3</option>
            </select>
          </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="description" className="label">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescription}
            className="input"
          />
        </div>

        <div className="inputContainer">
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
        </div>

        <button type="submit" className="submitBtn">
          Edit Profile
        </button>
      </form>

      <button onClick={deleteProject} className="submitBtn">
        Delete Account
      </button>
    </section>
  );
}

export default EditProject;
