import React from 'react';
import logo from '../image/logo.png';
import back from '../image/back.png';
import box from '../image/box.png';
import calander from '../image/calander.png';
import people from '../image/people.png';

function Event() {
  return (
    <div>
      {/* Responsive Header */}
      <div className="container flex items-center pt-2 px-4 lg:px-10">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <div className="ml-auto flex space-x-3">
          <a href="#about" className="tab p-3 text-xs md:text-base lg:p-7 font-sans text-white">About</a>
          <a href="#speakers" className="tab p-3 text-xs md:text-base lg:p-7 font-sans text-white">Speakers</a>
          <a href="#events" className="tab p-3 text-xs md:text-base lg:p-7 font-sans text-white">Events</a>
          <a href="#faq" className="tab p-3 text-xs md:text-base lg:p-7 font-sans text-white">FAQ</a>
          <a href="#sponsors" className="tab p-3 text-xs md:text-base lg:p-7 font-sans text-white">Sponsors</a>
        </div>
      </div>

      {/* Title Section */}
      <div className="title relative">
        <img 
          src={back} 
          alt="Background" 
          className="pt-7 absolute inset-0 w-[200px] h-[200px] object-cover opacity-80" 
          style={{ left: '50%', transform: 'translateX(-50%)' }} 
        />
        <p className="relative z-10 mt-7 text-4xl sm:text-5xl lg:text-7xl text-white text-center pt-20 font-serif">
          Events
        </p>
      </div>

      {/* Event Sections */}
      {[
        { title: 'HACKATHON', date: '25th Oct - 26th Oct', participants: '1-4 Participants', paragraph: 'Join the ultimate coding marathon.' },
        { title: 'DESIGNATHON', date: '25th Oct - 26th Oct', participants: '1-3 Participants', paragraph: 'Create stunning designs in this creative challenge.' },
        { title: 'CASE STUDY', date: '25th Oct', participants: '1-3 Participants', paragraph: 'Analyze and present real-world case studies.' },
        { title: 'PANEL DISCUSSION', date: '25th Oct', participants: 'Individual', paragraph: 'Engage in insightful discussions with experts.' },
        { title: 'FILM MAKING', date: '25th Oct - 26th Oct', participants: '1-3 Participants', paragraph: 'Showcase your film-making talent.' },
        { title: 'ROASTER BOASTER', date: '25th Oct', participants: '2 Participants', paragraph: 'Enjoy fun-filled roast and banter.' },
        { title: 'TREASURE HUNT', date: '25th Oct', participants: '1-3 Participants', paragraph: 'Embark on an exciting treasure hunt.' }
      ].map((event, index) => (
        <div key={index} className="container mx-auto mt-10 lg:mt-40 max-w-5xl bg-neutral-950 p-6 lg:p-10 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section (Image) */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
            </div>
            
            {/* Right Section (Title, Paragraph, Date, Participants) */}
            <div className="w-full lg:w-2/3 pl-0 lg:pl-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{event.title}</h2>
              <p className="text-base md:text-lg text-white mb-6">{event.paragraph}</p>

              {/* Date and Participants Info */}
              <div className="flex items-center space-x-4 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <img src={calander} alt="Calendar" className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="text-sm md:text-lg text-white">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={people} alt="Team" className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="text-sm md:text-lg text-white">{event.participants}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Event;


