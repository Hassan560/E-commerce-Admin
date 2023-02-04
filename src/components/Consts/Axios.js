import axios from "axios";

// const URL = process.env.BACKEND_URL;

const instance = axios.create({
  baseURL: 'http://192.168.1.109:5000',
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
