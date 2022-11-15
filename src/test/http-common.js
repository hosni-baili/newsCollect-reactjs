import axios from "axios";

export default axios.create({
  baseURL: "api",
  mode: 'no-cors',
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});