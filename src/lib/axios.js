import axios from "axios";

const BASE_URL = import.meta.env.MODE === 'https://knowly-server-1.onrender.com'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
