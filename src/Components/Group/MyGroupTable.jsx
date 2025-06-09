import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyGroupTable = ({ oneGroupData, initialGroups, setInitialGroups }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteMyGroup = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        setIsDeleting(true);
        
        fetch(`http://localhost:3000/myEvent/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const finalGroupsAfterDelete = initialGroups.filter(
              (oneGroupFromTheInitialGroup) =>
                oneGroupFromTheInitialGroup._id !== _id
            );
            setInitialGroups(finalGroupsAfterDelete);
          })
          .finally(() => {
            setIsDeleting(false);
          });
      }
    });
  };
  

  const {
    eventTitle,
    eventType,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    displayName,
    email,
  } = oneGroupData;

  return (
    <tr className="hover:bg-base-200 transition-colors">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={imageUrl} alt={eventTitle} />
          </div>
        </div>
      </td>
      <td className="font-bold">{eventTitle}</td>
      <td>{eventType}</td>
      <td className="max-w-xs whitespace-normal">{description}</td>
      <td>{meetingLocation}</td>
      <td>{maxMembers}</td>
      <td>{startDate}</td>
      <td>{displayName}</td>
      <td>{email}</td>
      <td className="flex gap-2 justify-center">
        <Link 
        className="btn btn-primary btn-xs"
        to={`/myGroups/update/${oneGroupData._id}`}
        >Update</Link>
        <button
          onClick={() => handleDeleteMyGroup(oneGroupData._id)}
          className="btn btn-error btn-xs"
          disabled={isDeleting}
        >
          {isDeleting ? (
                 <div className="flex justify-center items-center h-screen">
                 <span className="loading loading-ball loading-xs"></span>
                 <span className="loading loading-ball loading-sm"></span>
                 <span className="loading loading-ball loading-md"></span>
                 <span className="loading loading-ball loading-lg"></span>
                 <span className="loading loading-ball loading-xl"></span>
               </div>
          ) : (
            "Delete"
          )}
        </button>
      </td>
    </tr>
  );
};

export default MyGroupTable;