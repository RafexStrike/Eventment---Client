import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import GroupCard from "../Components/Group/GroupCard";

const AllGroups = () => {
  
  const [allGroupsFetchedFromDB, setAllEventsFetchedFromDB] = useState([]);

  
  const [filterType, setFilterType] = useState("");
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        filterType || searchText
          ? `http://localhost:3000/events/get?type=${filterType}&search=${searchText}`
          : `http://localhost:3000/events/get`
      );

      const data = await res.json();
      setAllEventsFetchedFromDB(data);
    };
    fetchEvents();
  }, [filterType, searchText]);

 
  // useEffect(()=>{
  //   const fetchSearchedResults = async() =>{
  //     const res = await fetch(
  //       searchText ? `http://localhost:3000/events/get`
  //     )
  //   }
  // })

  return (
    <div className="px-4 md:px-0  max-w-6xl mx-auto mt-20 mb-28">
      {/* serach bar and filter drop down starts here*/}
      <div className="flex flex-row items-center justify-between mb-8">
        {/* search bar starts here */}
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
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
              required
              placeholder="Search"
              onChange={(event) => {
                setSearchText(event.target.value);
                console.log(searchText);
              }}
            />
          </label>
        </div>

        {/* search bar ends here */}
        {/* drop down starts */}
        <div>
          <select onChange={(e) => setFilterType(e.target.value)}>
            <option value="">All</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
          </select>
        </div>
        {/* drop down ends */}
      </div>
      {/* serach bar and filter drop down ends here*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGroupsFetchedFromDB.map((oneGroupData) => (
          <GroupCard
            key={oneGroupData._id}
            oneGroupData={oneGroupData}
          ></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
