import React from "react";
import { Link } from "react-router";

const NoJoinedGroupsMessage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 mb-24">
      <div className="text-center p-12  rounded-2xl shadow-lg">
        {/* Cute illustration using emojis */}
        <div className="text-8xl mb-6 animate-bounce">🎭</div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          No Events Yet?
        </h2>

        <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
          Looks like you haven't joined any events yet! Don't worry, there's a
          whole world of amazing events waiting for you to discover. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/groups"
            className="btn btn-primary btn-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🔍 Explore Events
          </Link>

          <Link
            to="/createGroup"
            className="btn btn-outline btn-lg px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            ➕ Create Your Own
          </Link>
        </div>

  
      </div>
    </div>
  );
};

export default NoJoinedGroupsMessage;
