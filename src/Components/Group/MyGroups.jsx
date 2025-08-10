import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import MyGroupTable from "./MyGroupTable";
import useAxiosSecure from "../../JWT/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  // const allGroupsFetchedFromDB = useLoaderData();

  // const myOwnCreatedGroups = allGroupsFetchedFromDB.filter(
  //   (myCreatedGroup) => myCreatedGroup.email == user.email
  // );

  const [initialGroups, setInitialGroups] = useState([]);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/events?email=${email}`)
      .then((res) => {
        const result = res.data;
        setInitialGroups(result);
      })
      .catch((error) => {
        console.log("sorry there has been an error", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong loading the events. Please try again!",
        });
      });
  },[email, axiosSecure]);

  if (initialGroups.length != 0) {
    return (
      <div className="max-w-6xl mx-auto my-6">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-base-300">
              <tr>
                <th>Image</th>
                <th>Event Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Location</th>
                <th>Max Members</th>
                <th>Start Date</th>
                <th>Creator</th>
                <th>Email</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {initialGroups.map((oneGroupData) => (
                <MyGroupTable
                  key={oneGroupData._id}
                  oneGroupData={oneGroupData}
                  initialGroups={initialGroups}
                  setInitialGroups={setInitialGroups}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-6xl mx-auto my-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-base-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="card-title text-2xl mb-2 justify-center">
              No Events Created Yet
            </h2>
            <p className="text-base-content/70 mb-4">
              You haven't created any events yet. Start building your community
              by creating your first events!
            </p>
            <div className="card-actions justify-center">
              <Link to={`/createGroup`} className="btn btn-primary">
                Create Your First Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MyGroups;
