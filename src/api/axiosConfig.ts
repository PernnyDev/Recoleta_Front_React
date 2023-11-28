import axios from 'axios';

//const baseURL = process.env.NODE_ENV === 'production'
//  ? process.env.REACT_APP_PRODUCTION_BASE_URL
//  : process.env.REACT_APP_LOCAL_BASE_URL;

const baseURL = "http://localhost:8080";

// Create an instance of Axios with custom configurations
const instance = axios.create({
  baseURL,
  timeout: 10000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // Add other headers as needed
  },
});

export default instance;