import React, { useContext, useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import Lottie from "lottie-react";
import groupIcon from "../../assets/Lottie-Animation.json";
// the next two lines are for date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../JWT/Hooks/useAxiosSecure";

const MyGroupUpdate = () => {
  const groupData = useLoaderData();
  const iAmGonnaSendYouTo = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);
  const { displayName } = user;
  const email = user.email || user.providerData[0].email;

  const [selectedHobby, setSelectedHobby] = useState("");
  const [isTheDropDownOpen, setIsTheDropDownOpen] = useState(false);
  const [startingDate, setStartingDate] = useState(null);

  // Pre-populate form fields with existing data
  useEffect(() => {
    if (groupData) {
      setSelectedHobby(groupData.eventType || "");
      if (groupData.startDate) {
        setStartingDate(new Date(groupData.startDate));
      }
    }
  }, [groupData]);

  const handleCategorySelection = (hobby) => {
    setSelectedHobby(hobby);
    setIsTheDropDownOpen(!isTheDropDownOpen);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const eventTitle = event.target.eventTitle.value;
    const eventType = selectedHobby;
    const description = event.target.description.value;
    const meetingLocation = event.target.meetingLocation.value;
    const maxMembers = event.target.maxMembers.value;
    const startDate = startingDate
      ? startingDate.toISOString().split("T")[0]
      : null;
    const imageUrl = event.target.imageUrl.value;

    // Check if required fields are filled
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
        title: "Required fields are missing",
        text: "Please fill out all required fields including Event Type!",
      });
      return;
    }

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

    // fetch(`http://localhost:3000/myEvent/put/${groupData._id}?email=${email}`, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(updatedGroupInfoObject),
    // })
    //   .then((response) => response.json())
    axiosSecure
      .put(`/myEvent/put/${groupData._id}?email=${email}`, updatedGroupInfoObject)
      .then((res) => {
        const result = res.data;

        if (result.acknowledged) {
          console.log("successfully updated the data bruh", result);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your group data has been updated!",
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
          text: "Something went wrong updating the data:( Please try again!",
        });
      });
  };

  return (
    <div className=" px-4 md:px-0  max-w-6xl mx-auto mt-20 mb-28">
      <div className="">
        <h1 className="my-4 text-4xl text-center">Update your group info</h1>
        <p className="mb-6 text-center max-w-4xl mx-auto">
          Update your group details to keep your members informed about any
          changes to your hobby group.
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
                defaultValue={groupData?.eventTitle || ""}
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
                defaultValue={groupData?.description || ""}
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
                defaultValue={groupData?.meetingLocation || ""}
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
                defaultValue={groupData?.maxMembers || ""}
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
            <legend className="fieldset-legend">
              Photo URL<span className="text-red-500">*</span>
            </legend>
            <input
              name="imageUrl"
              type="url"
              className="input w-full "
              placeholder="Upload your photo somewhere and paste the URL here"
              defaultValue={groupData?.imageUrl || ""}
              required
            />
          </fieldset>

          <div>
            <button className="mt-4 btn w-full">
              Update Group
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

export default MyGroupUpdate;
