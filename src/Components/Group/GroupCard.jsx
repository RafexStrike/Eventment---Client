import React from "react";
import { Link } from "react-router";

const GroupCard = ({ oneGroupData }) => {
  const { imageUrl, eventTitle, description, _id } = oneGroupData;
  //   console.log(_id)
  
  return (
    <div className="group cursor-pointer w-80 h-96">
      <div className="relative w-full h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-base-200 rounded-2xl overflow-hidden">
        <figure className="relative overflow-hidden w-full h-full">
          <img 
            src={imageUrl} 
            alt={eventTitle || "Group"} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </figure>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-black/10">
          <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">
            {eventTitle}
          </h2>
          <p className="text-gray-100 leading-relaxed mb-4 drop-shadow-md line-clamp-2 text-sm">
            {description}
          </p>
          
          <div className="flex justify-end">
            <Link 
              to={`/groups/get/${_id}`} 
              className="btn btn-primary bg-gradient-to-r from-primary to-primary-focus border-0 hover:from-primary-focus hover:to-primary text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm"
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