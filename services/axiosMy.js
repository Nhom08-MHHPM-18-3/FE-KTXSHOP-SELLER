import axios, { AxiosError, AxiosResponse } from "axios";
import queryString from "query-string";
const baseURL = process.env.URL_MY_API;

const axiosMy = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    // Authorization: token,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosMy.interceptors.response.use(
  (res) => {
    if (res.data.result === 0) {
      console.log("Data empty");
    }
    return res;
  },
  (err) => {
    if (err.response?.status === 401) {
      console.log("Error 401");
    }
    throw err;
  }
);

export default axiosMy;
