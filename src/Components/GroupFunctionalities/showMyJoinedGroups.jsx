import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";

const ShowMyJoinedGroups = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const [myEvents, setMyEvents] = useState([])

  fetch(`http://localhost:3000/joinedEvent/${email}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); 
      setMyEvents(data)
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
  return <div>
    <h1>{myEvents.length}</h1>

  </div>;
};

export default ShowMyJoinedGroups;
