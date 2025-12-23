import React from "react";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blood-donation-web-app-server-b12a1.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
