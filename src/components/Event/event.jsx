import React from 'react';
import logo from '../../assets/Event/logo.png';
import back from '../../assets/Event/back.png';


import box from '../../assets/Event/box.png';

import Burn from '../../assets/Event/burn1.png'
import Case from '../../assets/Event/case1.png'
import Des from '../../assets/Event/des1.png'
import Hack from '../../assets/Event/hack1.png'
import Hunt from '../../assets/Event/hunt1.png'
import Lens from '../../assets/Event/lens1.png'
import Panel from '../../assets/Event/panel1.jpg'
import Speaker from '../../assets/Event/speaker1.png'
import Vibrato from '../../assets/Event/vibrato1.png'
import Laugh from '../../assets/Event/m1.png'

import calander from '../../assets/Event/calander.png';
import people from '../../assets/Event/people.png';
import background from './assets/background.png';
import { useNavigate } from "react-router-dom";
import Footer from '../HomePage/Footer/Footer';

function Event() {
  const events = [
    { title: 'VesHack', img:Hack, date: '25th Oct - 26th Oct', participants: '2-4 Participants', paragraph: 'Join the ultimate coding marathon.' },
    { title: 'VesDes', img:Des, date: '25th Oct - 26th Oct', participants: '2-3 Participants', paragraph: 'Create stunning designs in this creative challenge.' },
    { title: 'VesCase', img:Case, date: '25th Oct', participants: '2-3 Participants', paragraph: 'Analyze and present real-world case studies.' },
    { title: 'PANEL DISCUSSION', img:Panel, date: '25th Oct', participants: 'Individual', paragraph: 'Engage in insightful discussions with experts.' },
    { title: 'VesLens', img:Lens, date: '25th Oct - 26th Oct', participants: '2-3 Participants', paragraph: 'Showcase your film-making talent.' },
    { title: 'VesBurn', img:Burn, date: '25th Oct', participants: '2 Participants', paragraph: 'Enjoy fun-filled roast and banter.' },
    { title: 'VesHunt', img:Hunt, date: '26th Oct', participants: '2-3 Participants', paragraph: 'Embark on an exciting treasure hunt.' },
    { title: 'VIBRATO', img:Vibrato, date: '26th Oct', participants: 'Individual', paragraph: 'An unforgettable evening of music, dance, stand-up comedy, and dynamic performances.' },
    { title: 'SPEAKER SESSION', img: Speaker,  date: '26th Oct', participants: 'Individual', paragraph: "Industry leaders share insights on tech, innovation, and career growth—ideal for networking and learning."},
    { title: 'LAUGH CARNIVAL', img: Laugh,  date: '26th Oct', participants: 'Individual', paragraph: "A hilarious evening of stand-up comedy and improv, guaranteed to leave you in splits."}
    
  ];

  const navigate = useNavigate();

  return (
    <section className=' bg-black w-full overflow-hidden'>
      <img src={background} alt='background' className='absolute top-[20px] w-full h-[4200px] sm:h-[4100px] lg:h-[3900px] xl:h-[4600px]'/>
        <div className=' flex flex-col items-center bg-black w-full mt-[-30px] sm:mt-[-100px]'>
          <div className='flex justify-center items-center mt-[40px] sm:mt-[140px] w-[60%] sm:w-[40%] md:w-[50%] h-[250px] sm:h-[250px] md:h-[300px]' style={{backgroundImage:`url(${back})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
            <h1 className='font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl'>Events</h1>
          </div>
        <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] xl:mt-[-100px] mb-[70px] w-full h-[0.5px]'></div>
        {/* Event Sections */}
        {events.map((event, index) => (
            <div key={index} className="relative z-1 bg-neutral-800 bg-opacity-80  shadow-lg mx-auto mt-10 lg:mt-10 p-6 lg:p-10 rounded-lg w-[90%] container group custom-hover cursor-pointer"
                onClick={() => {
                    if(event.title==='VesHack'){
                      navigate("/hackathon");
                    }
                    if(event.title==='VesDes'){
                      navigate("/designathon");
                    }
                    if(event.title==='VesCase'){
                      navigate("/caseStudy");
                    }
                    if(event.title==='VesLens'){
                      navigate("/filmMaking");
                    }
                    if(event.title==='VesBurn'){
                      navigate("/roasterBoaster");
                    }
                    if(event.title==='VesHunt'){
                      navigate("/treasureHunt");
                    }
                    if(event.title==='VIBRATO'){
                      navigate("/vibrato");
                    }
                    if(event.title==='PANEL DISCUSSION'){
                      navigate("/panelDiscussion");
                    }
                    if(event.title==='SPEAKER SESSION'){
                      navigate("/speakerSession");
                    }
                    if(event.title==='LAUGH CARNIVAL'){
                      navigate("/laughCarnival");
                    }
                }}>
            <div className="flex lg:flex-row flex-col">
                <div className="mb-6 lg:mb-0 w-full lg:w-1/3">
                <img src={event.img} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center pl-0 lg:pl-10 w-full lg:w-2/3">
                <h2 className="mb-4 font-bold text-2xl group-hover:text-3xl text-white md:text-5xl md:group-hover:text-6xl transition-transform transform duration-300 linear group-hover:scale-110 origin-left">{event.title}</h2>
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
