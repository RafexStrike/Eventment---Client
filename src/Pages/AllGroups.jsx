import React from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../Components/Group/GroupCard";

const AllGroups = () => {
  const allGroupsFetchedFromDB = useLoaderData();



  return (
    <div className="px-4 md:px-0  max-w-6xl mx-auto mt-20 mb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGroupsFetchedFromDB.map((oneGroupData) => (
          <GroupCard key={oneGroupData._id} oneGroupData={oneGroupData}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
