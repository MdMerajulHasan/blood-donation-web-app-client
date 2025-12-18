import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
const axiosSecure = axios.create({ baseURL: "http://localhost:3000" });
const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    // request interceptor runs before request of axiosSecure each time
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    // response interceptor runs after each response of axiosSecure
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user]);
  return axiosSecure;
};

export default useAxiosSecure;
