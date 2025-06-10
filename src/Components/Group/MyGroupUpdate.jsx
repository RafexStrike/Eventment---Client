import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
// the next two lines are for date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyGroupUpdate = () => {
  const groupData = useLoaderData();
//   console.log(groupData);
const iAmGonnaSendYouTo = useNavigate()

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const [selectedHobby, setSelectedHobby] = useState("");
  const [isTheDropDownOpen, setIsTheDropDownOpen] = useState(false);
  const handleCategorySelection = (hobby) => {
    setSelectedHobby(hobby);
    setIsTheDropDownOpen(!isTheDropDownOpen);
  };
  const [startingDate, setStartingDate] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const eventTitle = event.target.eventTitle.value;
    const eventType = selectedHobby;
    const description = event.target.description.value;
    const meetingLocation = event.target.meetingLocation.value;
    const maxMembers = event.target.maxMembers.value;
    const startDate = startingDate.toISOString().split("T")[0];
    const imageUrl = event.target.imageUrl.value;

    const updatedGroupInfoObject = {
      eventTitle,
      eventType,
      description,
      meetingLocation,
      maxMembers,
      startDate,
      imageUrl,
      displayName,
      email,
    };

    fetch(`http://localhost:3000/myEvent/put/${groupData._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedGroupInfoObject),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          console.log("successfully updated the data bruh", result);
            
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your group data has been updated!",
            showConfirmButton: false,
            timer: 1500,
          });
          iAmGonnaSendYouTo('/myGroups/get')
        }
      })
      .catch((error) => {
        console.log("sorry there has been an error", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong updating the data:( Please try again!",
        });
      });
  };
  return (
    <div className=" px-4 md:px-0  max-w-6xl mx-auto mt-20 mb-28">
      <div className="">
        <h1 className="my-4 text-4xl text-center">Update your group info</h1>
        {/* <p className="mb-6 text-center max-w-4xl mx-auto">
          Bring people together around your passion. Fill out the form below to
          start a new hobby group, share your interests, and meet like-minded
          members.
        </p> */}
      </div>
      <div className="rounded-lg p-4 shadow-md">
        <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Event Name</legend>
              <input
                name="eventTitle"
                type="text"
                className="input w-full"
                placeholder="What should your group be called"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Event Type</legend>

              <div className="dropdown  ">
                <div
                  onClick={() => {
                    setIsTheDropDownOpen(!isTheDropDownOpen);
                    console.log(isTheDropDownOpen);
                  }}
                  tabIndex={0}
                  role="button"
                  className=" w-full btn bg-none"
                >
                  {selectedHobby || "Select your hobby category"}
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
                >
                  <li>
                    <a
                      onClick={() =>
                        handleCategorySelection("Drawing & Painting")
                      }
                    >
                      Drawing & Painting
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Photography")}>
                      Photography
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Video Gaming")}>
                      Video Gaming
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Fishing")}>
                      Fishing
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Running")}>
                      Running
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Cooking")}>
                      Cooking
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Reading")}>
                      Reading
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Writing")}>
                      Writing
                    </a>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Description</legend>
              <input
                name="description"
                type="text"
                className="input w-full"
                placeholder="Tell us something about your group"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Meeting Location</legend>
              <input
                name="meetingLocation"
                type="text"
                className="input w-full"
                placeholder="Where do you guys wanna meet up"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Max Members</legend>
              <input
                name="maxMembers"
                type="text"
                className="input w-full"
                placeholder="Maximum number of people you want to allow"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Start Date</legend>
              <DatePicker
                placeholderText="Select a start date"
                name="startDate"
                type="date"
                className="input w-full"
                dateFormat="yyyy-MM-dd"
                selected={startingDate}
                onChange={(date) => {
                  setStartingDate(date);
                  console.log(date);
                }}
                required
                minDate={new Date()}
              />
            </fieldset>

            <fieldset className="fieldset mt-8">
              <legend className="fieldset-legend">User Name</legend>
              <input
                name="userName"
                type="text"
                className="input w-full "
                value={displayName}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset mt-8">
              <legend className="fieldset-legend">User Email</legend>
              <input
                name="userEmail"
                type="text"
                className="input w-full "
                value={email}
                required
                readOnly
              />
            </fieldset>
          </div>
          <fieldset className="fieldset mt-8">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              name="imageUrl"
              type="text"
              className="input w-full "
              placeholder="Upload your photo somewhere and paste the URL here"
            />
          </fieldset>
          <input type="submit" className="mt-4 btn w-full" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default MyGroupUpdate;
