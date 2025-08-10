import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Lottie-Animation.json";

const LottieReact = () => {
  return (
    <div className="w-64 h-64">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieReact;
