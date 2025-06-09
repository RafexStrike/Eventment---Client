import React, { useContext } from "react";
import Lottie from "lottie-react";
import loveIcon from "../../assets/Lottie-React-Love-Icon.json";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import Swal from "sweetalert2";

const JoinGroupButton = ({ groupDetails }) => {
  const { user } = useContext(AuthContext);
  // const userEmail = user.email;
  const { email } = user;
  // const { email } = groupDetails;
  const { _id, ...groupDetailsWithOutId } = groupDetails;
  const groupID = groupDetails._id
  const dataToSend = {
    ...groupDetailsWithOutId,
    email,
    groupID
  };
  const handleJoinGroupButton = () => {
    console.log(email);
    fetch("http://localhost:3000/joinedEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          // throw new Error(`HTTP error! Status: ${response.status}`);
          Swal.fire({
            icon: "error",
            title: "Sorry",
            text: "You have already joined the event!",
          });
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Success:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <button
        onClick={handleJoinGroupButton}
        className="btn btn-primary btn-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-white bg-gradient-to-r from-primary to-primary-focus border-0"
      >
        Join Group
        <Lottie
          animationData={loveIcon}
          loop={true}
          style={{ height: 32, width: 32 }}
        />
      </button>
    </div>
  );
};

export default JoinGroupButton;
