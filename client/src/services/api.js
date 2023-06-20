import axios from "axios";

export default () => {
  // const baseUrl = "https://us-central1-pjzen-v2.cloudfunctions.net/app";
  const baseUrl = "http://localhost:5000/pjzen-v2/us-central1/app";
  return axios.create({ baseURL: baseUrl });
};
