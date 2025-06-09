import React from "react";
import { Link } from "react-router";

const GroupCard = ({ oneGroupData }) => {
  const { imageUrl, eventTitle, description, _id } = oneGroupData;
  //   console.log(_id)
  
  return (
    <div className="group cursor-pointer">
      <div className="card bg-base-100 image-full w-96 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-base-200 rounded-2xl overflow-hidden">
        <figure className="relative overflow-hidden h-64">
          <img 
            src={imageUrl} 
            alt={eventTitle || "Group"} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
        </figure>
        
        <div className="card-body relative z-10 p-6">
          <h2 className="card-title text-2xl font-bold text-white mb-3 drop-shadow-lg">
            {eventTitle}
          </h2>
          <p className="text-gray-100 leading-relaxed mb-4 drop-shadow-md line-clamp-3">
            {description}
          </p>
          
          <div className="card-actions justify-end mt-auto">
            <Link 
              to={`/groups/get/${_id}`} 
              className="btn btn-primary bg-gradient-to-r from-primary to-primary-focus border-0 hover:from-primary-focus hover:to-primary text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;