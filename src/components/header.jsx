import React from 'react'
import logo from '../image/logo.png';
import back from '../image/back.png';
import background from '../image/background.png';

function Header() {
  return (
    <div>
      
      <div className="container flex items-center pt-2">
        <img src={logo} alt="Logo" className="h-8 w-auto pl-10"/>
        <div className="ml-auto flex space-x-3">
          <a href="#about" className="tab p-7 font-sans text-white">About</a>
          <a href="#speakers" className="tab p-7 font-sans text-white">Speakers</a>
          <a href="#events" className="tab p-7 font-sans text-white">Events</a>
          <a href="#faq" className="tab p-7 font-sans text-white">FAQ</a>
          <a href="#sponsors" className="tab p-7 font-sans text-white">Sponsors</a>
        </div>
      </div>

      <div className="title relative">
        
        <img 
          src={back} 
          alt="Background" 
          className="pt-7 absolute inset-0 w-[200px] h-[200px] object-cover opacity-50" 
          style={{ left: '50%', transform: 'translateX(-50%)' }} 
        />      

        <p className="relative z-10 mt-7  text-7xl text-white text-center pt-20 font-serif">
          Hackathon
        </p>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">DESCRIPTION</p>
        </div>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">PRIZES</p>
        </div>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">TIMELINE</p>
        </div>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">FAQs</p>
        </div>
      </div>

    </div>
  );
}

export default Header
