import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/Authentication/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import groupIcon from "../assets/Lottie-Animation.json";
// the next two lines are for date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateGroupPage = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;
  const email = user.email || user.providerData[0].email;
  const [selectedHobby, setSelectedHobby] = useState("");
  const [isTheDropDownOpen, setIsTheDropDownOpen] = useState(false);
  const iAmGonnaSendYouTo = useNavigate();
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
    const isActive = true;

    // Check if hobby category is selected
    if (
      !selectedHobby ||
      !eventTitle ||
      !eventType ||
      !meetingLocation ||
      !startDate ||
      !imageUrl ||
      !maxMembers
    ) {
      Swal.fire({
        icon: "warning",
        title: "Event Type is missing",
        text: "Please look out for the dropdown and select an Event Type!",
      });
      return;
    }

    const createdGroupInfoObject = {
      eventTitle,
      eventType,
      description,
      meetingLocation,
      maxMembers,
      startDate,
      imageUrl,
      displayName,
      email,
      isActive,
    };

    fetch("http://localhost:3000/events/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createdGroupInfoObject),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.insertedId) {
          console.log("successfully posted the data bruh", result);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          iAmGonnaSendYouTo("/myGroups/get");
        }
      })
      .catch((error) => {
        console.log("sorry there has been an error", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className=" px-4 md:px-0  max-w-6xl mx-auto mt-20 mb-28">
      <div className="">
        <h1 className="my-4 text-4xl text-center">Create a new group</h1>
        <p className="mb-6 text-center max-w-4xl mx-auto">
          Bring people together around your passion. Fill out the form below to
          start a new hobby group, share your interests, and meet like-minded
          members.
        </p>
      </div>
      <div className="rounded-lg p-4 shadow-md">
        <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Event Name<span className="text-red-500">*</span>
              </legend>
              <input
                name="eventTitle"
                type="text"
                className="input w-full"
                placeholder="What should your group be called"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Event Type<span className="text-red-500">*</span>
              </legend>

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
              <legend className="fieldset-legend">
                Description
                <span className="font-extralight text-sm">(optional)</span>
              </legend>
              <input
                name="description"
                type="text"
                className="input w-full"
                placeholder="Tell us something about your group"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Meeting Location<span className="text-red-500">*</span>
              </legend>
              <input
                name="meetingLocation"
                type="text"
                className="input w-full"
                placeholder="Where do you guys wanna meet up"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Max Members<span className="text-red-500">*</span>
              </legend>
              <input
                name="maxMembers"
                type="number"
                className="input w-full"
                placeholder="Maximum number of people you want to allow"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Start Date<span className="text-red-500">*</span>
              </legend>
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
              <legend className="fieldset-legend">
                User Email<span className="text-red-500">*</span>
              </legend>
              <input
                placeholder="Enter your email"
                name="userEmail"
                type="text"
                className="input w-full "
                defaultValue={email}
                required
                // readOnly
              />
            </fieldset>
          </div>
          <fieldset className="fieldset mt-8">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              name="imageUrl"
              type="url"
              className="input w-full "
              placeholder="Upload your photo somewhere and paste the URL here"
            />
          </fieldset>

          <div>
            <button className="mt-4 btn w-full">
              Create Group
              <Lottie
                animationData={groupIcon}
                loop={true}
                style={{ height: 32, width: 32 }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupPage;
