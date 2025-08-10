import React, { useContext } from "react";
import { AuthContext } from "../Contexts/Authentication/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const locationOfThePrivateRouteThatTherPersonIsTryingToVisit = useLocation();

  const { user, isLoadingDone } = useContext(AuthContext);

  if (isLoadingDone === false) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
          <span className="loading loading-ball loading-xl"></span>
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <Navigate
        state={locationOfThePrivateRouteThatTherPersonIsTryingToVisit?.pathname}
        to={`/login`}
      ></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
