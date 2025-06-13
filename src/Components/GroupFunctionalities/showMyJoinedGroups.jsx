import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import { Link } from "react-router";
import useAxiosSecure from "../../JWT/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ShowMyJoinedGroups = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { email } = user;
  const [myEvents, setMyEvents] = useState([]);

  // fetch(`http://localhost:3000/joinedEvent/${email}`)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setMyEvents(data);
  //   })
  //   .catch((error) => {
  //     console.error("Fetch error:", error);
  //   });

  useEffect(() => {
    axiosSecure
      .get(`/joinedEvent?email=${email}`)
      .then((res) => {
        const result = res.data;
        setMyEvents(result);
        // console.log("Success:", result);

        // Swal.fire({
        //   icon: "success",
        //   title: "Joined!",
        //   text: "You have successfully joined the event.",
        // });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });

        console.error("Error:", error);
      });
  }, [user, axiosSecure, email]);
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-24  rounded-xl">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>About</th>
              <th>Event Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myEvents.map((event, index) => (
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={event.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{event.eventTitle}</div>
                      <div className="text-sm opacity-50">
                        {event.eventType}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {event.description}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {event.eventType}
                  </span>
                </td>
                <td>{event.startDate}</td>
                <th>
                  <Link
                    to={`/groups/get/${event.groupID}`}
                    className="btn btn-primary btn-xs"
                  >
                    View Group
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>About</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default ShowMyJoinedGroups;
