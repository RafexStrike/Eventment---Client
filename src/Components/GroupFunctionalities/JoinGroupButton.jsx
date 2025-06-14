import React, { useContext } from "react";
import Lottie from "lottie-react";
import loveIcon from "../../assets/Lottie-React-Love-Icon.json";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../../JWT/Hooks/useAxiosSecure";

const JoinGroupButton = ({ groupDetails }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  // const userEmail = user.email;
  const { email } = user;
  // const { email } = groupDetails;
  const { _id, ...groupDetailsWithOutId } = groupDetails;
  const groupID = groupDetails._id;
  const dataToSend = {
    ...groupDetailsWithOutId,
    email,
    groupID,
  };
  const handleJoinGroupButton = () => {
    // console.log(email);
    // fetch("https://assignment-11-eventment-server.vercel.app/joinedEvent", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataToSend),
    // })
    axiosSecure
      .post("/joinedEvent", dataToSend)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Joined!",
          text: "You have successfully joined the event.",
        });

        console.log("Success:", res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Already Joined",
            text: "You have already joined this event!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
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
