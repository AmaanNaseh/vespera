import React, { useState, useEffect, useRef } from "react";

import HERO_1X from "../../../assets/HomePage/HeroSection/hero1x.png";
import BACK_HERO from "../../../assets/HomePage/HeroSection/back-hero.png";
import STAR_2 from "../../../assets/HomePage/HeroSection/star-2-new.png";
import CONSTELLATIONS from "../../../assets/HomePage/HeroSection/constellations.png";

import "./HeroSection.css";

const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const clone = container.firstChild.cloneNode(true);
    container.appendChild(clone);

    let scrollSpeed = 0.5; // Speed of the scroll
    let lastScroll = 0;

    const scroll = () => {
      lastScroll += scrollSpeed;
      container.scrollLeft = lastScroll;

      // Reset the scroll position when reaching the end of the first image
      if (lastScroll >= container.scrollWidth / 2) {
        lastScroll = 0;
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(scroll);
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2024-10-25T08:00:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  //background: rgba(24, 24, 24, 1);


  return (
    <div>
      <div
        className="relative flex justify-center items-center bg-no-repeat bg-center mt-[-50px] w-full h-[402px] sm:h-[500px] sm:mt-[-20px] overflow-hidden"
        style={{ backgroundImage: `url(${BACK_HERO})`, backgroundRepeat:'no-repeat', backgroundSize:'contain' }}
      >
        <div className="relative">
          <h1 className="font-fogLighten ml-[-20px] text-[3.5rem] text-glow sm:text-[6rem] 2xl:text-[170px] xl:text-[150px] lg:text[140px] md:text-[100px] sm:ml-[-50px] mt-[70px]">
            Vespera
          </h1>
          <p className="font-fogLighten text-[1.5rem] text-center text-glow-date sm:text-[2rem] md:text-[3rem]">25.10.2024 - 26.10.2024</p>
          <img
      
            src={STAR_2}
            alt="Star"
            className="sm:top-[-70px] sm:right-[-20px] top-[-30px] right-[20px] absolute mr-[-100px] h-[12rem] sm:h-[17rem] md:h-[20rem]"
          />
        </div>
      </div>
      
      <div
        className=" relative my-6 border-t-2 sm:mt-[0px] mt-[-20px] whitespace-nowrap overflow-hidden"
        ref={scrollContainerRef}
      >
        <img
          src={CONSTELLATIONS}
          alt="Constellations"
          className="inline-block my-4 w-full min-w-[1440px] h-[76px]"
        />
      </div>

      <div className="grid grid-cols-4 bg-zinc-800 mx-auto p-4 rounded-lg w-[90%] max-w-[700px] h-auto">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center p-2 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 rounded-lg"
          >
            <svg
              // width="125"
              // height="126"
              viewBox="0 0 125 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="custom-hover-fill select-none group"
            >
              <path
                d="M115.708 60.6756C83.1324 50.4512 75.0624 42.3147 64.9153 9.47655C64.7253 9.0377 64.4125 8.66425 64.0151 8.40197C63.6177 8.1397 63.153 8 62.678 8C62.203 8 61.7383 8.1397 61.3409 8.40197C60.9435 8.66425 60.6306 9.0377 60.4407 9.47655C50.2954 42.3147 42.2255 50.4512 9.64796 60.6756C9.17039 60.8255 8.75288 61.1254 8.4564 61.5315C8.15992 61.9376 8 62.4285 8 62.9327C8 63.4369 8.15992 63.9279 8.4564 64.334C8.75288 64.7401 9.17039 65.04 9.64796 65.1899C42.2255 75.4105 50.2954 83.5469 60.4407 116.389C60.5898 116.869 60.8873 117.289 61.2897 117.587C61.6922 117.885 62.1786 118.046 62.678 118.046C63.1774 118.046 63.6638 117.885 64.0662 117.587C64.4687 117.289 64.7661 116.869 64.9153 116.389C75.0624 83.5469 83.1324 75.4105 115.708 65.1899C116.186 65.04 116.603 64.7401 116.9 64.334C117.196 63.9279 117.356 63.4369 117.356 62.9327C117.356 62.4285 117.196 61.9376 116.9 61.5315C116.603 61.1254 116.186 60.8255 115.708 60.6756Z"
                className="transition-colors duration-300 fill-white group"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#2D2D2D"
                fontSize="30"
                dy=".3em"
                className="group-hover:fill-white text-2xl transition-colors duration-300 fill-gray-900"
              >
                {value}
              </text>
            </svg>
            <h3 className="text-white">{label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
