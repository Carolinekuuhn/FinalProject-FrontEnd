import axios from "axios";

class CharityService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
    });
    // here we intercept every request that uses this api and call a middleware function
    this.api.interceptors.request.use((config) => {
      // inside this middleware function the first thing we do is get the token from the localstorage

      const storedToken = localStorage.getItem("authToken");

      // if there is a token we're going to add it to the headers of the request
      if (storedToken) {
        // here we pass to the headers an object with Authorization and the Bearer token
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // Here we can create the methods to connect to the API

  // Get All Projects
  getAllCharities = () => {
    return this.api.get("/api/charities");
    // the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
  }
    
//Create a project 
/*
  };createProject = (body) => {
return this.api.post ("/api/projects", body)
};
}
*/
//get by ID/details

getSingleCharity = (id) => {
    return this.api.get (`/api/projecy `)
}
 
 
}
const charityService = new CharityService();

export default charityService;