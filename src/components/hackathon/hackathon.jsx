import React from 'react'
import back from './image/back.png';
import background from './image/background.png';
import Navbar from '../HomePage/Navbar/Navbar';

function Hackathon() {
  return (
    <div className="pb-[100px]" style={{ background: 'rgba(24, 24, 24, 1)' }}>
      
      <div className="flex items-center mx-auto pt-2 container">
      </div>
      <Navbar />

      <div className="relative text-center title">
        <img 
          src={back} 
          alt="Background" 
          className="absolute inset-0 opacity-50 pt-7 w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-cover"
          style={{ left: '50%', transform: 'translateX(-50%)' }} 
        />      

        <p className="relative z-10 mt-7 pt-16 md:pt-20 font-fogLighten text-4xl text-glow text-white sm:text-6xl md:text-8xl lg:text-9xl">
          Hackathon
        </p>
      </div>

      <div className="relative flex justify-center mx-auto mt-20 md:mt-32 container">
        <img src={background} alt="description background" className="w-full max-w-[1200px] h-auto object-contain" />
        
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="font-bold text-2xl text-white sm:text-3xl md:text-4xl">DESCRIPTION</p>
        </div>
      </div>

      <div className="relative flex justify-center mx-auto mt-20 md:mt-32 container">
        <img src={background} alt="prizes background" className="w-full max-w-[1200px] h-auto object-contain" />
        
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="font-bold text-2xl text-white sm:text-3xl md:text-4xl">PRIZES</p>
        </div>
      </div>

      <div className="relative flex justify-center mx-auto mt-20 md:mt-32 container">
        <img src={background} alt="timeline background" className="w-full max-w-[1200px] h-auto object-contain" />
        
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="font-bold text-2xl text-white sm:text-3xl md:text-4xl">TIMELINE</p>
        </div>
      </div>

      <div className="relative flex justify-center mx-auto mt-20 md:mt-32 container">
        <img src={background} alt="FAQs background" className="w-full max-w-[1200px] h-auto object-contain" />
        
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="font-bold text-2xl text-white sm:text-3xl md:text-4xl">FAQs</p>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
