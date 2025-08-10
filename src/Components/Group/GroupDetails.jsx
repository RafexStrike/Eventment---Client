import React from "react";
import { useLoaderData } from "react-router";
import JoinGroupButton from "../GroupFunctionalities/JoinGroupButton";
// import Lottie from "lottie-react";
// import loveIcon from "../../assets/Lottie-React-Love-Icon.json";

const GroupDetails = () => {
  const groupDetails = useLoaderData();

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
  } = groupDetails;

  const isGroupActive = new Date(startDate) > new Date();

  return (
    <div className="max-w-6xl mx-auto mt-6 mb-28 min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="card bg-base-100 shadow-2xl overflow-hidden rounded-3xl border border-base-300">
          {/* Mobile Stack, Desktop Side-by-side */}
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <figure className="lg:w-1/2 w-full relative overflow-hidden">
              <img
                src={imageUrl}
                alt={eventTitle}
                className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`badge badge-lg px-4 py-2 font-semibold shadow-lg ${
                    isGroupActive
                      ? "badge-success text-white"
                      : "badge-error text-white"
                  }`}
                >
                  {isGroupActive ? "Active" : "Inactive"}
                </span>
              </div>
            </figure>

            {/* Content Section */}
            <div className="card-body lg:w-1/2 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4 leading-tight">
                  {eventTitle}
                </h1>
                <div className="badge badge-primary badge-lg px-4 py-2 mb-4 font-medium">
                  {eventType}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-base-content-secondary text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-base-200 rounded-2xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-base-content-secondary">
                        Location
                      </p>
                      <p className="text-base font-semibold text-base-content">
                        {meetingLocation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-base-200 rounded-2xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-base-content-secondary">
                        Max Members
                      </p>
                      <p className="text-base font-semibold text-base-content">
                        {maxMembers}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-base-200 rounded-2xl p-4 sm:col-span-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-base-content-secondary">
                        Start Date
                      </p>
                      <p className="text-base font-semibold text-base-content">
                        {new Date(startDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creator Info */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-base-content mb-3">
                  Group Creator
                </h3>
                <div className="space-y-2">
                  <p className="text-base-content">
                    <span className="font-medium">Created by:</span>{" "}
                    {displayName}
                  </p>
                  <p className="text-base-content">
                    <span className="font-medium">Contact:</span>
                    <a
                      href={`mailto:${email}`}
                      className="link link-primary ml-2 hover:link-secondary transition-colors"
                    >
                      {email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="card-actions justify-center lg:justify-end">
                {isGroupActive ? (
                  // <button className="btn btn-primary btn-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-white bg-gradient-to-r from-primary to-primary-focus border-0">
                  //   Join Group<Lottie
                  //     animationData={loveIcon}
                  //     loop={true}
                  //     style={{ height: 32, width: 32 }}
                  //   />

                  // </button>
                  <JoinGroupButton groupDetails={groupDetails}></JoinGroupButton>
                ) : (
                  <div className="btn btn-disabled btn-lg px-8 py-3 rounded-full shadow-lg font-semibold">
                    Group No Longer Active
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
