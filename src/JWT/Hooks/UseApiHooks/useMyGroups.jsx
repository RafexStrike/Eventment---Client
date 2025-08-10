import React from "react";
import useAxiosSecure from "../useAxiosSecure";

const useMyApplicationAPI = () => {
  const axiosSecure = useAxiosSecure();

  const myApplicationsPromise = (email) => {
    if (!email) {
      return Promise.reject(new Error('Email is required'));
    }
    
    return axiosSecure
      .get(`/applicantData?email=${email}`)
      .then((res) => res.data)
      .catch((error) => {
        console.error('Error fetching applications:', error);
        throw error;
      });
  };

  return {
    myApplicationsPromise,
  };
};

export default useMyApplicationAPI;
