import React, { useRef } from "react";
import Slider from "./Slider";
import FeaturedGroup from "../FeaturedGroups/FeaturedGroup";
import EventSponsorshipLayout from "../DummyStaticHomeComponents/EventSponsorship";
import SuccessStories from "../FeaturedGroups/SuccessStories";

const Home = () => {
  const eventsRef = useRef(null);
  const handleScrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Slider onJoinNowClick={handleScrollToEvents} />
      <div ref={eventsRef}>
        <FeaturedGroup></FeaturedGroup>
      </div>
      <EventSponsorshipLayout></EventSponsorshipLayout>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;
