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

import bg from '../../../assets/HomePage/HeroSection/image.png'

const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="mb-8 font-bold text-2xl sm:text-3xl md:text-4xl">EVENTS</h2>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 relative z-10">
        <EventCard image={EVENT_1} altImage={EVENT_1_ALT} title="HACKATHON" description="25th-26th Oct"/>
        <EventCard image={EVENT_2} altImage={EVENT_2_ALT} title="DESIGNATHON" description="25th-26th Oct" />
        <EventCard image={EVENT_3} altImage={EVENT_3_ALT} title="CASE STUDY" description="25th Oct" />
        <EventCard image={EVENT_4} altImage={EVENT_4_ALT} title="PANEL DISCUSSION" description="25th Oct" />
      </div>

      <img src={bg} alt="image" width={600} height={600} className="right-0 absolute z-0 mt-[-50px] "/>
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
      onClick={() => {
        if(title==='HACKATHON'){
          navigate("/hackathon");
        }
        if(title==='DESIGNATHON'){
          navigate("/designathon");
        }
        if(title==='CASE STUDY'){
          navigate("/caseStudy");
        }
        if(title==='PANEL DISCUSSION'){
          navigate("/panelDiscussion");
        }
        }}
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
