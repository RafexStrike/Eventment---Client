import React from "react";

const Logo = () => {
  return (
    <div className="inline-block transform hover:scale-105 transition-transform duration-300">
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main circle representing gathering/community */}
        <circle 
          cx="20" 
          cy="20" 
          r="18" 
          fill="#00736B"
          className="transition-all duration-300 hover:fill-[#008075]"
        />
        
        {/* Abstract people/gathering symbols */}
        <path
          d="M12 22C14.5 16 25.5 16 28 22"
          stroke="#F3EDDC"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        
        {/* Decorative accent elements */}
        <circle 
          cx="20" 
          cy="14" 
          r="4" 
          fill="#FF9FA0"
          className="transition-all duration-300 hover:fill-[#ffb5b6]"
        />
      </svg>
    </div>
  );
};

export default Logo;