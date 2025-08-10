import React, { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

// Create a singleton axios instance outside the hook
const axiosInstance = axios.create({
  baseURL: "https://assignment-11-server-side-public.onrender.com",
});

let interceptorsConfigured = false;

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, bidayPrithibi } = useContext(AuthContext);

  useEffect(() => {
    // Only configure interceptors once
    if (!interceptorsConfigured) {
      interceptorsConfigured = true;

      // Request interceptor
      axiosInstance.interceptors.request.use(
        async (config) => {
          if (user) {
            const token = await user.getIdToken();
            config.headers.authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      // Response interceptor
      axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
          const status = error.response?.status;
          
          // Only handle auth errors (401/403)
          if (status === 401 || status === 403) {
            try {
              await bidayPrithibi();
              console.log("User signed out due to auth error");
              
              Swal.fire({
                icon: "error",
                title: "Session Expired",
                text: "Please log in again.",
                showConfirmButton: true,
              }).then(() => {
                navigate("/login");
              });
            } catch (signOutError) {
              console.log("Error during sign out:", signOutError);
            }
          } else {
            // For other errors (404, 500, etc.), just log and reject
            console.log("Request failed with status:", status, error.message);
          }
          
          return Promise.reject(error);
        }
      );
    }
  }, [user, navigate, bidayPrithibi]);

  return axiosInstance;
};

export default useAxiosSecure;