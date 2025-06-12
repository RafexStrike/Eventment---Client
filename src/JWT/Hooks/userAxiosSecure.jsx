import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, bidayPrithibi } = useContext(AuthContext);

  axiosInstance.interceptors.request.use(async (config) => {
    if (user) {
      const token = await user.getIdToken();
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      //   if (error.status === 401 || error.status === 403)
      if (error.response?.status === 401 || error.response?.status === 403) {
        bidayPrithibi()
          .then(() => {
            console.log(
              "the user has been signed out bacause of 401 or 403 status code."
            );
            navigate("/login");
          })
          .catch((error) => {
            console.log("error from interceptor", error);
          });
      }
      console.log("error from interceptor", error.response);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
