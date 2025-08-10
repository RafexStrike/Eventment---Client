import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/Authentication/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import groupIcon from "../assets/Lottie-Animation.json";
// the next two lines are for date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../JWT/Hooks/useAxiosSecure";

const CreateGroupPage = () => {
  const axiosSecure = useAxiosSecure()
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

    // fetch("https://assignment-11-server-side-public.onrender.com/events/post", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(createdGroupInfoObject),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result.insertedId) {
    //       console.log("successfully posted the data bruh", result);

    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Group successfully created!",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       iAmGonnaSendYouTo("/myGroups/get");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("sorry there has been an error", error);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //     });
    //   });
    axiosSecure
    .post(`/events/post?email=${email}`, createdGroupInfoObject)
    .then((res) => {
      const result = res.data;

      if (result.acknowledged) {
        console.log("successfully updated the data bruh");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your group data has been updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        iAmGonnaSendYouTo("/groups");
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
    <div className="px-4 md:px-0 max-w-6xl mx-auto mt-20 mb-28">
  <div className="text-center">
    <h1 className="my-4 text-4xl font-bold text-primary">Create a new event</h1>
    <p className="mb-6 text-base max-w-3xl mx-auto text-base-content">
      Bring people together around your passion. Fill out the form below to start a new event, share your interests, and meet like-minded members!
    </p>
  </div>

  <div className="bg-base-100 rounded-xl p-6 shadow-lg">
    <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Event Title */}
        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            Event Name <span className="text-error">*</span>
          </legend>
          <input
            name="eventTitle"
            type="text"
            className="input input-bordered w-full"
            placeholder="What should your group be called"
            required
          />
        </fieldset>

        {/* Event Type */}
        {/* <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            Event Type <span className="text-error">*</span>
          </legend>
          <div className="dropdown w-full">
            <div
              onClick={() => setIsTheDropDownOpen(!isTheDropDownOpen)}
              tabIndex={0}
              role="button"
              className="btn w-full justify-between bg-base-200"
            >
              {selectedHobby || "Select your hobby category"}
            </div>
            {isTheDropDownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 shadow-md rounded-box w-full mt-2"
              >
                {[
                  "Cleanup",
                  "Plantation",
                  "Donation",
                  "Community Art",
                  "Education",
                  "Volunteering",
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="hover:bg-primary hover:text-primary-content transition-all"
                      onClick={() => handleCategorySelection(item)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </fieldset> */}

        {/* Event type starts TEMP */}
        <fieldset className="">
              <legend className="fieldset-legend font-semibold">
                Event Type<span className="text-red-500 font-semibold ">*</span>
              </legend>
              <div className="dropdown w-full  ">
                <div
                  onClick={() => {
                    setIsTheDropDownOpen(!isTheDropDownOpen);
                    // console.log(isTheDropDownOpen);
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
                    <a onClick={() => handleCategorySelection("Cleanup")}>
                      Cleanup
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Plantation")}>
                      Plantation
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Donation")}>
                      Donation
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Community Art")}>
                      Community Art
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Education")}>
                      Education
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleCategorySelection("Volunteering")}>
                      Volunteering
                    </a>
                  </li>
                </ul>
              </div>
            </fieldset>
        {/* Event type ends TEMP */}

        {/* Description */}
        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            Description{" "}
            <span className="font-light text-sm">(optional)</span>
          </legend>
          <input
            name="description"
            type="text"
            className="input input-bordered w-full"
            placeholder="Tell us something about your group"
          />
        </fieldset>

        {/* Location */}
        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            Meeting Location <span className="text-error">*</span>
          </legend>
          <input
            name="meetingLocation"
            type="text"
            className="input input-bordered w-full"
            placeholder="Where do you want to meet?"
            required
          />
        </fieldset>

        {/* Max Members */}
        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            Max Members <span className="text-error">*</span>
          </legend>
          <input
            name="maxMembers"
            type="number"
            className="input input-bordered w-full"
            placeholder="Maximum number of members"
            required
          />
        </fieldset>

        {/* Start Date */}
        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            Start Date <span className="text-error">*</span>
          </legend>
          <DatePicker
            placeholderText="Select a start date"
            name="startDate"
            className="input input-bordered w-full"
            dateFormat="yyyy-MM-dd"
            selected={startingDate}
            onChange={(date) => setStartingDate(date)}
            required
            minDate={new Date()}
          />
        </fieldset>

        {/* User Info */}
        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">User Name</legend>
          <input
            name="userName"
            type="text"
            className="input input-disabled w-full"
            value={displayName}
            readOnly
          />
        </fieldset>

        <fieldset>
          <legend className="mb-2 font-semibold text-base-content">
            User Email <span className="text-error">*</span>
          </legend>
          <input
            name="userEmail"
            type="text"
            className="input input-bordered w-full"
            defaultValue={email}
            required
          />
        </fieldset>
      </div>

      {/* Image URL */}
      <fieldset className="mt-6">
        <legend className="mb-2 font-semibold text-base-content">Photo URL</legend>
        <input
          name="imageUrl"
          type="url"
          className="input input-bordered w-full"
          placeholder="Paste a public image URL"
        />
      </fieldset>

      {/* Submit Button */}
      <button className="mt-8 btn  w-full flex items-center justify-center gap-2">
        Create Group
        <Lottie
          animationData={groupIcon}
          loop
          style={{ height: 32, width: 32 }}
        />
      </button>
    </form>
  </div>
</div>

  );
};

export default CreateGroupPage;
