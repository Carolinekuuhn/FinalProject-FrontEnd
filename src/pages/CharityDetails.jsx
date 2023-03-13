import React from "react";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CharityDetails() {
  const [charity, setCharity] = useState(null);

  const { id } = useParams();

  const getCharity = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/charities/${id}`
      );

      console.log(response.data);
      setProject(response.data);
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
          <p>{charity.description}</p>
        </>
      )}

     {/*{project &&
        project.tasks.map((task) => {
          return (
            <div key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          );
        })}

      {project && (
        <Link to={`/projects/edit/${project._id}`}> Edit project</Link>
      )} 
      
      */}

    </div>
  );
}

export default CharityDetails;