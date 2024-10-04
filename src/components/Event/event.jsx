import React from 'react';
import logo from '../../assets/Event/logo.png';
import back from '../../assets/Event/back.png';
import box from '../../assets/Event/box.png';
import calander from '../../assets/Event/calander.png';
import people from '../../assets/Event/people.png';
import background from './assets/background.png';
import { useNavigate } from "react-router-dom";
import Footer from '../HomePage/Footer/Footer';

function Event() {
  const events = [
    { title: 'HACKATHON', date: '25th Oct - 26th Oct', participants: '1-4 Participants', paragraph: 'Join the ultimate coding marathon.' },
    { title: 'DESIGNATHON', date: '25th Oct - 26th Oct', participants: '1-3 Participants', paragraph: 'Create stunning designs in this creative challenge.' },
    { title: 'CASE STUDY', date: '25th Oct', participants: '1-3 Participants', paragraph: 'Analyze and present real-world case studies.' },
    { title: 'PANEL DISCUSSION', date: '25th Oct', participants: 'Individual', paragraph: 'Engage in insightful discussions with experts.' },
    { title: 'FILM MAKING', date: '25th Oct - 26th Oct', participants: '1-3 Participants', paragraph: 'Showcase your film-making talent.' },
    { title: 'ROASTER BOASTER', date: '25th Oct', participants: '2 Participants', paragraph: 'Enjoy fun-filled roast and banter.' },
    { title: 'TREASURE HUNT', date: '25th Oct', participants: '1-3 Participants', paragraph: 'Embark on an exciting treasure hunt.' }
  ];

  const navigate = useNavigate();

  return (
    <section>
        <div className='bg-black' style={{backgroundImage:`url(${background})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <div className="relative title">
            <img 
            src={back} 
            alt="Background" 
            className="absolute inset-0 pt-7 w-[200px] h-[200px] object-cover" 
            style={{ left: '50%', transform: 'translateX(-50%)' }} 
            />
            <p className="relative z-10 pt-20 font-fogLighten font-serif text-6xl text-center text-glow text-white sm:text-8xl md:text-10xl">
            Events
            </p>
        </div>
        <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[0px] w-full h-[0.5px]'></div>

        {/* Event Sections */}
        {events.map((event, index) => (
            <div key={index} className="bg-neutral-950 bg-opacity-80  shadow-lg mx-auto mt-10 lg:mt-40 p-6 lg:p-10 rounded-lg max-w-5xl container"
                onClick={() => {
                    if(event.title==='HACKATHON'){
                        navigate("/hackathon");
                    }
                }}>
            <div className="flex lg:flex-row flex-col">
                <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center pl-0 lg:pl-10 w-full lg:w-2/3">
                <h2 className="mb-4 font-bold text-2xl text-white md:text-3xl">{event.title}</h2>
                <p className="mb-6 text-base text-white md:text-lg">{event.paragraph}</p>
                <div className="flex items-center space-x-4 md:space-x-8">
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="text-sm text-white md:text-lg">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-5 md:w-6 h-5 md:h-6" />
                    <span className="text-sm text-white md:text-lg">{event.participants}</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
        <Footer/>
    </section>
  );
}

export default Event;
