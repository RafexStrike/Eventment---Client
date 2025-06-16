import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import GroupCard from "../Components/Group/GroupCard";
import { motion } from "framer-motion";

const AllGroups = () => {
  const [allGroupsFetchedFromDB, setAllEventsFetchedFromDB] = useState([]);

  const [filterType, setFilterType] = useState("");
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        filterType || searchText
          ? `https://assignment-11-server-side-public.onrender.com/events/get?type=${filterType}&search=${searchText}`
          : `https://assignment-11-server-side-public.onrender.com/events/get`
      );

      const data = await res.json();
      setAllEventsFetchedFromDB(data);
    };
    fetchEvents();
  }, [filterType, searchText]);

  // useEffect(()=>{
  //   const fetchSearchedResults = async() =>{
  //     const res = await fetch(
  //       searchText ? `https://assignment-11-server-side-public.onrender.com/events/get`
  //     )
  //   }
  // })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 md:px-0 max-w-6xl mx-auto mt-20 mb-28"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Discover Events
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find and join events that match your interests. Connect with
          like-minded people and make a difference together.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-base-200 p-6 rounded-xl shadow-lg">
        {/* Search Bar */}
        <div className="w-full md:w-1/2">
          <label className="input input-bordered flex items-center gap-2 bg-base-100">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              placeholder="Search events..."
              onChange={(event) => setSearchText(event.target.value)}
            />
          </label>
        </div>

        {/* Filter Dropdown */}
        <div className="w-full md:w-1/3">
          <select
            className="select select-bordered w-full bg-base-100"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
          </select>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGroupsFetchedFromDB.map((oneGroupData) => (
          <motion.div
            key={oneGroupData._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GroupCard oneGroupData={oneGroupData} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {allGroupsFetchedFromDB.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Groups Found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
          {/* Info Note for First-Time Users */}
          <div className="mt-4 text-sm text-center text-warning bg-base-200 p-3 rounded-md mb-8">
            <strong>Note:</strong> If you're visiting this section for the first
            time and don't see any events, please try reloading the page. It may
            take a few moments for the backend server to wake up.
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AllGroups;
