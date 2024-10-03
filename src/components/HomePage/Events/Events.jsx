import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import EVENT_1 from "../../../assets/HomePage/HeroSection/event1.png";
import EVENT_2 from "../../../assets/HomePage/HeroSection/event2.png";
import EVENT_3 from "../../../assets/HomePage/HeroSection/event3.png";
import EVENT_4 from "../../../assets/HomePage/HeroSection/event4.png";

import EVENT_1_ALT from "../../../assets/HomePage/HeroSection/event1alt.png";
import EVENT_2_ALT from "../../../assets/HomePage/HeroSection/event2alt.png";
import EVENT_3_ALT from "../../../assets/HomePage/HeroSection/event3alt.png";
import EVENT_4_ALT from "../../../assets/HomePage/HeroSection/event4alt.png";

const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="mb-8 font-bold text-2xl sm:text-3xl md:text-4xl">EVENTS</h2>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
        <EventCard image={EVENT_1} altImage={EVENT_1_ALT} title="HACKATHON" description="Lorem" />
        <EventCard image={EVENT_2} altImage={EVENT_2_ALT} title="DESIGNATHON" description="Lorem" />
        <EventCard image={EVENT_3} altImage={EVENT_3_ALT} title="CASE STUDY" description="Lorem" />
        <EventCard image={EVENT_4} altImage={EVENT_4_ALT} title="PANEL DISCUSSION" description="Lorem" />
      </div>
    </div>
  );
};

// New EventCard component for reusability
const EventCard = ({ image, altImage, title, description }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div
      className={`bg-[#141414] w-full rounded-xl p-4 h-[350px] overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer ${
        hovered ? "bg-[#6356fe] scale-105" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate("/events")} // Navigate on click
    >
      <div className="flex justify-center items-center h-2/3">
        <img 
          src={hovered ? altImage : image} 
          alt={title} 
          className="w-[220px] max-w-full max-h-full transition-all duration-300" 
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-xl">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Events;
