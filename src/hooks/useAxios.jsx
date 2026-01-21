import React from "react";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blood-donation-web-app-server-b12a1.vercel.app",
  // baseURL: "http://localhost:3000",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
